<template lang="pug">
  #app
    pmHeader

    router-view
    
    pmFooter
</template>

<script src="https://kit.fontawesome.com/d2245fc5a9.js"></script>
<script>
import pmFooter from "@/components/layout/Footer.vue";
import pmHeader from "@/components/layout/Header.vue";

export default {
  name: "App",
  components: {
    pmFooter,
    pmHeader
  }
};
</script>

<style lang="scss">
@import "./src/scss/main.scss";
</style>
