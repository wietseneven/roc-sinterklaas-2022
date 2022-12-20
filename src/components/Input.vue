<template>
  <div>
    <label :htmlFor="name">{{ label }}</label>
    <input 
      :type="type"
      :id="name"
      autofocus 
      class="input" 
      v-model="value" 
      :placeholder="placeholder" 
    />
  </div>
</template>

<script>
  export default {
    name: 'Input',
    props: {
      name: String,
      label: String,
      placeholder: String,
      type: String,
    },
    data() {
      return {
        value: '',
      }
    },
    watch: {
      value() {
        this.$emit('input', this.value);
      },
    }
  }
</script>

<style scoped>
.label {
  font-size: 2em;
  margin-bottom: 100px;
}
.input {
  width: 100%;
  font-family: var(--font-sans);
  font-weight: bold;
  text-transform: uppercase;
  font-size: 2rem;
  padding: 0.5em 0.5em;
  box-sizing: border-box;
  margin-bottom: 0.5em;
}
</style>