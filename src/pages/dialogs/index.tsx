import { AppLayout } from '@/components/AppLayout/AppLayout';
import DialogsContainer from '@/components/Dialogs/DialogsContainer';
import { state as initialState } from '@/store'

export default function ProfilePage({ state }) {
    return (
        <AppLayout>
            <DialogsContainer state={state} />
        </AppLayout>
    )
}

export async function getServerSideProps() {
    const state = {
        dialogs_page: {
            ...initialState.dialogs_page,
            dialogs_data: [...initialState.dialogs_page.dialogsData],
            messages_data: [...initialState.dialogs_page.messagesData]
        }
    }
    return {
        props: {
            state
        }
    }
}