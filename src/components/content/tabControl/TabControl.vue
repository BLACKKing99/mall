<template>
  <div class="tab-control">
    <div v-for="(item, index) in titles" :key="index" class="tab-control-item" 
    :class="{'active':currentindex===index}" @click="itemclick(index)">
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    titles: {
      type: Array,
      defalut() {
        return [];
      },
    },
  },
  data(){
    return{
      currentindex:0
    }
  },
  methods:{
    itemclick(index){
      this.currentindex=index
      this.$emit('tabClick',index)
    }
  }
};
</script>

<style>
.tab-control {
  display: flex;
  text-align: center;
  background-color: #fff;
}
.tab-control-item {
  flex: 1;
  height: 40px;
  line-height: 40px;
}
.tab-control-item > span {
  margin-top: 10px;
  padding: 5px;
  font-size: 1rem;
}
.active{
  color: pink;
}
.active>span{
  border-bottom: pink solid 3px;
}
</style>