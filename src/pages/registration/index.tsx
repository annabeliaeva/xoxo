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

    const mutation = useMutation((data: {[k:string]: FormDataEntryValue}) => sendRegData(data))

    const onSubmit = (e: { preventDefault: () => void; target: HTMLFormElement; }) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const fields = Object.fromEntries(formData)
        // Passing variables to MY mutatuon function (sendRegData)
        // and triggering sending 
        mutation.mutate(fields)

        // clear form fields
        e.target.reset()
    }


    return (
        <Registration onSubmit={onSubmit} />
    )
}