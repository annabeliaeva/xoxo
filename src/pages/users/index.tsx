import { AppLayout } from '@/components/AppLayout/AppLayout';
import Users from '@/components/Users/Users';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { UsersPage } from '../api/users';

interface UsersData extends UsersPage {
    handleClick(u: number): any;
    isFetching: boolean;
}
export default function UsersPage() {

    const router = useRouter()

    const [usersData, setState] = useState<UsersData>({ users: [], pagination: { current: null, pagesCount: null }, handleClick(u) { }, isFetching: false })

    useEffect(() => {
        const fetchUsers = async () => {
            setState(usersData => { return { ...usersData, isFetching: true } })
            fetch(`/api/users?page=${router.query?.page ?? 1}`)
                .then(response => response.json())
                .then(res => setState(res))
        }
        fetchUsers()

    }, [router])

    usersData.handleClick = (u) => {
        router.push(`/users?page=${u}`)
    }



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
            <Users {...usersData} />
        </AppLayout>
    )
}
