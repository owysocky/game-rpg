import Player from './../src/player';

export default class Wizzard extends Player{
  constructor(name, health, strength, iq, speed, manna){
    super(name, health, strength, iq, speed);
    this.manna = manna;
  }

  getSpeed(){
    return this.speed;
  }

  expeliomus(player){
    return player.health -= 20;
  }

  hangItself(){
    return this.health = 0;
  }

}
