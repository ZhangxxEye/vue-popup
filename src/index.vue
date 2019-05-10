<template>
    <div class="popup-container" v-show="value">
        <!--<div class="close-btn">-->
            <!--<span class="btn" @click="close"></span>-->
        <!--</div>-->
        <slot></slot>
    </div>
</template>

<script>
  export default {
    name: "vue-popup",
    props: {
      value: {
        type: Boolean,
        default: false
      }
    },
    watch: {
      value (val) {
      console.log('change', val);
        if (val) {
          this.stop();
        } else {
          this.move();
        }
      }
    },
    mounted() {
      if (this.value) {
        this.stop();
      }
    },
    methods: {
      close () {
        this.$emit('input', false);
      },
      stop(){
        console.log('禁止页面滑动');
        let mo=function(e){e.preventDefault();};
        document.documentElement.style.height = '100%'
        document.documentElement.style.overflow = 'hidden'
        document.body.style.height = '100%'
        document.body.style.overflow = 'hidden'
        // document.body.addEventListener("touchmove",mo,false);//禁止页面滑动
        // document.body.style.position = 'fixed';
        // document.body.style.width = '100%';

      },
      move(){
        console.log('页面可以滑动');
        // document.body.style.position = '';
        // document.body.style.width = '';
        let mo=function(e){e.preventDefault();};
        document.documentElement.style.height = 'auto'
        document.documentElement.style.overflow = ''
        document.body.style.height = 'auto'
        document.body.style.overflow = ''
        // document.body.removeEventListener("touchmove",mo,true);//页面可以滑动
      }
    }

  }
</script>

<style scoped lang="less">
    .popup-container{
        position: fixed;
        overflow-y: auto;
        -webkit-overflow-scrolling: touch;/* 解决在IOS上滚动惯性失效的问题 */
        background-color: #fff;
        opacity: 0.5;
        left: 0;
        bottom: 0;
        right: 0;
        top: 0;
        z-index: 1000;
        .close-btn{
            text-align: right;
            >.btn{
                width: 28px;
                height: 28px;
               background: url("//cdn.51talk.com/apollo/images/34d98b1d128378791c183612af75b979.png") no-repeat;
                background-size: 100% 100%;
                display: inline-block;
                margin-top: 14px;
                margin-right: 12px;
            }
        }
    }

</style>