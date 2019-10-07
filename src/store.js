import Vue from "vue"
import Vuex from "vuex"

import trackService from "@/services/track"

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    track: {},
    tracks: []
  },

  getters: {
    getTrackTitle(state) {
      if (!state.track || !state.track.artists) {
        return ""
      }
      return {
        song: state.track.name,
        artist: state.track.artists[0].name
      }
    }
  },

  mutations: {
    setTrack(state, track) {
      state.track = track
    },
    setTracks(state, payload) {
      state.tracks = payload.tracks
    }
  },

  actions: {
    getTrackById(context, payload) {
      return trackService.getById(payload.id)
        .then((res) => {
          context.commit("setTrack", res)
          return res
        })
    }
  }
})

export default store