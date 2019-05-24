<template>
    <div class="popup-container">
        <overlay v-model="showOverlay"></overlay>
        <transition :name="transitionName">
            <div class="popup" :class="positionClass" v-show="value">
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
        showOverlay: true,
        startY: 0,
        deltaY: 0
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
          this.open();
          if (this.isShowOverlay) {
            this.showOverlay = true;
          }
        } else {
          this.close();
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
        this.open();
      } else {
        this.showOverlay = false;
      }
    },
    methods: {
      /**
       * 弹框打开，禁止背景页滑动
       */
      open(){
        document.documentElement.style.height = '100%';
        document.documentElement.style.overflow = 'hidden';
        document.body.style.height = '100%';
        document.body.style.overflow = 'hidden';
      },
      /**
       * 弹框关闭，背景页可以滑动
       */
      close(){
        document.documentElement.style.height = 'auto'
        document.documentElement.style.overflow = ''
        document.body.style.height = 'auto'
        document.body.style.overflow = ''
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
    .popup-bottom-enter-active, .popup-bottom-leave-active {
        transition: transform 0.3s ease-in;
    }
    .popup-bottom-enter, .popup-bottom-leave-to /* .fade-leave-active below version 2.1.8 */ {
        transform: translate3d(-50%, 100%, 0)!important;
    }

</style>