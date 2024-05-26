import React, { useState } from 'react';    
import './TaskList.css'

export default function SimpleBottomNavigation() {
    const [value, setValue] = useState(0);
  
    return (
    <div>
        <ul class="collection with-header">
            <li class="collection-header"><h4>Tasks</h4></li>
            <li class="collection-item"><div>Пососать хуйца<a href="#!" class="secondary-content"><i class="material-icons">send</i></a></div></li>
            <li class="collection-item"><div>Еще раз соснуть<a href="#!" class="secondary-content"><i class="material-icons">send</i></a></div></li>
            <li class="collection-item"><div>Пригубить вялого<a href="#!" class="secondary-content"><i class="material-icons">send</i></a></div></li>
            <li class="collection-item"><div>Заглотить по самые гланды<a href="#!" class="secondary-content"><i class="material-icons">send</i></a></div></li>
        </ul>
    </div>
    );
  }