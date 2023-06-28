import { AppLayout } from '@/components/AppLayout/AppLayout';
import Profile from '@/components/Profile/Profile';
import { GetServerSidePropsContext } from 'next';


export const getServerSideProps = (ctx: GetServerSidePropsContext) => {
    return {
        props: {
            id: ctx.query.id
        }
    }
}

export default function HomePage(props) {
    return (
        <AppLayout>
            <Profile id={props.id} />
        </AppLayout>
    )
}