import * as React from 'react';
import Rutina from '../rutina/Rutina';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import AccessibilityNew from '@mui/icons-material/AccessibilityNew';
import FitnessCenter from '@mui/icons-material/FitnessCenter';

const constData = {
  fitness_icon: <FitnessCenter />,
  chest_icon: <AccessibilityNew />
};

export default function NestedList(props: {items: any[], onRutinaClick: any, selectedItem: number}) {
  const [open, setOpen] = React.useState(true);
  let rowCounter = 0;

  function handleClick() {
    setOpen(!open);
  };

  return (
    <List
      sx={{ width: open ? '40%' : 'auto', bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      {open ?
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          {constData.fitness_icon}
        </ListItemIcon>
        <ListItemText primary="Rutinas" />
        <ExpandLess />
      </ListItemButton>
      :
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          {constData.fitness_icon}
        </ListItemIcon>
        <ExpandMore />
      </ListItemButton>
      }
      <Collapse  in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {props.items.map(item => {
            return (
              <Rutina 
                items={props.items}
                key={Object.keys(item)[0]} 
                nombre={Object.keys(item)[0]} 
                index={rowCounter++} 
                icon={constData.chest_icon} 
                onClick={props.onRutinaClick} 
                selectedItem={props.selectedItem}
              />
            );})
          }
        </List>
      </Collapse>
    </List>
  );
};