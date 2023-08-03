
import s from "./Header.module.css";
import Link from "next/link";

export interface HeaderLinkProps {
    href: string,
    label: string
}

export const HeaderLink = (props: HeaderLinkProps) => {

    return <Link
        href={props.href}
        className={`${s.link_style} link-accent`}>
        {props.label}
    </Link>

}
