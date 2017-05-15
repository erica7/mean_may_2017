function createPerson(name){
  var person = {}
  person.name = name,
  person.distance_traveled = 0,
  person.say_name = function(){
    console.log(person.name);
  },
  person.say_something = function(parm){
    console.log(`${person.name} says: ${phrase}`);
  },
  person.walk = function(){
    console.log(`${person.name} is walking!`);
    person.distance_traveled += 3;
    return person;
  },
  person.run = function(){
    console.log(`${person.name} is running!`);
    person.distance_traveled += 10;
    return person;
  },
  person.crawl = function(){
    console.log(`${person.name} is crawling!`);
    person.distance_traveled += 1;
    return person;
  },
  person.chewGum = function(){
    console.log("I can walk and chew gum, but I can't chew gum and walk...");
  }
  return person
}


person1 = createPerson('piff');
console.log(person1)
person1.walk().run()
console.log(person1)


/* This is not the only way to do this.
  Specifically: the beltArray, and the levelUp strategy.
  Notice that the function returns an object literal and to reference/update internal object pieces we call the object by name.
*/
function ninjaConstructor(name, cohort){
  var ninja = {}
  var belts = ["yellow", "red", "black"]
  ninja.name = name;
  ninja.cohort = cohort;
  ninja.beltLevel = 0;
  ninja.levelUp = function(){
    if (ninja.beltLevel < 2){
      ninja.beltLevel += 1;
      ninja.belt = belts[ninja.beltLevel];
    }
    return ninja
  }
  ninja.belt = belts[ninja.beltLevel];
  return ninja;
}
