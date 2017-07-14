/**
 * Created by gumma on 7/10/2017.
 */

angular.module('videoApp',[])

    .controller('trackCtrl', function($scope,$http){

        $scope.trackList = new Array();
        $scope.getTracks = function(){

            var choice = document.getElementById("txt_audVid").value;
            var searchText = document.getElementById("txt_searchFilter").value;
            if(choice != null && choice != "" && searchText != null && searchText != ""){
                var handler = $http.post("https://www.freesound.org/apiv2/search/?" +

                    "token=PuFbIqn2WZGHSF1leogJctrTk5cWHje5WwcXR5If?query=" + searchText);
                handler.success(function(data){
                    if (data != null && data.response != null && data.response.venues != undefined && data.response.venues != null) {

                    }
                })
            }
        }

    })
function init() {
    window.initGapi(); // Calls the init function defined on the window
}
angular.module('videoApp')
    .controller('videoCtrl', function ($scope, $window, $sce, googleService) {

        $window.initGapi = function() {
            $scope.$apply($scope.getChannel);
        };

        $scope.getChannel = function () {
            googleService.googleApiClientReady().then(function (data) {
                $scope.channel = data;
            }, function (error) {
                console.log('Failed: ' + error)
            });
        };
    });