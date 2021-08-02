<template>
  <div class="tab-bar-item" @click="itemclick">
    <div v-if="!isactive"><slot name="item-img"></slot></div>
    <div v-else><slot name="item-img-active"></slot></div>
    <div :style="activesytle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  name: "tabbar-item",
  props: {
    path: String,
    coloractive:{
      type:String,
      default:'pink',
    }
  },
  data() {
    return {
      // isactive: true,
    };
  },
  methods: {
    itemclick() {
      this.$router.push(this.path);
    },
  },
  computed: {
    isactive() {
      return this.$route.path === this.path ? true : false;
    },
    activesytle(){
      return this.isactive?{color:this.coloractive}:{}
    }
  },
};
</script>

<style>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  background-color: #eee;
  cursor: pointer;
  border-right: solid 2px #fff;
}
.tab-bar-item img {
  width: 24px;
  height: 24px;
}
#tab-bar:last-child {
  border-right: none;
}
.active {
  color: pink;
}
</style>