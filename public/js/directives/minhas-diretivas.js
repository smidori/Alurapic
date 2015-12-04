angular.module('minhasDiretivas',[]).directive('meuPainel', function(){
    
    //directive domain object
    var ddo = {};
    
    ddo.restrict = 'AE';
    
    ddo.scope = {
        titulo :'@titulo',
        url : '@url'
    }
    ddo.transclude = true;
    
    ddo.templateUrl = 'js/directives/meu-painel.html';
    
    return ddo;
    
}).directive('minhaFoto', function(){
    var ddo = {};
    ddo.restrict = 'AE';
    ddo.scope = {
        url : '@url',
        titulo : '@titulo'        
    };
    ddo.templateUrl = 'js/directives/minha-foto.html';
    //ddo.template = '<img class="img-responsive center-block" src="{{url}}" alt="{{titulo}}">';
    return ddo;
}).directive('meuBotaoPerigo', function(){
    var ddo = {};
    ddo.restrict = 'E';
    ddo.scope = {
        nome : '@',
        acao : '&'        
    };    
    ddo.template = '<button class="btn btn-danger btn-block" ng-click="acao()">{{nome}}</button>';
    return ddo;
});


