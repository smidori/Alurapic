angular.module('alurapic').controller('FotosController', function($scope, recursoFoto){
    $scope.fotos = [];
    $scope.filtro = '';
    $scope.mensagem = '';
    $scope.mensagemErro = '';

    //var recursoFoto = $resource('v1/fotos/:idFoto');
    recursoFoto.query( 
      function(fotos){
           $scope.fotos = fotos;     
      },
      function(erro){  
           console.log(error);
      }
    )
    
    $scope.excluir = function(foto){    
        
        recursoFoto.delete({idFoto: foto._id},  
        function(){
            //atualiza a lista já carregada
            var indiceFoto = $scope.fotos.indexOf(foto);
            $scope.fotos.splice(indiceFoto, 1);            
            $scope.mensagem  = "Foto " + foto.titulo + " excluída com sucesso";
        },
        function(erro){
            $scope.mensagem  = "";
            $scope.mensagemErro  = "Erro ao excluir foto " + erro;
        })        
    }
        
    /* 
    // com http 
    
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
    */

    
}); 