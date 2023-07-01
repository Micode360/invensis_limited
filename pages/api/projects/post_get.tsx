import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../libs/prisma"
import authMiddleware from "../../../middlewares/auth";





const Projects = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;

  if (method === 'POST') {
    const { name, location ,description, duration } = req.body;

    try {
        const Projects = await prisma.projects.create({
            data: {
              name,
              location,
              description,
              duration
            },
          });
      res.status(200).json(Projects);
    } catch (error) {
      console.error('Error logging in:', error);
      res.status(500).json({ error: 'Failed to login' });
    }
  } 


  if (method === 'GET') {
    try {
        const job = await prisma.projects.findMany();
        res.json(job);
      } catch (error) {
        console.error('Error retrieving projects:', error);

      } finally {
        await prisma.$disconnect();
      }
  }
}


export default authMiddleware(Projects)