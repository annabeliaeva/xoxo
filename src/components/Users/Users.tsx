import { Container } from "react-bootstrap";
import User from "./User/User";
import s from "./Users.module.css"

const Users = (props) => {
    
    let users = props.users.map(u =>
        <User user={u} follow={props.follow} unfollow={props.unfollow} key ={u.id}/>)
    return <Container className={s.main}>{users}</Container>
}

export default Users;