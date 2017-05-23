app.factory('playerFactory',function(){
  var factory = {};
  players = [
    {name:"Speros", team:"Seahawks"},
    {name:"Jimmy", team:""},
    {name:"Jay", team:""},
    {name:"Kris", team:"49ers"}
  ];

  factory.create = function(newPlayer,callback){
    console.log('creating in factory');
     players.push(newPlayer);
     callback();
  }

  factory.index = function(callback){
    console.log('getting all users in factory');
    callback(players);
  }

  factory.remove = function(index,callback){
    players.splice(index,1);
    callback();
  }
  factory.show = function(name,callback){
    console.log("got to show")
    console.log(name)
    for(var i = 0; i <players.length; i++){
      if(players[i].name == name){
        callback(players[i]);
        return;
      }
    }
    callback(false);
  }

return factory;
})
