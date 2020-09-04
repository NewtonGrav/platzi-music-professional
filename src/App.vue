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

import spotifyServices from "./services/spotify-services";

export default {
  name: "App",
  components: {
    pmFooter,
    pmHeader
  },
  created() {
    spotifyServices.getTokenResponse()
      .then(res => res.json())
      .then(json => localStorage.setItem("token", json.access_token))
  }
};
</script>

<style lang="scss">
@import "./src/scss/main.scss";
</style>
