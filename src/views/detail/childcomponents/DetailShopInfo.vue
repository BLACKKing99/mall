<template>
  <div>
    <div class="shop-logo">
      <img :src="shopInfo.logo" alt="" />
      <span>{{ shopInfo.name }}</span>  
    </div>
    <div class="shop-info">
      <div class="shop-state">
        <div class="shop-fan">
          <div class="sells">{{ shopInfo.sells }}</div>
          <div class="total">总销量</div>
        </div>
        <div class="all-shop">
          <div class="goodsCount">{{ shopInfo.goodsCount }}</div>
          <div class="total">全部宝贝</div>
        </div>
      </div>
      <div class="shop-description">
        <div
          v-for="(item, index) in shopInfo.score"
          :key="index"
          class="shop-description-item"
        >
          <div class="name">{{ item.name }}</div>
          <div class="score" :class="{ isacitve: item.isBetter }">
            {{ item.score }}
          </div>
          <div class="better" :class="{ 'better-more': item.isBetter }">
            {{ item.isBetter ? "高" : "低" }}
          </div>
        </div>
      </div>
    </div>
    <div class="shop-bottom">
      <div class="enter-shop">进店逛逛</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    shopInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style scoped>
.shop-logo {
  display: flex;
  margin: 30px 15px;
}
.shop-logo img {
  height: 60px;
  width: 60px;
  border: solid #eee 0.5px;
  border-radius: 100%;
}
.shop-logo span {
  line-height: 3.5em;
  font-size: 20px;
}
.shop-info {
  height: 100px;
  display: flex;
  justify-content: space-around;
}
.shop-state {
  display: flex;
  border-right: solid 2px #ddd;
  padding-right: 30px;
  align-self: center;
}
.shop-fan {
  color: black;
  font-size: 25px;
  text-align: center;
}
.sells {
  text-align: center;
}
.goodsCount {
  text-align: center;
}
.total {
  font-size: 16px;
  margin-top: 30px;
}
.all-shop {
  margin-left: 20px;
  font-size: 25px;
  color: black;
}
.shop-description {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.shop-description-item {
  display: flex;
}
.shop-description-item div {
  margin: 0 10px;
}
.better {
  color: #fff;
  background: #f13e3a;
}
.score {
  color: #f13e3a;
  width: 22.25px;
}
.isacitve {
  color: #5ea732;
}
.better-more {
  background: #5ea732;
}
.shop-bottom {
  text-align: center;
  margin: 30px 0;
}
.enter-shop {
  display: inline-block;
  font-size: 14px;
  background-color: #f2f5f8;
  width: 150px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  border-radius: 10px;
}

</style>