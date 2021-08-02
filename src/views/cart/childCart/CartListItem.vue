<template>
  <div class="cart-list">
    <check-button class="" :ischange="product.checked" @click.native="checkClick"></check-button>
    <div class="cart-list-img">
      <img :src="product.image" alt="" />
    </div>
    <div class="cart-list-info">
      <div class="cart-list-info-title">{{ product.title }}</div>
      <div class="cart-list-info-desc">{{ product.desc }}</div>
      <div class="cart-list-info-total">
        <div class="cart-list-info-price">￥{{ product.price }}</div>
        <div class="cart-list-info-count">×{{ product.count }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import CheckButton from "@/components/content/button/CheckButton";
export default {
  props: {
    product: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  components: {
      CheckButton
  },
  methods: {
    checkClick(){
      this.product.checked = !this.product.checked
    }
  }
};
</script>

<style>
.cart-list {
  margin: 10px 5px;
  display: flex;
  height: 140px;
  justify-content: center;
  align-items: center;
}
.cart-list-img{
    margin:  0 5px ;
}
.cart-list-img img {
  height: 140px;
  width: 105px;
}
.cart-list-info {
  padding: 0 10px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-self: center;
  overflow: hidden;
}
.cart-list-info-title {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 20px;
  font-weight: 550;
}
.cart-list-info-desc {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 15px;
}
.cart-list-info-total {
  display: flex;
}
.cart-list-info-total {
  display: flex;
  justify-content: space-between;
}
.cart-list-info-price{
    font-size: 24px;
    color: coral;
}
.cart-list-info-count{
    font-size: 18px;
}
</style>