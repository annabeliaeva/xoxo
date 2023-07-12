import { Button, Col, Container, Row } from "react-bootstrap"
import s from "./User.module.css"
import { UserData } from "@/types/userData"
import Link from 'next/link'


interface UserProps {
    user: UserData
}
const User = (props: UserProps) => {
    return <Container className={`bg-primary ${s.user}`}>
        <Col className={s.disp_flex}>
            <Link href={`/profile/${props.user.id}`} className="align-self-center">
                <img className={s.avatar}
                    src={props.user.avatar}
                    alt='avatarka' />
            </Link>

        </Col>
        <Col xs={11}>
            <Row >
                <Link className={s.fullname_link} href={`/profile/${props.user.id}`}>
                    {props.user.fullName}
                </Link>
            </Row>
            <Row>{props.user.age}, {props.user.sex}</Row>
            <Row>{props.user.location.city}, {props.user.location.country}</Row>
        </Col>
        {/* <Col className={s.disp_flex}>
            {props.user.is_friend ? <Button variant="danger" onClick={() => { props.unfollow(props.user.id) }} className={s.btn_follow}>Unfollow</Button> :
                <Button variant="light_grey" onClick={() => { props.follow(props.user.id) }} className={s.btn_follow}>Follow</Button>}

        </Col> */}
    </Container>
}

export default User