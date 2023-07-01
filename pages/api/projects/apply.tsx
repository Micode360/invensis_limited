import axios from "axios";
import formidable from "formidable";


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
        // files.file.filepath
        axios.post(`http://localhost:1337/api/job-applications`, {
    data: {
          resume: files.file.filepath,
          firstname: fields.firstname,
          lastname:files.lasname,
          title: files.title
        }
  })
        response(200, "Apply Message Sent");
      } catch (e) {
        response(400, "Apply Message not Sent");
      }
    });
response(200, "Apply Message Sent");
  }

};








export default handler;
