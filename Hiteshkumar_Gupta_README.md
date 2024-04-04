# Assignment - 3

QuickHire is like an online marketplace where people can offer their skills and services for others to hire or buy. Building an app or a website or even helping a person in developing something for your needs, QuickHire is the ideal platform for everyone.


* *Date Created*: 29 Jan 2024
* *Last Modification Date*: Apr 3, 2024
* *Frontend Deployed URL*: <https://quick-hire.netlify.app/>
* *Backend Deployed URL*: <https://quickhire-backend-1.onrender.com/>
* *Group Gitlab URL*: <https://git.cs.dal.ca/gupta2/csci_5709_grp-04/>
* *Individual Branch on Group Gitlab URL*: <https://git.cs.dal.ca/gupta2/csci_5709_grp-04/-/tree/hitesh?ref_type=heads>
* *Assignment Branch Gitlab URL*: <https://git.cs.dal.ca/gupta2/csci_5709_assignments/-/tree/main/A3?ref_type=heads>

Note: Please give 50 seconds to 2 minutes to UI for loading data. As backend is hosted on Render as free tier, and it will take sometime to start.

## Authors

- [Hiteshkumar](ht643276@dal.ca) - _(Frontend, Backend Developer)_

## Features

In Quickhire, users will search for services. For this, they will need search bar to search service by name or they can navigate through the categories and sub-categpries services to find their desire services.

Here, for Quickhire, I am working on Search feature and listing Category, and Sub-Category and Service feature.

### Category, and Sub-Category and Services Feature (Deployed and Working)
URL: https://quick-hire.netlify.app/category/programming

Here, I have prepared the cards for various sub-categories. Here, the categories are Programming, Photography, Video and Animation, Graphics and Design and Miscellaneous. This categories are listed on Header.

When user clicked on anyone of the categories, those categories's sub-categories will be listed on the main section of the page as cards.

If user selcts on anyone for the sub-category card, user will be redirected to service page. Here, user will able to see all services as cards. If user selects anyone card, he will be redirected to individual listing service page.

#### Code Structure and Files
Frontend:

Here, for displaying categories in Header, I have use flex property of css. For this I have created Header component.

To list sub-categories as card, I have used Material UI component. I have modified the card accroding to project's needs. Here, I am showing title of the sub-category and its various services. For this, I have created SubCategoryCard component.

To list services as card, again I am utlizing the Material UI component. I have modified the code for MaterialUI and added information of services and seller. For this, I have created the SubCategoryService, SubServiceCard, and SubPagination Components.

Here, in each components, there is .js file written using react and .css file with the same name of component folder.

**Code Description**

**Header.js**

- This file implements the header section of the application.
- It utilizes CSS flex properties for layout management to display categories.
- The component is designed to be reusable and can be included in various parts of the application to consistently display categories in the header.

**SubCategoryCard.js**

- This file defines a card layout for displaying sub-categories.
- It uses Material UI components for styling and layout.
- The card layout is customized to suit the project's requirements, displaying sub-category titles and associated services.

**SubCategoryService.js**

- This file manages the display of services under a specific sub-category.
- It fetches data from the backend using GET APIs and renders services as cards.
- Users can filter services by rating, budget, and popularity using this component.
- Pagination functionality is provided for navigating through multiple pages of services.

**SubPagination.js**

- This file contains the pagination controls for navigating through pages of services.
- It integrates with Material UI components for consistent styling and functionality.
- SubPagination enhances user experience by providing intuitive navigation options for browsing through large sets of services.

**InfoCard.js**

- This component displays information about a service provider.
- It receives props containing information about the service provider.
- The component renders the provider's profile picture, name, job title, description, rating, and price.
- It includes conditional rendering for displaying a 'Popular' tag based on the provider's rating.

**SubServiceCard.js**

- This file defines a card layout for displaying services under a sub-category.
- It utilizes Material UI components for styling and layout.
- The card layout includes an image, heart icon for wishlist functionality, and information about the service provider.
- SubServiceCard component fetches data from the backend and renders each service as a card.
- Users can add or remove services from their wishlist using the heart icon.
- Implemented in React, it has corresponding `.js` and `.css` files.


Backend:

Here, I have created GET APIs on backend. 
For this, first I have created routes in services.routes.js. And then, the controller will be called where main logic is implemented. Data is being fetched from the MongoDB database.

**Code Description:**

**services.routes.js**

