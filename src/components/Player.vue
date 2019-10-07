<template lang="pug">
  .content(v-if="this.track.album")
    p.is-128-128
      a(:href="this.track.external_urls.spotify",target="_blank")
        img.is-rounded(:src="track.album.images[1].url")
    p
      strong {{ this.track.name }}
      br
      small {{ this.track.duration_ms | ms-to-mm }}
    p: audio(controls, :src="this.track.preview_url")
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Player",

  computed: {
    ...mapState(["track"])
  }
};
</script>

<style lang="scss" scoped>
img {
  border-radius: 50%;
}
</style>
