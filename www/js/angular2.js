angular
.module('App', [])
.controller('LoginConController', ['$scope', function($scope){
    $scope.done = '';
}])

.directive('loadingBtn', ['$timeout', function($timeout){
    return {
        link: function(scope, element, attrs) {
            element.bind('click', function(){
                if(scope.loading == true || scope.done == 'done') {
                    return;
                }
                scope,loading = true;
                element.addClass('loading');
                timeoutId = $timeout(function () {
                    scope.loading = false;
                    element.removeClass('loading');
                    scope.done = 'done';
                }, 2000);
            });
        }
    };
}]);




function login(){
    var id = document.getElementById("user").value;
    var passwd = document.getElementById("passwd").value;
    $.ajax({
        datatype: "JSON",
        type: "POST",
        url: "http://210.70.80.21/~s107021154/login.php",
        data: "userName=" +id + "&userPassword=" + passwd + "&lon=" +localStorage.lon + "&lat=" + localStorage.lat,
        crossDomain: true,
        cache: false,
        success: function(data){
            var obj = JSON.parse(data);
            if(obj.status == "success"){
                localStorage.userName = id;
                localStorage.userPasseord = passwd;
                localStorage.loginType = 0;
                document.location.href="table.html"; 
            }else if(obj.status == "noAccount"){
                alert("Wrong ID or Password!!");
            }else if(obj.status == "fail"){
                alert("Can't connect to DB!");
            }
        },
        error: function(data) {
            alert("Error: "+data);
        }
    });
}
function signin(){
    var id = document.createElement("user").value;
    var passwd=document.createElement("passwd").value;
    $.ajax({
datatype:"JSON",
type:"POST",
url:"https://210.70.80.21/~s107021154/signin.php",
data :"userName=" +id+ "&userPassword="+passwd ,
crossDomain: true,
cache:false,


    })
}
