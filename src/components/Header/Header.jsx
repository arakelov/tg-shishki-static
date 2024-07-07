import React from 'react';
// import Button from "../Button/Button";
import { Button, Icon } from 'react-materialize';
import {useTelegram} from "../../hooks/useTelegram";
import './Header.css';

const Header = () => {
    const {user, onClose} = useTelegram();

    return (
        <div className={'header'}>
            {/* <Button onClick={onClose}>Close</Button> */}
            <span className={'username'}>
            <p>Welcome to SHISHKI, {user?.id};{user?.username};{user?.first_name};{user?.last_name}</p>
            <p>Are you bot: {user?.is_bot}</p>
            <p>Your language: {user?.language_code}</p>
            <p>Have premium: {user?.is_premium}</p>
            </span>
        </div>
    );
};

export default Header;