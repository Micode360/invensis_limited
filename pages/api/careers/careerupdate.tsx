import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../libs/prisma"
import authMiddleware from "../../../middlewares/auth";


const CareerUpdate = async(req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;

  if (method === 'POST') {
    const { id, title, location ,description } = req.body;
  try {
         await prisma.job.update({
            where: {
              id,
            },
            data: {
              title,
              location,
              description,
            },
          });
      res.status(200).end();
    } catch (error) {
      console.error('Error logging in:', error);
      res.status(500).json({ error: 'Failed to login' });
    }
  } 
}

export default authMiddleware(CareerUpdate);