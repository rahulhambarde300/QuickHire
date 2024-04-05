/**
 * @Author Yashkumar Khorja
 * RatingsAndReviews component renders the ratings and reviews of service.
 * @returns {JSX.Element} - The rendered JSX element.
 */

import React, { useEffect, useState } from "react";
import {
  Typography,
  Box,
  Divider,
  Avatar,
  LinearProgress,
} from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import { makeStyles } from "@material-ui/core/styles";
import { useParams } from "react-router-dom/cjs/react-router-dom";
import { CONFIG } from "../../../config";

const useStyles = makeStyles((theme) => ({
  avatar: {
    marginRight: theme.spacing(2),
    width: 50,
    height: 50,
  },
  ratingBarContainer: {
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(2),
  },
}));

const RatingsAndReviews = () => {
  const classes = useStyles();
  const [selectedRating, setSelectedRating] = useState(null);
  const [ratingsAndReviews, setRatingsAndReviews] = useState([]);
  const [hasReviews, setHasReviews] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const getReviewsForService = async () => {
      const response = await fetch(`${CONFIG.BASE_PATH}rating/${id}`);
      const responseData = await response.json();
      const hasUser = responseData.some((res) => res.user);
      setHasReviews(hasUser);
      setRatingsAndReviews(responseData);
    };
    getReviewsForService();
  }, [id]);

  const calculateAverageRating = (ratingsAndReviews) => {
    if (ratingsAndReviews?.length === 0) return 0;

    const totalRating = ratingsAndReviews.reduce(
      (acc, curr) => acc + curr.rating,
      0
    );
    return totalRating / ratingsAndReviews?.length;
  };

  const handleRatingFilter = (rating) => {
    setSelectedRating(selectedRating ? null : rating);
  };

  const countReviewsByRating = (rating) => {
    return ratingsAndReviews.filter((item) => item?.rating === rating).length;
  };

  if (ratingsAndReviews.length === 0) {
    return (
      <div style={{ marginTop: "2rem" }}>
        <Box mb={2}>
          <Typography variant="h6">Reviews for this Service</Typography>
          <div style={{ display: "flex" }}>
            <Rating
              name="service-rating"
              value={calculateAverageRating(ratingsAndReviews)}
              readOnly
            />
            <Typography>(0)</Typography>
          </div>
        </Box>
      </div>
    );
  }

  return (
    <div style={{ marginTop: "2rem" }}>
      <Box mb={2}>
        <Typography variant="h6">Reviews for this Service</Typography>
        <div style={{ display: "flex" }}>
          <Rating
            name="service-rating"
            value={calculateAverageRating(ratingsAndReviews)}
            readOnly
          />
          <Typography>({ratingsAndReviews?.length})</Typography>
        </div>
      </Box>

      {[...Array(5).keys()].map((index) => (
        <Box
          key={index}
          className={classes.ratingBarContainer}
          alignItems="center">
          <Typography variant="body2">{index + 1} Star</Typography>
          <LinearProgress
            variant="determinate"
            value={
              (countReviewsByRating(index + 1) / ratingsAndReviews.length) * 100
            }
            onClick={() => handleRatingFilter(index + 1)}
            style={{ cursor: "pointer", width: "80%", marginLeft: "10px" }}
            color={selectedRating === index + 1 ? "secondary" : "primary"}
          />
          <Typography variant="body2" style={{ marginLeft: "10px" }}>
            {countReviewsByRating(index + 1)}
          </Typography>
        </Box>
      ))}

      <Divider style={{ marginBottom: "1rem" }} />
      {hasReviews ? (
        ratingsAndReviews
          .filter((item) =>
            selectedRating ? item?.rating === selectedRating : true
          )
          .map(
            (item, index) =>
              item?.user && (
                <>
                  <Box display="flex" alignItems="start" flexWrap="wrap" mb={1}>
                    <Avatar
                      className={classes.avatar}
                      src={item?.user?.[0]?.profilePictureUrl}
                      alt={item?.user?.[0]?.username}
                    />
                    <div>
                      <Typography>{item?.user?.[0]?.username}</Typography>
                      <Rating
                        name={`rating-${index}`}
                        value={item?.rating}
                        readOnly
                      />
                      <Typography variant="body1">{item?.review}</Typography>
                    </div>
                    <Box flexGrow={1} textAlign="right">
                      <Typography variant="caption">
                        {new Date(item?.createdAt).toLocaleDateString()}
                      </Typography>
                    </Box>
                  </Box>
                  <Divider style={{ margin: "1rem 0" }} />
                </>
              )
          )
      ) : (
        <Typography variant="h6">No Reviews for this Service yet!</Typography>
      )}
    </div>
  );
};

export default RatingsAndReviews;
