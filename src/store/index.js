//引入小仓库
import Carousel from "@/store/Carousel";
import Recommend from "@/store/Recommend";
import MusicItem from "@/store/Item/MusicItem";
import MusicDetailItem from "@/store/Item/MusicDetailItem";
import MusicList from "@/store/Item/MusicList";
import {createStore} from "vuex";

//对外暴露store类的一个实例
export default createStore({
    modules:{
        Carousel,
        Recommend,
        MusicItem,
        MusicDetailItem,
        MusicList,
    }
});