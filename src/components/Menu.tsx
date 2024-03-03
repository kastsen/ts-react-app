import React from "react";
import '../scss/menu.scss';

const menuList = ({items, className}: any) => {
    const listItems = items.map((item: any) =>
        !item.id.match('cart') ?
            <li key={item.id}><a href={item.url}>{item.text}</a></li> :
            <li key={item.id}>
                <a href={item.url}><i className="fa fa-shopping-cart" aria-hidden="true"></i></a>
            </li>
    );

    return (
        <ul className={className}>{listItems}</ul>
    );
}

function Menu(props: any) {
    return (
        <nav className="menu" id='menu'>
            <a href="#menu">
                <div className="menu__icon menu__icon--inactive"></div>
            </a>
            <a href="#">
                <div className="menu__icon menu__icon--active"></div>
            </a>

            {menuList({...props, className: 'menu__list'})}
        </nav>
    );
}

export default Menu;
