import prisma from "../../../libs/prisma"
import { v2 as cloudinary } from 'cloudinary';
import authMiddleware from "../../../middlewares/auth";



cloudinary.config({ 
  cloud_name: process.env.CLOUD_NAME, 
  api_key: process.env.API_KEY, 
  api_secret: process.env.API_SECRET 
});



const ApplicationDel = async (req:any, res:any) => {
  const { id } = req.query;
  const { cvId } = req.body

  const parsedId = parseInt(id, 10);
  try {
    await cloudinary.uploader.destroy(cvId);
    await prisma.jobApplication.delete({
      where: { id: parsedId },
    });

    res.status(204).end();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to delete post' });
  }
}

export default  authMiddleware(ApplicationDel)