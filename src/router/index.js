import {createRouter, createWebHashHistory} from 'vue-router';
import Home from "@/views/Home/index.vue";
import ItemMusic from "@/views/ItemMusic/index.vue";

const router = createRouter({
    history: createWebHashHistory(),
    routes:[
        {
            path:"/",
            component:Home
        },
        {
            path:"/itemMusic",
            component:ItemMusic
        }
    ]
});


export default router;