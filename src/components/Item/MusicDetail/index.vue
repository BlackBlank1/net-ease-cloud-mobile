<template>
    <img :src="musicList.al.picUrl" alt="" class="bgImg">
    <div class="detailTop">
        <div class="detailTopLeft">
            <svg class="icon liebiao" aria-hidden="true">
                <use xlink:href="#icon-zuojiantou"></use>
            </svg>
            <div class="leftMarquee">
                <Vue3Marquee>{{ musicList.al.name }}</Vue3Marquee>
                <div style="display: flex; align-items: center;flex-direction: row;justify-content: center">
                    <span v-for="(item, i) in musicList.ar" :key="item">
                    {{ item.name }}
                    </span>
                    <svg class="icon liebiao" aria-hidden="true">
                        <use xlink:href="#icon-youjiantou1"></use>
                    </svg>
                </div>

            </div>
        </div>
        <div class="detailTopRight">
            <svg class="icon liebiao" aria-hidden="true">
                <use xlink:href="#icon-fenxiang"></use>
            </svg>
        </div>
    </div>
</template>

<script>
    export default {
        name: "",
        props: ['musicList'],
        mounted() {
            console.log(this.musicList)
        }
    }
</script>

<style lang="less">
  .bgImg {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -1;
    filter: blur(70px);
  }

  .detailTop {
    width: 100%;
    height: 1rem;
    display: flex;
    padding: 0.2rem;
    justify-content: space-between;
    align-items: center;
    fill: #fff;

    .detailTopLeft {
      display: flex;
      align-items: center;
      justify-content: center;

      .leftMarquee {
        width: 3rem;
        height: 100%;
        margin-left: 1.6rem;

        span {
          color: #999;
        }

        .icon {
          width: 0.3rem;
          height: 0.3rem;
          fill: #999;
        }
      }
    }
  }
</style>