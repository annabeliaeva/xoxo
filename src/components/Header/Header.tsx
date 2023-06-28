import React from "react";
import s from "./Header.module.css";

const Header = () => {
    return (<header className={s.header}>
        <img
            src='https://img2.freepng.ru/20180729/pzu/kisspng-logo-brand-pink-m-font-heart-transparent-tumblr-5b5e8be2637950.4635760715329228504075.jpg'
            alt='logo' />
    </header>);
}

export default Header;