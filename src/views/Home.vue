<template>
  <div class="home">
    <pizza-list></pizza-list>
  </div>
</template>

<script>
// @ is an alias to /src
import PizzaList from "@/components/PizzaList.vue";

export default {
  name: "Home",
  components: {
    PizzaList
  }
};
</script>
