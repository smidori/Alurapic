angular.module('alurapic').controller('FotosController', function($scope, $http){
    $scope.fotos = [];
    
    $http.get("v1/fotos").success(
        function(fotos){
            $scope.fotos = fotos;
        }
    ).error(function(error){
        console.log(error);
    })
    
    
    /*
       $scope.fotos = [
        {
        url : "http://www.fundosanimais.com/Minis/leoes.jpg", 
        titulo : "Leão 1"
        }, 
        {
        url : "http://www.fundosanimais.com/Minis/leoes.jpg", 
        titulo : "Leão 2"
        },
        {
        url : "http://www.fundosanimais.com/Minis/leoes.jpg", 
        titulo : "Leão 3"
        }
        ] 
    */
    
    
}); 