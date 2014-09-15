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
.controller('mainLove', ['$scope', '$ionicPopover', '$ionicPopup', function($scope, $ionicPopover, $ionicPopup) {
  // $scope.items=[1,2,3];
  $scope.items = {item1:{id:1,imgsrc:'http://localhost/wonder/img/badge.png',name:'省团建',gender:'男',age:'20-30岁',company:'浙江省团建',address:'',tel:'15512345678'},
                  item2:{id:2,imgsrc:'http://localhost/wonder/img/badge.png',name:'李剑锋',gender:'男',age:'20-30岁',company:'省农业厅',address:'杭州凤起东路29号',tel:'15543215678'},
                  item3:{id:3,imgsrc:'http://localhost/wonder/img/badge.png',name:'李延吉',gender:'男',age:'20-30岁',company:'省人大办公室',address:'仁谐路1号',tel:'15512348765'}};

  //-----
  $ionicPopover.fromTemplateUrl('my-popover.html', {
    scope: $scope,
  }).then(function(popover) {
    $scope.popover = popover;
  });
  $scope.openPopover = function($event) {
    $scope.popover.show($event);
  };
  $scope.closePopover = function() {
    $scope.popover.hide();
  };
  //Cleanup the popover when we're done with it!
  $scope.$on('$destroy', function() {
    $scope.popover.remove();
  });
  // Execute action on hide popover
  $scope.$on('popover.hidden', function() {
    // Execute action
  });
  // Execute action on remove popover
  $scope.$on('popover.removed', function() {
    // Execute action
  });
}])

//最美浙江页面控制器
.controller('mainBeauty', ['$scope', '$ionicPopover', '$ionicPopup', function($scope, $ionicPopover, $ionicPopup) {
  // $scope.items=[1,2,3];
  $scope.items = {item1:{id:1,imgsrc:'http://localhost/wonder/img/badge.png',name:'省团建',gender:'男',age:'20-30岁',company:'浙江省团建',address:'',tel:'15512345678'},
                  item2:{id:2,imgsrc:'http://localhost/wonder/img/badge.png',name:'李剑锋',gender:'男',age:'20-30岁',company:'省农业厅',address:'杭州凤起东路29号',tel:'15543215678'},
                  item3:{id:3,imgsrc:'http://localhost/wonder/img/badge.png',name:'李延吉',gender:'男',age:'20-30岁',company:'省人大办公室',address:'仁谐路1号',tel:'15512348765'}};

  //-----
  $ionicPopover.fromTemplateUrl('my-popover.html', {
    scope: $scope,
  }).then(function(popover) {
    $scope.popover = popover;
  });
  $scope.openPopover = function($event) {
    $scope.popover.show($event);
  };
  $scope.closePopover = function() {
    $scope.popover.hide();
  };
  //Cleanup the popover when we're done with it!
  $scope.$on('$destroy', function() {
    $scope.popover.remove();
  });
  // Execute action on hide popover
  $scope.$on('popover.hidden', function() {
    // Execute action
  });
  // Execute action on remove popover
  $scope.$on('popover.removed', function() {
    // Execute action
  });
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

.controller('nNews', ['$scope', '$ionicPopover', '$ionicPopup', function($scope, $ionicPopover, $ionicPopup) {
  // $scope.items=[1,2,3];
  $scope.items = {item1:{id:1,imgsrc:'http://localhost/wonder/img/badge.png'},
                  item2:{id:2,imgsrc:'http://localhost/wonder/img/badge.png'},
                  item3:{id:3,imgsrc:'http://localhost/wonder/img/badge.png'}};

  //-----
  $ionicPopover.fromTemplateUrl('my-popover.html', {
    scope: $scope,
  }).then(function(popover) {
    $scope.popover = popover;
  });
  $scope.openPopover = function($event) {
    $scope.popover.show($event);
  };
  $scope.closePopover = function() {
    $scope.popover.hide();
  };
  //Cleanup the popover when we're done with it!
  $scope.$on('$destroy', function() {
    $scope.popover.remove();
  });
  // Execute action on hide popover
  $scope.$on('popover.hidden', function() {
    // Execute action
  });
  // Execute action on remove popover
  $scope.$on('popover.removed', function() {
    // Execute action
  });
}])



.controller('nKnowlbase', ['$scope', function($scope) {

}])

.controller('nLink', ['$scope', function($scope) {

}])

.controller('nListo', ['$scope', function($scope) {

}])

.controller('nListt', ['$scope', function($scope) {

}])

.controller('nListf', ['$scope', function($scope) {

}])

.controller('nLists', ['$scope', function($scope) {

}])

.controller('bankOfTime', ['$scope', function($scope) {

}])

.controller('special', ['$scope', function($scope) {

}])

.controller('hElp', ['$scope', function($scope) {

}])

.controller('sEarch', ['$scope', function($scope) {

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
	  if (data.err_code == 0) {
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
          if (data.err_code == 0) {
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
      })
      
    }
  };

}]);