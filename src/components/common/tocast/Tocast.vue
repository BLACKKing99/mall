<template>
  <div v-show="isDisplay" class="tocast">
    <div>{{message}}</div>
  </div>
</template>

<script>
export default {
  // data () {
  //   return {
  //     message:'',
  //     isDisplay:false,
  //   }
  // },
  props: {
    message:{
      type:String,
    },
    isDisplay:{
      type:Boolean,
      default(){
        return true
      }
    }
  },
  methods: {
    show(message,duration=2000){

      this.isDisplay = true
      this.message = message


      setTimeout(()=>{
        this.message=''
        this.isDisplay=false
      },duration)
    }
  }
}
</script>

<style>
  .tocast{
    position: fixed;
    transform: translate(-50%,-50%);
    left: 50%;
    top: 50%;
    background: rgba(0,0,0,.7);
    padding: 12px 15px;
    color: #fff;
    width: 220px;
    text-align: center;
  }
</style>