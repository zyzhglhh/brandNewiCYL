// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js

var dependencies = ['ionic',
                    'icyl.services',
                    'icyl.directives',
                    //'icyl.filters',
                    'icyl.controllers',
                    'w5c.validator'];

angular.module('icyl', dependencies)

.run(['$ionicPlatform', function ($ionicPlatform) {
  $ionicPlatform.ready( function () {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
      // StatusBar.overlaysWebView(false); //iOS6 style
      // StatusBar.styleLightContent();
    }
    //window.ionic.Platform.showStatusBar(false)
    //window.ionic.Platform.fullScreen(true,false);
  });
}])

.run(['$rootScope', '$state', 'Identification', 'User', 'Alert', 'CustomNav', function ($rootScope, $state, Identification, User, Alert, CustomNav) {
  CustomNav.new();
  $rootScope.$on("$stateChangeStart", function (event, toState, toParams, fromState, fromParams){
    if (toState.access.authenticate && !Identification.isAuthenticated()) {
      // User isn’t authenticated
      //event.preventDefault();
      //console.log("#1----------"+toState.access.offline+"==="+fromState.name+"=--="+(toState.access.offline != fromState.name));  //=====================test
      if (!!toState.access.offline && toState.access.offline != fromState.name) {
        $state.go(toState.access.offline);
      }
      else {
        Identification.checkToken().then( function (data) {
          if (data.err_code !== 0) {
            $rootScope.actions = {
              toState: toState
            };
            //$rootScope.actions.toState = toState;
            User.userLogin($rootScope);
            User.userRegister($rootScope);
            //console.log("#1----------"+$rootScope.$id+"=="+data.err_code);  //=====================test
            //因为在User.userLogin里面$ionicModal.fromTemplateUrl是异步加载模板的，所以在这里如果直接调用的话会出错(还没加载完成)；
            //解决方法一：改造成promise形式；
            //解决方法二：直接在$ionicModal.fromTemplateUrl(url).then($scope.loginmodal = modal; $scope.loginmodal.show();)里面打开该模板；
            //$rootScope.actions.login(); 
            //console.log($rootScope.actions.login);  //=====================test
            
          }
          else {
            $state.go(toState);
          }
        }, function (err) {
          console.log('错误：Identification.checkToken()' + err);
          Alert('请检查网络！');
        });
      }
      
      //$state.transitionTo("login");
      event.preventDefault(); 
    }
  });
  $rootScope.$on("$stateChangeSuccess", function (event, toState, toParams, fromState, fromParams){
    var index = -1;
    if (!!fromState.name && fromState.name.indexOf('offline') < 0) {
      index = CustomNav.find(toState.name);
      if (index < 0 && toState.name != fromState.name) {
        CustomNav.record(fromState.name);
        //console.log('record'); //========================test
      }
      else {
        CustomNav.remove(0, index+1);
        //console.log('remove'); //====================test
      }
      
      //console.log('in');  //=====================test
    }
    
    if (fromState.name.indexOf('offline') > -1) {
      //console.log(fromState.name.indexOf('offline'));  //=====================test
      //console.log(CustomNav.find(CustomNav.fromState)+1);  //=====================test
      index = CustomNav.find(toState.name);
      CustomNav.remove(0, index+1);
      //console.log("#@$%#@$^$%&^%&(^*(^$#%@================="+index);  //=====================test
    } 
    toState.name.indexOf('offline') > -1 ? CustomNav.fromState = fromState.name : CustomNav.fromState = '';
    //console.log(CustomNav.histories+'==='+fromState.name+'==='+index+'==='+toState.name+'==='+$state.current.name+'==='+CustomNav.fromState);  //=====================test
    //console.log(CustomNav.fromState);  //=====================test

  });

}])

