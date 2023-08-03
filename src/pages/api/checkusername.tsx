import { PrismaManager } from "@/middleware/prismaManager"

export default async function handler(req, res) {

    let data = req.query.username
    const user = await PrismaManager.users.findFirst({
        where: { username: data }
    })

    if (user!= null)
        return res.json({
            exists: 1
        })
    else
        return res.json({
            exists: 0
        })


}