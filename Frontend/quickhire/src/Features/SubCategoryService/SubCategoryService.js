/**
 * @Author Hiteshkumar Gupta
 * SubCategoryService component displaying services under a subcategory.
 * @returns {JSX.Element} The rendered JSX element.
 */

import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import HomeIcon from '@material-ui/icons/Home';
import "./SubCategoryService.css"
import SubPagination from "../SubPagination/SubPagination"
import SubServiceCard from "../SubServiceCard/SubServiceCard"
import RatingFilter from '../Filters/RatingFilters';
import BudgetFilter from '../Filters/BudgetFilter';
import PopularFilter from '../Filters/PopularFilter';
import { CONFIG } from '../../config';
import { useHistory } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  link: {
    display: 'flex',
    textDecoration: "none"
  },
  icon: {
    marginRight: theme.spacing(0.5),
    width: 20,
    height: 20,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 200,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const SubCategoryService = () => {
  const history = useHistory();
  const classes = useStyles();
  const [state, setState] = React.useState(0);
  const [filterState, setFilterState] = useState([]);
  const [originalData, setOriginalData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState('');
  const [subCategory, setSubCategory] = useState('');
  const [totalServices, setTotalServices] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8);

  const handleClick = (event) => {
    event.preventDefault();
    if (event.target.tagName === "svg") {
    history.push('/');
  } else {
    history.push(`/category/${category}`);
  }
  };


  useEffect(() => {
    const fetchData = async () => {
      try {
        const urlParams = new URLSearchParams(window.location.search);
        const serviceValue = urlParams.get('service');

        if (!serviceValue) {
          console.error('Service parameter is missing');
          return;
        }
        const response = await fetch(`${CONFIG.BASE_PATH}services/search?value=${serviceValue}`);
        const data = await response.json();
        const pathname = window.location.pathname;
        const queryString = window.location.search;
        const searchParams = new URLSearchParams(queryString);
        const service = decodeURIComponent(searchParams.get('service'));

        const categoryFromURL = decodeURIComponent(pathname.split('/').pop());
        setCategory(categoryFromURL);
        setSubCategory(service);
        if (data.length > 0) {
          setTotalServices(data.length);
        }
        const profileImages = [
          "https://www.pngall.com/wp-content/uploads/5/Profile-Male-PNG.png",
          "https://png.pngtree.com/png-vector/20220817/ourmid/pngtree-cartoon-man-avatar-with-beard-vector-ilustration-png-image_6110777.png",
          "https://png.pngtree.com/png-vector/20220817/ourmid/pngtree-cartoon-man-avatar-vector-ilustration-png-image_6111064.png",
          "https://static.vecteezy.com/system/resources/previews/024/183/502/non_2x/male-avatar-portrait-of-a-young-man-with-a-beard-illustration-of-male-character-in-modern-color-style-vector.jpg",
          "https://www.creativefabrica.com/wp-content/uploads/2023/01/30/Bearded-Man-Avatar-Icon-Graphics-59392089-1.jpg",
          "https://png.pngtree.com/png-vector/20230903/ourmid/pngtree-man-avatar-isolated-png-image_9935818.png",
          "https://png.pngtree.com/png-clipart/20230930/original/pngtree-man-avatar-isolated-png-image_13022161.png",
          "https://png.pngtree.com/png-clipart/20230930/original/pngtree-man-avatar-isolated-png-image_13022170.png"
        ];
        const newData = data.map((service, index) => {
          let trimmedDescription = service.description.split(' ').slice(0, 21).join(' ');
          if (service.description.split(' ').length > 21)
            trimmedDescription += '...';
          return {
            image: service.imgUrl,
            name: service.sellerName,
            jobTitle: service.jobTitle,
            description: trimmedDescription,
            rating: service.currentRating,
            rate: service.price,
            numberOfRatings: service.numberOfRatings,
            profile: profileImages[index % profileImages.length] // Randomly assigning profile image
          };
        });
        setOriginalData(newData);
        setFilterState(newData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);


  useEffect(() => {
    const applyFilters = () => {
      let filteredData = [...originalData];

      if (state.rating) {
        if (state.rating === "4.5") {
          filteredData = filteredData.filter(item => item.rating >= 4.5);
        } else if (state.rating === "3.5") {
          filteredData = filteredData.filter(item => item.rating >= 3.5 && item.rating < 4.5);
        } else if (state.rating === "2.5") {
          filteredData = filteredData.filter(item => item.rating >= 2.5 && item.rating < 3.5);
        }
      }

      if (state.budget) {
        if (state.budget === "20to35") {
          filteredData = filteredData.filter(item => item.rate >= 20 && item.rate < 35);
        } else if (state.budget === "35to45") {
          filteredData = filteredData.filter(item => item.rate >= 35 && item.rate < 45);
        } else if (state.budget === "above45") {
          filteredData = filteredData.filter(item => item.rate >= 45);
        }
      }

      if (state.popular) {
        const isPopular = state.popular === "1";
        filteredData = filteredData.filter(item => item.rating > 4.5 === isPopular);
      }
      setFilterState(filteredData);
      setTotalServices(filteredData.length);
    };

    applyFilters();
  }, [state, originalData]);

  const handleRatingChange = (event) => {
    const value = event.target.value;
    setState(prevState => ({
      ...prevState,
      rating: value,
    }));
  };

  const handleBudgetChange = (event) => {
    const value = event.target.value;
    setState(prevState => ({
      ...prevState,
      budget: value,
    }));
  };

  const handlePopularChange = (event) => {
    const value = event.target.value;
    setState(prevState => ({
      ...prevState,
      popular: value,
    }));
  };
  // Calculate current items based on pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filterState.slice(indexOfFirstItem, indexOfLastItem);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div style={{ marginLeft: "5%", marginRight: "5%" }}>
      <div className='breadcrumbs-css' style={{ marginLeft: "8px" }}>
        <Breadcrumbs aria-label="breadcrumb">
          <Link onClick={handleClick} className={classes.link}>
            <HomeIcon className={classes.icon} />
          </Link>
          <Link onClick={handleClick} style={{textTransform: "capitalize"}} > {category} </Link>
        </Breadcrumbs>
      </div>
      <div >
        <h2 style={{ marginLeft: "8px", marginTop: "20px", marginBottom: "20px", color: "#3f51b5" }}>{subCategory}</h2>
        <div>
          {currentItems.length > 0 && (
            <div>
              <RatingFilter value={state.rating} onChange={handleRatingChange} />
              <BudgetFilter value={state.budget} onChange={handleBudgetChange} />
              <PopularFilter value={state.popular} onChange={handlePopularChange} />
            </div>
          )}
        </div>

        <br />
        <h3 style={{ marginLeft: "8px", color:"#3f51b5" }}>{totalServices} Services available</h3>
      </div>
      <div>
        <div className='sub-cat' style={{ display: 'flex', justifyContent: 'center' }}>
          <div className='subservice-card' style={{ marginBottom: currentItems.length === 0 ? '20px' : '0' }}>
            {loading ? (
              <p>Loading...</p>
            ) : (
              currentItems.length > 0 ? (
                <SubServiceCard state={state} cardData={currentItems} />
              ) : (
                <div style={{ textAlign: 'center' }}>
                  <img src="https://img.freepik.com/free-vector/hand-drawn-no-data-concept_52683-127823.jpg?t=st=1711127194~exp=1711130794~hmac=1229dd34750bfe08aa5b1ead640f1dfb81bd096024f35b53f4e97025df00c596&w=1380" alt="No data found"
                    style={{ maxWidth: '100%', height: 'auto', width: '500px' }} />
                  <h2>Sorry, no service found</h2>
                </div>
              )
            )}
          </div>
        </div>
        {currentItems.length > 0 && (
          <SubPagination
            itemsPerPage={itemsPerPage}
            totalItems={filterState.length}
            paginate={paginate}
          />
        )}
      </div>
    </div>
  );
}

export default SubCategoryService;