.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

    .state('main', {
      url:'/main',
      abstract: true,
      access: { authenticate: false },
      templateUrl: 'templates/main.html',
      controller: 'mainContainer'
    })

    // //分模块加载
    // .state('main.default', {
    //   url:'/default',
    //   access: { authenticate: false },
    //   views: {
    //     // 'main-header': {
    //     //   templateUrl: 'templates/common/header.html'
    //     // },
    //     'main-container': {
    //       templateUrl: 'templates/main/default.html'
    //       //, controller: 'mainDefault'
    //     },
    //     'main-footer': {
    //       templateUrl: 'templates/common/footer.html'
    //     }
    //   },
    //   controller: 'mainDefault'
    // })
    
    //一次加载整个页面
    .state('main.default', {
      url:'/default',
      access: { authenticate: false },
      views: {
        'main-container': {
          templateUrl: 'templates/main/default.html',
          controller: 'mainDefault'
        }
      }
    })

    .state('main.news', {
      url:'/news',
      access: { authenticate: false },
      views: {
        'main-container': {
          templateUrl: 'templates/main/news.html',
          controller: 'mainNews'
        }
        // ,
        // 'main-footer': {
        //   templateUrl: 'templates/common/footer.html'
        // }
      }
    })

    .state('main.knowlbase', {
      url:'/knowlbase',
      access: { authenticate: false },
      views: {
        'main-container': {
          templateUrl: 'templates/main/knowlbase.html',
          controller: 'mainKnowlBase'
        }
        // ,
        // 'main-footer': {
        //   templateUrl: 'templates/common/footer.html'
        // }
      }
    })

    .state('main.link', {
      url:'/link',
      access: { authenticate: false },
      views: {
        'main-container': {
          templateUrl: 'templates/main/link.html',
          controller: 'mainLink'      
        }
        // ,
        // 'main-footer': {
        //   templateUrl: 'templates/common/footer.html'
        // }
      }
    })

    .state('main.brand', {
      url:'/brand',
      access: { authenticate: false },
      views: {
        'main-container': {
          templateUrl: 'templates/main/brand.html',
          controller: 'mainBrand'
        }
        // ,
        // 'main-footer': {
        //   templateUrl: 'templates/common/footer.html'
        // }
      }
    })

    .state('main.career', {
      url:'/career',
      access: { authenticate: false },
      views: {
        'main-container': {
          templateUrl: 'templates/main/career.html',
          controller: 'mainCareer'
        }
        // ,
        // 'main-footer': {
        //   templateUrl: 'templates/common/footer.html'
        // }
      }
    })

    .state('main.love', {
      url:'/love',
      access: { authenticate: false },
      views: {
        'main-container': {
          templateUrl: 'templates/main/love.html',
          controller: 'mainLove'
        }
        // ,
        // 'main-footer': {
        //   templateUrl: 'templates/common/footer.html'
        // }
      }
    })

    .state('main.beauty', {
      url:'/beauty',
      access: { authenticate: false },
      views: {
        'main-container': {
          templateUrl: 'templates/main/beauty.html',
          controller: 'mainBeauty'
        }
        // ,
        // 'main-footer': {
        //   templateUrl: 'templates/common/footer.html'
        // }
      }
    })

    .state('main.life', {
      url:'/life',
      access: { authenticate: false },
      views: {
        // 'main-header': {
        //   templateUrl: 'templates/common/header.html'
        // }
        // ,
        'main-container': {
          templateUrl: 'templates/main/life.html',
          controller: 'mainLife'
        }
        // ,
        // 'main-footer': {
        //   templateUrl: 'templates/common/footer.html'
        // }
      }
    })

    .state('main.sysmgmt', {
      url:'/sysmgmt',
      access: { authenticate: false },
      views: {
        'main-container': {
          templateUrl: 'templates/main/sysmgmt.html',
          controller: 'mainSysMgmt'
        }
        // ,
        // 'main-footer': {
        //   templateUrl: 'templates/common/footer.html'
        // }
      }
    })

    .state('main.loginold', {
      url:'/loginold',
      access: { authenticate: false },
      views: {
        'main-container': {
          templateUrl: 'templates/main/loginold.html',
          controller: 'mainLoginOld'
        }
        // ,
        // 'main-footer': {
        //   templateUrl: 'templates/common/footer.html'
        // }
      }
    })

    // .state('main.mine', {
    //   url:'/mine',
    //   access: { authenticate: true, offline: 'main.mineoffline' },
    //   views: {
    //     //'main-header': {
    //     //  templateUrl: 'templates/common/header.html'
    //     //},
    //     'main-container': {
    //       templateUrl: 'templates/user/mine.html'
    //       //, controller: 'mainMine'
    //     }
    //     //,
    //     //'main-footer': {
    //     //  templateUrl: 'templates/common/footer.html'
    //     //}
    //   },
    //   controller: 'mainMine'
    // })

    // .state('main.mineoffline', {
    //   url:'/mineoffline',
    //   access: { authenticate: false },
    //   views: {
    //     //'main-header': {
    //     //  templateUrl: 'templates/common/header.html'
    //     //},
    //     'main-container': {
    //       templateUrl: 'templates/user/mineoffline.html',
    //     }
    //     //,
    //     //'main-footer': {
    //     //  templateUrl: 'templates/common/footer.html'
    //     //}
    //   },
    //   controller: 'mainMineOffline'
    // })

    // .state('main.account', {
    //   url:'/account',
    //   access: { authenticate: true },
    //   views: {
    //     //'main-header': {
    //     //  templateUrl: 'templates/common/header.html'
    //     //},
    //     'main-container': {
    //       templateUrl: 'templates/user/account.html',
    //     }
    //     //,
    //     //'main-footer': {
    //     //  templateUrl: 'templates/common/footer.html'
    //     //}
    //   },
    //   controller: 'mainAccount'
    // })

    // .state('main.userinfo', {
    //   url:'/userinfo',
    //   access: { authenticate: true },
    //   views: {
    //     //'main-header': {
    //     //  templateUrl: 'templates/common/header.html'
    //     //},
    //     'main-container': {
    //       templateUrl: 'templates/user/userinfo.html',
    //     }
    //     //,
    //     //'main-footer': {
    //     //  templateUrl: 'templates/common/footer.html'
    //     //}
    //   },
    //   controller: 'mainUserInfo'
    // })
    
    .state('main.test', {
      url:'/test',
      access: { authenticate: false },
      views: {
        'main-container': {
          templateUrl: 'templates/test/test.html',
          controller: 'mainTest'
        }
        // ,
        // 'main-footer': {
        //   templateUrl: 'templates/common/footer.html'
        // }
      }
    })

    ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/main/default');

}])

.config(['w5cValidatorProvider', function (w5cValidatorProvider) {

     // 全局配置
     w5cValidatorProvider.config({
         blurTrig   : false,
         showError  : true,
         removeError: true

     });
     w5cValidatorProvider.setRules({
         email: {
             //required : "输入的邮箱地址不能为空",
             email    : "输入邮箱的格式不正确"
         },
         username: {
             required : "输入的用户名不能为空",
             pattern  : "用户名必须输入字母、数字、下划线,以字母开头"
         },
         password: {
             required : "密码不能为空",
             minlength: "密码长度不能小于{minlength}",
             maxlength: "密码长度不能大于{maxlength}"
         },
         repeat_password: {
                repeat: "两次填写的密码不一致"
         },
         chinese_name : {
             required : "姓名不能为空",
             pattern  : "请正确输入中文姓名"
         },
         mobile: {
             required : "手机号不能为空",
             pattern  : "请填写正确手机号",
             minlength: "手机号长度不能小于{minlength}",
             maxlength: "手机号长度不能大于{maxlength}"
         }
     });
 }]);


angular.module('icyl.controllers', [])

.controller('index', ['$scope', function ($scope) {

  // ionic.Platform.ready(function() {
  //   // hide the status bar using the StatusBar plugin
  //   if(window.StatusBar) {
  //     // org.apache.cordova.statusbar required
  //     StatusBar.hide();
  //   }
    
  // });

}])

//主容器控制器
.controller('mainContainer', ['$scope', '$state', 'Identification', 'User', 'Alert', 'CustomNav', '$window', function ($scope, $state, Identification, User, Alert, CustomNav, $window) {

	// var statics = 1;
	// console.log('not execute everytime, just one time #'+statics);
	// statics += 1;

  //CustomNav.new();

  // $scope.$on("$stateChangeStart", function (event, toState, toParams, fromState, fromParams){
  //   if (toState.access.authenticate && !Identification.isAuthenticated()) {
  //     //console.log(Identification.isAuthenticated());  //=====================test
  //     if (!!toState.access.offline && toState.access.offline != fromState.name) {
  //       $state.go(toState.access.offline);
  //     }
  //     else {
  //       Identification.checkToken().then( function (data) {
  //         if (data.err_code != 0) {
  //           $scope.actions = {
  //             toState: toState
  //           };
  //           User.userLogin($scope);
  //           User.userRegister($scope);
  //           //console.log($scope.actions.login);  //=====================test
            
  //         }
  //         else {
  //           $state.go(toState);
  //         }
  //       }, function (err) {
  //         console.log('错误：Identification.checkToken()' + err);
  //         Alert('请检查网络！');
  //       });
  //     }
      
  //     //$state.transitionTo("login");
  //     event.preventDefault(); 
  //   }
  // });

  // $scope.$on("$stateChangeSuccess", function (event, toState, toParams, fromState, fromParams){
  //   var index = -1;
  // 	if (!!fromState.name && fromState.name.indexOf('offline') < 0) {
  // 		index = CustomNav.find(toState.name);
  // 		if (index < 0 && toState.name != fromState.name) {
  // 			CustomNav.record(fromState.name);
  // 			//console.log('record');
  // 		}
  // 		else {
  // 			CustomNav.remove(0, index+1);
  // 			//console.log('remove');
  // 		}
  		
  // 		//console.log('in');  //=====================test
  // 	}
  //   //console.log(CustomNav.histories+'==='+fromState.name+'==='+index+'==='+toState.name+'==='+$state.current.name);  //=====================test
  //   fromState.name.indexOf('offline') > -1 ? CustomNav.fromState = fromState.name : CustomNav.fromState = '';

  // });



}])

