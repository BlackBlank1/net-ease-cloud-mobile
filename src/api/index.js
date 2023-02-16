//当前这个模块：API进行统一管理
import requests from "./request";

export const reqBannerList = () => {
    //获取轮播图数据
    return requests({url:"/banner?type=2", method:"get"});
}

export const reqRecommendList = () => {
    //获取推荐歌单数据
    return requests({url:"/personalized?limit=10", method:"get"});
}

//以下均为获取推荐歌单数据
export const reqMusicItemList = (data) => {
    //获取推荐歌单数据
    return requests({url:'/playlist/detail?id=' + data, method:"get"});
}
export const reqMusicDetailList = (data) => {
    //获取推荐歌单数据
    return requests({url:'/playlist/track/all?id=' + data + '&limit=20&offset=0', method:"get"});
}

