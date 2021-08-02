<template>
  <div class="nav-bar">
      <div class="left"><slot name="left"></slot></div>
      <div class="center"><slot name="center"></slot></div>
      <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
    .nav-bar{
        display: flex;
        height: 44px;
        line-height: 44px;
        text-align:center;
        /* border-bottom: 0.5px solid #eee; */
        box-shadow: 0 0.5px #f00;
    }
    .left,.right{
        width: 60px;
    }
    .center{
        flex: 1;
    }
</style>