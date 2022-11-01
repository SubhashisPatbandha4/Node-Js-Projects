const express = require("express");
const app = express();
app.use(express.static(__dirname + "/public"));
const PORT = process.env.PORT || 5000;
const http = require("http").createServer(app);
app.get("/", (req, res) => res.sendFile(__dirname + "/index.html"));

//socket

const io = require("socket.io")(http);
 
io.on("connection", (socket) => {
  console.log("Socket.io connected");
  socket.on("message", (msg) => {
    // console.log(msg);
    socket.broadcast.emit('message',msg)
  });
});

http.listen(PORT, () => console.log(`Example app listening on port https://localhost:${PORT}`));
