var app = angular.module('pokeApp');

app.directive('dirDisplay', function () {
	return {
		templateUrl: 'app/directives/dirTmplt.html',
		link: function (scope, element, attributes) {
			scope.showSprite = false,
			element.on('click', function () {
				scope.showSprite = true,
				scope.$apply();
			});

	}
};
});	