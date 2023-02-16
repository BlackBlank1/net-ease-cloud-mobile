<template>
    <Header></Header>
    <Carousel></Carousel>
    <IconList></IconList>
    <MusicList></MusicList>
</template>

<script>
    import Header from "@/components/Home/Header/index.vue";
    import Carousel from "@/components/Home/Carousel/index.vue";
    import IconList from "@/components/Home/IconList/index.vue";
    import MusicList from "@/components/Home/MusicList/index.vue";
    export default {
        name: "Home",
        components:{
            Header,
            Carousel,
            IconList,
            MusicList
        }
    }
</script>

<style scoped>

</style>