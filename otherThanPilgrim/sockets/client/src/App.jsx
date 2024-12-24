import React, { useEffect, useState, useMemo } from 'react';
import { io } from "socket.io-client"; 
import { Container, Typography, TextField, Button, Stack } from "@mui/material";

export default function App() {
  const socket = useMemo(() => io("http://localhost:3000", { withCredentials: true }), []);
  const [message, setMessage] = useState("");
  const [room, setRoom] = useState("");
  const [sId, setSId] = useState("");
  const [allMessages, setAllMessages] = useState([]);
  const [roomName, setRoomName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    socket.emit("message", { message, room });
    setMessage("");
  };

  const joinHandler = (e) => {
    e.preventDefault();
    socket.emit("join-room", roomName);
    setRoom(roomName);
    setRoomName("");
  };

  const handleMessage = (e) => {
    setMessage(e.target.value);
  };
  const handleRoom = (e) => {
    setRoom(e.target.value);
  };
  const handleRoomName = (e) => {
    setRoomName(e.target.value);
  };

  useEffect(() => {
    socket.on('connect', () => {
      console.log('connected to server');
      setSId(socket.id);
    });
    socket.on('welcome', (s) => {
      console.log(s);
    });
    socket.on("recieve-message", (s) => {
      console.log(s);
      setAllMessages((prevData) => [...prevData, s]);
    });
    socket.on('disconnect', () => {
      console.log("Disconnected!");
    });
    return () => {
      socket.disconnect();
    };
  }, [socket]);

  return (
    <Container maxWidth="sm">
      <Typography variant="h6" component="div" gutterBottom>{sId}</Typography>
      <form onSubmit={joinHandler}>
        <Typography variant="h6" component="div" gutterBottom>Join Room</Typography>
        <TextField id="outlined-basic" value={roomName} onChange={handleRoomName} label="Room Name" variant="outlined" />
        <Button variant="contained" color="primary" type="submit">Join Room</Button>
      </form>
      <form onSubmit={handleSubmit}>
        <TextField id="outlined-basic" value={message} onChange={handleMessage} label="Message" variant="outlined" />
        <TextField id="outlined-basic" value={room} onChange={handleRoom} label="Room Id" variant="outlined" />
        <Button variant="contained" color="primary" type="submit">Submit</Button>
      </form>
      <Stack>
        {allMessages.map((m, i) => (
          <Typography key={i} variant="h6" component="div" gutterBottom>{m}</Typography>
        ))}
      </Stack>
    </Container>
  );
}
