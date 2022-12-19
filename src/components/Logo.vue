<template>
  <div>
    <p class="eyebrow">BuROC</p>
    <h1 class="title">Sintekersteklaas</h1>
  </div>
</template>

<style scoped>
.eyebrow {
  align-items: center;
  display: flex;
  font-size: 2rem;
  gap: 0.2em;
  justify-content: center;
  margin-bottom: 0;
  text-align: center;
}

.eyebrow::before,
.eyebrow::after {
  background-color: currentColor;
  content: "";
  display: inline-block;
  height: 2px;
  width: 1em;
}

.title {
  --color-stroke: var(--color-gold);

  text-align: center;
  font-family: var(--font-cursive);
  font-style: italic;
  font-size: clamp(2rem, 16vw, 10rem);
  line-height: 1;
  margin-top: 0;
  text-shadow:
   -1px -1px 0 var(--color-stroke),  
    1px -1px 0 var(--color-stroke),
    -1px 1px 0 var(--color-stroke),
     7px 1px 0 var(--color-stroke);
  transform: translateX(-0.5em);
}
</style>