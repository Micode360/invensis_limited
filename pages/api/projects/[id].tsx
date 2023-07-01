
import { PrismaClient } from '@prisma/client';
import authMiddleware from "../../../middlewares/auth";

const prisma = new PrismaClient();

 const projectDel = async (req:any, res:any) => {
  const { id } = req.query;
  const parsedId = parseInt(id, 10);
  try {
    await prisma.projects.delete({
      where: { id: parsedId },
    });

    res.status(204).end();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to delete post' });
  }
}


export default authMiddleware(projectDel)
