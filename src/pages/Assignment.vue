<template>
  <div>
    <Logo />
    <Container>
      <img src="/images/s.svg" width="100" height="100" alt="" />
      <div v-if="level?.type === 'quiz'">
        <h2>Opdracht {{ level.id }}</h2>
        <p>Hoeveel lampjes branden er in jouw S?</p>
        <form @submit.prevent="onSubmit">
          <Input 
            type="number" 
            name="result" 
            placeholder="Hoeveel lampjes zijn geel?"
            @input="(newValue) => { result = newValue }"
          />
          <button class="button">Verstuur</button>
        </form>
      </div>
      <div v-if="level?.type === 'message'">
        <h2>Bericht van de Sint</h2>
        <p>{{ level.content }}</p>
        <router-link v-if="level.action === 'next'" class="button" :to="`/opdracht/${level.id + 1}`">Ga verder</router-link>
      </div>
    </Container>
  </div>
</template>

<script>
import Container from '../components/Container';
import Logo from '../components/Logo';
import Input from '../components/Input';

import socket from '../socket';

const levels = {
  "1": {
    id: 1,
    lights: 5,
    type: 'quiz',
  },
  "2": {
    id: 2,
    lights: 8,
    type: 'quiz',
  },
  "3": {
    id: 3,
    lights: 4,
    jump: 2000,
    type: 'quiz',
  },
  "4": {
    id: 4,
    type: 'message',
    content: 'Goed gedaan! Kijk eens in het middelste keukenkastje?',
    state: 'success',
    action: 'next'
  },
  "5": {
    id: 5,
    type: 'quiz',
    lights: 6,
    jump: 1000
  },
  "6": {
    id: 6,
    type: 'quiz',
    lights: 9,
    jump: 800
  },
  "7": {
    id: 7,
    type: 'message',
    state: "success",
    content: 'Goed gedaan! Vraag Wietse om de hoofdprijs :-) –einde–',
  }
}

export default {
  name: "Assignment",
  components: {
    Container,
    Logo,
    Input,
  },
  data() {
    return {
      result: '',
      level: levels[0],
    }
  },
  methods: {
    onSubmit() {
      if (this.result == this.level.lights) {
        socket.emit("success", { after: "prevState" });
        this.$router.push({ path: `/opdracht/${this.level.id + 1}` });
      } else {
        socket.emit("error", { after: "prevState" });
      }
    },
  },
  mounted() {
    this.level = levels[this.$route.params.id];
    console.log('here', this.level);
    if (this.level.type === 'quiz') {
    socket.emit("lights", this.level);
    } else if (this.level.state) {
      socket.emit(this.level.state, {});
    }
  }
}
</script>

<style>
.button {
    color: #fff;
    background-color: transparent;
    font-family: inherit;
    font-size: inherit;
    border: 1px solid #fff;
    padding: 0.5em;
    margin: 0.5em 0;
    display: block;
    text-align: center;
    width: 100%;
    box-sizing: border-box;
  }
</style>