import Search from "@/components/Search.vue"
import About from "@/components/About.vue"
import TrackDetails from "@/components/TrackDetails.vue"

const routes = [{
  path: "/",
  component: Search,
  name: "search"
}, {
  path: "/about",
  component: About,
  name: "about"
}, {
  path: "/track/:idTrack",
  component: TrackDetails,
  name: "track"
}]

export default routes