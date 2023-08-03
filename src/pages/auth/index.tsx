import { Authorization } from "@/components/Authorization/Authorization";
import { useMutation } from "react-query";

export default function AuthorizationPage() {


    let sendLogInata = async (data) => {

        let sendData = {
            email: data.get("email"),
            password: data.get("password")
        }
        // posting data to server
        return fetch('/api/sessions', {
            method: "post",
            body: JSON.stringify({
                email: sendData.email,
                password: sendData.password
            })
        })
    }

    const mutation = useMutation((data: FormData) => sendLogInata(data))

    const onSubmit = async (e) => {


        e.preventDefault()
        mutation.mutate(new FormData(e.target))
        e.target.reset()
    }

    return (
        <Authorization onSubmit={onSubmit} />
    )
}