//默认主页控制器
.controller('mainDefault', ['$scope', '$window', 'Storage', function($scope, $window, Storage) {

    // $scope.url = {
    //   sysmgmt:  { url: 'http://17f.go5le.net/mall/index/login_app.asp'},
    //   news   :  { url: 'http://17f.go5le.net/99_tj/991/index.asp?lx=%CD%C5%C7%E0%B6%AF%CC%AC'},
    //   knowlbase:{ url: 'http://17f.go5le.net/99_tj/991/index.asp?lx=%CD%C5%C7%E0%B6%AF%CC%AC'},
    //   test   :  { url: 'http://www.baidu.com'}
    // };

    // $scope.cookie = 'xsunion=staff%5Fsts=2&telephone=0571%2D83731771&card5=900000001&name=900006840&dw=%B3%F8%C1%F4%CF%E3%B4%A8%B2%CB%BB%F0%B9%F8&card4=900000002&card2=900006840&card%5Fno1=900006840&shopid1=900000003&staff%5Fgrade=1&reg%5Fnbr=900006840&card3=900000003';//Storage.kget('cookie');

    // // var inAppBrowser = $window.open('http://17f.go5le.net/preload.html','_blank','hidden=yes');
    // // var setcookie = function() {
    // //   inAppBrowser.executeScript({
    // //     code: "document.cookie='xsunion=staff%5Fsts=2&telephone=0571%2D83731771&card5=900000001&name=900006840&dw=%B3%F8%C1%F4%CF%E3%B4%A8%B2%CB%BB%F0%B9%F8&card4=900000002&card2=900006840&card%5Fno1=900006840&shopid1=900000003&staff%5Fgrade=1&reg%5Fnbr=900006840&card3=900000003';"
    // //   });
    // // };
    // // // var closeonce = function() {
    // // //   inAppBrowser.removeEventListener('loadstart', setcookie);
    // // //   inAppBrowser.removeEventListener('loadstop', closeonce);
    // // //   //inAppBrowser.close();
    // // // };
    // // // inAppBrowser.addEventListener('loadstart', setcookie);
    // // inAppBrowser.addEventListener('loadstop', setcookie);
    // // inAppBrowser.removeEventListener('loadstop', setcookie);
    // // inAppBrowser.close();

              
          
    


    // $scope.actions = [];
    // $scope.closeBrowser = function(){
    //   //$window.alert($scope.actions.toString());    //====================test
    //   $scope.actions.push("Exit");
    // };
    // $scope.loadOpen = function(){
    //   //$window.alert('Load Open');
    //   $scope.actions.push("Open");
    // };
    // $scope.loadStop = function(){
    //   //$window.alert('Load Stop #1');    //====================test
    //   //$window.alert('Load Stop #2');    //====================test
    //   $scope.actions.push("Stop");
    // };
    // $scope.loadError = function(){
    //   //$window.alert('Load Error');    //====================test
    //   $scope.actions.push("Error");
    // };
    
    //console.log('mainDefault'); //=============test

}])









//团青时讯页面控制器
.controller('mainNews', ['$scope', function($scope) {

}])

//智汇共享页面控制器
.controller('mainKnowlBase', ['$scope', function($scope) {

}])

//智慧链接页面控制器
.controller('mainLink', ['$scope', function($scope) {

}])

//一团一品页面控制器
.controller('mainBrand', ['$scope', function($scope) {

}])

//青年创业页面控制器
.controller('mainCareer', ['$scope', function($scope) {

}])

//智会相亲页面控制器
.controller('mainLove', ['$scope', function($scope) {

}])

//最美浙江页面控制器
.controller('mainBeauty', ['$scope', function($scope) {

}])

//智慧生活页面控制器
.controller('mainLife', ['$scope', function($scope) {

}])

//系统管理页面控制器
.controller('mainSysMgmt', ['$scope', function($scope) {

}])

//用户登录页面控制器
.controller('mainLoginOld', ['$scope', function($scope) {

}])



//测试
.controller('mainTest', ['$scope', function($scope) {
  $scope.items = [1,2,3];
  var count = 4;
  $scope.doRefresh = function() {
    // $scope.$apply(function(){
      $scope.items.push(count);
      count++;
      $scope.items.push(count);
      count++;
      $scope.items.push(count);
      count++;
    // });
    $scope.$broadcast('scroll.refreshComplete');
  };

  //$scope.items = [];
  $scope.loadMoreData = function() {
    $scope.items.push(count);
    count++;
    $scope.items.push(count);
    count++;
    $scope.items.push(count);
    count++;
    $timeout(function(){
      $scope.$broadcast('scroll.infiniteScrollComplete');
    },1000);
  };

  $scope.moreDataCanBeLoaded = function() {
    return true;
  };

  $scope.$on('stateChangeSuccess', function() {
    $scope.loadMoreData();
  });
}])





//用户在线页面控制器
.controller('mainMine', ['$scope', '$ionicNavBarDelegate', '$timeout', function($scope, $ionicNavBarDelegate, $timeout) {

  $scope.hidebackbutton = function () {
    //$ionicNavBarDelegate.showBackButton(false); //这个方法不能在页面加载时被执行
    $ionicNavBarDelegate.setTitle('hahahahaha'); //这个方法不能在页面加载时被执行
  };

  // if (!!CustomNav.fromState) {
  //   $timeout(function(){  //这个方法不能在页面加载时被执行, use $timeout as a trick
  //     $ionicNavBarDelegate.showBackButton(false);
  //   },1);
  // }
}])
//用户离线页面控制器
.controller('mainMineOffline', ['$scope', function($scope) {

}])

//用户账户控制器
.controller('mainAccount', ['$scope', 'User', function($scope, User) {

	$scope.actions = {
		logout: function () {
			User.userLogout();
		}
	};

}])

