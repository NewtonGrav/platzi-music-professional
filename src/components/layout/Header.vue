<template lang="pug">
  section.hero.is-success.is-medium.is-primary
    .hero-head
      nav.navbar(role="navigation", aria-label="main navigation")
        .container
          .navbar-brand
            .navbar-item
              router-link(to="/")
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

export default {
  name: "Header",

  data () {
    return {
      navbarMenuActive: false
    };
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
#navbarMenuHeroA {
  position: absolute;
  left: 0;
  right: 0;
}
</style>
