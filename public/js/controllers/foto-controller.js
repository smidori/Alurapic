angular.module('alurapic').controller('FotoController', function($scope, $http){
    $scope.foto = {};
    $scope.mensagem = '';
    
    $scope.submeter = function() {
        if($scope.formulario.$valid){
            $http.post('v1/fotos', $scope.foto)
                .success(function(){
                //console.log('Foto adicionada');
                $scope.mensagem = 'Foto cadastrada com sucesso';                
                
            }).error(function(){
                //console.log('Erro ao incluir')
                $scope.mensagem = 'Não foi possível cadastrar a foto';
            })
        }
        
    };        
})
