<template>
  <div>
    <swiper>
      <swiper-item v-for="(item, index) in banners" :key="index">
        <a :herf="item.link">
          <img :src="item.image" alt="" @load="imageLoad" />
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from "@/components/common/swiper";

export default {
  props: {
    banners: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data () {
    return {
      isload:false  
    }
  },
  components: {
    Swiper,
    SwiperItem,
  },
  methods: {
    imageLoad(){
      if(!this.isload){
        this.$emit('swiperImageLoad')
        this.isload = true
      }
    }
  }
};
</script>

<style>
</style>