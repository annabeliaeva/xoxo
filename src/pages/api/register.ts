import { NextApiResponse } from 'next';
import { PrismaManager } from "@/middleware/prismaManager"

export default async function handler(req, res: NextApiResponse) {

    function getAge(birthDate) {
        // return Math.floor((Date.UTC() - new Date("1994-06-14").getTime()) / 3.15576e+10)
    }

    const user = await PrismaManager.users.create({
        data: {
            age: getAge(req.body.bday),
            name: req.body.firstName,
            surname: req.body.lastName,
            city: req.body.city,
            country: req.body.country,
            sex: req.body.sex
        }
    })

    return res.json({})

}