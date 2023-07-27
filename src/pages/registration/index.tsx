import { Registration } from "@/components/Registration/Registration";
import { useMutation } from "react-query";


export default function AuthorizationPage() {

    let sendRegData = async (data) => {

        // posting data to server
        return fetch('/api/register', {
            method: "post",
            body: JSON.stringify({
                firstName: data.firstName,
                lastName: data.lastName,
                country: data.country,
                city: data.city,
                sex: data.sex,
                bday: data.bday,
                email: data.email,
                username: data.username,
                password: data.password
            })
        })
    }

    const mutation = useMutation((data: { [k: string]: FormDataEntryValue }) => sendRegData(data))

    const onSubmit = (values, actions) => {

        let exists = fetch('/api/username', {
            method: "post", body: JSON.stringify({
                username: values.username
            })
        }).then(response => response.json())

        console.log(exists)
        mutation.mutate(values)
        actions.resetForm()
    }

    return (
        <Registration onSubmit={onSubmit} />
    )
}