<template lang="pug">
  section.hero.is-fullheight.is-success
    .bg-container
      .bg-cover(
        :class="this.bgHero",
        :style="this.bgImageProperty"
      )
    .hero-head
      nav.navbar(role="navigation", aria-label="main navigation")
        .container
          .navbar-brand
            router-link.navbar-item(to="/")
              p: strong.has-text-white PlatziMusic
            a.navbar-burger.burger(
              :class="{'is-active': this.navbarMenuActive}",
              role="button",
              aria-label="menu",
              aria-expanded="false",
              data-target="navbarMenuHeroA",
              @click="burgerActive",
            )
              span(aria-hidden="true")
              span(aria-hidden="true")
              span(aria-hidden="true")

          .navbar-menu(:class="{'is-active': this.navbarMenuActive}", id="navbarMenuHeroA")
            .navbar-end
              router-link.navbar-item(
                :class="{ 'is-active': this.$route.name === 'search' }",
                to="/"
              ) Home
              router-link.navbar-item(
                :class="{ 'is-active': this.$route.name === 'about' }",
                to="/about"
              ) Sobre el proyecto

    .hero-body
      .container.has-text-centered
        h1.title Platzi Music
        h2.subtitle Canciones que estan Vue-nisimas
        pmPlayer
</template>

<script>
import pmPlayer from "@/components/Player.vue";
import { mapState } from "vuex";

export default {
  name: "Header",

  data () {
    return {
      navbarMenuActive: false
    };
  },
  computed: {
    ...mapState(["track"]),
    bgHero: function () {
      return {
        "is-success": Object.keys(this.track).length === 0,
        "bg-cover": Object.keys(this.track).length > 0
      }
    },
    bgImageProperty: function () {
      if (Object.keys(this.track).length !== 0) {
        let cover = this.track.album.images[0].url;
        if (cover !== "") return { backgroundImage: `url(${cover})` };
      }

      return { backgroundImage: "none" };
    }
  },

  methods: {
    burgerActive () {
      this.navbarMenuActive
        ? (this.navbarMenuActive = false)
        : (this.navbarMenuActive = true);
    }
  },

  components: {
    pmPlayer
  }
};
</script>

<style lang="scss" scoped>
.bg-container {
  position: absolute;
  z-index: 0;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
}

.bg-cover {
  height: 110%;
  width: 110%;
  transform: translate(-5%, -5%);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  filter: blur(8px) brightness(0.25);
}
#navbarMenuHeroA {
  position: absolute;
  left: 0;
  right: 0;
}
</style>
