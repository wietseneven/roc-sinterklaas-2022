<template>
  <div>
    <Logo />
    <Container>
      <img src="/images/s.svg" width="200" height="200" alt="" />
      <p>Hoeveel lampjes branden er in jouw S?</p>

    </Container>
  </div>
</template>

<script>
import Container from '../components/Container';
import Logo from '../components/Logo';
import socket from '../socket';

export default {
  name: "Assignment",
  components: {
    Container,
    Logo,
  },
  mounted() {
    switch (this.$route.params.id) {
      case "1": {
        console.log('here');
        socket.emit("lights", 5);
      }
    }
  }
}
</script>