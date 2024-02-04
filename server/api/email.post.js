import nodemailer from "nodemailer";

const config = useRuntimeConfig();


const transporter = nodemailer.createTransport({
  service: config.MAILHOST,
  port: config.MAILPORT,
  secureConnection:true,
  auth: {
    user: config.MAILUSER,
    pass: config.MAILPASSWORD,
  },
  from: config.MAILUSER,
});

export default defineEventHandler(async (event) => {
  try {
    const formValues = await readBody(event);
    const emailBody = `<div style="width: 100%; box-sizing: border-box; padding: 20px; background-color: #F5F5DC; color: #63605b; font-family: Georgia, serif;">
  <div style="width: 95%; max-width: 650px; box-sizing: border-box; margin: 0 auto; border-radius: 10px; background-color: rgba(255,255,255,0.5);  padding: 40px;">
      <div style="width: 100%; margin: 0 auto; font-size: 1.4rem;">
          <p style="text-align: center;">
                <img src="cid:logo" style="width: 90%; max-width: 150px;" />
          </p>
      </div>
       <div style="width: 85%; margin: 10px auto; font-size: 1.15rem; color: #797979;">
          <h4 style="font-size: 1.5rem; text-align: center; color: #5e768b; letter-spacing: 0.1rem;">Thank You for Reaching Out!</h4>
          <p style="font-size: 1.2rem; font-weight: bold;">Hi ${formValues.name},</p>
          <p>I am bishwa. Nice to meet you! I received the following message from you:</p> 
          <p style="background-color: #e2e2e27c; padding:20px;">
              ${formValues.message}
          </p>
          <p>I will get back to you as soon as possible!</p>
          <p>Best regards,<br/>bishwa</p>
      </div>
  </div>
    </div>`;


    const email = {
      from: `bishwa shah Portfolio <${config.MAILUSER}>`,
      to: formValues.email,
      bcc: config.MAILUSER,
      subject: `${formValues.name}, thank you for contacting me!`,
      attachments: [
        {
          filename: "logo.png",
          path: `${config.MAILHOST}/images/logo.png`,
          cid: "logo",
        },
      ],
      html: emailBody,
      text: "Hello. I am bishwa full-time. Thank you for leaving a message on my Portfolio webpage. I will get back to you as soon as possible!",
    };
    console.log(email)

    await transporter.sendMail(email);
    return { message: "Sent successfully!" };
  } catch (error) {
    throw createError({
      statusCode: 400,
      statusMessage: error.message,
    });
  }
});
