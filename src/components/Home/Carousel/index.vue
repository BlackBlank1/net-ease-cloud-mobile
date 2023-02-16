<template>
    <div id="swiperTop">
        <van-swipe :autoplay="3000" lazy-render indicator-color="red">
            <van-swipe-item v-for="image in banners.banners" :key="image">
                <img :src="image.pic"/>
            </van-swipe-item>
        </van-swipe>
    </div>
</template>

<script>
    import {mapState} from "vuex";
    import {toRaw} from "vue";

    export default {
        name: "carousel",
        mounted() {
            this.$store.dispatch('getCarouselList');
        },
        computed:{
            ...mapState({
                banners: state => {
                    return state.Carousel.banners
                }
            })
        }
    };

</script>

<style lang="less">
  #swiperTop {
    .van-swipe {
      width: 100%;
      height: 3rem;
      margin-top: 8px;

      .van-swipe-item {
        padding: 0 0.2rem;
        img {
          width: 100%;
          height: 100%;
          border-radius: 0.15rem;
        }
      }
    }
  }
</style>