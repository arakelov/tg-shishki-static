import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import ParkIcon from '@mui/icons-material/Park';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import TaskIcon from '@mui/icons-material/Assignment';
import './BottomMenu.css'
// import { Nav, NavLink, NavMenu } from "./NavbarElements";

export default function SimpleBottomNavigation() {
  const [value, setValue] = useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={'bottomnavbar'}
    >
      <BottomNavigationAction component={Link} to="/"  label="Forest" icon={<ParkIcon />} />
      <BottomNavigationAction component={Link} to="/boost" label="Boost" icon={<FlashOnIcon />} />
      <BottomNavigationAction component={Link} to="/task" label="Tasks" icon={<TaskIcon />} />
    </BottomNavigation>
  );
}