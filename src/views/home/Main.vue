<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <tab-control
      :titles="['流行', '新款', '精选']"
      class="tab-control"
      @tabClick="tabClick"
      ref="hiddenTabControl" 
      v-show="isTabFixed"
      ></tab-control>
    <scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      @scroll="contentScroll"
      :pull-up-load="true"
      @pullingUp="loadMore"
    >
      <home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad" />
      <recoment-view :recommends="recommends" />
      <feature-view />
      <tab-control
        :titles="['流行', '新款', '精选']"
        class="tab-control"
        @tabClick="tabClick"
        ref="tabControl"
      ></tab-control>
      <goods-list :goods="this.goods[this.currentType].list" />
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop" />
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import TabControl from "@/components/content/tabControl/TabControl";
import GoodsList from "@/components/content/goods/GoodsList";
import Scroll from "@/components/common/scroll/Scroll";
import BackTop from "@/components/content/backtop/BackTop";

import HomeSwiper from "./childcomps/HomeSwiper";
import RecomentView from "./childcomps/RecomentView";
import FeatureView from "./childcomps/FeatureView";

import { getHomeMultidata, getHomeGoods } from "@/network/home";
import { debounce } from "@/common/tools";

export default {
  name: "Main",
  components: {
    NavBar,
    HomeSwiper,
    RecomentView,
    FeatureView,
    TabControl,
    GoodsList,
    Scroll,
    BackTop,
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: "pop",
      isShowBackTop: false,
      tabOffsetTop: 0,
      isTabFixed: false,
      saveY:0,
    };
  },
  created() {
    // 请求首页数据
    this.getHomeMultidata();
    // 请求商品数据
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  activated () {
    this.$refs.scroll.scroll.scrollTo(0,this.saveY,0)

    this.$refs.scroll.refresh()
  },
  deactivated () {
    this.saveY=this.$refs.scroll.scroll.y
  },
  mounted() {
    // 图片加载的事件监听
    const refresh = debounce(this.$refs.scroll.refresh, 500);
    this.$bus.$on("itemImageLoad", () => {
      refresh();
    });
    // 获取offsettop
  },
  methods: {
    // 事件监听

    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
      this.$refs.hiddenTabControl.currentindex = index
      this.$refs.tabControl.currentindex = index
    },
    backClick() {
      this.$refs.scroll.backTop(0, 0);
    },
    contentScroll(position) {
      this.isShowBackTop = -position.y > 1000;

      this.isTabFixed = -position.y > this.tabOffsetTop;
    },
    loadMore() {
      this.getHomeGoods(this.currentType);
    },
    swiperImageLoad() {
      this.tabOffsetTop = this.$refs.tabControl.$el.offsetTop;
    },

    // 网络请求
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
        this.keywords = res.data.keywords;
        this.dkeywords = res.data.dKeyword;
      });
    },
    getHomeGoods(type) {
      let page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        this.goods[type].list.push(...res.data.list);
      });
    },
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    },
  },
};
</script>

<style>
#home {
  padding-top: 44px;
  height: 100vh;
  position: relative;
}
.home-nav {
  background-color: #fc427b;
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
  margin-bottom: 50px;
}
.tab-control{
  top: -1px;
  position: relative;
  z-index: 2;
}
/* .content {
  height: calc(100% - 93px);
  overflow: hidden;
  margin-top: 44px;
} */
.content {
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
</style>