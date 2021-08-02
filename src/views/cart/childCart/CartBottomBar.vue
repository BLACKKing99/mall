<template>
  <div class="cart-bottom-bar">
    <div class="checked-all">
      <check-button class="checked-btn" @click.native="checkClick" :ischange="allSellection"></check-button>
      <div class="all">全选</div>
    </div>
    <div class="total">合计：￥{{ totalPrice }}</div>
    <div class="computed">去计算({{ alreadchecked }})</div>
  </div>
</template>

<script>
import CheckButton from "@/components/content/button/CheckButton";

import { mapGetters } from "vuex";

export default {
  components: {
    CheckButton,
  },
  computed: {
    ...mapGetters(["cartList"]),
    totalPrice() {
      return this.cartList
        .filter((item) => item.checked)
        .reduce((pre, bre) => {
          return pre + bre.price * bre.count;
        }, 0).toFixed(2);
    },
    alreadchecked() {
      return this.cartList.filter((item) => item.checked).length;
    },
    allSellection(){
        if(this.cartList.length === 0) return false
        return !this.cartList.filter((item) => !item.checked).length
    }
  },
  methods: {
      checkClick(){
            if(this.allSellection){
                this.cartList.forEach( item => item.checked=false)
            }else{
                this.cartList.forEach( item => item.checked=true)
            }
      }
  }
};
</script>

<style>
.cart-bottom-bar {
  display: flex;
  background: #eee;
  height: 40px;
  width: 100vw;
  position: absolute;
  bottom: 49px;
  justify-content: space-between;
  align-items: center;
  padding: 0 5px;
}

.checked-all {
  display: flex;
  align-items: center;
}

.checked-btn{
    margin-top: 5px;
}
.total{
    flex: 1;
    padding-left: 40px;
}
.all{
    margin-left: 5px;
}
.computed{
    flex: 1;
    background: red;
    height: 100%;
    line-height: 40px;
    text-align: center;
    color: #fff;
}
</style>