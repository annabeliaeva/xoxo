import { NextApiResponse } from 'next'
import { PrismaManager } from "@/middleware/prismaManager"
import { hashPassword } from '@/tools/hashPassword'
import { schema } from '@/tools/yupSchema'

export default async function handler(req, res: NextApiResponse) {

    let data = JSON.parse(req.body)
    data.age = 23

    try {
        // Validate the form data using a custom Schema
        let validatedData = await schema.validate(data).then(data => data)
        let hashedPass = await hashPassword(validatedData.password)
        const user = await PrismaManager.users.create({
            data: {
                age: 23,
                name: validatedData.firstName,
                surname: validatedData.lastName,
                city: validatedData.city,
                country: validatedData.country,
                sex: validatedData.sex,
                username: validatedData.username,
                email: validatedData.email,
                password: hashedPass
            }
        })
    }
    catch (errors: any) {
        console.log(errors);
        
        if (errors) {
            console.log(errors)
        }
        
        return res.json({ ok: "ok" })
    }
}