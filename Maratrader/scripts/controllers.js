'use strict';

angular.module('maratraderApp')

        .controller('CourseController', ['$scope', 'courseFactory', function ($scope, courseFactory) {
            
            $scope.tab = 1;
            $scope.filtText = '';
            $scope.showDetails = false;
            
            $scope.chapters= courseFactory.getChapters();

            $scope.select = function(setTab) {
                $scope.tab = setTab;
            
            
                if (setTab === 2) 
                    $scope.filtText = "basic course";
                
                else if (setTab === 3) 
                    $scope.filtText = "advanced course";
                
                else 
                    $scope.filtText = "";  
            }

            $scope.isSelected = function (checkTab) {
                return ($scope.tab === checkTab);
            }

            $scope.toggleDetails = function() {
                $scope.showDetails = !$scope.showDetails;
            };
        }])
 .controller('ContactController', ['$scope', function($scope) {

            $scope.feedback = {mychannel:"", firstName:"", lastName:"", agree:false, email:"" };
            
            var channels = [{value:"tel", label:"Tel."}, {value:"Email",label:"Email"}];
            
            $scope.channels = channels;
            $scope.invalidChannelSelection = false;
                        
        }])

        .controller('FeedbackController', ['$scope', function($scope) {
            
            $scope.sendFeedback = function() {
                console.log($scope.feedback);
                
                if ($scope.feedback.agree && ($scope.feedback.mychannel == "")&& !$scope.feedback.mychannel){
                    $scope.invalidChannelSelection = true;
                    console.log('incorrect');
                }
                else {
                    $scope.invalidChannelSelection = false;
                    $scope.feedback = {mychannel:"", firstName:"", lastName:"", agree:false, email:"" };
                    $scope.feedback.mychannel="";
                    $scope.feedbackForm.$setPristine();
                    console.log($scope.feedback);
                }
            }
        }])
        .controller('ChapterDetailController', ['$scope', '$routeParams', 'courseFactory', function($scope, $routeParams, courseFactory) {
          
            var chapter= 
            courseFactory.getChapter(parseInt($routeParams.id,20));
            
            $scope.chapter= chapter;
              
        }])

     .controller('ChapterCommentController', ['$scope', function($scope) {
            $scope.mycomment = {rating:5, comment:"", author:"", date:""};
            
            $scope.submitComment = function (){
                
            $scope.mycomment.date = new Date().toISOString();
            console.log($scope.mycomment);
            
            $scope.chapter.comments.push($scope.mycomment);
            
            $scope.commentForm.$setPristine();
                
            $scope.mycomment = {rating:5, comment:"", author:"", date:""};   
            }
        }])

        .controller('IndexController', ['$scope', 'courseFactory', 'corporateFactory', function($scope, courseFactory, corporateFactory) {
            $scope.topchapter = courseFactory.getChapter(0);
            $scope.promotion = courseFactory.getPromotion(0);

            for (var i = 0; i < corporateFactory.getLeaders().length; i++) {
                if (corporateFactory.getLeader(i).abbr === 'EC') {
                    $scope.exec = corporateFactory.getLeader(i);                    
                }
            }            
        }])
        

        .controller('AboutController', ['$scope', 'corporateFactory',
            function($scope, corporateFactory) {
            $scope.leadership = corporateFactory.getLeaders();
        }])

;