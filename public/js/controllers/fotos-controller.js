angular.module('alurapic').controller('FotosController', function($scope, $http){
    $scope.fotos = [];
    $scope.filtro = '';
    $scope.mensagem = '';
    $scope.mensagemErro = '';

    
    $http.get("v1/fotos").success(
        function(fotos){
            $scope.fotos = fotos;
        }
    ).error(function(error){
        console.log(error);
    })
    
    
    $scope.excluir = function(foto){
        var idFoto = foto._id;
        
        $http.delete("v1/fotos/"+ idFoto)
        .success(function(){
            //atualiza a lista já carregada
            var indiceFoto = $scope.fotos.indexOf(foto);
            $scope.fotos.splice(indiceFoto, 1);            
            $scope.mensagem  = "Foto " + foto.titulo + " excluída com sucesso";
        })
        .error(function(erro){
            $scope.mensagem  = "";
            $scope.mensagemErro  = "Erro ao excluir foto " + erro;
        })        
    }
    
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