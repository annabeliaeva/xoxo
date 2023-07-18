import { Registration } from "@/components/Registration/Registration";
import { useMutation } from "react-query";

interface RegData {
    firstName: string;
    lastName: string;
    country: string;
    city: string;
    sex: string;
    bday: string;
    email: string;
    username: string;
    password: string;
}


export default function AuthorizationPage() {

    const onSubmit = (e) => {

        e.preventDefault()

        const formData = new FormData(e.target)
        const fields = Object.fromEntries(formData)
        mutation.mutate(fields)
        e.target.reset
    }

    const mutation = useMutation((data) => sendRegData(data))

    let sendRegData = async (data) => {

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
    return (
        <Registration onSubmit={onSubmit} />
    )
}