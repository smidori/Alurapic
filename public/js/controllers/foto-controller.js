angular.module('alurapic').controller('FotoController', function($scope, recursoFoto, $routeParams, $http){
    $scope.foto = {};
    $scope.mensagem = '';
    
     if($routeParams.fotoId){  
        
        recursoFoto.get({idFoto: $routeParams.fotoId}, 
        function(foto){            
            $scope.foto = foto;
        }, function(erro){
            console.log("erro ao carregar a foto");
            console.log(erro);
            $scope.mensagem = 'Não foi possível obter a foto'

        });
        
        /*
            $http.get('v1/fotos/' + $routeParams.fotoId)
            .success(function(fotoC){
                $scope.foto = fotoC;
            }).error(function(){
                console.log("erro ao carregar a foto");
            })
        */
    } 

   
    
    $scope.submeter = function() {
        
        if($scope.formulario.$valid){
           
            if($scope.foto._id){
                recursoFoto.update({idFoto: $routeParams.fotoId }, $scope.foto,
                    function(){                    
                    $scope.mensagem = 'Foto alterada com sucesso';                
                }, function(){
                    //console.log('Erro ao incluir')
                    $scope.mensagem = 'Não foi possível alterar a foto';
                })
            }else{
                recursoFoto.save( $scope.foto, 
                    function(){
                    //console.log('Foto adicionada');
                    $scope.mensagem = 'Foto cadastrada com sucesso';                

                },function(){
                    //console.log('Erro ao incluir')
                    $scope.mensagem = 'Não foi possível cadastrar a foto';
                })
            }            
        }
        
    }; 
    
})
