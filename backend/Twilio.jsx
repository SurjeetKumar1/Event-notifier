require("dotenv").config();
const express = require("express");
const app = express();

const cors = require("cors");
const path = require("path");
const cookieParser = require('cookie-parser');
const crypto = require("crypto");

// Use middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Load environment variables
const accountSid = process.env.ACCOUNT_SID;
const authToken = process.env.AUTH_TOKEN; // Corrected variable name
const smsKey = process.env.SMS_SECRET_KEY;
const twilioNum = process.env.TWILIO_PHONE_NUMBER;

// Create Twilio client
const client = require("twilio")(accountSid, authToken);

// Define route to send OTP
app.post("/sendOtp", async (req, res) => { // Corrected route path ("/sendOtp")
    const { phone } = req.body;
    const otp = Math.floor(100000 + Math.random() * 900000); // Corrected Math.random()
    const ttl = 2 * 60 * 1000;
    const expires = Date.now() + ttl;
    const data = `${phone}.${otp}.${expires}`;
    const hash = crypto.createHash("sha256", smsKey).update(data).digest("hex");
    const fullHash = `${hash}.${expires}`;

    try {
        // Send OTP via Twilio
        await client.messages.create({
            body: `Your OTP is: ${otp}`,
            from: twilioNum,
            to: phone
        });

        // Respond with success message
        res.status(200).json({ phone, hash: fullHash, message: "OTP successfully sent" });
    } catch (error) {
        console.error("Error sending OTP:", error);
        res.status(500).json({ error: "Failed to send OTP" });
    }
});

// Define port and start server
const port = process.env.PORT || 7000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
