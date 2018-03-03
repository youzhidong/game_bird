//作为游戏开始的入口
import {resourcesLoader} from "./js/base/resourcesLoader.js";
import {director} from "./js/director.js"

 export class Main {
	constructor(){
         console.log("我要执行了");
        // new resourcesLoader();
        this.canvas=document.getElementById("game_yx");
        this.ctx=this.canvas.getContext("2d");
        const loader = resourcesLoader.create();
        loader.onLoadEnd( map =>  this.firstLoader(map))

        director.getInstance();
    }

     firstLoader(map){
        console.log(map)
     }
}