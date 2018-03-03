//导演类，控制游戏的逻辑
export class director {
    constructor(){
        console.log("我只执行一次")
    }

    //优雅的写一个单例模式
    static getInstance() {
        if (!director.instance) {
            director.instance = new director();
        }
        return director.instance;
    }
}