- This file defines Express router configurations for managing routes related to services.
- It imports controller functions from `services.controller.js` to handle HTTP requests.
- Routes are established for various operations related to services, including GET requests.
- These routes will be used to create GET APIs for retrieving data from the backend.

**services.controller.js**

- This file contains controller functions for handling requests related to services.
- It implements the main logic for processing GET requests and fetching data from the MongoDB database.
- The controller functions are responsible for responding to the routes defined in `services.routes.js`.
- Data retrieval operations are executed here, providing responses to the client based on the requested data.

### Search Feature (Deployed and Working)
URL: https://quick-hire.netlify.app

For search faeture, I have implemented an search bar at the navbar. User can type text in the search bar and it will fetch data from the database and it will show realtime services in the dropdown.

User can select any item from the dropdown and they will be redirected to the individual service page.

#### Code Structure and Files
Frontend:

For search bar, I have created searchBar Component. Here, I have three main .js files: SearchBar, SearchResultList and SearchResult. SearchBar handles the input in which user will type. SearchResultList renders SearchResult and list all searches. 

**Code Description:**

**SearchBar.js**

- Manages user input for searching.
- Utilizes debounce technique to delay API requests.
- Fetches data from the backend API and filters results.
- Displays a search input field with a search icon.

**SearchResult.js**

- Represents an individual search result item.
- Redirects users to the details page of the selected service upon clicking.
- Displays the title of the service as a clickable div.

**SearchResultList.js**

- Renders a list of search results.
- Manages visibility of the search results list.
- Handles clicks outside the search results list to close it.
- Ensures visibility of the search results list when new results are received.


Backend:

I have created an API for search feature. Whenever types in frontend, it will fire a query from the using debounce technique. Backend will map the keyword with the Service title and description. If it matches, then it will return the array and frontend will show.

Backend will listen /search api and will call getServicesByPartialHint() controller.
getServicesByPartialHint() controller execute mongoDB query and fetch all results. Then it sends results back as array.

Here, services.routes.js is the route file, and services.controller.js is the controller where getServicesByPartialHint()'s logic is implemented.

**Code Description:**

**services.controller.js**

- This file contains controller functions specifically related to searching services.
- The primary function included is:
  - `getServicesByPartialHint`: Retrieves services that match a partial hint provided in the query, responding with the matching services or an internal server error.

**services.routes.js**

- This file contains Express router configurations specifically for managing routes related to searching services.
- It imports the `getServicesByPartialHint` controller function from `services.controller.js` to handle search requests.
- A single route is defined for searching services by partial hint.
- The route is mapped to the `getServicesByPartialHint` controller function to handle the search request.


## Related Features
1. Upon clicking search results, user will be redirected to Individual Service Page which is seperate feature created by yash.
2. Upon selecting the services from sub-category page, user will redirect to Individual Service Page which is seperate feature created by yash.
3. On Service card, there a little heart (favourite) icon, upon clicking user can add that service to which wishlish which is seperate feature created by Tijil.

## Project Structure
Here, we have divided out project tasks based on features. All features are organized in features folder where individual components are listed. In each component, it contains its own css file.

## Frontend
## Getting Started
### Prerequisites

To have a local copy of this lab up and running on your local machine, you will first need to install the following libraries and tools:

```
git
node: v14.21.3
npm: v6.14.18
react: ^17.0.1
```

To have a local copy of this assingnment up and running on your local machine, you will first need to install the following software:

Download Install node from node website
```
Website: https://nodejs.org/en/download
```

### Installing

A step by step series of examples that tell you how to get a development env running

Clone repository
```
git clone https://git.cs.dal.ca/gupta2/csci_5709_grp-04.git
```

Change directory to app
```
cd csci_5709_grp-04
cd Frontend
cd quickhire
```
Install packages
```
npm i
```
Create .env file add following credentials
```
REACT_APP_BACKEND_URL=https://quickhire-backend-1.onrender.com/api/v1/
REACT_APP_FIREBASE_API = AIzaSyAeyFuIDm34sjFU0_yGgMTJmpyJTCmoE5k
```
Run Project
```
npm start
```
Navigate to `http://localhost:3000/`. The application will automatically reload if you change any of the source files.

## Deployment

To deploy on ubuntu server, follow this steps:
Clone repository
```
git clone https://git.cs.dal.ca/gupta2/csci_5709_grp-04.git
```

