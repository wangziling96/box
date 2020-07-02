export default class Bullet extends Laya.Script{
    constructor(){
        super();
    }

    onEnable(){

    }

    onTriggerEnter(){
        this.owner.removeSelf();
    }

    onUpdate(){
        if(this.owner.y < -10){
            this.owner.removeSelf();
        }
    }

    onDisable(){
        Laya.Pool.recover("bullet",this.owner);
    }
}
