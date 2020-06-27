import GameControl from "../script/GameControl";

export default class GameMain extends Laya.Scene {

    constructor() { 
        super(); 
    }
    
    onEnable() {
        this._control = this.getComponent(GameControl);
        this.start.on(Laya.Event.CLICK,this,this.onClickStart);
    }

    onClickStart(){
        this.start.visible = false;
        this._control.startGame();
    }

    onDisable() {
    }
}