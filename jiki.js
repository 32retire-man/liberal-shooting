//
//jiki.js 自機関連
//

//弾クラス
class Tama extends CharaBase {
  constructor(x, y, vx, vy) {
    super(5, x, y, vx, vy);
    // this.w = 20;
    // this.h = 20;
    this.r = 10;
  }

  update() {
    super.update();

    for(let i=0; i<teki.length; i++) {
      if(!teki[i].kill) {
        if(checkHit(
          this.x, this.y, this.r,
          teki[i].x, teki[i].y, teki[i].r
        )) {
          this.kill = true;

          if( (teki[i].hp -= 10) <=0) {
            teki[i].kill=true;
            score += teki[i].score;
            give.push(new Give(9,
              teki[i].x, teki[i].y,
              teki[i].vx>>3, teki[i].vy>>3));
          }

          if(teki[i].mhp>=1000) {
            bossHP = teki[i].hp;
            bossMHP = teki[i].mhp;
          }

          break;
        }
      }
    }
  }

  draw() {
    super.draw();
  }
}

//自機クラス
class Jiki {
  constructor() {
    this.x = (FIELD_W/2)<<8;
    this.y = (FIELD_H -50)<<8;(FIELD_H/2)<<8;
    this.mhp = 100;
    this.hp = this.mhp;
    this.speed = 512;
    this.anime = 0;
    this.reload = 0;
    this.relo2 = 0;
    this.r = 10;
    this.damege = 0;
    this.muteki = 0;
    this.count = 0;
  }

  update(){
    this.count++;
    if(this.damage) this.damage--;
    if(this.muteki) this.muteki--;

    if(key[32] && this.reload==0) {
      tama.push(new Tama(this.x, this.y, 0, -1000));
      this.reload=10;
      if(++this.relo2 == 15) {
        this.reload=50;
        this.relo2=0;
      }
    }
    if(!key[32]) this.reload = this.relo2 = 0;

    if(this.reload>0) this.reload--;

    if(key[37] && this.x>this.speed) {
      this.x -= this.speed;
      if(this.anime>-16) this.anime--;
    } else if(key[39] && this.x<=(FIELD_W<<8)) {
      this.x += this.speed;
      if(this.anime<16) this.anime++;
    } else {
      if(this.anime>0) this.anime--;
      if(this.anime<0) this.anime++;
    }


    if(key[38] && this.y>this.speed) this.y -= this.speed;
    if(key[40] && this.y<=(FIELD_H<<8)-this.speed) this.y += this.speed;

  }

  draw(){
    if(this.muteki && (this.count&1)) return;
    drawRyo(2+(this.anime>>3), this.x, this.y);
  }
}
