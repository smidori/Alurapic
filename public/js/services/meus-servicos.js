angular.module('meusServicos', ['ngResource'])
.factory('recursoFoto', function($resource){
    return $resource('v1/fotos/:idFoto', null, {
        'update': {
            method: 'PUT'
        }
    });
});