<template>
    <div class="musicDetail">
        <div class="musicDetailTop">
            <div class="musicDetailTopLeft">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-bofanganniu"></use>
                </svg>
                <span style="font-weight: 900">播放全部<span style="font-size: 10px;color: #cccccc">(共{{musicDetail.songs.length}}首)</span></span>
            </div>
            <div class="musicDetailTopRight">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-jiahao"></use>
                </svg>
                <span>收藏({{ changeCount(subscribedCount) }})</span>
            </div>
        </div>
        <div class="itemList">
            <div class="item" v-for="(item, i) in musicDetail.songs" :key="i">
                <div class="itemLeft" @click="playMusic(i)">
                    <span class="leftSpan">{{ i + 1 }}</span>
                    <div>
                        <p>{{ item.name }}</p>
                        <span v-for="(item1, index) in item.ar" :key="index">{{ item1.name }}</span>
                    </div>
                </div>
                <div class="itemRight">
                    <svg class="icon bofang" aria-hidden="true" v-if='item.mv !=0'>
                        <use xlink:href="#icon-shipin"></use>
                    </svg>
                    <svg class="icon liebiao" aria-hidden="true">
                        <use xlink:href="#icon-31liebiao"></use>
                    </svg>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapMutations} from "vuex";

    export default {
        name: "",
        props: ['musicDetail', 'subscribedCount'],
        methods:{
            changeCount(num) {
                if (num >= 100000000) {
                    return (num / 100000000).toFixed(1) + "亿";
                } else if (num >= 10000) {
                    return (num / 10000).toFixed(1) + "万"
                }
            },
            playMusic(index){
                this.updatePlayList(this.musicDetail.songs);
                this.updatePlayListIndex(index);
            },
            ...mapMutations(['updatePlayList', 'updatePlayListIndex', 'updateIsbtnShow'])
        }
    }
</script>

<style lang="less">
    .musicDetail{
      width: 100%;
      height: 10rem;
      background-color: #fff;
      padding: 0 0.2rem;
      margin-top: 0.2rem;
      border-top-left-radius: 0.4rem;
      border-top-right-radius: 0.4rem;

      .musicDetailTop {
        width: 100%;
        height: 1rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .musicDetailTopLeft {
          width: 3rem;
          height: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          .icon {
            stroke: #333333;
            stroke-width: 20;
          }
          span {
            font-weight: 700;
            span {
              font-weight: 400;
              font-size: 0.24rem;
              color: #999;
            }
          }
        }
        .musicDetailTopRight {
          display: flex;
          align-items: center;
          background-color: red;
          padding: 0.2rem;
          border-radius: 0.4rem;
          color: #fff;
          .icon {
            width: 0.3rem;
            height: 0.3rem;
            fill: #fff;
            margin-right: 0.1rem;
            stroke: #fff;
            stroke-width: 50;
          }
        }
      }

      .itemList {
        width: 100%;
        .item {
          width: 100%;
          height: 1.4rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          .itemLeft {
            width: 85%;
            height: 100%;
            display: flex;
            align-items: center;
            .leftSpan {
              display: inline-block;
              width: 0.2rem;
              text-align: center;
            }
            div {
              p {
                width: 4.54rem;
                height: .4rem;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                font-weight: 700;
              }
              span{
                font-weight: 400;
                font-size: .24rem;
                color: #999;
              }
              margin-left: 0.3rem;
            }
          }
          .itemRight{
            width: 20%;
            height: 100%;
            display: flex;
            // justify-content: space-between;
            align-items: center;
            position: relative;
            .icon{
              fill: #999;
            }
            .bofang{
              position: absolute;
              left: 0;
            }
            .liebiao{
              position: absolute;
              right: 0;
            }
          }
        }
      }
    }
</style>