//用户信息控制器
.controller('mainUserInfo', ['$scope', '$state', 'User', 'Identification', 'Alert', function($scope, $state, User, Identification, Alert) {

	User.getUserInfo().then( function (data) {
	  if (data.err_code === 0) {
		//console.log(data.data); //=====================test
	    $scope.updateUserInfo = {
	      name: data.data.Name,
	      gender: !!Number(data.data.Gender),
	      birthday: data.data.Birthday,
	      mobile: data.data.Mobile,
	      email: data.data.Email
	    };
	    //console.log($scope.updateUserInfo); //=====================test
	  }
	  else {
	    //console.log('#1--------------'); //=====================test
	    $scope.actions = {};
	    User.userLogin($scope);
	    User.userRegister($scope);
	  }
	}, function (err) {
	  console.log('错误：User.getUserInfo()' + err);
      Alert('请检查网络！');
	});

  //console.log('again'); //=====================test

  $scope.actions = {
    update: function () {
      Identification.checkToken().then( function (data) {
        User.updateUserInfo($scope.updateUserInfo).then( function (data) {
          if (data.err_code === 0) {
            //console.log(data.data); //=====================test
            $state.go('main.account');
          }
          else {
            //console.log(data); //=====================test
            $scope.actions = {};
            User.userLogin($scope);
            User.userRegister($scope);
          }
        }, function (err) {
          console.log('错误：User.updateUserInfo()' + err);
          Alert('请检查网络！');
        });
      }, function (err) {
        console.log('错误：Identification.checkToken()' + err);
        Alert('请检查网络！');
      });
      
    }
  };

}]);
angular.module('icyl.directives', [])

//自定义返回按钮
.directive( "customGoBack", ['$state', 'CustomNav', function($state, CustomNav) {
    return {
        restrict: "A",
        link: function( scope, element, attrs ) {
            element.bind( "click", function () {
                if (!!CustomNav.fromState) {
                    $state.go(CustomNav.fromState);
                }
                else if (!!CustomNav.goback()) {
                    $state.go(CustomNav.goback());
                }
                else {
                    $state.go(CustomNav.defaultback($state.current.name));
                }
			    //!!CustomNav.goback() ? $state.go(CustomNav.goback()) : $state.go(CustomNav.defaultback($state.current.name));
			});
        }
    };
}])

//自定义我的链接
.directive( "mineHref", ['$state', 'Storage', function($state, Storage) {
    return {
        restrict: "A",
        link: function( scope, element, attrs ) {
            if (!!Storage.kget('xsunion') && Storage.kget('xsunion').length>60) {
                element[0].href = '#/main/sysmgmt';
                //console.log(Storage.kget('xsunion'));    //====================test
                //window.alert(Storage.kget('xsunion'));    //====================test
            }
            else {
                element[0].href = '#/main/loginold';
                //console.log(attrs);    //====================test
            }
        }
    };
}])

//自定义iframe，和default.html:114配合使用：done
.directive( "iframeSetCookie", ['$window', 'Storage', function($window, Storage) {
    return {
        restrict: "E",
        replace: true,
        //template:"<div style='display:none'></div>",
        link: function( scope, element, attrs ) {
            //var iframeId = attrs.id;
            var iframeSrc = attrs.src;
            var iframeStyle = attrs.style;

            //console.log(element);    //====================test

            var iframe = $window.document.createElement('iframe');
            //iframe.setAttribute('src', iframeSrc);
            iframe.src = iframeSrc;
            //iframe.id = iframeId;
            iframe.style = iframeStyle;
            element[0].appendChild(iframe);
            //console.log(iframe);    //====================test
            //console.log('iframeSetCookie'); //=============test

            cookie = !!Storage.kget('xsunion') ? Storage.kget('xsunion') : false;
            //cookie = 'xsunion=staff%5Fsts=2&telephone=0571%2D83731771&card5=900000001&name=900006840&dw=%B3%F8%C1%F4%CF%E3%B4%A8%B2%CB%BB%F0%B9%F8&card4=900000002&card2=900006840&card%5Fno1=900006840&shopid1=900000003&staff%5Fgrade=1&reg%5Fnbr=900006840&card3=900000003'; //=============test

            function handMessage(event){
                event = event || $window.event;
                //验证是否来自预期内的域，如果不是不做处理，这样也是为了安全方面考虑
                // if(iframeSrc.indexOf(event.origin)>-1){
                //     if (iframe.contentWindow && !!cookie && event.data=="ready") {
                //         iframe.contentWindow.postMessage(cookie, event.origin);
                //         //console.log(event.data); //=============test
                //     }
                //     else {
                //         //console.log(event.data); //=============test
                //         if (!!event.data && event.data.indexOf('xsunion')>-1 && event.data.length>60) {
                //             Storage.kset('xsunion', event.data);
                //         }
                //         else {
                //             Storage.kremove('xsunion');
                //         }
                //     }
                // }
                if(iframe.contentWindow && !!event.data && iframeSrc.indexOf(event.origin)>-1){
                    if (event.data=="ready") {
                        if (!!cookie) {
                            iframe.contentWindow.postMessage(cookie, event.origin);
                            //console.log(event); //=============test
                        }
                    }
                    if (event.data.indexOf('xsunion')>-1) {
                        if (event.data.length>60) {
                            Storage.kset('xsunion', event.data);
                        }
                        else {
                            Storage.kremove('xsunion');
                        }
                    }
                    if (event.data.indexOf('http://')===0) {
                        //var socialSharing = event.data.split("<$separate$>");
                        Storage.kset('socialSharing', event.data);
                    }
                }
            }
            //给window对象绑定message事件处理
            if($window.addEventListener){
                $window.addEventListener("message", handMessage, false);
            }
            else{
                $window.attachEvent("onmessage", handMessage);
            }
        }
    };
}])

//自定义分享按钮(每个页面只能有一个本元素)
.directive( "socialSharing", ['Storage', function(Storage) {
    return {
        restrict: "A",
        link: function( scope, element, attrs ) {
            Storage.kremove('socialSharing');
            element.bind( "click", function () {
                if (!!Storage.kget('socialSharing')) {
                    var sharing = Storage.kget('socialSharing').split("<$separate$>");
                    //window.alert(sharing);    //===============test
                    console.log(element[0]);    //===============test
                    console.log(sharing);    //===============test
                    document.getElementById('test').innerHTML = sharing;    //===============test
                    window.plugins.socialsharing.share(
                        !!sharing[2] ? sharing[2] : '这个平台不错的！',   //'信息、主题图片和链接', 
                        null,   //'智慧团青:',   //!!sharing[1] ? sharing[1] : '请关注这个平台！',   //'主题', 
                        null,   //!!sharing[3] ? sharing[3] : null,     //'图片地址',
                        !!sharing[0] ? sharing[0] : 'http://17f.go5le.net/bootstrap-3.1.1/',    //'网址',
                        function (result) {
                            console.log('result: ' + result);
                            //window.alert('result: ' + result);    //===============test
                            //Storage.kremove('socialSharing');
                            scope.$apply(function() {
                                //element[0].value = sharing[0]+sharing[2]+sharing[3]+result;
                                //element[0].innerText = sharing[0]+sharing[2]+sharing[3]+result;
                                document.getElementById('test').innerHTML = sharing[0]+sharing[2]+sharing[3]+result;
                            });
                        },
                        function (error) {
                            window.alert('error: ' + result);
                            //Storage.kremove('socialSharing');
                        }
                    );
                }
            });
        }
    };
}])

