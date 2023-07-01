import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../libs/prisma"



 const Careers = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;


  if (method === 'GET') {
    try {
        const job = await prisma.job.findMany();
        res.json(job);
      } catch (error) {
        console.error('Error retrieving users:', error);
        // Handle the error
        // ...
      } finally {
        // Disconnect PrismaClient
        await prisma.$disconnect();
      }
  }
}




export default Careers;