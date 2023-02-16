import { reqRecommendList } from "@/api";
//search模块的小仓库
const state = {
    recommend: {
        result:[]
    },
};
const mutations = {
    GETRECOMMENDLIST(state, recommend){
        state.recommend = recommend;
    },
};
const actions = {
    async getRecommendList({commit}){
        let result = await reqRecommendList();
        if(result.code === 200){
            commit("GETRECOMMENDLIST", result);
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