<template>
  <div :class="{ transitioning: transitioning }" ref="vantaRef" id="app">
    <transition :name="transitionName">
      <router-view :key="$route.path"></router-view>
    </transition>
  </div>
</template>

<script>
import FOG from 'vanta/dist/vanta.fog.min';
import * as THREE from 'three'
import socket from "./socket";

const fogColors = {
  neutral: {
    highlightColor: 0x4f066e,
    midtoneColor: 0x250f0b,
    lowlightColor: 0x0,
    baseColor: 0x0,
    speed: 1.2,
  },
  negative: {
    highlightColor: 0xff0000,
    midtoneColor: 0x370900,
    lowlightColor: 0x0,
    baseColor: 0x0,
    speed:4,
  },
  positive: {
    highlightColor: 0xfff00,
    midtoneColor: 0x48ff,
    lowlightColor: 0xcca4b,
    baseColor: 0x727272,
    speed:4,
  }
}

export default {
  name: "App",
  data() {
    return {
      transitioning: false,
      transitionName: 'slide-left',
    };
  },
  watch: {
    '$route' (to, from) {
      const toDepth = to.path.split('/').length
      const fromDepth = from.path.split('/').length
      this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
    }
  },
  methods: {
    onUsernameSelection(username) {
      // this.usernameAlreadySelected = true;
      socket.emit("username submit", username);
      // socket.auth = { username };
      // socket.connect();
    },
    transitionVanta(effect) {
      clearTimeout(this.transitionTimeout);
      this.transitioning = true;
      this.transitionTimeout = setTimeout(() => {
        this.transitioning = false;
        this.vantaEffect.setOptions({
          ...fogColors[effect],
        });
        if (effect === 'negative') {
          this.transitionTimeout = setTimeout(() => {
            this.transitionVanta('neutral');
          }, 2500);
        }
      }, 1500);
    },
  },
  created() {
    socket.on("connect_error", (err) => {
      if (err.message === "invalid username") {
        this.usernameAlreadySelected = false;
      }
    });
    socket.on("username error", () => {
      this.transitionVanta('negative');
    });
    socket.on("username success", () => {
      this.transitionVanta('positive');
      setTimeout(() => this.$router.push({ path: 'home' }), 6000);
    });
  },
  mounted() {
    this.vantaEffect = FOG({
      el: this.$refs.vantaRef,
      THREE,
      ...fogColors.neutral,
    });
    this.transitionTimeout = undefined;
  },
  destroyed() {
    socket.off("connect_error");
    if (this.vantaEffect) {
      this.vantaEffect.destroy()
    }
  },
};
</script>

<style>
@import url("https://use.typekit.net/nfd4yqx.css");

:root {
  --font-cursive: reklame-script, sans-serif;
  --font-sans: atrament-web, sans-serif;

  --color-black: #000;
  --color-white: #fff;
  --color-purple: rgb(75,10,106);
  --color-purple-transparent: rgba(75,10,106, 0.9);
  --color-gold: rgb(169,155,0);
}

html {
  background-color: var(--color-black);
  color: var(--color-white);
}

body {
  margin: 0;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

#app {
  font-family: var(--font-sans);
  min-height: 100vh;
}

.vanta-canvas {
  transition: opacity 1.4s;
  z-index: -1 !important;
  position: fixed !important;
  inset: 0;
}

.transitioning .vanta-canvas {
  opacity: 0;
}

.slide-left-enter-active,
.slide-left-leave-active {
  transition: all 2.5s ease;
}

.slide-left-enter-active {
  transition-delay: 1.5s;
}

.slide-left-enter-from,
.slide-left-enter,
.slide-left-leave-to {
  opacity: 0;
  transform: translateY(2rem) scale(0.8);
}
</style>
