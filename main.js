'use strict';

var app = angular.module('myApp',[]);

app.controller("mainCtrl", function ($scope,$interval) {
  $scope.name = "Muhamamd";
  $scope.count = 0;
  $scope.names = ["dude","bob"];

  $scope.addName = function () {
    if($scope.user){

      $scope.names.push($scope.user);
      console.log($scope.user);
      $scope.user = "";
    }
  }

  // $scope.addTOCount = function () {
  //   $scope.count++;

  // }




  // $interval(()=>{
  //   $scope.count++;
  // },1000)

});
