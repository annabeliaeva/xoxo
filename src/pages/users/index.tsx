import { AppLayout } from '@/components/AppLayout/AppLayout';
import UsersContainer from '@/components/Users/UsersContainer';
import { state as initialState } from '@/store'

export default function UsersPage({state}) {
    return (
        <AppLayout>
            <UsersContainer state={state} />
        </AppLayout>
    )
}

export async function getServerSideProps(params) {
    const state = {
        users_page: {
            ...initialState.users_page,
            users: [...initialState.users_page.users]
        }
    }
    return {
        props:{
            state
        }
    }
}