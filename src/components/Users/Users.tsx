import React, { useState } from "react";
import { UserData } from "@/types/userData";
import s from "./Users.module.css"
import User from "./User/User";
import { Container } from "react-bootstrap";

interface UsersProps {
  state: UserData[]
}

const Users = (props: UsersProps) => {

  let users = props.state.map(u =>
    <User user={u} key={u.id} />)
  return <Container className={s.main}>{users}</Container>

}

export default Users;