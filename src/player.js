export default class Player {
  constructor(name, health, strength, iq, speed){
    this.name = name;
    this.health = health;
    this.strength = strength;
    this.iq = iq;
    this.speed = speed;
  }

  getHealth(){
    return this.health;
  }

  looseHealth(){
    return this.health -= 10;
  }

  isAlive(){
    if(this.health <= 0){
      this.health = 0;
      return false;
    }
  }

  isSmart(){
    if(this.iq >=75){
      return "smart";
    }else{
      return "stupid";
    }
  }

}
