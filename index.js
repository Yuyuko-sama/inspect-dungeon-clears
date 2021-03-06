'use strict'

module.exports = function InspectDungeonClears(mod) {
    
    const DungeonNames = {
        9044: "巴哈勒神殿",
		9982: "扭曲的里安地下殿堂",
		9782: "里安的地下殿堂",
		9920: "空洞的安塔洛斯深淵",
		9983: "漆黑的泰內布利斯城堡",
		9950: "破壞的神界關口",
		//9068: "暴君杜利溫的安息地",
		9720: "安塔洛斯深淵",
        9783: "泰內布利斯城堡",
		9935: "終極RK-9 機庫",
		9939: "森嚴的革命團總部",
		9970: "超越的拉坎里斯的廢墟",
		//9066: "岱魔魯斯的輪盤",
        //9070:"吹牛王塔勒斯基的遊樂場",
		9710: "扭曲的拉坎祭壇",
        9716: "艾爾凱拉斯號",
        9735: "RK-9 機庫",
		9739: "革命團總部",
		//9768: "杜利溫的安息地",
        9770: "拉坎里斯的廢墟",
        9969: "惡女莉里斯城",
        9994: "阿爾法賽伊洛斯研究基地"
        //9760: "凱利班突擊船",
        //9769: "莉里斯城",
        //9794: "賽伊洛斯研究基地",
        //9055: "哈露奇亞的安息地",
        //9766: "赤紅海團的陷阱",
        //9860: "弱化凱利班突擊船",
        //9809: "戴蒙克隆實驗室",
        //9808: "阿克德法武器庫",
        //9025: "博得神殿",
        //9026: "阿勒坤魅迪提亞",
        //9727: "珊德拉馬奈伊亞",
		
		
    };
    
    let playerId,
    targetName;
    
    mod.hook('S_LOGIN', 12, (event) => {
        playerId = event.playerId;
    });
    
    mod.hook('C_DUNGEON_CLEAR_COUNT_LIST', 1, (event) => {
        targetName = event.name;
    });
        
    mod.hook('S_DUNGEON_CLEAR_COUNT_LIST', 1, (event) => {
        if (playerId === event.pid) return;
        
        mod.command.message(' ' + targetName + '\'s Dungeon Clears...');
        for (let i = 0; i < event.dungeons.length; i++) {
            if (DungeonNames[event.dungeons[i].id]) {
                mod.command.message(' ' + DungeonNames[event.dungeons[i].id] + '\t\t' + event.dungeons[i].clears);
            }
        }
    });
}
