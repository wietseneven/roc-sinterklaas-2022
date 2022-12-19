// import { io } from "socket.io-client";
const { io } = require("socket.io-client");

const URL = "http://localhost:3000";
const socket = io(URL, { autoConnect: true, auth: { username: "client-server" } });

const init = () => {
  socket.onAny((event, ...args) => {
    console.log(event, args);
  });

  socket.io.on("connection", () => {

  })

  socket.io.on("error", (error) => {
    // ...
    console.error(error);
  });

  socket.on("user connected", (message) => {
    console.log({ message });
  })

  socket.on("private message", ({ content, to }) => {
    console.log({ content, to });
  });

  // export default socket;
  console.log('asf');
}

init();