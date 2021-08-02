<template>
  <div id="app">
    <main-tabbar></main-tabbar>
    <keep-alive include="Main Category">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import MainTabbar from "./components/content/maintabbar/MainTabBar";
export default {
  name: "App",
  components: {
    MainTabbar,
  },
};
</script>

<style>
@import "assets/css/base.css";
</style>