//打开外部页面按钮：封装了Cordova插件inAppBrowser
.directive("openExternal", ['$windos', function($window){
    return{
        restrict: 'E',
        scope: {
            url : "=",
            cookie: "=",
            exit : "&",
            loadOpen : "&",
            loadStop : "&",
            loadError: "&"
        },
        replace: true,
        transclude: true,
        template:"<a class='button center-block background-clear' ng-click='openUrl()'><span ng-transclude></span></a>",
        // link: function( scope, element, attrs ) {
        //     console.log(scope.$id);    //====================test
        // },
        controller: function($scope){

            // var wrappedFunction = function(action){
            //     return function(){
            //         $scope.$apply(function(){
            //             action();
            //         });
            //     }
            // };   //没必要用apply，除非需要在主界面上同步显示这一$scope中的变量变化

            var inAppBrowserClosed = function() {
                if(inAppBrowser !== null){
                    //console.log("did it");    //====================test
                    //inAppBrowser.removeEventListener('exit', wrappedFunction($scope.exit));
                    if($scope.loadOpen){
                        inAppBrowser.removeEventListener('loadstart', inAppBrowserStart);
                        //$window.alert('removeEventListener: $scope.loadStart');    //====================test
                    }
                    if($scope.loadStop){
                        inAppBrowser.removeEventListener('loadstop', inAppBrowserStop);
                        //$window.alert('removeEventListener: $scope.loadStop');    //====================test
                    }
                    if($scope.loadError){
                        inAppBrowser.removeEventListener('loaderror', $scope.loadError);
                        //$window.alert('removeEventListener: $scope.loadError');    //====================test
                    }
                    if($scope.exit){
                        inAppBrowser.removeEventListener('exit', inAppBrowserClosed);
                        //$window.alert('removeEventListener: $scope.exit');    //====================test
                    }
                    $scope.exit();
                }
            };
            var inAppBrowserStart = function() {
                if(inAppBrowser !== null){
                    if($scope.loadOpen){
                        //$window.alert($scope.url);
                        inAppBrowser.executeScript({
                                code: 'document.cookie="' + $scope.cookie + '";'
                            },
                            function(values) {
                                //$window.alert('document.cookie======'+values[0]);
                            }
                        );
                        //inAppBrowser.removeEventListener('loadstart', inAppBrowserStart);
                        $scope.loadOpen();
                    }
                }
            };
            var inAppBrowserStop = function() {
                if(inAppBrowser !== null){
                    if($scope.loadStop){
                        //$window.alert($scope.url);
                        inAppBrowser.executeScript({
                                code: 'document.cookie.match(new RegExp("(^| )xsunion=([^;]*)(;|$)"));'
                            },
                            function(values) {
                                //$window.alert('document.cookie.match======'+values[0][0]);
                            }
                        );
                        //inAppBrowser.removeEventListener('loadstop', inAppBrowserStop);
                        $scope.loadStop();
                    }
                }
            };
            //console.log("did it");    //====================test
            //$scope.exit(); //====================test
            //console.log($scope.$id);    //====================test
            var inAppBrowser;// = $window.open('http://17f.go5le.net/preload.html','_blank','hidden=yes');
            $scope.openUrl = function(){
                inAppBrowser = $window.open(encodeURI($scope.url),'_blank','location=yes');
                // inAppBrowser.executeScript({
                //     code: "document.cookie = 'xsunion=staff%5Fsts=2&telephone=0571%2D83731771&card5=900000001&name=900006840&dw=%B3%F8%C1%F4%CF%E3%B4%A8%B2%CB%BB%F0%B9%F8&card4=900000002&card2=900006840&card%5Fno1=900006840&shopid1=900000003&staff%5Fgrade=1&reg%5Fnbr=900006840&card3=900000003'"
                //     },
                //     function(values) {
                //         $window.alert(values.toString());
                //     }
                // );
                // inAppBrowser.executeScript({code: 'document.cookie="hello_world";alert(document.cookie)'},
                //     function(){
                //         $window.alert('executeScript');
                //     }
                // );
                //console.log("did it");    //====================test
                if($scope.loadOpen instanceof Function){
                    //inAppBrowser.addEventListener('loadstart', wrappedFunction($scope.loadOpen));
                    //inAppBrowser.addEventListener('loadstart', function(event){ alert(event.type+': '+event.url); });
                    inAppBrowser.addEventListener('loadstart', inAppBrowserStart);
                    //console.log($scope.loadStart);    //====================test
                }
                if($scope.loadStop instanceof Function){
                    inAppBrowser.addEventListener('loadstop', inAppBrowserStop);
                    //console.log($scope.loadStop);    //====================test
                }
                if($scope.loadError instanceof Function){
                    inAppBrowser.addEventListener('loaderror', $scope.loadError);
                    //console.log($scope.loadError);    //====================test
                }
                if($scope.exit instanceof Function){
                    inAppBrowser.addEventListener('exit', inAppBrowserClosed);
                    //console.log($scope.exit);    //====================test
                    //$scope.exit(); //====================test
                    //var action = wrappedFunction($scope.exit);  //====================test
                    //console.log(action);    //====================test
                    // var wrapped = function(action){
                    //                 return action();
                    //               };
                    // wrapped($scope.exit);
                    // console.log(wrapped($scope.exit));    //====================test
                    //action();   //====================test
                    //console.log($scope.$id);    //====================test
                }
                //console.log(inAppBrowser);    //====================test
            };

            // $scope.$on("$destroy", function(){
            //     console.log(inAppBrowser);    //====================test
            //     if(inAppBrowser != null){
            //         //console.log("did it");    //====================test
            //         inAppBrowser.removeEventListener('exit', wrappedFunction($scope.exit));

            //         if($scope.exit){
            //             inAppBrowser.removeEventListener('exit', wrappedFunction($scope.exit));
            //         }
            //         if($scope.loadStart){
            //             inAppBrowser.removeEventListener('loadstart', wrappedFunction($scope.loadStart));
            //         }
            //         if($scope.loadStop){
            //             inAppBrowser.removeEventListener('loadstop', wrappedFunction($scope.loadStop));
            //         }
            //         if($scope.loadError){
            //             inAppBrowser.removeEventListener('loaderror', wrappedFunction($scope.loadError));
            //         }
            //     }

            // });
        }
    };
}])

