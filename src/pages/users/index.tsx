import { AppLayout } from '@/components/AppLayout/AppLayout';
import UsersContainer from '@/components/Users/UsersContainer';

export default function UsersPage(props) {
    return (
        <AppLayout>
            <UsersContainer />
        </AppLayout>
    )
}