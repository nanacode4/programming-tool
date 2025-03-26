import React from 'react';
import { Drawer, List, ListItem, ListItemText, Box, Typography } from '@mui/material';

const menuItems = [
  'Python Intro',
  'Python Variables',
  'Python Data Types',
  'Python Numbers',
  'Python Strings',
  'Python Booleans',
  'Python Operators',
  'Python Lists',
  'Python Tuples',
  'Python Sets',
  'Python Dictionaries',
  'Python If ... Else',
  'Python While Loops',
  'Python For Loops',
  'Python Functions',
];

const Sidebar = ({ onSelect }) => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 240,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: 240,
          boxSizing: 'border-box',
          top: 80,
        },
      }}
    >
      <Box sx={{ padding: 3 }}>
        <Typography variant="h6" fontWeight="bold">
          Python Tutorial
        </Typography>
        <List>
          {menuItems.map((item, index) => (
            <ListItem button key={index} onClick={() => onSelect(item)}>
              <ListItemText primary={item} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
