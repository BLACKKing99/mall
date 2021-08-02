<template>
  <div ref="wrapper">
      <div>
        <slot></slot>
      </div>
  </div>
</template>

<script>
import BScroll from "better-scroll"
export default {
    data () {
        return {
            scroll:null
        }
    },
    props: {
      probeType:{
        type:Number,
        default:0
      },
      pullUpLoad:{
        type:Boolean,
        default:false
      }
    },
    methods: {
      backTop(x,y,time=500){
        this.scroll.scrollTo(x,y,time)
      },
      refresh(){
        this.scroll && this.scroll.refresh()
      }
    },
    mounted () {
      this.scroll = new BScroll(this.$refs.wrapper, {
        probeType:this.probeType,
        pullUpLoad:true,
        click:true,
      });
      this.scroll.on('scroll',(position)=>{
        this.$emit('scroll',position)
      })
      this.scroll.on('pullingUp',()=>{
        this.$emit('pullingUp')
        setTimeout(()=>{
          this.scroll.finishPullUp()
        },2000)
      })
  },
}
</script>

<style>

</style>