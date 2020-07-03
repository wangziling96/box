import GameControl from "../script/GameControl";

export default class GameMain extends Laya.Scene {

    constructor() { 
        super(); 
        this._score = 0;
        GameMain.instance = this;
    }

    
    onEnable() {
        this._control = this.getComponent(GameControl);
        this.start.on(Laya.Event.CLICK,this,this.onClickStart);
    }

    onClickStart(){
        this._score = 0;
        this.scoreLab.changeText("");
        this.start.visible = false;
        this._control.startGame();
    }

    addScore(value=1){
        this._score +=value;
        this.scoreLab.text = "分数:" + this._score;
        if(this._control.createBoxInterVal > 600 && this._score % 30 == 0){
            this._control.createBoxInterVal -=20;
        }
    }

    stopGame(){
        this.start.visible = true;
        this.start.text = "游戏结束\n\n点击屏幕重新开始";
        this._control.stopGame();
    }

    onDisable() {
    }
}