// //自定义iframe set cookie按钮
// .directive( "iframeSetCookie", ['$window', '$document', 'Storage', function($window, $document, Storage) {
//     return {
//         restrict: "E",
//         replace: true,
//         //transclude: true,
//         template:"<button class='button center-block'>设置cookie</button>",
//         link: function( scope, element, attrs ) {
//             console.log('iframeSetCookie'); //=============test
//             element.bind( "click", function () {
//                 var iframeWindow = $document.getElementById('setcookie').contentWindow;
//                 //cookie = !!Storage.kget('xsunion') ? Storage.kget('xsunion') : false;
//                 cookie = 'xsunion=staff%5Fsts=2&telephone=0571%2D83731771&card5=900000001&name=900006840&dw=%B3%F8%C1%F4%CF%E3%B4%A8%B2%CB%BB%F0%B9%F8&card4=900000002&card2=900006840&card%5Fno1=900006840&shopid1=900000003&staff%5Fgrade=1&reg%5Fnbr=900006840&card3=900000003';
//                 if (iframeWindow && !!cookie) {
//                     iframeWindow.postMessage(cookie, 'http://17f.go5le.net');
//                 }
//             });
//             function handMessage(event){
//                 event = event || $window.event;
//                 // //验证是否来自预期内的域，如果不是不做处理，这样也是为了安全方面考虑
//                 if(event.origin.match(/^http:\/\/17f.go5le.net/)){
//                     console.log('parent received message!:', event.data, event.origin);
//                 }
//             }
//             // //给window对象绑定message事件处理
//             if($window.addEventListener){
//                 $window.addEventListener("message", handMessage, false);
//             }
//             else{
//                 $window.attachEvent("onmessage", handMessage);
//             }
//         }
//     }
// }])

// .directive( "customGoBackOffline", ['$state', 'CustomNav', function($state, CustomNav) {
//     return {
//         restrict: "A",
//             link: function( scope, element, attrs ) {
//             element.bind( "click", function () {
// 			    !!CustomNav.fromState ? $state.go(CustomNav.fromState) : $state.go(CustomNav.defaultback($state.current.name));
// 			});
//         }
//     }
// }])

// //在线校验指令按钮
// .directive( "offlineCheck", ['$window', 'CustomNav', function($window, CustomNav) {
//     return {
//         restrict: "A",
//         link: function( scope, element, attrs ) {
//             element.bind( "click", function () {
            
//             });
//         }
//     }
// }])

// //自定义微信分享按钮
// .directive( "wechatShare", ['Storage', function(Storage) {
//     return {
//         restrict: "A",
//         link: function( scope, element, attrs ) {
//             element.bind( "click", function () {
//                 Wechat.share({
//                     message: {
//                        title: "Message Title",
//                        description: "Message Description(optional)",
//                        mediaTagName: "Media Tag Name(optional)",
//                        thumb: "http://YOUR_THUMBNAIL_IMAGE",
//                        media: {
//                            type: Wechat.Type.WEBPAGE,   // webpage
//                            webpageUrl: "https://github.com/xu-li/cordova-plugin-wechat"    // webpage
//                        }
//                    },
//                    scene: Wechat.Scene.TIMELINE   // share to Timeline
//                 }, function () {
//                     alert("Success");
//                 }, function (reason) {
//                     alert("Failed: " + reason);
//                 });
//             });
//         }
//     }
// }])

;
angular.module('icyl.services', ['ngResource'])

.constant('USER_ROLES', {
  all: '*',
  admin: 'admin',
  editor: 'editor',
  guest: 'guest'
})

.constant('DEFAULT_NAV_TREE', {
  tree_0: 'main.default',
  tree_0_0: 'main.mine',
  tree_0_1: 'main.mineoffline',
  tree_0_0_0: 'main.account',
  tree_0_0_0_0: 'main.userinfo'
})

.constant('DEFAULT_NAV_TREE_REVERT', {
  //main_default: 'tree_0',
  main_mine: 'tree_0_0',
  main_mineoffline: 'tree_0_1',
  main_account: 'tree_0_0_0',
  main_userinfo: 'tree_0_0_0_0'
})

//本地存储函数
.factory('Storage', ['$window', function($window) {
  return {
    kset: function(key, value) {
      $window.localStorage.setItem(key, value);
    },
    kget: function(key) {
      return $window.localStorage.getItem(key);
    },
    kremove: function(key) {
      $window.localStorage.removeItem(key);
    }



  };
}])

// //参数传递函数
// .factory('Params', function() {
//   return {
//     outStr: '',
//     outObj: {},
//   };
// })

//非持久化session函数
.service('Session', function () {
  this.create = function (token) {
    this.token = token;
  };
  this.destroy = function () {
    this.token = null;
  };
  return this;
})

//alert函数
.factory('Alert', ['$window', function($window) {
  return function(msg) {
    $window.alert(msg);
  };
}])

// //offline.js校验函数封装
// .factory('Offline', ['$window', '$q', function($window, $q) {
//   return {
//     offlineCheck: function() {
//       // var deferred = $q.defer();

//       // myAsyncCall().success(function(data) {
//       //   deferred.resolve(data);
//       // });
//       // return deferred.promise;
//     }
//   };
// }])

//自定义导航状态存储
.service('CustomNav', ['DEFAULT_NAV_TREE', 'DEFAULT_NAV_TREE_REVERT', function (DEFAULT_NAV_TREE, DEFAULT_NAV_TREE_REVERT) {
  this.record = function (state) {
    this.histories.unshift(state);
  };
  this.goback = function () {
    return this.histories[0];
  };
  this.new = function () {
    //this.histories = new Array();
    this.histories = [];
  };
  this.remove = function (start, count) {
    this.histories.splice(start, count);
  };
  this.find = function (toState) {
    return this.histories.indexOf(toState);
  };
  this.defaultback = function (currentState) {
    return 'main.default';
    // var currentState = currentState.replace(/\./,"_");
    // var temp = 'null';
    // !!DEFAULT_NAV_TREE_REVERT[currentState] ? temp = DEFAULT_NAV_TREE_REVERT[currentState].slice(0, -2) : temp = '';
    // //console.log(currentState+"##########"); //============================test
    // //var temp = DEFAULT_NAV_TREE_REVERT[currentState].slice(0, -2);
    // //console.log(temp); //============================test
    // if (!!DEFAULT_NAV_TREE[temp]) {
    //   return DEFAULT_NAV_TREE[temp];
    // }
    // else {
    //   return 'main.default';
    // }
  };
  this.fromState = '';
  //this.isGoBack = false;
  return this;
}])

