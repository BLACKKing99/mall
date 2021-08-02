<template>
  <div class="good-list">
    <div
      v-for="(item, index) in recommendInfo"
      :key="index"
      class="goods goods-item"
    >
      <img :src="item.image" alt=""  @load="listImageLoad"/>
      <div class="goods-info">
        <p>{{ item.title }}</p>
        <span class="price">{{ item.price }}</span>
        <span class="collect">{{ item.cfav }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isshow:true  
    }
  },
  props: {
    recommendInfo: {
      type: Array,
      defaault() {
        return [];
      },
    },
  },
  methods: {
    listImageLoad(){
      if(this.isshow){
        this.$emit('listImageLoad')
        this.isshow=false
      }
    }
  }
};
</script>

<style scoped>
.good-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.goods-item {
  width: 48%;
}
.goods-item img {
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
  color:black
}
.goods-info .price {
  color: pink;
}
.goods-info .collect {
  margin-left: 10px;
}
.goods-info .collect::before {
  content: "";
  height: 14px;
  background: url("~@/assets/img/common/collect.svg") 0 0/14px 14px;
}
</style>