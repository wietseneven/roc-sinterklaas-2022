<template>
  <div>
    <Logo />
    <select-username
      @input="onUsernameSelection"
      :message="latestMessage"
    />
  </div>
</template>

<script>
import socket from "../socket";
import Logo from '../components/Logo';
import SelectUsername from "../components/SelectUsername";

export default {
  name: "Login",
  components: {
    Logo,
    SelectUsername,
  },
  data() {
    return {
      latestMessage: '',
      transitioning: false,
    };
  },
  methods: {
    onUsernameSelection(username) {
      // this.usernameAlreadySelected = true;
      socket.emit("username submit", username);
      // socket.auth = { username };
      // socket.connect();
    },
  },
  created() {
    // socket.on("connect_error", (err) => {
    //   if (err.message === "invalid username") {
    //     this.usernameAlreadySelected = false;
    //   }
    // });
    socket.on("username error", ({ message }) => {
      this.latestMessage = message;
      setTimeout(() => this.latestMessage = '', 4000);
    });
    socket.on("username success", ({ message }) => {
      this.latestMessage = message;
    });
  },
  // mounted() {
  //   this.vantaEffect = FOG({
  //     el: this.$refs.vantaRef,
  //     THREE,
  //     ...fogColors.neutral,
  //   });
  //   this.transitionTimeout = undefined;
  // },
  // destroyed() {
  //   if (this.vantaEffect) {
  //     this.vantaEffect.destroy()
  //   }
  // },
}
</script>