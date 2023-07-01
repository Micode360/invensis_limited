import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../libs/prisma"
import authMiddleware from "../../../middlewares/auth";



const ProjectsUpdate = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;

  if (method === 'POST') {
    const { id, name, location ,description, duration  } = req.body;
  try {
         await prisma.projects.update({
            where: {
              id,
            },
            data: {
              name, location ,description, duration 
            },
          });
      res.status(200).end();
    } catch (error) {
      console.error('Error logging in:', error);
      res.status(500).json({ error: 'Failed to login' });
    }
  } 
}

export default  authMiddleware(ProjectsUpdate);