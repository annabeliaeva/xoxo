import { AppLayout } from '@/components/AppLayout/AppLayout';
import UsersContainer from '@/components/Users/UsersContainer';
import { PrismaManager } from '@/middleware/prismaManager';
import { state as initialState } from '@/store'
import { UserData } from '@/types/userData';



export default function UsersPage(props: UsersPage) {
    return (
        <AppLayout>
            <UsersContainer state={props.users} />
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