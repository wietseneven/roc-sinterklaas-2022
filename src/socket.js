import { io } from "socket.io-client";

const URL = process.env.VUE_APP_API_URL || "http://192.168.1.87:3000";
const socket = io(URL, { autoConnect: true });

// socket.onAny((event, ...args) => {
//   console.log(event, args);
// });

export default socket;
