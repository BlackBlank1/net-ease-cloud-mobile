import { reqBannerList } from "@/api";
//search模块的小仓库
const state = {
    banners: {
        banners:[]
    },
};
const mutations = {
    GETBANNERSLIST(state, banners){
        state.banners = banners;
    },
};
const actions = {
    async getCarouselList({commit}){
        let result = await reqBannerList();
        if(result.code === 200){
            commit("GETBANNERSLIST", result);
        }
    }
};

//getters简化数据
const getters = {

};
export default {
    state,
    mutations,
    actions,
    getters
}