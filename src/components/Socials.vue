<script setup lang="ts">

</script>

<template>
  <section id="socials">
    <img src="../assets/Facebook.svg" />
    <img src="../assets/Instagram.svg" />
  </section>
</template>

<style scoped>
#socials {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  grid-column-start: -1;
  grid-row: 12;
  margin-right: 0.5rem;
}

img {
  margin: 0.5rem;
  width: 100%;
  max-width: 4.25rem;
  height: auto;
}

</style>