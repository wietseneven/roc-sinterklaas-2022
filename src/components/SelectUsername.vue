<template>
  <div class="select-username">
    <TransitionGroup class="transition-group" name="form" tag="div">
      <p class="message" key="message" v-if="message">
        {{ message }}
      </p>
      <form key="form" v-else class="form" @submit.prevent="onSubmit">
        {{ message }}
        <label class="label" for="username">Wat is jouw voornaam?</label>
        <input autocomplete="given-name" id="username" autofocus class="input" v-model="username" placeholder="Jouw voornaam..." />
        <button class="button" :disabled="!isValid">Verstuur</button>
      </form>
    </TransitionGroup>
  </div>
</template>

<script>
export default {
  name: "SelectUsername",
  data() {
    return {
      username: "",
    };
  },
  props: ['message'],
  computed: {
    isValid() {
      return this.username.length > 2;
    },
  },
  methods: {
    onSubmit() {
      this.$emit("input", this.username);
    },
  },
};
</script>

<style scoped>
.select-username {
  margin: 20vh auto;
  width: 90%;
}

.message {
  position: absolute;
  top: 0;
  font-size: 4rem;
  text-align: center;
  left: 0;
  right: 0;
  margin: 0;
}

.form {
  max-width: 500px;
  margin-inline: auto;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
}

.label {
  font-size: 2em;
  margin-bottom: 100px;
}
.input {
  width: 100%;
  font-family: var(--font-sans);
  font-weight: bold;
  text-transform: uppercase;
  font-size: 2em;
  padding: 0.5em 0.5em;
  box-sizing: border-box;
  margin-bottom: 0.5em;
}

.button {
  font-size: 2em;
  padding: 0.5em 0.5em;
  font-family: var(--font-sans);
  font-weight: bold;
  text-transform: uppercase;
}

.transition-group {
  min-height: 220px;
  position: relative;
  width: 100%;
}

.form-enter-active,
.form-leave-active {
  transition: all 2.5s ease;
}

.form-enter-active {
  transition-delay: 1.5s;
}

.form-enter-from,
.form-enter,
.form-leave-to {
  opacity: 0;
  transform: translateY(2rem) scale(0.8);
}
</style>
