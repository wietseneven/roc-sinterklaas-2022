// import { io } from "socket.io-client";
const { io } = require("socket.io-client");

const URL = "https://api.sinterklaas2022.mediavormgever.online";
const LIGHTS_URL = "http://192.168.1.199";
const socket = io(URL, { autoConnect: true, auth: { username: "client-server" } });

const states = {
  default: {
    on: true,
    bri: 128,
    transition: 7,
    ps: -1,
    pl: -1,
    nl: {
      on: false,
      dur: 60,
      mode: 1,
      tbri: 0,
      rem: -1,
    },
    udpn: {
      send: true,
      recv: true,
    },
    lor: 0,
    mainseg: 0,
    seg: [
      {
        id: 0,
        start: 0,
        stop: 221,
        len: 221,
        grp: 1,
        spc: 0,
        of: 0,
        on: true,
        frz: false,
        bri: 255,
        cct: 127,
        col: [
          [255, 160, 0],
          [0, 0, 0],
          [0, 0, 0],
        ],
        fx: 115,
        sx: 128,
        ix: 128,
        pal: 46,
        sel: true,
        rev: false,
        mi: false,
      },
    ],
  },
  error: {
    on: true,
    bri: 48,
    transition: 7,
    ps: -1,
    pl: -1,
    nl: {
      on: false,
      dur: 60,
      mode: 1,
      tbri: 0,
      rem: -1,
    },
    udpn: {
      send: true,
      recv: true,
    },
    lor: 0,
    mainseg: 0,
    seg: [
      {
        id: 0,
        start: 0,
        stop: 221,
        len: 221,
        grp: 1,
        spc: 0,
        of: 0,
        on: true,
        frz: false,
        bri: 255,
        cct: 127,
        col: [
          [255, 0, 68],
          [0, 0, 0],
          [0, 0, 0],
        ],
        fx: 115,
        sx: 128,
        ix: 128,
        pal: 3,
        sel: true,
        rev: false,
        mi: false,
      },
    ],
  },
  success: {
    on: true,
    bri: 48,
    transition: 7,
    ps: -1,
    pl: -1,
    nl: {
      on: false,
      dur: 60,
      mode: 1,
      tbri: 0,
      rem: -1,
    },
    udpn: {
      send: true,
      recv: true,
    },
    lor: 0,
    mainseg: 0,
    seg: [
      {
        id: 0,
        start: 0,
        stop: 221,
        len: 221,
        grp: 1,
        spc: 0,
        of: 0,
        on: true,
        frz: false,
        bri: 255,
        cct: 127,
        col: [
          [8, 255, 0],
          [0, 0, 0],
          [0, 0, 0],
        ],
        fx: 115,
        sx: 128,
        ix: 128,
        pal: 3,
        sel: true,
        rev: false,
        mi: false,
      },
    ],
  },
  pieces4: {
    on: true,
    bri: 36,
    transition: 7,
    ps: -1,
    pl: -1,
    nl: {
      on: false,
      dur: 60,
      mode: 1,
      tbri: 0,
      rem: -1,
    },
    udpn: {
      send: true,
      recv: true,
    },
    lor: 0,
    mainseg: 0,
    seg: [
      {
        id: 0,
        start: 0,
        stop: 221,
        len: 221,
        grp: 1,
        spc: 0,
        of: 0,
        on: true,
        frz: false,
        bri: 255,
        cct: 127,
        col: [
          [8, 0, 255],
          [0, 0, 0],
          [0, 0, 0],
        ],
        fx: 0,
        sx: 128,
        ix: 128,
        pal: 0,
        sel: false,
        rev: false,
        mi: false,
      },
      {
        id: 1,
        start: 20,
        stop: 25,
        len: 5,
        grp: 1,
        spc: 0,
        of: 0,
        on: true,
        frz: false,
        bri: 255,
        cct: 127,
        col: [
          [255, 255, 0],
          [0, 0, 0],
          [0, 0, 0],
        ],
        fx: 0,
        sx: 128,
        ix: 128,
        pal: 26,
        sel: true,
        rev: false,
        mi: false,
      },
      {
        id: 2,
        start: 70,
        stop: 80,
        len: 5,
        grp: 1,
        spc: 0,
        of: 0,
        on: true,
        frz: false,
        bri: 255,
        cct: 127,
        col: [
          [255, 255, 0],
          [0, 0, 0],
          [0, 0, 0],
        ],
        fx: 0,
        sx: 128,
        ix: 128,
        pal: 26,
        sel: true,
        rev: false,
        mi: false,
      },
      {
        id: 3,
        start: 110,
        stop: 115,
        len: 5,
        grp: 1,
        spc: 0,
        of: 0,
        on: true,
        frz: false,
        bri: 255,
        cct: 127,
        col: [
          [255, 255, 0],
          [0, 0, 0],
          [0, 0, 0],
        ],
        fx: 0,
        sx: 128,
        ix: 128,
        pal: 26,
        sel: true,
        rev: false,
        mi: false,
      },
      {
        id: 4,
        start: 180,
        stop: 185,
        len: 5,
        grp: 1,
        spc: 0,
        of: 0,
        on: true,
        frz: false,
        bri: 255,
        cct: 127,
        col: [
          [255, 255, 0],
          [0, 0, 0],
          [0, 0, 0],
        ],
        fx: 0,
        sx: 128,
        ix: 128,
        pal: 26,
        sel: true,
        rev: false,
        mi: false,
      },
    ],
  },
};

const setState = async (state) => {
  const response = await fetch(`${LIGHTS_URL}/json/state`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(states[state]),
  });
  const result = await response.json();
  console.log(result);
};


const init = () => {
  setState('default');
  
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
