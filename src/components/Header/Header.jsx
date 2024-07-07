import React from 'react';
// import Button from "../Button/Button";
import { Button, Icon } from 'react-materialize';
import {useTelegram} from "../../hooks/useTelegram";
import './Header.css';

const Header = () => {
    const {user, onClose} = useTelegram();
    let is_bot
    let is_premium
    if (user?.is_bot){
        is_bot = "Yes"
    } else {
        is_bot = "No"
    }

    if (user?.is_premium){
        is_premium = "Yes"
    } else {
        is_premium = "No"
    }

    return (
        <div className={'header'}>
            {/* <Button onClick={onClose}>Close</Button> */}
            <span className={'username'}>
            <p>Welcome to SHISHKI, {user?.id};{user?.username};{user?.first_name};{user?.last_name}</p>
            <p>Are you bot: {is_bot}</p>
            <p>Your language: {user?.language_code}</p>
            <p>Have premium: {is_premium}</p>
            </span>
        </div>
    );
};

export default Header;