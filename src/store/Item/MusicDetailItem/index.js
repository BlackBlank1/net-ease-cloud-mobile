import { reqMusicDetailList } from "@/api";
const state = {
    musicDetailList: {
        songs: [],
    },
};
const mutations = {
    GETMUSICDETAILLIST(state, musicDetailList){
        state.musicDetailList = musicDetailList;
    },
};
const actions = {
    async getMusicDetailList({commit},data){
        let result = await reqMusicDetailList(data);
        if(result.code === 200){
            commit("GETMUSICDETAILLIST", result);
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