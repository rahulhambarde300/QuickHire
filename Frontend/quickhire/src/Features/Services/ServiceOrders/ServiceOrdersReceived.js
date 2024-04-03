import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@material-ui/core";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { makeStyles } from "@material-ui/core";
import { serviceOrdersData } from "./OrdersDummyData";

const useStyles = makeStyles(() => ({
  order: {
    minWidth: "35vw",
    margin: "2rem",
  },
  "@media screen and (max-width:500px)": {
    order: {
      minWidth: "65vw",
    },
  },
}));

function ServiceOrdersReceived() {
  const classes = useStyles();
  const receivedOrders = serviceOrdersData;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        padding: "0 2rem",
      }}>
      {receivedOrders.map((order) => (
        <Card className={classes.order}>
          <CardContent style={{ textAlign: "left" }}>
            <Typography variant="h4">{order.title}</Typography>
            <Typography variant="h6">
              {order.category}
              {" > "}
              {order.subCategory}
            </Typography>

            <Typography style={{ marginTop: "1rem" }}>
              Price: {order.price}
            </Typography>
            <Typography>"Received On:" {order.date}</Typography>

            <div
              style={{
                marginTop: "1rem",
                display: "flex",
                alignItems: "center",
              }}>
              <AccountCircle />
              <Typography variant="h6">{order.user}</Typography>
            </div>
          </CardContent>
          <CardActions>
            <Button
              variant="contained"
              style={{ backgroundColor: "#000", color: "#fff" }}>
              Give Feedback
            </Button>
          </CardActions>
        </Card>
      ))}
    </div>
  );
}

export default ServiceOrdersReceived;