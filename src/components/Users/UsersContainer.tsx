import React, { useState } from "react";
import Users from "./Users";
import { state as initialState } from '@/store'

const UsersContainer = () => {

  const [state, changeState] = useState(initialState)

  let follow = (id) => {
    changeState(state => {
      return {
        ...state,
        users_page: {
          users: state.users_page.users.map(u => {return (u.id === id) ? {...u, is_friend: true}: u})
        }
      }
    })
  }

  let unfollow = (id) => {
    changeState(state => {
      return {
        ...state,
        users_page: {
          users: state.users_page.users.map(u => {return (u.id === id) ? {...u, is_friend: false}: u})
        }
      }
    })
  }

  debugger

  return <Users users={state.users_page.users} follow={follow} unfollow={unfollow} />
}

export default UsersContainer;