<template>
  <div class="bottom-bar">
    <div class="service">
      <img src="~@/assets/img/cart/我的店铺客服.png" alt="" />
      <span>客服</span>
    </div>
    <div class="shopping">
      <img src="~@/assets/img/cart/店铺.png" alt="" />
      <span>店铺</span>
    </div>
    <div class="collect">
      <img src="~@/assets/img/cart/收藏.png" alt="" />
      <span>收藏</span>
    </div>
    <div class="shopcar" @click="shopcarClick">
      <span>加入购物车</span>
    </div>
    <div class="purchase" @click="purchaseClick">
      <span>购买</span>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    shopcarClick() {
      this.$emit("shopcarClick");
    },
    purchaseClick() {},
  },
};
</script>

<style scoped>
.bottom-bar {
  height: 49px;
  position: fixed;
  right: 0;
  left: 0;
  bottom: 0;
}
.bottom-bar {
  display: flex;
  justify-content: space-around;
}
.bottom-bar div {
  height: 100%;
  text-align: center;
}
.bottom-bar :nth-child(4) {
  background-color: yellow;
  line-height: 3rem;
}
.bottom-bar :nth-child(5) {
  background-color: pink;
  line-height: 3rem;
}
.service {
  flex: 0.5;
  font-size: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-self: center;
  cursor: pointer;
}
.shopping {
  flex: 0.5;
  font-size: 15px;
    display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-self: center;
  cursor: pointer;
}
.collect {
  flex: 0.5;
  font-size: 15px;
    display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-self: center;
  cursor: pointer;
}
.shopcar {
  flex: 1;
  cursor: pointer;
}
.purchase {
  flex: 1;
  cursor: pointer;
}
img{
  height: 18px;
  width: 20px;
  margin-left: 13px;
}
</style>