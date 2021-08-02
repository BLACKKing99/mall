<template>
  <div>
    <cart-list-item
      v-for="(item, index) in $store.state.cartList"
      :key="index"
      :product="item"
      class="cart-list-item"
    ></cart-list-item>
  </div>
</template>

<script>
import CartListItem from "./CartListItem.vue";

import { mapGetters } from "vuex";

export default {
  components: {
    CartListItem,
  },
  computed: {
    // ...mapGetters(['cartList'])
  },
};
</script>

<style scoped>
</style>