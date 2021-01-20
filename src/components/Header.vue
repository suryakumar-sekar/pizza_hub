<template>
  <b-navbar type="dark" variant="info">
    <b-navbar-nav>
      <b-nav-item href="#" class="header-logo">Pizza Hub</b-nav-item>
    </b-navbar-nav>
  </b-navbar>
</template>

<script>
export default {
  name: "header"
};
</script>

<style lang="scss">
.header {
  &-logo {
    a {
      color: #ffffff !important;
      font-size: 20px;
    }
  }
}
</style>
