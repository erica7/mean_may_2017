app.factory('teamFactory',function(){
  var factory = {};
var  teams = [
  {name:"Seahawks"},
      {name:"49ers"},
      {name:"Honeybadgers"}
];

  factory.create = function(newTeam,callback){
    console.log('creating in  team factory');
     teams.push(newTeam);
     callback();
  }

  factory.index = function(callback){
    console.log('getting all users in factory');
    callback(teams);
  }

  factory.remove = function(index,callback){
    teams.splice(index,1);
    callback();
  }

return factory;
})
