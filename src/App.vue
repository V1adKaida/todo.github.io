<template>
  <router-view />
  <notifications position="bottom right" />
</template>

<script>

export default {

  mounted() {
    this.$store.dispatch('state')
  }
}
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;600;700&display=swap');

body {
  margin: 0;
  background-image: url(https://uploads-ssl.webflow.com/5f00ac7516929863f832df2c/5f4bfbcbb2f92145c5b96518_06.%20Wisteria.jpg);
  background-position: 50% 50%;
  background-size: cover;
  background-attachment: fixed;
  font-family: 'Rubik', sans-serif;
  overflow-x: hidden;
}

* {
  box-sizing: border-box;

  &:focus {
    box-shadow: none;
    outline: none;
  }
}
</style>
