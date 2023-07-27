import { PrismaManager } from "@/middleware/prismaManager"
import { UserData } from '@/types/userData';
import { NextApiResponse } from "next";
import UsersPage from "../users";


export default async function handler(req, res) {

    let userId = 0;
    let data = JSON.parse(req.body)
    const user = await PrismaManager.users.findFirst({
        where: { username: data.username }
    })

    userId = user?.id
    if (userId == 0)
        return res.json({
            exists: 0
        })
    else
        return res.json({
            exists: 1
        })


}