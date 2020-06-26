/**This class is automatically generated by LayaAirIDE, please do not make any modifications. */
import GameControl from "./script/GameControl"
import FallenBox from "./script/FallenBox"

export default class GameConfig {
    static init() {
        //注册Script或者Runtime引用
        let reg = Laya.ClassUtils.regClass;
		reg("script/GameControl.js",GameControl);
		reg("script/FallenBox.js",FallenBox);
    }
}
GameConfig.width = 750;
GameConfig.height = 1334;
GameConfig.scaleMode ="fixedwidth";
GameConfig.screenMode = "none";
GameConfig.alignV = "top";
GameConfig.alignH = "left";
GameConfig.startScene = "GameMain.scene";
GameConfig.sceneRoot = "";
GameConfig.debug = false;
GameConfig.stat = false;
GameConfig.physicsDebug = false;
GameConfig.exportSceneToJson = true;

GameConfig.init();
