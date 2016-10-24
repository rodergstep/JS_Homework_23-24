requirejs.config({
	baseUrl: "js/lib",
	paths: {
		jquery: 'jquery-2.2.1.min',
		underscore: 'underscore',
		appModels: '../models',
		appViews: '../views',
		appController: '../controllers',
	},
	shim: {
		'underscore': {
			exports: '_'
		},
	}
});

require([
	'jquery',
	'underscore',
	'appModels/model',
	'appViews/view',
	'appController/controller'
], function ($, _, Model, View, Controller) {

	$(function () {
		var model = new Model(['get up', 'to eat some food', 'to create some peace of code', 'go to bed and sleep not so long time', 'to get up...']);
		var view = new View(model);
		var controller = new Controller(model, view);
	});

});