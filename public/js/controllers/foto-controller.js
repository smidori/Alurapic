angular.module('alurapic').controller('FotoController', function($scope, $http, $routeParams){
    $scope.foto = {};
    $scope.mensagem = '';
    
    if($routeParams.fotoId){        
        $http.get('v1/fotos/' + $routeParams.fotoId)
        .success(function(fotoC){
            $scope.foto = fotoC;
        }).error(function(){
            console.log("erro ao carregar a foto");
        })
    } 
    
    $scope.submeter = function() {
        
        if($scope.formulario.$valid){
           
            if($scope.foto._id){
                $http.put('v1/fotos/' + $routeParams.fotoId, $scope.foto)
                    .success(function(){                    
                    $scope.mensagem = 'Foto alterada com sucesso';                
                }).error(function(){
                    //console.log('Erro ao incluir')
                    $scope.mensagem = 'Não foi possível alterar a foto';
                })
            }else{
                $http.post('v1/fotos', $scope.foto)
                    .success(function(){
                    //console.log('Foto adicionada');
                    $scope.mensagem = 'Foto cadastrada com sucesso';                

                }).error(function(){
                    //console.log('Erro ao incluir')
                    $scope.mensagem = 'Não foi possível cadastrar a foto';
                })
            }            
        }
        
    }; 
    
})
