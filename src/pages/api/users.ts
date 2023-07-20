import { PrismaManager } from "@/middleware/prismaManager"
import { UserData } from '@/types/userData';
import { NextApiResponse } from "next";
import UsersPage from "../users";

export interface UsersPage {
    users: UserData[],
    pagination: {
        current: number,
        pagesCount: number
    }
}

export default async function handler(req, res: NextApiResponse<UsersPage>) {

    const curPage = +req.query.page ?? 1
    const perPage = 5

    const allUsers = await PrismaManager.users.findMany({
        skip: (curPage - 1) * perPage,
        take: perPage
    })

    const usersCount = await PrismaManager.users.count()

    let pagesCount = Math.ceil(usersCount / perPage)

    return res.json({
        users:
            allUsers.map(u => {
                return {
                    id: u.id,
                    age: u.age,
                    avatar: u.avatar_url,
                    fullName: u.name + ' ' + u.surname,
                    location: {
                        city: u.city,
                        country: u.country
                    },
                    sex: u.sex,
                    email: u.email,
                    password: u.password
                } as UserData
            }),
        pagination: {
            current: curPage,
            pagesCount: pagesCount
        }
    })
}