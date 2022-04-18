import React from 'react';
import { AppBar, Box, CssBaseline, Divider, Drawer,IconButton,List,ListItem ,ListItemIcon ,ListItemText, Toolbar, Typography  } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { SidebarData } from './SidebarData';
import { Link } from 'react-router-dom';
import './CustomDrawer.css';


const drawerWidth = 240;


const CustomDrawer = (props) => {

    const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      
      <List>
        {SidebarData.map((item) => (
          <Link to={item.link} key={item.id}>
          <ListItem button >
           <ListItemIcon>
              {item.icon}
            </ListItemIcon>
            <ListItemText primary={item.title} />
          </ListItem>
          </Link>
          
        ))}
      </List>


    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;
   
    return (
        <Box sx={{ display: 'flex' }}>
          <CssBaseline />
          <AppBar
            position="fixed"
            sx={{
              width: { sm: `calc(100% - ${drawerWidth}px)` },
              ml: { sm: `${drawerWidth}px` },
            }}
          >
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: 'none' } }}
              >
                <MenuIcon />
                
              </IconButton>
              <Typography variant="h6" noWrap component="div">
                Travela 
              </Typography>
            </Toolbar>
          </AppBar>
          <Box
            component="nav"
            sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
            aria-label="mailbox folders"
          >
            
            <Drawer
              container={container}
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true, 
              }}
              sx={{
                display: { xs: 'block', sm: 'none' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
              }}
            >
              {drawer}
            </Drawer>
            <Drawer
              variant="permanent"
              sx={{
                display: { xs: 'none', sm: 'block' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
              }}
              open
            >
              {drawer}
            </Drawer>
          </Box>
          
        </Box>
      );
        
}

export default CustomDrawer;