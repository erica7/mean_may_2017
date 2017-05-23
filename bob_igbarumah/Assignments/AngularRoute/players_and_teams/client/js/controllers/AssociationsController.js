
 app.controller('AssociationsController', function($scope,playerFactory,teamFactory){
   console.log('in associations controller');
   $scope.players = [];
   $scope.teams = [];
   $scope.associations = [];

   $scope.playersIndex = function(){
     playerFactory.index(function(players){
       $scope.players = players;
     })
   }

   $scope.teamsIndex = function(){
     teamFactory.index(function(teams){
       $scope.teams = teams;

     })
   }

   $scope.addAssoc = function(player, team){
          association = {player: player, team: team}
          $scope.associations.push(association);
          console.log($scope.associations[0].player);

        }
  $scope.deleteAssociation= function(index){
          $scope.associations.splice(index, 1);
        }


 })
