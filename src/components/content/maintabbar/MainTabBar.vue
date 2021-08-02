<template>
  <div>
    <tabbar class="tabbar">
      <tabbarItem path="/main">
        <img slot="item-img" src="@/assets/img/tabbar/home.svg" alt="" />
        <img
          slot="item-img-active"
          src="@/assets/img/tabbar/home_active.svg"
          alt=""
        />
        <div slot="item-text">首页</div>
      </tabbarItem>
      <tabbarItem path="/category">
        <img slot="item-img" src="@/assets/img/tabbar/category.svg" alt="" />
        <img
          slot="item-img-active"
          src="@/assets/img/tabbar/category_active.svg"
          alt=""
        />
        <div slot="item-text">分类</div>
      </tabbarItem>
      <tabbarItem path="/cart">
        <img slot="item-img" src="@/assets/img/tabbar/cart.svg" alt="" />
        <img
          slot="item-img-active"
          src="@/assets/img/tabbar/cart_active.svg"
          alt=""
        />
        <div slot="item-text">购物车</div>
      </tabbarItem>
      <tabbarItem path="/profile">
        <img slot="item-img" src="@/assets/img/tabbar/profile.svg" alt="" />
        <img
          slot="item-img-active"
          src="@/assets/img/tabbar/profile_active.svg"
          alt=""
        />
        <div slot="item-text">我的</div>
      </tabbarItem>
    </tabbar>
  </div>
</template>

<script>
import tabbar from "@/components/common/tabbar/TabBar";
import tabbarItem from "@/components/common/tabbar/TabBaritem";
export default {
    name:'MainTabBar',
    components: {
        tabbar,
        tabbarItem
    }
};
</script>

<style>
.tabbar{
  z-index:2;
}
</style>