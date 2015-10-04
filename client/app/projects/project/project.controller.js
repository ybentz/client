'use strict';

angular.module('civicMakersClientApp')
  .controller('ProjectCtrl', function ($scope, $routeParams, ProjectApi, ProjectComponentApi) {

    console.log("routeParams",$routeParams);

    $scope.project = {};
    ProjectApi.queryProject($routeParams.projectID)
      .then(function(project){
        $scope.project = project;
      });

    //Todo: replace dummyId with what comes in project api response. Create promise chain
    $scope.projectComponent = ProjectComponentApi.queryProjectComponent(123);
  });
