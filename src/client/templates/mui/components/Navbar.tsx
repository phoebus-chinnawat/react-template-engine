import React, { FC, useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { styled } from '@mui/system';
import CoffeeIcon from '@mui/icons-material/Coffee'; // Example logo icon, replace with your own logo
import { BusinessData } from '../../../types';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
}));

interface NavBarProps {
  data: BusinessData;
}

export const Navbar: FC<NavBarProps> = (props) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        {props.data.shopName}
      </Typography>
      <List>
        <ListItem button>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="About" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Reviews" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Contact" />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <StyledAppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ display: { sm: 'none' } }} onClick={handleDrawerToggle}>
            <MenuIcon />
          </IconButton>
          <CoffeeIcon sx={{ mr: 2 }} />
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            {props.data.shopName}
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <Button color="inherit">Home</Button>
            <Button color="inherit">About</Button>
            <Button color="inherit">Reviews</Button>
            <Button color="inherit">Contact</Button>
          </Box>
        </Toolbar>
      </StyledAppBar>
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={handleDrawerToggle}
        sx={{ display: { xs: 'block', sm: 'none' } }}
      >
        {drawer}
      </Drawer>
    </>
  );
};
