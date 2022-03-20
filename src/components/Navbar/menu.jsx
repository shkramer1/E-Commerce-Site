import * as React from 'react';
import {Button, Menu, MenuItem, Typography} from "@material-ui/core";
import { useNavigate } from 'react-router-dom';




export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  let navigate = useNavigate(); 
  

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleProductsSelected =()=>{
     let path = `/products`; 
    navigate(path);
    setAnchorEl(null);

  }
  const handleGuidedJournalsSelected =()=>{
    let path = `/guidedjournals`; 
   navigate(path);
   setAnchorEl(null);

 }
 const handlePrintablesSelected =()=>{
  let path = `/printables`; 
 navigate(path);
 setAnchorEl(null);

}
const handleHolidayBookSelected =()=>{
  let path = `/holidayactivitybooks`; 
 navigate(path);
 setAnchorEl(null);

}

  return (
    <div>
      <Button
        id="basic-button"
        
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        // style={{paddingRight: '200px'}}
      >
       <Typography variant='h6' style={{fontFamily: "Roboto"}}>Products</Typography>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
         <MenuItem onClick={handleProductsSelected}>All Products</MenuItem>  
        <MenuItem onClick={handleGuidedJournalsSelected}>Guided Journals</MenuItem>
        <MenuItem onClick={handlePrintablesSelected}>Printables</MenuItem>
        <MenuItem onClick={handleHolidayBookSelected}>Holiday Activity Books</MenuItem>
      </Menu>
    </div>
  );
}
