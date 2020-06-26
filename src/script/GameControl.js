export default class GameControl extends Laya.Script {
    /** @prop {name:fallenBox,tips:"掉落容器预制体对象",type:Prefab}*/
    constructor() { 
        super(); 
    }
    
    onEnable() {
        this.createBoxInteral=1500;
        this._gameBox = this.owner.getChildByName("gameBox");
        this._time = Date.now();
        
    }

    onUpdate(){
        let now = Date.now();
        if(now-this._time>this.createBoxInteral){
            this.createBox();
            this._time=now;
        }
    }

    createBox(){
        let box=Laya.Pool.getItemByCreateFun("fallenBox",this.fallenBox.create,this.fallenBox);
        box.pos(Math.random()*(Laya.stage.width-100),-100);

        this._gameBox.addChild(box);
    }

    onDisable() {
    }
}