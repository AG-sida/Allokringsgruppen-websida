/**
 * Created by Veronica_2 on 2015-11-16.
 */


var agApp = angular.module('agApp', ['ngRoute']);

// configure our routes
agApp.config(function($routeProvider){
    $routeProvider

        .when('/',{
            templateUrl : 'pages/start.html',
            controller : 'startController'
        })

        .when('/karta',{
            templateUrl : 'pages/karta.html',
            controller : 'kartaController'
        })
        .when('/sprak',{
            templateUrl : 'pages/customer.json',
            controller : 'sprakController'
        })
        .when('/info',{
            templateUrl : 'pages/info.html',
            controller : 'infoController'
        })
        .when('/login',{
            templateUrl : 'pages/login.html',
            controller : 'loginController'
        })
});


// create the controller and inject Angular's $scope

agApp.controller('startController', function($scope) {

    $scope.name="START";

    // create a message to display in our view
    $scope.message = 'Welcome Start';
});

agApp.controller('kartaController', function($scope) {

    $scope.name="KARTA";

    // create a message to display in our view
    $scope.message = 'Welcome Start';
});

agApp.controller('sprakController', function($scope) {

    $scope.name="SPRAK";

    // create a message to display in our view
    $scope.message = 'Welcome SPRAK';
});


agApp.controller('infoController', function($scope) {

    $scope.name="INFO";

    // create a message to display in our view
    $scope.message = 'Welcome INFO';
});


agApp.controller('loginController', function($scope) {

    $scope.name="LOGIN";

    // create a message to display in our view
    $scope.message = 'Welcome to LOGIN';
});
agApp.controller('contactController',function($scope, $http) {
    $http.get("json/customer.json")
        .success(function (response) {
            $scope.names = response.records;


        });
});