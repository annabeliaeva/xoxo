import { NextApiResponse } from 'next';
import { PrismaManager } from "@/middleware/prismaManager"
import bcrypt from 'bcrypt'

export default async function handler(req, res: NextApiResponse) {

    const hashPassword = async (password, saltRounds = 10) => {
        try {
            // Generate a salt
            const salt = await bcrypt.genSalt(saltRounds)
            
            // Hash password
            return await bcrypt.hash(password, salt)
        } catch (error) {
            console.log(error)
        }
        
        // Return null if error
        return null
    }
    
    let data = JSON.parse(req.body)

    let hashedPass = await hashPassword(data.password)
    const user = await PrismaManager.users.create({
        data: {
            age: 23,
            name: data.firstName,
            surname: data.lastName,
            city: data.city,
            country: data.country,
            sex: data.sex,
            username: data.username,
            email: data.email,
            password: hashedPass
        }
    })


    return res.json({ ok: "ok" })

}