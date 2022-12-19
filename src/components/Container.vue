<template>
  <div class="container">
    <slot />
  </div>
</template>

<script>
export default {
  name: "Container",
}
</script>

<style scoped>
  .container {
    width: min(90%, 500px);
    margin-inline: auto;
    font-size: 1.2rem;
    padding-bottom: 4rem;
  }
</style>