//数据模型函数
.factory('Data', ['$resource', function($resource){
  return {
    User: $resource('http://:baseurl/:path/lp.php', 
                    {
                      baseurl:'localhost', 
                      path:'PHPServ'
                      //, callback: 'JSON_CALLBACK' //jsonp_flag
                    }, 
                    {
                      signin: {method:'POST', params:{c:'user', a:'get_token'}, timeout: 3000},//json_flag
                      signup: {method:'POST', params:{c:'user', a:'register'}, timeout: 3000}, //json_flag
                      checktoken: {method:'POST', params:{c:'user', a:'user_verify'}, timeout: 3000}, //json_flag
                      updateuserinfo: {method:'POST', params:{c:'user', a:'update_userinfo'}, timeout: 3000},  //json_flag
                      // signin: {method:'JSONP', params:{c:'user', a:'get_token'}}, //jsonp_flag
                      // signup: {method:'JSONP', params:{c:'user', a:'register'}},  //jsonp_flag
                      // checktoken: {method:'JSONP', params:{c:'user', a:'user_verify'}}, //jsonp_flag
                      // updateuserinfo: {method:'JSONP', params:{c:'user', a:'update_userinfo'}},  //jsonp_flag
                      update_avatar: {method:'POST'},
                      update_mobile: {method:'POST'},
                      update_password: {method:'POST'}
                    }),
    Post: $resource('http://:baseurl/:path/lp.php',
                    {
                      baseurl:'localhost',
                      path:'good'},
                    {
                      signin: {method:'POST', params:{c:'user', a:'get_token'}},
                      singup: {method:'POST', params:{c:'user', a:'register'}}
                    })



  };
}])



//用户操作函数
.factory('User', 
  [ '$ionicModal', 
    //'$ionicAnimation',
    'Storage', 
    'Data', 
    'Alert', 
    '$state', 
    'Session', 
    '$q', 
    '$window', 
    //'$stateParams',
  function(
    $ionicModal, 
    //$ionicAnimation, 
    Storage, 
    Data, 
    Alert, 
    $state, 
    Session, 
    $q, 
    $window 
    //, $stateParams
  ) {
    return {
      userLogin: function($scope) {
        $scope.loginData = {
          username: 'alexgzhou',
          password: '123456789',
          rememberPwd: true
        };

        //console.log("#18----------"+$scope.$id);  //=====================test
        // Create the login modal that we will use later
        $ionicModal.fromTemplateUrl('templates/common/login.html', {
          scope: $scope
          //,animation: 'no-animation'
        }).then(function(modal) {
          $scope.loginmodal = modal;
          $scope.loginmodal.show(); //20140804: 直接在这里打开登录窗口，因为是异步加载，所以在其他地方马上打开会因为模板还没加载完成而出错
          //console.log("#17----------"+$scope.$id);  //=====================test
        });

        // Triggered in the login modal to close it
        $scope.actions.closeLogin = function() {
          $scope.loginmodal.hide();
        };

        // Open the login modal
        $scope.actions.login = function() {
          $scope.loginmodal.show();
          //console.log("#login----------"+$scope.$id);  //=====================test
        };

        $scope.actions.preRegister = function() {
          $scope.actions.closeLogin();
          $scope.actions.register();
        };

        // Perform the login action when the user submits the login form
        $scope.actions.doLogin = function() {
          console.log('正在登录', $scope.loginData);

          Data.User.signin($scope.loginData, function(data) {

          if (data.err_code === 0) { 
              //Alert(data.data.user + ' 您好，欢迎回来！' ); 
              $scope.loginmodal.remove();
              // $ionicModal.fromTemplateUrl('templates/common/login.html', {
              //  scope: $scope
              // }).then(function(modal) {
              //  $scope.loginmodal = modal;
              // });
              if ($scope.loginData.rememberPwd === true) {
                Storage.kset('password', data.data.password);
              }
              Storage.kset('username', data.data.username);
              Storage.kset('token', data.data.token);
              Session.create(data.data.token);
              //$scope.mine.mineNgclick = '';
              //$scope.mine.minehref = '#/main/mine';
              //Alert(data.data.token+'=='+data.data.username+'=='+data.data.password+'=='+$scope.loginData.rememberPwd);
              $scope.loginData.password = '';
              //$scope.loginData.rememberPwd = false;
              //!!$scope.actions.toState ? $state.go($scope.actions.toState) : $window.location.reload(); //$state.reload()方法还有bug，不能重新实例化controller
              //!!$scope.actions.toState ? $state.go($scope.actions.toState) : $state.transitionTo($state.current, $stateParams, { reload: true, inherit: false, notify: true }); //替代方法1，$state.reload()方法还有bug，不能重新实例化controller
              !!$scope.actions.toState ? $state.go($scope.actions.toState) : $state.go('.', {}, {reload: true}); //替代方法2，$state.reload()方法还有bug，不能重新实例化controller
              //!!$scope.actions.toState ? $state.go($scope.actions.toState) : $state.go($state.current, {}, {reload: true}); //替代方法3，$state.reload()方法还有bug，不能重新实例化controller
              //$state.go('main.mine'); //===================使用$state.go跳转到main.mine页面
              //console.log("#16----------"+$state.current.name);  //=====================test
            }
            else {
              Alert(data.err_code + '：' + data.err_msg);
              $scope.loginData.password = '';
            }
          }, function(err){
              Alert('请检查网络！！！');
              console.log(' request fail for login !!!!! ' + err);
          });
        };

        //$scope.actions.login();
      },

      userRegister: function($scope) {
        $scope.registerData = {
          // username: 'alexgzhou',
          // password: '123456789',
          // repeatpassword: '123456789',
          // name: '周天舒',
          // mobile: '13282037883',
          gender: false
        };

        //Alert(registerData.gender);

        // Create the login modal that we will use later
        $ionicModal.fromTemplateUrl('templates/common/register.html', {
          scope: $scope
          //,animation: 'no-animation'
        }).then(function(modal) {
          $scope.registermodal = modal;
        });

        // Triggered in the login modal to close it
        $scope.actions.closeRegister = function() {
          $scope.registermodal.hide();
        };

        // Open the login modal
        $scope.actions.register = function() {
          $scope.registermodal.show();
        };

        $scope.actions.prelogin = function() {
          $scope.actions.closeRegister();
          $scope.actions.login();
        };

        // Perform the register action when the user submits the register form
        $scope.actions.doRegister = function() {
          //$scope.registerData.gender = $scope.registerData.genderFlag ? '女': '男';

          console.log('正在注册', $scope.registerData);

          Data.User.signup($scope.registerData, function(data) {
            //Alert($scope.registerData.genderFlag);
            
            if (data.err_code === 0) { 
              //Alert(data.data.user + ' 注册成功，用户名：' + data.data.username ); 
              $scope.registermodal.remove();
              $ionicModal.fromTemplateUrl('templates/common/register.html', {
               scope: $scope
              }).then(function(modal) {
               $scope.registermodal = modal;
              });
              $scope.loginData = {
                username: $scope.registerData.username,
                rememberPwd: true
              };
              $scope.registerData = {
                gender: false
              };
              $scope.actions.login(); 
            }
            else {
              Alert(data.err_code + '：' + data.err_msg);
              $scope.registerData.password = '';
              $scope.registerData.repeatpassword = '';
              // $scope.registerData = {
              //   gender: false
              // };
            }
          }, function(err){
              Alert('请检查网络！！！');
              console.log(' request fail for register !!!!! ' + err);
          });
        };
      },

      userLogout: function() {
        Session.destroy();
        Storage.kremove('password');
        Storage.kremove('token');
        $state.go('main.mine');
      },

      getUserInfo: function() {
        var deferred = $q.defer();
        Data.User.checktoken({token: Session.token}, function(data) {
          deferred.resolve(data);
          //console.log('#2--------------'+Session.token);
        }, function(err) {
          Alert('请检查网络！！！');
          console.log(' request fail for getUserInfo !!!!! ' + err);
          deferred.resolve(err);
        });
        return deferred.promise;
      },

      updateUserInfo: function(userinfo) {
        var deferred = $q.defer();
        userinfo.token = Session.token;
        //console.log(userinfo);
        Data.User.updateuserinfo(userinfo, function(data) {
          deferred.resolve(data);
        }, function(err) {
            Alert('请检查网络！！！');
            console.log(' request fail for updateUserInfo !!!!! ' + err);
            deferred.resolve(err);
        });
        return deferred.promise;
      }



    };
}])



