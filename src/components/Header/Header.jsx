import React from 'react';
// import Button from "../Button/Button";
import { Button, Icon } from 'react-materialize';
import {useTelegram} from "../../hooks/useTelegram";
import './Header.css';

const Header = () => {
    const {user, onClose} = useTelegram();

    return (
        <div className={'header'}>
            <Button onClick={onClose}>Close</Button>
            <span className={'username'}>
            <Icon>person</Icon> {user?.first_name}
            </span>
        </div>
    );
};

export default Header;