import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();



export default async function Projects(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

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
