'use strict';

angular.module('maratraderApp',['ngRoute'])
.config(function($routeProvider){
    $routeProvider
    
    //route for the home page
    .when('/home', {
        templateUrl:'view/home.html',
        controller:'IndexController'
    })
    
    //route for the contactus page
    .when('/aboutus', {
        templateUrl:'view/aboutus.html',
        controller:'AboutController'
    })
    
    //route for the contactus page
    .when('/contactus', {
        templateUrl:'view/contactus.html',
        controller:'ContactController'
    })
    
    //route for the menu page
    .when('/course', {
        templateUrl : 'view/course.html',
        controller : 'CourseController'
    })
    //route for the dish details page
    .when('/course/:id', {
        templateUrl:'view/chapterdetail.html',
        controller:'ChapterDetailController'
    })
    .otherwise('/home');
})

;
