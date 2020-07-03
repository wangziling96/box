import GameMain from "../runtime/GameMain";

export default class FallenBox extends Laya.Script {
    /** @prop {name:boxBurst,tips:"盒子爆炸动画",type:Prefab}*/
    constructor() { 
        super(); 
    }
    
    onEnable() {
        this.level = Math.round(Math.random()*5) + 1;
        this._text = this.owner.getChildByName("levelText");
        this._text.text = this.level + "";
    }

    onUpdate(){
        this.owner.rotation++;
    }

    onTriggerEnter(other){
        if(other.label == "bullet"){
            if(this.level>1){
                this.level --;
                this._text.changeText(this.level + "");
                this.owner.getChildByName("hit").play();
                this.owner.getComponent(Laya.RigidBody).linearVelocity = {x:0,y:-10};
            }else{
                if(this.owner.parent){
                    let _boxBurstAni = Laya.Pool.getItemByCreateFun("boxBurst",this.boxBurst.create,this.boxBurst);
                    _boxBurstAni.pos(this.owner.x,this.owner.y);
                    this.owner.parent.addChild(_boxBurstAni);
                    _boxBurstAni.play();
                    this.owner.removeSelf();
                    this.owner.getChildByName("destroy").play();
                }
            }
            GameMain.instance.addScore();

        }else if(other.label == "ground"){
            this.owner.removeSelf();
            GameMain.instance.stopGame();
        }
    }

    onDisable() {
        Laya.Pool.recover("fallenBox",this.owner);
    }
}