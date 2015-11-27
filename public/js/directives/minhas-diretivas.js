angular.module('minhasDiretivas',[]).directive('meuPainel', function(){
    var ddo = {};
    
    ddo.restrict = 'AE';
    
    ddo.scope = {
        titulo :'@titulo',
        url : '@url'
    }
    ddo.transclude = true;
    
    ddo.templateUrl = 'js/directives/meu-painel.html';
    
    return ddo;
    
})

