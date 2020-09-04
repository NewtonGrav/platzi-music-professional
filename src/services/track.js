import platziMusicService from "./platzi-music"
import services from "./spotify-services";

const trackService = {}

trackService.searching = function (q) {
  return services.searchTracks(q)
}

trackService.getById = function (id) {
  return platziMusicService.get(`/tracks/${id}`)
    .then((res) => res.data)
}

export default trackService
