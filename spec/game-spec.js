import Player from './../src/player';
import Wizzard from './../src/wizzard';

describe('Player', function() {

  it('should test weather player can get health', function(){
    let wiz = new Player("Khhool", 100, 88, 50, 30);
    expect(wiz.getHealth()).toEqual(100);
  });
});

describe('Wizard', function() {

  it('should test weather wizzard can get health',
 function(){
    let wiz = new Wizzard("Khhool", 100, 88, 50, 30, 100);
    expect(wiz.getHealth()).toEqual(100);
  });

  it('should test weather wizzard can loose heaelth', function(){
    let wiz = new Wizzard("Khhool", 100, 88, 50, 30, 100);
    expect(wiz.looseHealth()).toEqual(90);
  });

  it('should test weather wizzard have speeed',
  function(){
    let wiz = new Wizzard("Khhool", 100, 88, 50, 30, 100);
    expect(wiz.getSpeed()).toEqual(30);
  });

  it('should test weather wizzard can do magic on heaelth', function(){
    let wiz = new Wizzard("Khhool", 100, 88, 50, 30, 100);
    let war = new Player("Knight", 100, 88, 50, 30);
    expect(wiz.expeliomus(war)).toEqual(80);
  });

  it('should test weather wizzard is smart', function(){
    let wiz = new Wizzard("Khhool", 100, 88, 78, 78, 100);
    expect(wiz.isSmart()).toEqual("smart");
  });

  it('should test weather wizzard is smart', function(){
    let wiz = new Wizzard("Dead", 100, 88, 78, 78, 100);
    expect(wiz.hangItself()).not.toEqual(1);
  });

});
