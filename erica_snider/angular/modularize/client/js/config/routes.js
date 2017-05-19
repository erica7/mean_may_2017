app.config(function($routeProvider) {
  $routeProvider
    .when('/index', {
      templateUrl: 'partials/index.html',
      controller: 'indexController as iC'
    })
    .when('/edit/:id', {
      templateUrl: '/partials/edit.html',
      controller: 'editController',
      controllerAs: 'eC'
    })
    .when('/new', {
      templateUrl: '/partials/new.html',
      controller: 'newController',
      controllerAs: 'nC'
    })
    .otherwise({
      redirectTo: '/index'
    });
});
