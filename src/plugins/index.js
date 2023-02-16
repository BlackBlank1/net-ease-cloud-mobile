//集中管理
import { Swipe, SwipeItem, Icon, Button, Popup} from "vant";

let plugins = [
    Swipe,SwipeItem,Icon,Button,Popup
]
export default function getVant(app){
    plugins.forEach(item => {
        return app.use(item);
    })
}