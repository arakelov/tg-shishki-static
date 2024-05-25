import React, { useState } from 'react';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import ParkIcon from '@mui/icons-material/Park';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import TaskIcon from '@mui/icons-material/Assignment';
import './BottomMenu.css'


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
      <BottomNavigationAction label="Forest" icon={<ParkIcon />} />
      <BottomNavigationAction label="Boost" icon={<FlashOnIcon />} />
      <BottomNavigationAction label="Tasks" icon={<TaskIcon />} />
    </BottomNavigation>
  );
}