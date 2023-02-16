<template>
    <div class="topNav">
        <div class="topLeft">
            <van-icon name="wap-nav" size="0.8rem"></van-icon>
        </div>
        <div class="topContent">
            <span>我的</span>
            <span class="active">发现</span>
            <span>云村</span>
            <span>视频</span>
        </div>
        <div class="topRight">
            <van-icon name="search" size="0.8rem"></van-icon>
        </div>
    </div>
</template>

<script>
    export default {
        name: "header",

    }
</script>

<style lang="less" scoped>
    .topNav{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        padding: 2px;

        .topContent{
          width: 65%;
          height: 100%;
          display: flex;
          justify-content: space-around;
          font-size: 18px;
          .active{
            font-weight: 900;
          }
        }
    }
</style>