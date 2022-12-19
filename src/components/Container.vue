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
    font-size: 1.5rem;
    padding-bottom: 4rem;
    font-family: ff-providence-web-pro, sans-serif;
  }

  .container img {
    height: auto;
    max-width: 100%;
    margin: 0 auto;
    display: block;
  }
</style>