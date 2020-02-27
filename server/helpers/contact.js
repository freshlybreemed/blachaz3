import nodemailer from 'nodemailer';
import { json } from 'micro';

const wrapAsync = (handler) => async (req, res) => {
  return handler(req)
    .then((result) => {
      res.setHeader(
        'cache-control',
        's-maxage=1 maxage=0, stale-while-revalidate',
      );
      return res.json(result);
    })
    .catch((error) => res.status(500).json({ error: error.message }));
};

const sendEmail = async (email) => {
  try {
    // Generate test SMTP service account from ethereal.email

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: 'smtp-relay.sendinblue.com',
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: 'ebrima.jobe92@gmail.com', // generated ethereal user
        pass: process.env.NODEMAILER, // generated ethereal password
      },
    });
    const message = `Name: ${email.name} <br /> Email: ${
      email.email
    } <br /> Phone Number: ${
      email.phoneNumber
    } <br /> Services: ${JSON.stringify(email.services)} <br />  More Info: ${
      email.moreInfo
    }`;

    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: `"Blachaz3 Inquiry" <${email.email}>`, // sender address
      to: 'blachaz3@aol.com', // list of receivers
      subject: 'Blachaz3 Website Inquiry', // Subject line
      text: message, // plain text body
      html: `<b>${message}</b>`, // html body
    });

    console.log('Message sent: %s', info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  } catch (error) {
    console.error(error);
  }
};

const contactSubmitApi = wrapAsync(async (req, db) => {
  const data = await json(req);
  console.log(data);
  return await sendEmail(data);
});

module.exports = {
  contactSubmitApi,
};
