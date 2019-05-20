<template>
    <div class="popup-container" v-show="value">
        <overlay v-model="showOverlay"></overlay>
        <transition :name="transitionName">
            <div class="popup" :class="positionClass" v-if="value">
                <slot></slot>
            </div>
        </transition>
    </div>
</template>

<script>
  import overlay from '@nat/vue-overlay';
  export default {
    name: "vue-popup",
    props: {
      value: {
        type: Boolean,
        default: false
      },
      isShowOverlay: {
        type: Boolean,
        default: true
      },
      position: String

    },
    data () {
      return {
        showOverlay: true
      }
    },
    components: {
      overlay
    },
    computed:{
      transitionName () {
        return this.position ? `popup-${this.position}` : 'fade'
      },
      positionClass () {
        if (this.position) {
          return `popup-${this.position}`
        } else {
          return ''
        }

      }
    },
    watch: {
      value (val) {
        if (val) {
          this.stop();
          if (this.isShowOverlay) {
            this.showOverlay = true;
          }
        } else {
          this.move();
          if (this.isShowOverlay) {
            this.showOverlay = false;
          }
        }
      },
      showOverlay (val) {
        if (val === false) {
          this.$emit('input', false)
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
        .popup{
            position: fixed;
            top: 50%;
            left: 50%;
            max-height: 100%;
            overflow-y: auto;
            background-color: #fff;
            -webkit-overflow-scrolling: touch;
            transform: translate3d(-50%, -50%, 0);
            z-index: 1001;
        }
        .popup-bottom{
            width: 100%;
            top: auto;
            bottom: 0;
            right: auto;
            left: 50%;
            transform: translate3d(-50%, 0, 0);
        }
    }
    .popup-bottom-enter,
    .popup-bottom-leave-active {
        transform: translate3d(-50%, 100%, 0);
    }

</style>