import nodemailer, { Transporter } from "nodemailer";




const mailer = (mailTitle: any, options: any): void => {
  const transporter: Transporter<any> = nodemailer.createTransport({
    service: process.env.EMAIL_SERVICE,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
    tls: {
      rejectUnauthorized: false
    }
  });

  const mailOptions = {
    from: {
      name: mailTitle,
      address: process.env.EMAIL_FROM as string,
    },
    to: options.to,
    subject: options.subject,
    html: options.text,
  };

  transporter.sendMail(mailOptions, function (err, info) {
    if (err) console.log(err, "mailer error");
    else console.log(info, "message sent");
  });
};

export default mailer;
