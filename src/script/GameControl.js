export default class GameControl extends Laya.Script {
    /** @prop {name:fallenBox,tips:"掉落容器预制体对象",type:Prefab}*/
    /**  @prop {name:bullet,tips:"子弹预制体对象",type:Prefab}*/
    constructor() { 
        super(); 
    }
    
    onEnable() {
        this.createBoxInteral=1500;
        this._started = false;
        this._gameBox = this.owner.getChildByName("gameBox");
        this._time = Date.now();
        this._createBoxInterVal = this.createBoxInteral;
    }

    onStart(){
        let _boxCollider = (this.owner.getChildByName("ground")).getComponent(Laya.BoxCollider);
        _boxCollider.width=Laya.stage.width;
    }

    onUpdate(){
        let now = Date.now();
        if(now-this._time>this.createBoxInteral && this._started){
            this.createBox();
            this._time=now;
        }
    }

    onStageClick(){
        let _bullet = Laya.Pool.getItemByCreateFun("bullet",this.bullet.create,this.bullet);//名字、预置体、执行域
        _bullet.pos(Laya.stage.mouseX,Laya.stage.mouseY);

        this._gameBox.addChild(_bullet);
    }

    createBox(){
        let box=Laya.Pool.getItemByCreateFun("fallenBox",this.fallenBox.create,this.fallenBox);
        box.pos(Math.random()*(Laya.stage.width-100),-100);

        this._gameBox.addChild(box);
    }

    startGame(){
        if(!this._started){
            this._started = true;
        }
    }

    stopGame(){
        this._started = false;
        this._gameBox.removeChildren();
        
        this.createBoxInteral = this._createBoxInteral;
    }

    onDisable() {
    }
}