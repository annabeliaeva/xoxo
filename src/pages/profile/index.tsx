import { AppLayout } from '@/components/AppLayout/AppLayout';
import Profile from '@/components/Profile/Profile';
import { state as initialState } from '@/store'


export default function ProfilePage({state}) {
    return (
        <AppLayout>
            <Profile state={state} />
        </AppLayout>
    )
}

export async function getServerSideProps() {
    const state = {
        profile_page: {
            ...initialState.profile_page,
            postData: [...initialState.profile_page.postData]
        }
    }
    return {
        props: {
            state
        },
    }
}