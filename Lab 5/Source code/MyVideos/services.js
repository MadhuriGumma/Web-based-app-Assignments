/**
 * Created by gumma on 7/13/2017.
 */
define(['angular'], function (angular) {
    'use strict';

    angular.module('videoApp.services', [])
        .service('googleService', ['$http', '$q', function ($http, $q) {

            var deferred = $q.defer();
            this.googleApiClientReady = function () {
                gapi.client.setApiKey('AIzaSyAqbMe4QREEKtrgFmPn2stk_zD7KmeQRP0');
                gapi.client.load('youtube', 'v3', function () {
                    var request = gapi.client.youtube.playlistItems.list({
                        part: 'snippet',

                        maxResults: 8
                    });
                    request.execute(function (response) {
                        deferred.resolve(response.result);
                    });
                });
                return deferred.promise;
            };
        }])
});