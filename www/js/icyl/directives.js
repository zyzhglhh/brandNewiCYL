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
    }
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
    }
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

            var iframe = $window.document.createElement('iframe');
            //iframe.setAttribute('src', iframeSrc);
            iframe.src = iframeSrc;
            //iframe.id = iframeId;
            iframe.style = iframeStyle;
            element[0].appendChild(iframe);
            //console.log('iframeSetCookie'); //=============test

            cookie = !!Storage.kget('xsunion') ? Storage.kget('xsunion') : false;
            //cookie = 'xsunion=staff%5Fsts=2&telephone=0571%2D83731771&card5=900000001&name=900006840&dw=%B3%F8%C1%F4%CF%E3%B4%A8%B2%CB%BB%F0%B9%F8&card4=900000002&card2=900006840&card%5Fno1=900006840&shopid1=900000003&staff%5Fgrade=1&reg%5Fnbr=900006840&card3=900000003'; //=============test

            function handMessage(event){
                event = event || $window.event;
                //验证是否来自预期内的域，如果不是不做处理，这样也是为了安全方面考虑
                if(iframeSrc.indexOf(event.origin)>-1){
                    if (iframe.contentWindow && !!cookie && event.data=="ready") {
                        iframe.contentWindow.postMessage(cookie, event.origin);
                        //console.log(event.data); //=============test
                    }
                    else {
                        //console.log(event.data); //=============test
                        if (!!event.data && event.data.indexOf('xsunion')>-1 && event.data.length>60) {
                            Storage.kset('xsunion', event.data);
                        }
                        else {
                            Storage.kremove('xsunion');
                        }
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
    }
}])

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
                if(inAppBrowser != null){
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
            }
            var inAppBrowserStart = function() {
                if(inAppBrowser != null){
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
            }
            var inAppBrowserStop = function() {
                if(inAppBrowser != null){
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
            }
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
}]);