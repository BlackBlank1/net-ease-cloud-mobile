import { reqMusicItemList } from "@/api";
//search模块的小仓库
const state = {
    musicList: {
        playlist:[],
    },
};
const mutations = {
    GETMUSICITEMLIST(state, musicList){
        state.musicList = musicList;
    },
};
const actions = {
    async getMusicItem({commit},data){
        let result = await reqMusicItemList(data);
        if(result.code === 200){
            commit("GETMUSICITEMLIST", result);
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