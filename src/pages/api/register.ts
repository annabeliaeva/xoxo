import { NextApiResponse } from 'next';
import { PrismaManager } from "@/middleware/prismaManager"

export default async function handler(req, res: NextApiResponse) {

    let data = JSON.parse(req.body)

    const user = await PrismaManager.users.create({
        data: {
            age: 23,
            name: data.firstName,
            surname:data.lastName,
            city: data.city,
            country: data.country,
            sex: data.sex
        }
    })


    return res.json({ok:"ok"})

}