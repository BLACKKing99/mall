<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "tabbar",
};
</script>

<style>
#tab-bar {
  display: flex;
  position:fixed;
  left:0;
  right:0;
  bottom:0;
  box-shadow: 0 -2px 2px #e0e0e0;
}
</style>