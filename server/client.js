// import { io } from "socket.io-client";
const { io } = require("socket.io-client");
const axios = require("axios");

// const URL = "https://api.sinterklaas2022.mediavormgever.online";
const URL = "http://localhost:3000";
const LIGHTS_URL = "http://192.168.1.199";
const socket = io(URL, {
  autoConnect: true,
  auth: { username: "client-server" },
});

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
  resetSegments: {
    seg: [
      {
        start: 0,
        stop: 221,
        sel: true,
      },
    ],
    v: true,
    time: 1671488036,
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

let jumpInterval;

const setState = async (state, customState) => {
  const response = await axios.post(
    `${LIGHTS_URL}/json/state`,
    customState || states[state]
  );
  console.log(response.data);
};

const resetSegments = async () => {
  const { data } = await axios.get(`${LIGHTS_URL}/json`);
  if (!data.state?.seg) return;
  const newState = { ...states.resetSegments };
  data.state.seg.forEach((seg, index) => {
    if (index < 1) return;
    newState.seg.push({ stop: 0 });
  });
  await axios.post(`${LIGHTS_URL}/json/state`, newState);
};

const createSegments = (nSegments) => {
  const groupSize = 5;
  const nLeds = 221;
  const demoNLeds = nLeds / (groupSize + 1);

  var arr = [];
  while (arr.length < nSegments) {
    var r = Math.floor(Math.random() * demoNLeds) + 1;
    if (
      arr.indexOf(r) === -1 &&
      arr.indexOf(r - 1) === -1 &&
      arr.indexOf(r + 1) === -1
    )
      arr.push(r);
  }

  const result = arr.sort().map((startBase) => {
    const start = startBase * groupSize;
    const stop = start + groupSize;
    return { start, stop, len: groupSize };
  });

  return result;
};

const init = async () => {
  setState("default");
  resetSegments();

  createSegments(2);

  socket.onAny((event, ...args) => {
    console.log(event, args);
  });

  socket.io.on("connection", () => {});

  socket.io.on("error", (error) => {
    // ...
    console.error(error);
  });

  socket.on("user connected", (message) => {
    console.log({ message });
  });

  socket.on("private message", ({ content, to }) => {
    console.log({ content, to });
  });

  socket.on("error", async (response) => {
    const after = response?.after;
    let prevState;
    if (after === "prevState") {
      const { data } = await axios.get(`${LIGHTS_URL}/json`);
      prevState = data.state;
    } else {
      clearInterval(jumpInterval);
    }
    setState("error");
    setTimeout(() => {
      setState("default", prevState);
    }, 4500);
  });

  socket.on("success", async (response) => {
    const after = response?.after;
    let prevState;
    if (after === "prevState") {
      const { data } = await axios.get(`${LIGHTS_URL}/json`);
      prevState = data.state;
    } else {
      clearInterval(jumpInterval);
    }
    setState("success");
    setTimeout(() => {
      setState("default", prevState);
    }, 4500);
  });

  const setSegementedLight = (data) => {
    const segments = createSegments(data.lights);

    const newState = { ...states.pieces4, seg: [states.pieces4.seg[0]] };
    segments.forEach((segment, index) => {
      newState.seg.push({
        ...states.pieces4.seg[1],
        ...segment,
        id: index + 1,
      });
    });
    setState("custom", newState);
  }

  socket.on("lights", (data) => {
    clearInterval(jumpInterval);
    setSegementedLight(data);

    if (data.jump) {
      jumpInterval = setInterval(() => {
        setSegementedLight(data);
      }, data.jump);
    }
  });

  // export default socket;
  console.log("asf");
};

init();
