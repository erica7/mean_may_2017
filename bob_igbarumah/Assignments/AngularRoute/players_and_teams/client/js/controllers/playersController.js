
 app.controller('PlayersController', function(playerFactory,$routeParams,$location){
   console.log('got here');
   var self = this;
   self.players = [];
   self.player = {};



   self.index = function(){
     console.log('am in index');
     playerFactory.index(function(players){
       self.players = players;
     })
   }

   self.show = function(){
     console.log('AM SHOWINGcoo');
     console.log($routeParams);
     console.log($routeParams.name)
     self.player = $routeParams.name;
     playerFactory.show($routeParams.name,function(player){
       if(player== false){
            $location.url('/players')
       }else{
         self.player = player;
       }
     })
   }

   self.addPlayer = function(newPlayer){
           console.log('adding a new player');
     playerFactory.create(newPlayer,function(){
       console.log(newPlayer);
       console.log('added player');
       self.index();
       self.newPlayer = {};
     })




    self.remove = function(index){
      playerFactory.remove(index,function(){
        console.log('removed player');
      })
    }


    // $scope.show();
    // $scope.index();
     //$scope.players.push(newPlayer);

   }

 })
