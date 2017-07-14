/**
 * Created by gumma on 7/13/2017.
 */
define(['angular', 'services'], function (angular) {
    'use strict';

    return angular.module('videoApp.controllers', ['videoApp.services'])
        .controller('videoCtrl', ['$scope', 'googleService', function ($scope, googleService) {

            $scope.login = function () {
                googleService.login().then(function (data) {

                    console.log(data.email);
                }, function (err) {
                    console.log('Failed: ' + err);
                });
            };


        }]);
});