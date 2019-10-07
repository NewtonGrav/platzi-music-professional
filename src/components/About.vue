<template lang="pug">
  .container
    h1.title.has-text-centered Sobre el proyecto

    section.section
      h2.subtitle.is-4 Herramientas utilizadas
      
      .columns.is-multiline.is-desktop
        .column.is-12.has-text-centered(style="margin-bottom:40px;")
          h2.subtitle.has-text-success.is-5 Ecosistema Vue.js
          .columns
            .column
              .content
                h2.subtitle.is-6: a(href="https://vuex.vuejs.org/" target="_blank") Vuex
                p Biblioteca basada en Flux (Patron de diseño) que permite controlar el estado de nuestras aplicaciones proporcionando un store único para todos los componentes de la misma.
            .column
              .content
                h2.subtitle.is-6: a(href="https://nuxtjs.org/" target="_blank") Nuxt
                p Permite realizar SSR (Server-Side Rendering) de nuestra aplicación y generar paginas completamente estáticas
            .column
              .content
                h2.subtitle.is-6: a(href="https://router.vuejs.org" target="_blank") Vue router
                p Permite la gestion de las URLs y sus componentes enlazandolos a estas, es decir, que proporciona el medio para crear una SPA (Sinlge Page Application)
        .column.is-12.has-text-centered
          h2.subtitle.has-text-success.is-5 Herramientas DB (Developer Experience)
          .columns
            .column
              .content
                  h2.subtitle.is-6 Webpack
                  p Module Bundle que se encarga de procesar todos los archivos del proyecto (js, css, imágenes) y generar un único (o muy pocos) archivo de salida.
            .column
              .content
                  h2.subtitle.is-6 Babel
                  p Permite transformar y compilar código ES2015 (en adelante) a código equivalente ES5.
            .column
              .content
                  h2.subtitle.is-6 Pug
                  p Template engine que mejora la legibilidad, la productividad y las funcionalidades al escribir HTML.
</template>

<script>
export default {
  name: "About"
};
</script>

<style lang="scss" scoped>
li {
  list-style: none;
  display: inline-block;
}

.title {
  margin-top: 32px;
}

.border {
  border-left: 1px solid #b8b8b888;
  border-right: 1px solid #b8b8b888;
}
</style>