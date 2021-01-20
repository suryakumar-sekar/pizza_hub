<template>
  <div class="pizza">
    <div class="pizza-title">Pizza hub admin dashboard</div>
    <div class="pizza-list-table">
      <b-table
        hover
        striped
        head-variant="dark"
        :items="orderDetails"
        :fields="fields"
      >
        <template #cell(customerName)="data">
          {{ data.value }}
        </template>
        <template #cell(itemsOrdered)="data">
          {{ data.value }}
        </template>
        <template #cell(amount)="data">
          {{ data.value }}
        </template>
        <template #cell(status)="data">
          {{ data.value }}
        </template>
        <template #cell()="data">
          <button
            @click="changeStatus(data)"
            :disabled="data.item.status == 'Delivered'"
          >
            change status
          </button>
        </template>
      </b-table>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "pizza-list",
  data: () => {
    return {
      fields: ["customerName", "itemsOrdered", "amount", "status", "Action"]
    };
  },
  computed: {
    ...mapGetters(["orderDetails"])
  },
  methods: {
    ...mapActions(["changeOrderStatus"]),

    /**
     * function to change pizza order status
     */
    changeStatus(data) {
      this.changeOrderStatus(data.index);
    }
  }
};
</script>

<style lang="scss">
.pizza {
  &-list-table {
    padding: 20px;
  }
  &-title {
    padding: 20px;
  }
}
</style>
