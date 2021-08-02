<template>
  <div>
    <nav-bar>
        <div slot="left" @click="backClick">
            <img src="@/assets/img/common/back.svg" alt="" class="back">
        </div>
      <div slot="center" class="titles">
        <div v-for="(item, index) in titles" 
        :key="index" @click="titleClick(index)"
        :class="{'active': index === currentindex }">
            {{ item }}</div>
       </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
export default {
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentindex:0,
    };
  },
  props: {
    showactive:{
      type:Boolean,
      default(){
        return true
      }
    }
  },
  components: {
    NavBar,
  },
  methods: {
      titleClick(index){
          this.currentindex = index
          this.$emit('titleClick',index)
      },
      backClick(){
          this.$router.back()
      }
  },
};
</script>

<style scoped>
.titles {
  display: flex;
  justify-content: space-evenly;
  align-content: center;
  font-size: 13px;
}
.active{
    color: pink;
}
.back{
    margin-top: 11px;
}
</style>