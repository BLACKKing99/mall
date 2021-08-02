<template>
  <div id="detail">
    <detail-nav-bar @titleClick="titleClick" ref="nav"></detail-nav-bar>
    <scroll
      class="swrapper"
      ref="scroll"
      :probeType="3"
      @scroll="contentscroll"
    >
      <detail-swiper :topImage="topImage" class="detail-swiper"></detail-swiper>
      <detail-base-info :goodinfo="goodinfo"></detail-base-info>
      <detail-shop-info :shopInfo="shopInfo"></detail-shop-info>
      <detail-goods-info
        :detailInfo="detailInfo"
        @myimageLoad="datailImageLoad"
      ></detail-goods-info>
      <detail-param-info
        :goodsParam="goodsParam"
        ref="param"
      ></detail-param-info>
      <detail-comment-info
        :commentInfo="commentInfo"
        ref="comment"
      ></detail-comment-info>
      <!-- <goods-list :goods="recommendInfo"></goods-list> -->
      <detail-good-list
        :recommendInfo="recommendInfo"
        ref="recommend"
        @listImageLoad="listImageLoad"
      ></detail-good-list>
    </scroll>
    <detail-bottom-bar @shopcarClick="shopcarClick"></detail-bottom-bar>
    <back-top v-show="isshow" @click.native="backClick"></back-top>
    <tocast :isDisplay="isDisplay" :message="message"></tocast>
  </div>
</template>

<script>
import DetailNavBar from "./childcomponents/DetailNavBar";
import DetailSwiper from "./childcomponents/DetailSwiper";
import DetailBaseInfo from "./childcomponents/DetailBaseInfo";
import DetailShopInfo from "./childcomponents/DetailShopInfo";
import DetailGoodsInfo from "./childcomponents/DetailGoodsInfo";
import DetailParamInfo from "./childcomponents/DetailParamInfo";
import DetailCommentInfo from "./childcomponents/DetailCommentInfo";
// import GoodsList from "@/components/content/goods/GoodsList"
import DetailGoodList from "./childcomponents/DetailGoodList";
import DetailBottomBar from "./childcomponents/DetailBottomBar";

import BackTop from "@/components/content/backtop/BackTop";

import Scroll from "@/components/common/scroll/Scroll";
import Tocast from "@/components/common/tocast/Tocast";

import { debounce } from "@/common/tools";

import {
  getDetail,
  GoodsInfo,
  ShopInfo,
  GoodsParam,
  getRecommend,
} from "@/network/detail";
export default {
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo, 
    DetailParamInfo,
    DetailCommentInfo,
    // GoodsList,
    DetailGoodList,
    DetailBottomBar,

    BackTop,
    Scroll,
    Tocast,
  },
  data() {
    return {
      id: null,
      topImage: [],
      goodinfo: {},
      shopInfo: {},
      detailInfo: {},
      goodsParam: {},
      isshow: false,
      commentInfo: {},
      recommendInfo: [],
      tabarNarback: [],
      currentIndex: 0,

      // 点击触发弹窗
      isDisplay: false,
      message: "",
    };
  },
  created() {
    this.id = this.$route.params.id;

    getDetail(this.id).then((res) => {
      const data = res.result;
      // 顶部轮播图数据
      this.topImage = data.itemInfo.topImages;

      // 获取商品信息
      this.goodinfo = new GoodsInfo(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );

      // 创建店铺对象
      this.shopInfo = new ShopInfo(data.shopInfo);

      // 保存商品详情数据
      this.detailInfo = data.detailInfo;

      this.goodsParam = new GoodsParam(
        data.itemParams.info,
        data.itemParams.rule
      );

      // 评论信息
      if (data.rate.cRate !== 0) {
        this.commentInfo = data.rate.list[0];
      }

      getRecommend().then((res) => {
        this.recommendInfo = res.data.list;
      });
    });

    // this.$nextTick(() => {
    // 将DOM渲染完之后执行的函数
    //   let param = this.$refs.param.$el.offsetTop;
    //   let comment = this.$refs.comment.$el.offsetTop;
    //   let recommend = this.$refs.recommend.$el.offsetTop;
    //   // console.log(comment);
    //   this.tabarNarback.push(0, param, comment, recommend);
    // });
  },
  methods: {
    shopcarClick() {
      const prodect = {};
      prodect.id = this.id;
      prodect.title = this.goodinfo.title;
      prodect.image = this.topImage[0];
      prodect.desc = this.detailInfo.desc;
      prodect.price = this.goodinfo.realPrice;
      // 将商品加入到VueX
      this.$store.dispatch("addCart", prodect).then((res) => {
        this.isDisplay = true;
        this.message = res;

        setTimeout(() => {
          this.message = "";
          this.isDisplay = false;
        }, 2000);
      });
    },
    titleClick(index) {
      // console.log(index);
      this.$refs.scroll.scroll.scrollTo(0, -this.tabarNarback[index], 1000);
    },
    datailImageLoad() {
      const refresh = debounce(this.$refs.scroll.refresh, 500);
      refresh();
    },
    backClick() {
      this.$refs.scroll.backTop(0, 0);
    },
    contentscroll(position) {
      let positionY = -position.y;
      const length = this.tabarNarback.length;
      for (let i = 0; i < length; i++) {
        // hack做法  往tabarNarback里面添加一个无穷大的值 Math.MAX_VALUE
        // if(this.currentIndex !==i && (positionY >= this.tabarNarback[i] && positionY < this.tabarNarback[i + 1]))
        if (
          this.currentIndex !== i &&
          ((i < length - 1 &&
            positionY >= this.tabarNarback[i] &&
            positionY < this.tabarNarback[i + 1]) ||
            (i === length - 1 && positionY >= this.tabarNarback[i]))
        ) {
          // console.log(this.$refs.nav.$data.currentindex);
          this.currentIndex = i;
          this.$refs.nav.currentindex = this.currentIndex;
        }
      }
      this.isshow = -position.y > 1000;
    },
    listImageLoad() {
      let param = this.$refs.param.$el.offsetTop;
      let comment = this.$refs.comment.$el.offsetTop;
      let recommend = this.$refs.recommend.$el.offsetTop;
      // console.log(comment);
      this.tabarNarback.push(0, param, comment, recommend);
    },
    loadMore() {
      // console.log("----");
    },
  },
};
</script>

<style scoped>
#detail {
  position: relative;
  z-index: 3;
  background-color: #fff;
  height: 100vh;
}
.swrapper {
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
</style>