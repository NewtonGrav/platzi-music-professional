<template lang="pug">
  .container
    h1.title.has-text-centered Detalles de canción
  
    .columns(v-if="this.track.album")
      .column.is-3
        .card
          .card-image
            figure.image.is-1by1: img(:src="track.album.images[0].url")
          .card-content
            .content 
              button.is-fullwidth.button.is-success.level-item(@click="selectTrack")
                span.icon: font-awesome-icon(icon="play" size="sm")
                
      .column.is-8
        .panel
          .panel-heading
            h1.title.is-4 {{ getTrackTitle.song   }}
            h2.subtitle {{ getTrackTitle.artist }}
          .panel-block
            span.icon: font-awesome-icon(icon="clock")
            span &nbsp;
            span {{ this.track.duration_ms | ms-to-mm}} 
          .panel-block
            span.icon: font-awesome-icon(icon="compact-disc")
            span &nbsp;
            a(:href="this.track.external_urls.spotify" target="_blank") {{ this.track.album.name }}
          .panel-block
            span.icon: font-awesome-icon(icon="thumbs-up")
            span &nbsp;
            span {{ this.track.popularity }}
          .panel-block
            span.icon: font-awesome-icon(icon="file-audio")
            span &nbsp;
            span {{ this.track.id }}

</template>

<script>
import trackMixin from "@/mixins/track";
import { mapState, mapActions, mapGetters } from "vuex";

export default {
  name: "TrackDetails",

  mixins: [trackMixin],

  created () {
    const ID = this.$route.params.idTrack;

    if (!this.track || !this.track.id || this.track.id !== ID) {
      this.getTrackById({ id: ID }).then(() => console.log("Track loader."));
    }
  },

  computed: {
    ...mapState(["track"]),
    ...mapGetters(["getTrackTitle"])
  },

  methods: {
    ...mapActions(["getTrackById"])
  }
};
</script>

<style lang="scss" scoped>
.column {
  margin: 16px auto;
}

.title {
  margin-top: 32px;
}
</style>
