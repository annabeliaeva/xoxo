import { AppLayout } from '@/components/AppLayout/AppLayout';
import Profile from '@/components/Profile/Profile';
import { PrismaManager } from '@/middleware/prismaManager';
import { UserData } from '@/types/userData';
import { GetServerSidePropsContext } from 'next';
import { state as initialState } from '@/store'



export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {

    const user = await PrismaManager.users.findUnique({
        where: {
            id: +ctx.query.id
        }

    })

    const state = {
        profile_page: {
            ...initialState.profile_page,
            postData: [...initialState.profile_page.postData]
        }
    }

    return {
        props: {
            user: {
                id: user.id,
                age: user.age,
                avatar: user.avatar_url,
                fullName: user.name + ' ' + user.surname,
                location: {
                    city: user.city,
                    country: user.country
                },
                sex: user.sex
            },
            state
        }

    }
}

export default function HomePage(props) {
    return (
        <AppLayout>
            <Profile {...props} />
        </AppLayout>
    )
}