import * as yup from 'yup';

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
// min 5 characters, 1 upper case letter, 1 numeric digit.

export const schema = yup.object().shape({
    firstName: yup.string().required("this field is required"),
    lastName: yup.string().required("this field is required"),
    username: yup.string().required("this field is required").test('Unique username', 'username already exists, please type another', async (value) => {
        let resp = await fetch(`/api/checkusername?username=${value}`).then(response => response.json())

        console.log(resp.exists)
        return resp.exists == 0
    }),
    city: yup.string().required("this field is required"),
    country: yup.string().required("this field is required"),
    email: yup.string().required("this field is required"),
    sex: yup.string().required("this field is required"),
    password: yup.string().required("No password provided").matches(passwordRules, 'Password can only contain Latin letters, have min 5 characters, , 1 upper case letter, 1 numeric digit'),
    confirmPassword: yup.string().oneOf([yup.ref("password"), null], "Passwords must match").required("Required"),
});