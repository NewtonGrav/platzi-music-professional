import Vue from "vue"
import App from "@/App.vue"
// Plugin
import EventBus from "@/plugins/event-bus"
// Filters
import msToMm from "@/filters/ms-to-mm"
// Directives
import blur from "@/directives/blur"
// Vue router y routes
import VueRouter from "vue-router"
import routes from "@/routes"
// Vuex
import store from "@/store"
// FontAwesome
import {
  library
} from "@fortawesome/fontawesome-svg-core"
import {
  faSearch,
  faPlay,
  faInfo,
  faCompactDisc,
  faClock,
  faThumbsUp,
  faFileAudio
} from "@fortawesome/free-solid-svg-icons"
import {
  FontAwesomeIcon
} from "@fortawesome/vue-fontawesome"

library.add(faCompactDisc)
library.add(faFileAudio)
library.add(faThumbsUp)
library.add(faClock)
library.add(faPlay)
library.add(faInfo)
library.add(faSearch)

Vue.component("font-awesome-icon", FontAwesomeIcon)

Vue.use(EventBus)
Vue.use(msToMm)
Vue.use(blur)
Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  mode: "history"
})

new Vue({
  render: h => h(App),
  router,
  store
}).$mount("#app")
