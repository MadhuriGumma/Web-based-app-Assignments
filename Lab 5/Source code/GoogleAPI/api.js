
angular.module("GoogleApp", ['uiGmapgoogle-maps'])
    .controller("PlaceCtrl", function($scope, $interval) {
        $scope.map = {
            center: {
                latitude: 56.162939,
                longitude: 10.203921
            },

            zoom: 8
        };
    })
    .controller("WeatherCtrl", function($scope){
        $scope.gPlace;
    });


GoogleApp.directive('googleplace', function() {
    return {
        require: 'ngModel',
        link: function(scope, element, attrs, model) {
            var options = {
                types: [],
                componentRestrictions: {}
            };
            scope.gPlace = new google.maps.places.Autocomplete(element[0], options);

            google.maps.event.addListener(scope.gPlace, 'place_changed', function() {
                scope.$apply(function() {
                    model.$setViewValue(element.val());
                });
            });
        }
    };
});


