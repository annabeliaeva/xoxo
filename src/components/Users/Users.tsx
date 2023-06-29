import { Container } from "react-bootstrap";
import User from "./User/User";
import s from "./Users.module.css"
import { UserData } from "@/types/userData";

interface UsersProps {
    users: UserData[]
}
const Users = (props: UsersProps) => {

    let users = props.users.map(u =>
        <User user={u} key={u.id} />)
    return <Container className={s.main}>{users}</Container>
}

export default Users;