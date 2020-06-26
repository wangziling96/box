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

    onDisable() {
    }
}