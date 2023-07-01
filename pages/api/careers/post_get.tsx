import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../libs/prisma"
import authMiddleware from "../../../middlewares/auth";




 const Careers = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;

  if (method === 'POST') {
    const { title, location ,description, startdate } = req.body;

    try {
        const Careers = await prisma.job.create({
            data: {
              location,
              title,
              description,
              startdate
            },
          });
      res.status(200).json(Careers);
    } catch (error) {
      console.error('Error logging in:', error);
      res.status(500).json({ error: 'Failed to login' });
    }
  } 


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




export default authMiddleware(Careers)