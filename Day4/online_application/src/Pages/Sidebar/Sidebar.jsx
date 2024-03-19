import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom'; // Make sure to import NavLink

import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import "../Navbar/Navbar.css"

function Side() {
  const [click, setClick] = useState(false);
  const [openDrawer, setOpenDrawer] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setOpenDrawer(open);
  };

  const handleClick = () => setClick(!click);

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <NavLink exact to="/" className="nav-logo">
            <h3>S-CARE</h3>
          </NavLink>
          <div className="nav-icon" onClick={handleClick}>
            <FontAwesomeIcon icon={click ? faTimes : faBars} />
          </div>
          <Drawer anchor="left" open={openDrawer} onClose={toggleDrawer(false)}>
            <div style={{ width: '250px', paddingLeft: '20px' }}>
              {/* Add a close ("x") icon */}
              <div
                style={{  cursor: 'pointer', paddingTop: '10px',paddingLeft:'200px' }}
                onClick={toggleDrawer(false)}
              >
                <FontAwesomeIcon icon={faTimes} />
              </div>

              <List>
                <ListItem button onClick={toggleDrawer(false)}>
                  <Link to="/approve" style={{ textDecoration: "none" }}>
                    <ListItemText primary=" Request view " />
                  </Link>
                </ListItem>
                <ListItem button onClick={toggleDrawer(false)}>
                  <Link to="/" style={{ textDecoration: "none" }}>
                    <ListItemText primary="Home" />
                  </Link>
                </ListItem>
                <ListItem button onClick={toggleDrawer(false)}>
                  <Link to="/admin" style={{ textDecoration: "none" }}>
                    <ListItemText primary="Add Service " />
                  </Link>
                </ListItem>
                <ListItem button onClick={toggleDrawer(false)}>
                  <Link to="/privacy" style={{ textDecoration: "none" }}>
                    <ListItemText primary="" />
                  </Link>
                </ListItem>
                <ListItem button onClick={toggleDrawer(false)}>
                  <Link to="/adminlogin" style={{ textDecoration: "none" }}>
                    <ListItemText primary="" />
                  </Link>
                </ListItem>
              </List>
            </div>
          </Drawer>
        </div>
      </nav>
    </>
  )
}

export default Side;
