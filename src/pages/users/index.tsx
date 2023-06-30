import { AppLayout } from '@/components/AppLayout/AppLayout';
import Users from '@/components/Users/Users';
import { PrismaManager } from '@/middleware/prismaManager';
import { state as initialState } from '@/store'
import { UserData } from '@/types/userData';
import { useState } from 'react';

export default function UsersPage(props: UsersPage) {

    const [state, setState] = useState(props.users)

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

    return (
        <AppLayout>
            <Users state={props.users} />
        </AppLayout>
    )
}

interface UsersPage {
    users: UserData[]
}

export async function getServerSideProps() {
    const state = {
        users_page: {
            ...initialState.users_page,
            users: [...initialState.users_page.users]
        }
    }

    const allUsers = await PrismaManager.users.findMany()

    return {
        props: {
            users: allUsers.map(u => {
                return {
                    id: u.id,
                    age: u.age,
                    avatar: u.avatar_url,
                    fullName: u.name + ' ' + u.surname,
                    location: {
                        city: u.city,
                        country: u.country
                    },
                    sex: u.sex
                } as UserData
            })
        } as UsersPage
    }
}