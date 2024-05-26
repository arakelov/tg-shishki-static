import React, { useState } from 'react';    
import Icon from '@mui/material/Icon';
import DoneOutline from '@mui/icons-material/DoneOutline';
import './TaskList.css'

export default function SimpleBottomNavigation() {
    const [value, setValue] = useState(0);
  
    return (
    <div>
        <ul class="collection with-header">
            <li class="collection-header"><h4>Tasks</h4></li>
            <li class="collection-item"><div>Пососать хуйца<a href="#!" class="secondary-content"><Icon component={DoneOutline}></Icon></a></div></li>
            <li class="collection-item"><div>Еще раз соснуть<a href="#!" class="secondary-content"><Icon component={DoneOutline}></Icon></a></div></li>
            <li class="collection-item"><div>Пригубить вялого<a href="#!" class="secondary-content"><Icon component={DoneOutline}></Icon></a></div></li>
            <li class="collection-item"><div>Заглотить по самые гланды<a href="#!" class="secondary-content"><Icon component={DoneOutline}></Icon></a></div></li>
        </ul>
    </div>
    );
  }