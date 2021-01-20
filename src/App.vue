<template>
  <div id="app">
    <app-header></app-header>
    <router-view />
    <app-footer></app-footer>
  </div>
</template>
<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Home",
  components: {
    AppHeader: Header,
    AppFooter: Footer
  }
};
</script>
<style lang="scss">
@import "../scss_files/custom-bootstrap.scss";
@import "../scss_files/custom-vue-bootstrap.scss";
@import "../scss_files/global.scss";
</style>
