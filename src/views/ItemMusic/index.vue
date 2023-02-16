<template>
    <ItemMusicTop :playList="musicList.playlist"></ItemMusicTop>
    <MusicDetail :musicDetail="musicDetailList" :subscribedCount="musicList.playlist.subscribedCount"></MusicDetail>
</template>

<script>
    import {useRoute} from "vue-router";
    import {mapState} from "vuex";

    import ItemMusicTop from "@/components/Item/ItemMusicTop/index.vue";
    import MusicDetail from "@/components/Item/ItemMusicList/index.vue";

    export default {
        name: "",
        mounted() {
            this.$store.dispatch('getMusicItem', useRoute().query.id)
            this.$store.dispatch('getMusicDetailList', useRoute().query.id)
        },
        computed:{
            ...mapState({
                musicList: (state) => {
                    return state.MusicItem.musicList
                },
                musicDetailList: (state) => {
                    return state.MusicDetailItem.musicDetailList
    }
            })
        },
        components:{
            ItemMusicTop,
            MusicDetail,
        }
    }
</script>

<style lang="less">

</style>