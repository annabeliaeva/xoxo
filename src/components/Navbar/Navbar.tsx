import React from "react";

import s from "./Navbar.module.css";
import Link from "next/link";

const Navbar = () => {
  return (<nav className={`${s.nav}`}>
    <div className={s.item}>
      <Link
        href='/profile'
        className={'active' ? `text-accent ${s.active}` : s.item}>
        Profile
      </Link>
    </div>
    <div className={s.item}>
      <Link
        href='/dialogs'
        className={'active' ? `text-accent ${s.active}` : s.item}>
        Dialogs
      </Link>
    </div>
    <div className={s.item}>
      <Link
        href='/users'
        className={'active' ? `text-accent ${s.active}` : s.item}>
        Users
      </Link>
    </div>
    <div className={s.item}>
      <Link
        href='/news'
        className={'active' ? `text-accent ${s.active}` : s.item}>
        News
      </Link>
    </div>
    <div className={s.item}>
      <Link
        href='/music'
        className={'active' ? `text-accent ${s.active}` : s.item}>
        Music
      </Link>
    </div>
    <div className={s.item}>
      <Link
        href='/settings'
        className={'active' ? `text-accent ${s.active}` : s.item}>
        Settings
      </Link>
    </div>
  </nav>);
}

export default Navbar;