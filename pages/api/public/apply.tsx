import axios from "axios";
import formidable from "formidable";
import { v2 as cloudinary } from 'cloudinary';
import prisma from "../../../libs/prisma"

export const config = {
  api: {
    bodyParser: false,
  },
};

cloudinary.config({ 
  cloud_name: process.env.CLOUD_NAME, 
  api_key: process.env.API_KEY, 
  api_secret: process.env.API_SECRET 
});


const handler = async (req: any, res: any) => {
  const { method } = req;

   
  
    const response = (status:any, response: any) => {
    res.status(status).json({
      message: response,
    });
  };

  const form = new formidable.IncomingForm();
  console.log("before post");
  if (method === "POST") {
    form.parse(req, async (err: any, fields: any, files: any) => {
      if (err) return res.json({ err: err });
  
      try {

        let jobId = parseInt(fields.jobId, 10);

        let imageResponse: any = Object.prototype.hasOwnProperty.call(fields, "file")
        ? ""
        :await cloudinary.uploader.upload(files.file.filepath, {
            folder: "invensisCV"
          });
          await prisma.jobApplication.create({
            data: {
              firstname: fields.firstname, 
              lastname: fields.lastname, 
              email: fields.email, 
              location: fields.location, 
              cv: imageResponse.url,
              cvId: imageResponse.public_id,  
              jobId
            },
          });

        response(200, "Apply Message Sent");
      } catch (e) {
        console.log(e, "the error")
        response(400, "Apply Message not Sent");
      }
    });
  }

};








export default handler;
