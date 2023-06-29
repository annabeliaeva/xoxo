import React from "react";

import s from "./Navbar.module.css";
import { NavbarLink } from "./NavbarLink";

const Navbar = () => {
  return (<nav className={`${s.nav}`}>
      <NavbarLink
        href='/profile'
        label='Profile' />
      <NavbarLink
        href='/dialogs'
        label='Dialogs' />
      <NavbarLink
        href='/users'
        label='Users' />
      <NavbarLink
        href='/news'
        label='News' />
      <NavbarLink
        href='/music'
        label='Music' />
      <NavbarLink
        href='/settings'
        label='Settings' />
  </nav>);
}

export default Navbar;