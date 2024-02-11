const nodemailer = require("nodemailer");

const sendMail = async (req, res) => {
  try {
    let testAccount = await nodemailer.createTestAccount();

    // Connect with SMTP server
    const transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      auth: {
        user: "liliane.mitchell1@ethereal.email",
        pass: "UbkAcFnnHRJknh3zKV",
      },
    });

    async function main() {
      // Send mail with defined transport object
      const info = await transporter.sendMail({
        from: '"Surjeet " <ak2691622@gmail.com>', // Sender address
        to: "ak2691622@gmail.com, amank250umar@gmail.com", // List of receivers
        subject: "advik event", // Subject line
        text: "please come to my advik event", // Plain text body
        html: "<b>kaise ho app log</b>", // HTML body
      });

      console.log("Message sent: %s", info.messageId);
      res.json(info);
    }

    await main();
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = sendMail;
