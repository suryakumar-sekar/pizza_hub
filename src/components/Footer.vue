<template>
  <footer class="footer fixed-bottom">
    <p>Copyright 2021, Pizza hub</p>
  </footer>
</template>

<script>
export default {
  name: "footer"
};
</script>

<style lang="scss">
.footer {
  background-color: #17a2b8;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  p {
    margin: 0;
  }
}
</style>
