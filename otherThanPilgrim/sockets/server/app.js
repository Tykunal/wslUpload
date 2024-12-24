import express from "express";
import { Server } from "socket.io";
import { createServer } from "http";
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";

const port = 3000;
const app = express();
const secretKey = "kunalishero"

const server = createServer(app);
const io = new Server(server, {
    cors: {
      origin: ["http://127.0.0.1:5173"],
      methods: ["GET", "POST"],
      credentials: true,
    }
  });
  
io.on("connection", (socket) => {
  console.log("User Connected!");
  console.log("ID: ", socket.id);
  socket.emit("welcome", "Welcome to Kunal's Server.");
  socket.on("message", ({ message, room }) => {
    console.log(message);
    socket.to(room).emit("recieve-message", message);
  });
  socket.on("join-room", (roomName) => {
    socket.join(roomName);
    console.log(`${socket.id} joined room ${roomName}`);
  });
});

app.get("/", (req, res) => {
  res.send("Nice working!");
});

app.get("/login", (req, res) => {
  const token = jwt.sign({ _id: "fjkdklsjlk" }, secretKey);
  res.cookie("token", token, {
    httpOnly: true,  
    secure: true,
    sameSite: "none"
  }).json({
    message: "Login Success"
  });
});

io.use((socket, next) => {
  cookieParser()(socket.request, socket.request.res || {}, (err) => {
    if (err) return next(err);
    const token = socket.request.cookies.token;
    if (!token) return next(new Error("Authentication Error!"));
    try {
      jwt.verify(token, secretKey);
      next();
    } catch (error) {
      next(new Error("Authentication Error!"));
    }
  });
});

server.listen(port, () => {
  console.log(`Server is running at ${port}`);
});
