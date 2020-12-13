//
//data.js 両学長データとか
//

//敵マスター
class TekiMaster {
  constructor(tnum, r, hp, score) {
    this.tnum = tnum;
    this.r = r;
    this.hp = hp;
    this.score = score;
  }
}

let tekiMaster = [
  new TekiMaster(0, 15, 1, 100), //小テイ蚊ー
  new TekiMaster(1, 60, 1000, 10000), //ボステイ蚊ー
];

//両学長クラス
class Ryo {
  constructor(x,y,w,h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }
}

//両学長
let ryo = [
  new Ryo(0,0,50,60), //0 学長左移動
  new Ryo(0,0,50,60), //1 学長左移動
  new Ryo(50,0,55,60), //2 学長正面
  new Ryo(105,0,45,60), //3 学長右移動
  new Ryo(105,0,45,60), //4 学長右移動

  new Ryo(0,60,20,25), //5 弾

  new Ryo(0,100,130,120), //6 ボステイ蚊ー
  new Ryo(0,245, 45, 45), //7 小テイ蚊ー

  new Ryo(48,230,7,7), //8 小テイ蚊ー弾
  new Ryo(65,250,25,12) //9 GIVE化
];
