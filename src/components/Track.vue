<template lang="pug">
  .card(v-if="this.track.album")
    .card-image
      a(:href="this.track.external_urls.spotify", target="_blank")
        figure.image.is-1by1
          img(:src="track.album.images[0].url")
      
    .card-content
      .media
        .media-left
          figure.image.is-48x48
            img(:src="track.album.images[0].url")
        .media-content
          p.title.is-6: strong {{track.name}}
          p.subtitle.is-6 {{track.artists[0].name}}
      .columns.is-mobile
        .column 
          p.time-track {{track.duration_ms | ms-to-mm }}
        nav.column
          .level.is-mobile
              button.button.is-success.level-item(@click="selectTrack")
                span.icon: font-awesome-icon(icon="play" size="sm")
              button.button.is-info.is-outlined.level-item(@click="goToTrack(track.id)")
                span.icon: font-awesome-icon(icon="info"  size="sm" :style="{color: '$info'}")
                  
</template>

<script>
import trackMixin from "@/mixins/track";

export default {
  name: "Track",

  mixins: [trackMixin],

  props: {
    track: {
      type: Object,
      required: true
    }
  },

  methods: {
    goToTrack(id) {
      if (!this.track.preview_url) {
        return;
      }

      this.$router.push({ name: "track", params: { idTrack: id } });

      this.$store.commit("setTrack", this.track);
    }
  }
};
</script>

<style lang="scss" scoped>
.card:hover {
  box-shadow: 0 0 7px 1px hsla(0, 0%, 13%, 0.35);
}

.level-item {
  margin-left: 8px;
}

.time-track {
  margin: 8px 0;
}
</style>
