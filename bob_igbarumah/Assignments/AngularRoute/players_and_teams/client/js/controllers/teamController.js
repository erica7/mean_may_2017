
 app.controller('TeamController', function($scope,teamFactory){
   console.log('got here');
   //var self = this;
   $scope.teams = [];

   $scope.indexTeam = function(){
     teamFactory.index(function(teams){
       $scope.teams = teams;
     })
   }

   $scope.addTeam = function(newTeam){
           console.log('adding a new team');
     teamFactory.create(newTeam,function(){
       console.log(newTeam);
       console.log('added team');
       $scope.indexTeam();
       $scope.newTeam = {};
     })


     $scope.remove = function(index){
       teamFactory.remove(index,function(){
         console.log('removed team');
       })
     }

     //$scope.players.push(newPlayer);

   }

 })
