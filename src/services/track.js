import spotify from "./spotify-services";

const trackService = {}

trackService.searching = function (q) {
  return spotify.searchTracks(q)
}

trackService.getById = function (id) {
  return spotify.searchTrackById(id)
}

export default trackService
