<template>
    <img :src="musicList.al.picUrl" alt="" class="bgImg">
    <div class="detailTop">
        <div class="detailTopLeft">
            <svg class="icon liebiao" aria-hidden="true" @click="backHome">
                <use xlink:href="#icon-zuojiantou"></use>
            </svg>
            <div class="leftMarquee">
                <Vue3Marquee>{{ musicList.name }}</Vue3Marquee>
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
    <div class="detailContent" v-if="!isLyricShow" @click="changeLyricShow">
        <img src="@/assets/needle-ab.png" alt="" class="img_needle" :class="{img_needle_active:!isbtnShow}">
        <img src="@/assets/cd.png" alt="" class="img_cd">
        <img :src="musicList.al.picUrl" alt="" class="img_ar"
             :class="{ img_ar_active: !isbtnShow, img_ar_pauesd: isbtnShow }">
    </div>
    <div class="musicLyric" v-else @click="changeLyricShow" ref="musicLyric">
        <p v-for="item in lyric" :key="item" :class="{active:(currentTime*1000>=item.time&&currentTime*1000<item.pre)}">
            {{ item.lrc }}
        </p>
    </div>
    <div class="detailFooter">
        <div class="footerTop">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-aixin"></use>
            </svg>
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-iconfontzhizuobiaozhun023146"></use>
            </svg>
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-yinlechangpian"></use>
            </svg>
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-iconfontzhizuobiaozhun023110"></use>
            </svg>
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-liebiao-"></use>
            </svg>
        </div>
        <div class="footerContent">
            <input type="range" class="range" min="0" :max="duration" v-model="currentTime" step="0.05">
        </div>
        <div class="footer">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-xunhuan"></use>
            </svg>
            <svg class="icon" aria-hidden="true" @click="goPlay(-1)">
                <use xlink:href="#icon-shangyishoushangyige"></use>
            </svg>
            <svg class="icon bofang" aria-hidden="true" v-if="isbtnShow" @click="play">
                <use xlink:href="#icon-bofang1"></use>
            </svg>
            <svg class="icon bofang" aria-hidden="true" v-else @click="play">
                <use xlink:href="#icon-zanting"></use>
            </svg>
            <svg class="icon" aria-hidden="true" @click="goPlay(1)">
                <use xlink:href="#icon-xiayigexiayishou"></use>
            </svg>
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-zu"></use>
            </svg>
        </div>
    </div>
</template>

<script>
    import {mapMutations, mapState} from "vuex";

    export default {
        name: "",
        data() {
            return {
                isLyricShow: false,
            };
        },
        props: ['musicList', 'play', 'isbtnShow', 'lyricList', 'playList', 'playListIndex', 'addDuration'],
        mounted() {
            this.addDuration();
        },
        methods: {
            ...mapMutations(['updateDetailShow', 'updatePlayListIndex']),
            changeLyricShow() {
                this.isLyricShow = !this.isLyricShow;
            },
            backHome() {
                this.updateDetailShow();
                this.isLyricShow = false;
            },
            goPlay(num) {
                let index = this.playListIndex + num;
                if (index < 0) {
                    index = this.playList.length - 1;
                } else if (index === this.playList.length) {
                    index = 0;
                }
                this.updatePlayListIndex(index);
            }
        },
        computed: {
            lyric() {
                let arr;
                if (this.lyricList.lyric) {
                    arr = this.lyricList.lyric.split(/[(\r\n)\r\n]+/).map((item, i) => {
                        let min = item.slice(1, 3);
                        let sec = item.slice(4, 6);
                        let mill = item.slice(7, 10);
                        let lrc = item.slice(11, item.length);
                        let time = parseInt(min) * 60 * 1000 + parseInt(sec) * 1000 + parseInt(mill);
                        if (isNaN(Number(mill))) {
                            mill = item.slice(7, 9);
                            lrc = item.slice(10, item.length);
                            time = parseInt(min) * 60 * 1000 + parseInt(sec) * 1000 + parseInt(mill);
                        }
                        return {min, sec, mill, lrc, time}
                    });
                    arr.forEach((item, i) => {
                        if (i === arr.length - 1 || isNaN(arr[i + 1].time)) {
                            item.pre = 100000;
                        } else {
                            item.pre = arr[i + 1].time;
                        }
                    })
                }
                return arr;
            },
            ...mapState({
                duration: state => {
                    return state.MusicList.duration;
                },
                currentTime: state => {
                    return state.MusicList.currentTime;
                },
            })
        },
        watch: {
            currentTime(newValue) {
                let p = document.querySelector("p.active");
                // console.log([p]);
                if (p) {
                    if (p.offsetTop > 300) {
                        this.$refs.musicLyric.scrollTop = p.offsetTop - 300;
                    }
                }

                if (newValue === this.duration) {
                    if (this.playListIndex === this.playList.length - 1) {
                        this.updatePlayListIndex(0);
                        this.play();
                    } else {
                        this.updatePlayListIndex(this.playListIndex + 1);
                    }
                }
            }
        }
    }
</script>

<style lang="less">
  .bgImg {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -1;
    filter: blur(60px);
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
          color: black;
        }

        .icon {
          width: 0.3rem;
          height: 0.3rem;
          fill: #999;
        }
      }
    }
  }

  .detailContent {
    width: 100%;
    height: 9rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;

    .img_needle {
      width: 2rem;
      height: 3rem;
      position: absolute;
      left: 46%;
      transform-origin: 0 0;
      transform: rotate(-13deg);
      transition: all 2s;
    }

    .img_needle_active {
      width: 2rem;
      height: 3rem;
      position: absolute;
      left: 46%;
      transform-origin: 0 0;
      transform: rotate(0deg);
      transition: all 2s;
    }

    .img_cd {
      width: 5rem;
      height: 5rem;
      position: absolute;
      bottom: 2.3rem;
      z-index: -1;
    }

    .img_ar {
      width: 3.2rem;
      height: 3.2rem;
      border-radius: 50%;
      position: absolute;
      bottom: 3.14rem;
      animation: rotate_ar 10s linear infinite;
    }

    .img_ar_active {
      animation-play-state: running;
    }

    .img_ar_pauesd {
      animation-play-state: paused;
    }

    @keyframes rotate_ar {
      0% {
        transform: rotateZ(0deg);
      }
      100% {
        transform: rotateZ(360deg);
      }
    }
  }

  .musicLyric {
    width: 100%;
    height: 8rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 0.7rem;
    overflow: scroll;

    p {
      color: rgb(190, 181, 181);
      margin-bottom: 0.5rem;
    }

    .active {
      color: #fff;
      font-size: 0.3rem;
    }
  }

  .detailFooter {
    width: 100%;
    height: 3rem;
    position: absolute;
    bottom: 0.2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .footerTop {
      width: 100%;
      height: 1rem;
      display: flex;
      justify-content: space-around;
      align-items: center;

      .icon {
        width: 0.36rem;
        height: 0.36rem;
        fill: rgb(245, 234, 234);
      }

      .icon {
        width: 0.6rem;
        height: 0.6rem;
      }
    }

    .range {
      width: 100%;
      height: 0.06rem;
    }

    .footer {
      width: 100%;
      height: 1rem;
      display: flex;
      justify-content: space-around;
      align-items: center;

      .icon {
        fill: rgb(245, 234, 234);
      }

      .bofang {
        width: 1rem;
        height: 1rem;
      }
    }
  }
</style>