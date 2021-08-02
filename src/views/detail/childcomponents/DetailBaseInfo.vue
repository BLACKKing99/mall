<template>
  <div v-if="Object.keys(goodinfo).length !==0">
    <div class="title">{{ goodinfo.title }}</div>
    <div class="price">
      <div class="newPrice">{{ goodinfo.newPrice }}</div>
      <div class="oldPrice">{{ goodinfo.oldPrice }}</div>
      <div class="discount">
        <span>{{ goodinfo.discount }}</span>
      </div>
    </div>
    <div class="columns">
      <div>{{goodinfo.columns[0]}}</div>
      <div>{{goodinfo.columns[1]}}</div>
      <div>{{goodinfo.services[0].name}}</div>
    </div>
    <div class="services">
      <div v-for="index in goodinfo.services.length-1" :key="index" class="services-item">
        <img :src="goodinfo.services[index].icon" alt="">
        <div>{{goodinfo.services[index].name}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    goodinfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style scoped>
.title {
  font-size: 20px;
  font-weight: bold;
  margin: 10px 0;
}
.price {
  margin: 10px 10px;
  display: flex;
}
.newPrice {
  color: var(--color-tint);
  font-size: 30px;
}
.oldPrice {
  text-decoration: line-through;
  margin-top: 10px;
  margin-left: 5px;
}
.discount {
  color: #fff;
  padding-left: 10px;
}
.discount span {
  background-color: #ff5777;
  padding: 2px 5px;
  border-radius: 5px;
  font-size: 14px;
}
.columns{
  display: flex;
  justify-content: space-between;
  border-bottom: solid 0.5px #eee;
  padding-bottom: 10px;
  margin: 0 10px;
}
.services{
  display: flex;
  justify-content: space-between;
  padding: 20px 10px;
  box-shadow: 0 2px 0 #eee;
  font-size: 14px;
}
.services img{
  height: 12px;
  width: 12px;
  margin-top: 2px;
}
.services-item{
  display: flex;
  margin: 0 2px;
}
</style>