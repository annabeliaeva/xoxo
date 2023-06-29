import React from "react";

import s from "./Navbar.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

export interface NavbarProps {
  href: string,
  label: string
}

export const NavbarLink = (props: NavbarProps) => {

  const router = useRouter()

  return <div>
<Link
    href={props.href}
    className={router.asPath === props.href ? `${s.active} text-accent` : s.item}>
    {props.label}
  </Link>
  </div>
  
}
