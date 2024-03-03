import logo from '../images/logo.svg';
import React from "react";
import Menu from "./Menu";
import '../scss/header.scss';

function Header(props: any) {
    return (
        <header className="header">
            <div className="container header__content">
                <div className="header__logo">
                    <img src={logo} className="header__logo" alt="logo" loading="lazy"/>
                </div>
                <Menu items={props.items}/>
            </div>
        </header>
    );
}

export default Header;
