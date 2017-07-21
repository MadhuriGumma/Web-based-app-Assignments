/**
 * Created by gumma on 7/19/17.
 */
var myapp = angular.module('app',[]);
myapp.run(function ($http) {
    // Sends this header with any AJAX request
    $http.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
    // Send this header only in post requests. Specifies you are sending a JSON object
    $http.defaults.headers.post['dataType'] = 'json'
});

myapp.controller('stuCtrl',function($scope,$http){
    $scope.addStudent = function(){
        console.log($scope.lastName);

        var dataParams = {
            'lastName' : $scope.lastName,
            'firstName' : $scope.firstName,
            'email' : $scope.email,
            'GPA' : $scope.GPA,
            'Address':$scope.Address,
            'phNumber': $scope.phNumber
        };
        var config = {
            headers : {
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
            }
        };
        var req = $http.post('http://127.0.0.1:8081/create',dataParams);
        req.success(function(data, status, headers, config) {
            $scope.message = data;
            console.log(data);
        });
        req.error(function(data, status, headers, config) {
            alert( "failure message: " + JSON.stringify({data: data}));
        });
    };
});


myapp.controller('indexCtrl',function($scope,$http){

    $scope.getData=function(){
        var req = $http.get('http://127.0.0.1:8081/get');
        req.success(function(data, status, headers, config) {
            $scope.stuList = data;
            console.log(data);
        });
        req.error(function(data, status, headers, config) {
            alert( "failure message: " + JSON.stringify({data: data}));
        });

    };

    $scope.delete = function(id,callback){

        $http.get('http://127.0.0.1:8081/delete/'+id)
            .success(function(data){
                console.log("Successfully deleted");
                $scope.getData();
            });
    };


    $scope.update = function(student,callback){

        $http.get('http://127.0.0.1:8081/update/'+student._id,{params:student})
            .success(function(data){
                console.log("Successfully updated");
                $scope.getData();
            });
    }

});

