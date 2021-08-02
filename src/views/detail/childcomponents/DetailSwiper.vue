<template>
    <swiper>
      <swiper-item v-for="(item, index) in topImage" :key="index" class="swiper-item">
          <img :src="item" alt="" />
      </swiper-item>
    </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "@/components/common/swiper";
export default {
  components: {
    Swiper,
    SwiperItem,
  },
  props: {
    topImage: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style scoped>
.swiper-item{
  height: 40vh;
  overflow: hidden;
}
</style>