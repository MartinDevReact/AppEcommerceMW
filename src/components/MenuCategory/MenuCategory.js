import React from "react";
import { Button , Menu , MenuItem } from "@mui/material";
import { Link } from "react-router-dom";

const MenuCategory = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const styles = {
    link: {
      color: "Black",
    },  
  };

  return (
    <div >
      <Button
        style={{color: "white"}}
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        Categoría
      </Button>
      <Menu 
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}        
      >
        <MenuItem >
          <Link to="/ArtCategory/motor" style={styles.link} >
            Motor
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="/ArtCategory/suspencion" style={styles.link} >
            Suspención
          </Link>
        </MenuItem>       
      </Menu>
    </div>
  );
};

export default MenuCategory;

