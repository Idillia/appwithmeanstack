angular.module('app').controller('mvMainCtrl', function($scope){
	$scope.courses = [
		{name:'C# for Sociopath', featured:true, published: new Date('1/2/2012')},
		{name:'C# for Non-Sociopath', featured:false, published: new Date('2/2/2012')},
		{name:'Super Duper Expert JS', featured:true, published: new Date('4/2/2012')}



	]
});