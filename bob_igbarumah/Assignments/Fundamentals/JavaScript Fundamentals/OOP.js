var Todd = {
  name : "Todd",
  say_name : function(){ console.log("Todd");}
}

Todd.say_name();

function NewPerson(name){
  return {
    name : name,
    say_name : function(){console.log(name);}
  }
}


var jay = NewPerson("jay");
var sara = NewPerson("sara")
jay.say_name();
sara.say_name();

function Person(name){
  this.name = name;
  this.say_name = function(){console.log(name);}
}
var jimmy = new Person("jimmy");
jimmy.say_name();
