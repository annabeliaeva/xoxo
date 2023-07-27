import { PrismaManager } from "@/middleware/prismaManager"
import { UserData } from '@/types/userData';
import { NextApiResponse } from "next";
import UsersPage from "../users";


export default async function handler(req, res) {

    let data = req.query.username
    const user = await PrismaManager.users.findFirst({
        where: { username: data }
    })
    console.log(user)
    if (user!= null)
        return res.json({
            exists: 1
        })
    else
        return res.json({
            exists: 0
        })


}