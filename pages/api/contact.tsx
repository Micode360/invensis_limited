import mailer from "../../utils/mailer";

const handler = async (req: any, res: any) => {
  const { method } = req;

  const message = `
<p>
    ${req.name}
</p>
<br/>
<p>${req.message}</p>
<p>${req.email}</p>
<p><strong>This message came from www.invensisltd.com</strong></p>
`;

  if (method === "POST") {
    await mailer("Invensis", {
      to: "abayemiracle@gmail.com",
      subject: "Someone sent you a message",
      text: message,
    });
    res.json("Message Sent");
  }
};

export default handler;
