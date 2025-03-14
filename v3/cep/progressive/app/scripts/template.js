angular.module('app').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('views/cep.html',
    "<md-card flex-gt-sm=55 flex-gt-md=55><md-tabs md-dynamic-height md-border-bottom><md-tab label=CEP><md-content class=md-padding><md-card-content><md-input-container class=md-block><label>CEP</label><input ng-model=cep><md-button ng-click=buscarCep()>Buscar</md-button></md-input-container></md-card-content><md-card-actions layout=row layout-align=\"left center\" ng-show=endereco.id><br>Cidade: {{endereco.cidade}} - {{endereco.uf}}<br>Bairro: {{endereco.bairroIni}} {{endereco.bairroFim}}<br>Logradouro: {{endereco.logradouro}}</md-card-actions></md-content></md-tab><md-tab label=Logradouro ng-show=\"ufs.length > 0\"><md-content class=md-padding><md-card-content><md-input-container class=md-block><label>UF</label><md-select ng-model=uf><md-option ng-repeat=\"uf in ufs track by $index\" ng-value=uf>{{uf}}</md-option></md-select></md-input-container><md-input-container class=md-block><label>Logradouro</label><input ng-model=logradouro><md-button ng-click=buscarLogra()>Buscar</md-button></md-input-container></md-card-content></md-content></md-tab></md-tabs><md-content-card style=\"height: 300px; overflow-y: auto\"><ul><li ng-repeat=\"e in enderecos\"><br>CEP: {{e.cep}}<br>Cidade: {{e.cidade}} - {{e.uf}}<br>Bairro: {{e.bairroIni}} {{e.bairroFim}}<br>Logradouro: {{e.logradouro}}</li></ul></md-content-card></md-card>"
  );


  $templateCache.put('views/partials/alerts.html',
    "<aside class=\"toast-view js-toast-view\"><div ng-repeat=\"alert in alerts\" class=\"alert alert-{{alert.type}} alert-dismissable animated fadeInDown\"><button type=button class=close data-dismiss=alert aria-hidden=true>&times;</button> {{alert.msg}}</div></aside>"
  );


  $templateCache.put('views/partials/loading.html',
    "<img src=images/725.gif alt=\"\"/>"
  );

}]);
