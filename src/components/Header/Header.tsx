import s from "./Header.module.css"
import { Col, Row } from "react-bootstrap"
import Link from "next/link"
import { HeaderLink } from "./HeaderLink";


const Header = () => {
    return (<header className={`${s.header} container-fluid`}>
        <Row className='flex-grow-1 ' >
            <Col xs={10} >
                <img
                    src='https://img2.freepng.ru/20180729/pzu/kisspng-logo-brand-pink-m-font-heart-transparent-tumblr-5b5e8be2637950.4635760715329228504075.jpg'
                    alt='logo' />
            </Col>
            <Col xs={1} className='flex-align-center'>
                <HeaderLink href='/registration' label='Sign Up' />
            </Col>
            <Col xs={1} className='flex-align-center'>
                <HeaderLink href='/auth' label='Sign In' />
            </Col>
        </Row>
    </header>);
}

export default Header;