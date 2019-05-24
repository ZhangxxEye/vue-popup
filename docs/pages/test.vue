<template lang="html">
    <div id="project-features">
        <h1 class="title">vue-list</h1>
        <div class="features demo">
            <button @click="showPopup">点击出现弹层</button>
           <popup v-model="show" position="bottom">
               <div class="popBox">
                   <button @click="close">关闭</button>
                   this is a demo<br>
                   this is a demo<br>
                   this is a demo<br>
                   this is a demo<br>
                   this is a demo<br>
                   this is a demo<br>
                   this is a demo<br>
               </div>
           </popup>
            <!--<van-popup v-model="show" :overlay="true">-->
                <!--<div style="height: 300px">-->
                    <!--this is a demo<br>-->
                    <!--this is a demo<br>-->
                    <!--this is a demo<br>-->
                    <!--this is a demo<br>-->
                    <!--this is a demo<br>-->
                    <!--this is a demo<br>-->
                    <!--this is a demo<br>-->
                <!--</div>-->
            <!--</van-popup>-->
        </div>
    </div>
</template>

<script>
    import popup from '../../src/index.vue';
    import BScroll from 'better-scroll'
    export default {
        name: 'ProjectFeatures',
        data() {
            return {
                show: false
            };
        },
        components: {
          popup,
        },
        mounted () {
        //   let wrapper = document.querySelector('.scroller')
        //   let scroll = new BScroll(wrapper)
        },
        methods: {
            handleClick (value) {
                console.log('selected', value);
            },
          close () {
              this.show = false;
          },
          showPopup () {
              this.show = true;
          },
            getLists () {
                axois.get('http://172.16.0.45:7300/mock/5c88c2241d2cb328eddca711/components/api/list').then(r => {
                    this.list.push(...r.data.data);
                    if (this.list.length >= 90) {
                        this.finished = true;
                    }
                }).catch(e => {
                    this.error = true;
                }).finally(() => {
                    this.loading = false;
                });
            },
            onLoad() {
                this.getLists();
                // 异步更新数据
                /*setTimeout(() => {
                    for (let i = 0; i < 10; i++) {
                        this.list.push(this.list.length + 1);
                    }
                    // 加载状态结束
                    // this.loading = false;
                    this.error = true;

                    // 数据全部加载完成
                    if (this.list.length >= 90) {
                        this.finished = true;
                    }
                }, 500);*/
            }
        }
    };
</script>

<style lang="scss">
    @import '~colors';
    .demo{
        .van-popup--right{
            width: 100%;
            height: 100%;
        }
        .popup{
            height: 300px;
            width: 80%;
        }
        .van-popup{
            width: 80%;
            height: 400px;
        }
    }
    .popBox{
        height: 600px;
        width: 95%;
        /*border: 1px solid red;*/
    }
    .test-box{
        width: 100%;
        height: 300px;
        overflow-y: scroll;
    }
    .iframe-container{
        width: 100%;
        height: 2000px;
        overflow-y: auto;
        -webkit-overflow-scrolling: touch;

    }
    .scroller{
        overflow: auto;
    }
    iframe{
        width: 100%;
        height: 2000px;
        min-height: calc(100% + 1px);
        border: none;
    }
    .outer-container{
        height: 200px;
        width: 300px;
    }
    .item{
        flex:0 0 22%;
    }
    .tab-container{
        padding: 10px;
    }

    #app #project-features .tags-input {
        width: 100%;
        max-width: none;

        .ti-input {
            border: none;
            border-bottom: 1px solid $lightGrey;
            padding: 4px 12px;
        }

        .ti-tag input {
            color: $darker;
        }

        .ti-tag, .ti-item.ti-selected-item {
            background-color: $primary;
            color: $darker;
        }

        .ti-tags li {
            padding: 5px 8px;
            margin: 2px;
        }

        .ti-tag.dark-font {
            color: #333;
        }

        .ti-item {
            padding: 2px 3px;
        }

        .ti-tag.ti-deletion-mark {
            background-color: $error !important;
            color: #fff;
        }
    }

    #project-features .browser-support .icon {
        width: 100%;
        height: auto;
        padding: 16px;

        > * {
            fill: #b7c4c9;
        }
    }
</style>

<style lang="scss" scoped>
    @import 'colors';

    .title {
        line-height: 28px;
        font-size: 23px;
        font-weight: bold;
        font-family: 'Raleway', sans-serif;
        color: #fff;
        margin-bottom: 20px
    }

    .features {
        display: flex;
        margin-bottom: 40px;
        flex-direction: column;
        width: 100%;
        height: 1080px;
    }

    .browser-support {
        display: flex;
        flex-wrap: wrap;

        > div {
            display: flex;
            flex-direction: column;
            flex: 1;
            align-items: center;
            font-size: 14px;
            min-width: 85px;
            margin: 8px;
            max-width: 94px;
        }

        span {
            display: flex;
            margin-top: 0px;
            font-weight: 500;

            i {
                margin-left: 3px;
                font-size: 20px;
            }
        }
    }

    .license {
        margin-top: 40px;
        font-size: 0.85em;
    }

    .date {
        font-size: 0.85em;
    }
</style>
