import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../libs/prisma"
import authMiddleware from "../../../middlewares/auth";




 const Applications = async(req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;

  if (method === 'GET') {
    try {
        const job = await prisma.jobApplication.findMany();
        res.json(job);
      } catch (error) {
        console.error('Error retrieving users:', error);
        res.json(error);
      } finally {
        await prisma.$disconnect();
      }
  }
}


export default authMiddleware(Applications)