// //页面行为函数
// .factory('Actions', ['User', '$compile', function(User, $compile) {
//   return {
//     mineClick: {
//       allowed: function($scope) {
//         $scope.mine = {};
//         //彻底解决：见241行说明
//         $scope.mine.mineNgclick = ''; //20140803-0131-改成promise后这里又出问题了，和actions.login()失效类似，但情况相反，这里ng-click赋值为空后，actions.login()还有效，好像ng-click有缓存一样
//         $scope.mine.minehref = "#/main/mine";
//         //console.log("#15----------"+$scope.$id);  //=====================test
//       },
//       denied: function($scope) {
//         $scope.mine = {};
//         $scope.actions = {};
//         User.userLogin($scope);
//         User.userRegister($scope);
//         //彻底解决：不要动态改变界面端(view)的ng-click文字，而是在controller中动态改变mine.mineNgclick绑定的对象，view中为ng-click='mine.mineNgclick()'
//         $scope.mine.mineNgclick = $scope.actions.login;  //这句语句在$resource之后actions.login()失效,可能和异步AJAX有关，具体原因还需详细分析？

//         //$scope.mine.minehref = "#";
//         //console.log("#14----------"+$scope.$id);  //=====================test 
//       }
//     }



//   };
// }])



//页面初始化函数
.factory('PageInit', ['User', '$compile', function(User, $compile) {
  return {
  };
}])



//安全认证函数
.factory('Identification', 
  [ 'Storage', 
    'Data', 
    //'Actions', 
    'Alert',
    'Session',
    '$q',
  function(
    Storage, 
    Data, 
    Alert, 
    //Actions,
    Session, 
    $q
  ) {
    return {
      checkToken: function() {
        //$scope.mine = {};
        //$scope.mine.mineNgclick = "actions.login()";
        //console.log("#4----------"+$scope.$id);  //=====================test
        //设置promise
        var deferred = $q.defer();
        //checkToken具体步骤
        if (Storage.kget('username') && Storage.kget('password')) {
          if (Session.token) {
            Data.User.checktoken({token: Session.token}, function(data) {
              if (data.err_code === 0) { 
                //Actions.mineClick.allowed($scope);
                //console.log("#5----------"+$scope.$id);  //=====================test
                //return true;
                deferred.resolve(data);
              }
              else {
                Data.User.signin({username: Storage.kget('username'), password: Storage.kget('password')}, function(data) {
                  if (data.err_code === 0) { 
                    Storage.kset('token', data.data.token);
                    Session.create(data.data.token);
                    //Actions.mineClick.allowed($scope);
                    //console.log("#6----------"+$scope.$id);  //=====================test
                    //return true;
                    deferred.resolve(data);
                  }
                  else {
                    //Actions.mineClick.denied($scope);
                    //console.log("#7----------"+$scope.$id);  //=====================test
                    //return false;
                    deferred.resolve(data);
                  }
                }, function(err) {
                  Alert('请检查网络！！！');
                  console.log(' request fail for get_token !!!!! ' + err);
                  deferred.resolve(err);
                });
              }
            }, function(err) {
                Alert('请检查网络！！！');
                console.log(' request fail for check_token !!!!! ' + err);
                deferred.resolve(err);
            });
          }
          else {
            Data.User.signin({username: Storage.kget('username'), password: Storage.kget('password')}, function(data) {
              if (data.err_code === 0) { 
                  Storage.kset('token', data.data.token);
                  Session.create(data.data.token);
                  //Actions.mineClick.allowed($scope);
                  //console.log("#8----------"+$scope.$id);  //=====================test
                  //return true;
                  deferred.resolve(data);
                }
                else {
                  //Actions.mineClick.denied($scope);
                  //console.log("#9----------");  //=====================test
                  //return false;
                  deferred.resolve(data);
                }
              }, function(err) {
                Alert('请检查网络！！！');
                console.log(' request fail for get_token !!!!! ' + err);
                deferred.resolve(err);
              });
          }
        }
        else {
          if (Session.token) {
            //console.log("#10----------"+$scope.$id);  //=====================test
            Data.User.checktoken({token: Session.token}, function(data) {
              if (data.err_code === 0) { 
                //Actions.mineClick.allowed($scope);
                //console.log("#11----------"+$scope.$id);  //=====================test
                // return true;
                deferred.resolve(data);
              }
              else {
                //console.log("#12----------"+$scope.$id);  //=====================test
                //Actions.mineClick.denied($scope);
                // return false;
                deferred.resolve(data);
              }
            }, function(err) {
                Alert('请检查网络！！！');
                console.log(' request fail for check_token without username and password !!!!! ' + err);
                deferred.resolve(err);
            });
          }
          else {
            //Actions.mineClick.denied($scope);
            //console.log("#13----------"+Session.token);  //=====================test
            // return false;
            var data = {};
            data.err_code = -999;
            deferred.resolve(data);
          }
        }
        return deferred.promise;
      },

      isAuthenticated: function () {
        return !!Session.token;
      }

    };
}])

;