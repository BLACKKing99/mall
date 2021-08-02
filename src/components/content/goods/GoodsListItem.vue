<template>
  <div class="goods-item" @click="changeFrom">
    <img :src="showImage" alt="" @load="imageLoad" class="good-list-img"/>
    <div class="goods-info">
      <p>{{ goodsItem.title }}</p>
      <span class="price">{{ goodsItem.price }}</span>
      <img
        src="@/assets/img/cart/收藏.png"
        alt=""
        class="main-collect-img"
      />
      <span class="collect">{{ goodsItem.cfav }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    imageLoad() {
      this.$bus.$emit("itemImageLoad");
    },
    changeFrom() {
      this.$router.push("/detail/" + this.goodsItem.iid);
    },
  },
  computed: {
    showImage() {
      return this.goodsItem.image || this.goodsItem.show.img;
    },
  },
};
</script>

<style>
.goods-item {
  width: 48%;
}
.goods-item .good-list-img {
  width: 100%;
}
.goods-info {
  font-size: 12px;
  text-align: center;
  margin-bottom: 5px;
}
.goods-info p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 5px;
}
.goods-info .price {
  color: pink;
}
.collect{
  margin-left: 3px;
}

.main-collect-img{
    height: 12px;
    width: 12px;
    margin-left: 10px;
}

</style>