<template lang="pug">
  .content(v-if="this.track.album")
    div.image
      a(:href="this.track.external_urls.spotify",target="_blank")
        img.is-rounded(:src="track.album.images[1].url")
    p.song-details
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
.image {
  margin: 0 auto;
  width: 248px;
}
.song-details {
  margin-top: 16px;

  & strong {
    color: #20BC5B;
  }
}
</style>
