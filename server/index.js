const httpServer = require("http").createServer();
const io = require("socket.io")(httpServer, {
  cors: {
    origin: ["http://localhost:8080", "https://sinterklaas-2022.mediavormgever.online"],
  },
});

io.on("connection", (socket) => {
  socket.on("username submit", (username) => {
    const name = username.toLowerCase().trim();
    if (name !== 'siepy') {
      socket.emit('username error', { message: 'Dit is niet voor jou!' });
      socket.broadcast.emit("error", { message: "Iemand vult de verkeerde naam in! "});
    } else {
      socket.emit('username success', { message: 'Welkom Siepy, laten we beginnen!' });
      socket.broadcast.emit("success", { message: "Iemand vult de goede naam in! "});
    }
  });

  // forward the private message to the right recipient
  socket.on("private message", ({ content, to }) => {
    socket.to(to).emit("private message", {
      content,
      from: socket.id,
    });
  });

  // notify users upon disconnection
  socket.on("disconnect", () => {
    socket.broadcast.emit("user disconnected", socket.id);
  });

  socket.on("lights", (value) => {
    socket.broadcast.emit("lights", value);
  });

  socket.on("success", (data) => {
    socket.broadcast.emit("success", { message: "Success", ...data });
  });
  socket.on("error", (data) => {
    socket.broadcast.emit("error", { message: "error", ...data });
  });
});

const PORT = process.env.PORT || 3000;
console.log('Going to start the server');

httpServer.listen(PORT, () =>
  console.log(`server listening at http://localhost:${PORT}`)
);
