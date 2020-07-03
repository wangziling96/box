export default class BoxBurstAni extends Laya.Script {
    constructor() { 
        super(); 
    }

    onEnable(){
        this.owner.on(Laya.Event.COMPLETE,this,()=>{
            this.owner.removeSelf();
        })
    }

    onDisable(){
        Laya.Pool.recover("boxBurst",this.owner);
    }

}