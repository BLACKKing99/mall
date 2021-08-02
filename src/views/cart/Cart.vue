<template>
  <div id="Cart">
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{ getCartListLength }})</div>
    </nav-bar>
    <scroll class="content">
      <cart-list></cart-list>
    </scroll>
    <cart-bottom-bar></cart-bottom-bar>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import Scroll from "@/components/common/scroll/Scroll.vue";

import CartList from "./childCart/CartList";
import CartBottomBar from "./childCart/CartBottomBar.vue";

import { mapGetters } from "vuex";
export default {
  name: "Cart",
  components: {
    NavBar,
    CartList,
    Scroll,
    CartBottomBar,
  },

  computed: {
    ...mapGetters(["getCartListLength"]),
  },
};
</script>

<style scoped>
.nav-bar {
  background-color: #ff5777;
}
.content {
  height: calc(100%- 49px - 44px -40px);
  /* position: absolute;
  top: 44px;
  left: 0;
  right: 0;
  bottom: 49px; */
}
</style>