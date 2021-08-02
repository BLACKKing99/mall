<template>
  <div class="recoment">
    <div v-for="(item, index) in recommends" :key="index" class="recoment-item">
      <a :href="item.link">
        <img :src="item.image" alt="" />
        <div>{{ item.title }}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style>
.recoment {
  display: flex;
  width: 100vw;
  text-align:center;
  padding:10px 0 20px 0;
  border-bottom: solid 8px #eee;
}
.recoment-item {
    flex:1;
    cursor: pointer;
}
.recoment-item img {
  width: 70px;
  height: 70px;
  margin-bottom: 10px;
}
</style>