// 资源文件加载器 确保图片内容完成后才进行渲染
import {Resources} from "./resources.js"
export class resourcesLoader {
    constructor(){
        this.map=new Map(Resources);
        //console.log(this.map)
        for(let [key,value] of this.map){
            const image= new Image(); //创建一个图片
            image.src=value;
            this.map.set(key,value) //把图片存到map
        }
    }
    //加载结束的方法
    onLoadEnd(callback){
        let loadCount=0;
        for (let value of this.map.values()) {
            //value.onload = () => {//值执行完了
            if(value){
                loadCount++
                if (loadCount >= this.map.size) {
                    callback(this.map)
                }
            }
        }
    }

    //静态方法
    static create(){
        return new resourcesLoader();
    }
}