Change directory to app
```
cd csci_5709_grp-04
cd Frontend
cd quickhire
```
Install packages
```
npm i
```
Create .env file add following credentia;s
```
REACT_APP_BACKEND_URL=https://quickhire-backend-1.onrender.com/api/v1/
REACT_APP_FIREBASE_API = AIzaSyAeyFuIDm34sjFU0_yGgMTJmpyJTCmoE5k
```
Build Project
```
npm run build
```
This will regenerate build folder which will contains index.html.

Point `nginx` server to this location.

Your server will be up and running.

## Built With

* [React](http://www.dropwizard.io/1.0.2/docs/) - The web library used
* [Material UI](https://v4.mui.com/getting-started/installation/) - Styling library
* [FlatIcon](https://www.flaticon.com/) - For icons
* [Stripe](https://stripe.com/) - Online payment processing platform


## Sources Used

### Narbar.js

*Lines 1 - 235*

```js
import React from 'react';
import { alpha, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import './Navbar.css'
import logo from "../../assets/logo-white.png"
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));


export default function Navbar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  let isMobile = false;
  if(window.screen.width <= 800){
    isMobile = true;
  }
  console.log(window.screen.width);
  console.log(isMobile)

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={"grow"}>
      <AppBar className='border-status' position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
          </IconButton>
          {!isMobile && <Link to="/"><img src={logo} className='image-css' alt='Logo'/></Link>}
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search here ..."
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <div className={"grow"} />
          <div className={classes.sectionDesktop}>
            <IconButton aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="secondary">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton aria-label="show 17 new notifications" color="inherit">
              <Badge badgeContent={17} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}

```

The code above was created by adapting the code in [MUI](https://v4.mui.com/components/app-bar/) as shown below: 

```js
import React from 'react';
import { alpha, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

export default function PrimarySearchAppBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            Material-UI
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="secondary">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton aria-label="show 17 new notifications" color="inherit">
              <Badge badgeContent={17} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}


```

- The code in [NAME](link) was implemented by MUI
- [MUI](https://v4.mui.com/components/app-bar/)'s Code was used because it has dynamic, responsive and well maintained code for navbar. As for this assignment, my task was to create a category and sub category page, therfore I focused on more on that pages.
- [MUI](https://v4.mui.com/components/app-bar/)'s Code was modified by adding adding variables which makes it more responsive such as `isMobile` variable. 

### CategoryCard.js, SubServiceCard.js

CaregoryCard: *Lines 65 - 93* <br>
SubServiceCard: *Lines 23 - 39*
```js
# CategoryCard.js
return (
    <div className='card-design'>
      {cardData.map((data, index) => (
        <Link to="/subcategory" className="link-deco">
        <Card key={index} className={classes.card}>
          <CardActionArea>
            <CardMedia
              className={"media"}
              image={data.image}
              title={data.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {data.title}
              </Typography>
              <Typography>
                <ul>
                  {data.content.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        </Link>
      ))}
    </div>
  );

  # SubCategoryCard.js
  return (
    <div className='sub-card-design'>
      {cardData.map((data, index) => (
        <Card key={index} className={classes.card}>
          <CardActionArea>
            <CardMedia
              className={"media"}
              image={data.image}
            />
            <CardContent>
              <InfoCard cardInfo={data} />
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </div>
  );
```

The code above was created by adapting the code in [MUI](https://v4.mui.com/components/cards/) as shown below: 

```js
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
```

- The code in [MUI](https://v4.mui.com/components/cards/) was implemented by Material UI
- [MUI](https://v4.mui.com/components/cards/)'s Code was used because I need a structure for the card for which I can modify it. Hence, I took the reference from this and modified according to my need.
- [MUI](https://v4.mui.com/components/cards/)'s Code was modified by making it dynamic, iterating it with multiple values.

### 

SubPagination.js: *Lines 1 - 24*
```js
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function PaginationOutlined() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Pagination count={10} variant="outlined" />
      <Pagination count={10} variant="outlined" color="primary" />
      <Pagination count={10} variant="outlined" color="secondary" />
      <Pagination count={10} variant="outlined" disabled />
    </div>
  );
}
```

The code above was created by adapting the code in [MUI](https://mui.com/material-ui/react-pagination/) as shown below: 

```js
  import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center', // Center horizontally
    alignItems: 'center', // Center vertically
    marginTop: "20px",
    marginBottom: "20px"
  },
}));

export default function PaginationOutlined() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Pagination count={10} variant="outlined" color="primary" />
    </div>
  );
}

```

- The code in [MUI](https://v4.mui.com/components/cards/) was implemented by Material UI
- [MUI](https://v4.mui.com/components/cards/)'s Code was used because this is pagination component which is not main focus for this assignmenet. Hence, I have used MUI's pagination components.
- [MUI](https://v4.mui.com/components/cards/)'s Code was modified by removing extra paginations contents and keeping only one pagination part. 

## References
Images used for the cards in the projects (they are cited in project readme file as well):
```
1. Creative IT Institute. [Hair Treatment Course Image]. [Online]. Available. https://www.creativeitinstitute.com/images/course/course_1663052056.jpg [Accessed On: Feb 6, 2024]

2. Dribbble. Hair Treatment App. [Online]. Available. https://dribbble.com/shots/19606563-Hair-Treatment-App [Accessed On: Feb 6, 2024]

3. Dribbble. Infinite Software. [Online]. Available. https://dribbble.com/shots/3812899-Infinite-Software/attachments/10034607?mode=media [Accessed On: Feb 6, 2024]

4. Dribbble. Skype Universal Windows App. [Online]. Available. https://dribbble.com/shots/2652326-Skype-Universal-Windows-App/attachments/9414061?mode=media [Accessed On: Feb 6, 2024]

5. Fotor. Profile Picture Ideas. [Online]. Available. https://www.fotor.com/blog/profile-picture-ideas/ [Accessed On: Feb 6, 2024]

6. Fiverr. "Fiverr - Freelance Services Marketplace", 2024. [Online]. Available: https://www.fiverr.com/ [Accessed on: February 6, 2024]

7. Upwork. "Upwork - The World's Work Marketplace, 2024" [Online]. Available: https://www.upwork.com/ [Accessed on: February 6, 2024]

```

## Acknowledgments

- Design is inspired by [Fiverr](https://www.fiverr.com/) and [Upwork](https://www.upwork.com/).
- Created React application using template [create-react-app](https://create-react-app.dev/docs/getting-started)
- Used [Material-UI](https://v4.mui.com/getting-started/installation/) components and icons
- Used [react-multi-carousel](https://www.npmjs.com/package/react-multi-carousel)'s to create smooth carousel for displaying Popular Services component 
- Used [react-parallax](https://www.npmjs.com/package/react-parallax) for animation of Hero section for Landing page
- Used [typewriter-effect](https://www.npmjs.com/package/typewriter-effect) to animate text

## Backend
## Getting Started
### Prerequisites

To have a local copy of this lab up and running on your local machine, you will first need to install the following libraries and tools:

```
git
node: v14.21.3
npm: v6.14.18
```

To have a local copy of this assingnment up and running on your local machine, you will first need to install the following software:

Download Install node from node website
```
Website: https://nodejs.org/en/download
```

### Installing

A step by step series of examples that tell you how to get a development env running

Clone repository
```
git clone https://git.cs.dal.ca/gupta2/csci_5709_grp-04.git
```

Change directory to app
```
cd csci_5709_grp-04
cd Backend
```
Create .env file add following credentia;s
```
PORT=4000
CORS_ORIGIN=*
MONGODB_URI=mongodb+srv://servicequickhire:QuickHire24@quickhire.fimqbyx.mongodb.net/quickhire?retryWrites=true&w=majority
SECRET_KEY=secret
USER=service.quickhire@gmail.com
PASS=evuu omfs gucw mhal
```

Install packages
```
npm i
```
Run Project
```
npm run dev
```
Navigate to `http://localhost:4000/`. The application will automatically reload if you change any of the source files.

## Deployment

To deploy on ubuntu server, follow this steps:
Clone repository
```
git clone https://git.cs.dal.ca/gupta2/csci_5709_grp-04.git
```

Change directory to app
```
cd csci_5709_grp-04
cd Frontend
cd quickhire
```
Install packages
```
npm i
```
Create .env file add following credentia;s
```
PORT=4000
CORS_ORIGIN=*
MONGODB_URI=mongodb+srv://servicequickhire:QuickHire24@quickhire.fimqbyx.mongodb.net/quickhire?retryWrites=true&w=majority
SECRET_KEY=secret
USER=service.quickhire@gmail.com
PASS=evuu omfs gucw mhal
```
Build Project
```
npm run build
```
This will regenerate build folder which will contains index.html.

Point `nginx` server to this location.

Your server will be up and running.

## Built With

* [Node.js](https://nodejs.org/) - JavaScript runtime
* [Express.js](https://expressjs.com/) - Web application framework for Node.js
* [MongoDB](https://www.mongodb.com/) - NoSQL database


## Acknowledgments
 - [Render](https://render.com/) - For Backend hosting
