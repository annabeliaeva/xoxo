import React, { useState } from "react";
import Users from "./Users";
import { state as initialState } from '@/store'
import { UserData } from "@/types/userData";

interface UsersContainerProps{
  state: UserData[]
} 

const UsersContainer = (props: UsersContainerProps) => {

  const [state, setState] = useState(props.state)

  // let follow = (id) => {
  //   setState(state => {
  //     return {
  //       ...state,
  //       users_page: {
  //         users: state.users_page.users.map(u => {return (u.id === id) ? {...u, is_friend: true}: u})
  //       }
  //     }
  //   })
  // }

  // let unfollow = (id) => {
  //   setState(state => {
  //     return {
  //       ...state,
  //       users_page: {
  //         users: state.users_page.users.map(u => {return (u.id === id) ? {...u, is_friend: false}: u})
  //       }
  //     }
  //   })
  // }

  return <Users users={state} />
}

export default UsersContainer;