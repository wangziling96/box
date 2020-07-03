export default class FallenBox extends Laya.Script {

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
            }else{
                if(this.owner.parent){
                    this.owner.removeSelf();
                    this.owner.getChildByName("destroy").play();
                }
            }

        }else if(other.label == "ground"){
            this.owner.removeSelf();
            console.log("box --- ground");
        }
    }

    onDisable() {
        Laya.Pool.recover("fallenBox",this.owner);
    }
}