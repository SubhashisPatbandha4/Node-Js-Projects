const express = require("express");
require("dotenv").config();
const client = require("twilio")(process.env.ACC_SID, process.env.AUTH_TOKEN);
const app = express();
const PORT = 5000;
const path = require("path");
const staticpath=path.join(__dirname,"/public ")
app.use(express.static(staticpath));
app.get("", (req, resp) => {
  resp.send("index.html");
});

client.messages
  .create({
    body: "hi",
    to: "whatsapp:" + process.env.MY_PHONE, // Text this number
    from: "whatsapp:+14155238886", // From a valid Twilio number
    mediaUrl:
      "https://im.rediff.com/cricket/2019/aug/15virat-ton.jpg?w=670&h=900",
  })
  .then((message) => console.log(message.sid))
  .catch((err) => console.log(err));

app.listen(PORT, () => console.log("listening on", PORT));