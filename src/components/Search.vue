<template lang="pug">
  main

    pmNavbar(@search="searchTracks")

    //- TODO Tiempo limite al loading
    transition-group(name="move" mode="out-in" tag="section")
      pmLoader(v-show="this.isLoading", key="loader")

      pmNotification(v-show="foundTracksNotification", state="is-success", key="notifi-is-success")
        p(slot="body") Se encotraron {{ this.totalTracks }} tracks

      pmNotification(v-show="noTracksNotification", state="is-danger", key="notifi-is-danger")
        p(slot="body") No se encontraron resultados para 
            span: strong {{this.searchQuery}}

      pmNotification(v-show="noQuery", state="is-info", key="notifi-is-info")
        p(slot="body") Ingresa algo para escuchar :)

    section.section(v-show="!this.isLoading")
      .grid
        pmTrack(
          v-for="t in this.tracks",
          v-blur="t.preview_url",
          :class="{'is-active': t.id === track.id}",
          :track="t",
          :key="t.id"
        )
</template>

<script>
import { setTimeout } from "timers";
import trackService from "@/services/track.js";
import pmTrack from "@/components/Track.vue";
import pmNavbar from "@/components/Navbar.vue";
import pmLoader from "@/components/shared/Loader.vue";
import pmNotification from "@/components/shared/Notification.vue";
import { mapState } from "vuex";

export default {
  name: "app",

  components: {
    pmNavbar,
    pmTrack,
    pmLoader,
    pmNotification
  },

  data () {
    return {
      totalTracksFound: 0,
      searchQuery: "",
      isLoading: false,
      noTracksNotification: false,
      foundTracksNotification: false,
      noQuery: false
    };
  },

  computed: {
    ...mapState(["track", "tracks"]),

    totalTracks () {
      return this.totalTracksFound;
    }
  },

  watch: {
    noTracksNotification () {
      if (this.noTracksNotification) {
        setTimeout(() => (this.noTracksNotification = false), 3000);
      }
    },
    foundTracksNotification () {
      if (this.foundTracksNotification) {
        setTimeout(() => (this.foundTracksNotification = false), 3000);
      }
    },
    noQuery () {
      if (this.noQuery) {
        setTimeout(() => (this.noQuery = false), 3000);
      }
    }
  },

  methods: {
    searchTracks (search) {
      if (!search) {
        this.noQuery = true;
        return;
      }

      this.searchQuery = search;

      this.isLoading = true;

      trackService.searching(search).then(res => {
        res.tracks.total === 0
          ? (this.noTracksNotification = true)
          : (this.foundTracksNotification = true);

        if (res.tracks.total === 0) {
          this.noTracksNotification = true;
        } else {
          this.foundTracksNotification = true;
          this.$store.commit("setTracks", { tracks: res.tracks.items });
          this.totalTracksFound = this.tracks.length;
        }

        this.isLoading = false;
      });
    }
  }
};
</script>

<style lang="scss">
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 16px;
}

.is-active {
  border: 2px solid #23d160;
}
</style>
