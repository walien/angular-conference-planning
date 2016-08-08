'use strict';

angular.module('AngularConferencePlanning')
    .directive('event', function () {
        return {
            scope: true,
            controller: function ($scope) {
                $scope.event = $scope.$parent.$parent.event;
            }
        };
    });
