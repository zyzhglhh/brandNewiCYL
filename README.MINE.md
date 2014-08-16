Title:程序开发档案
=========================



=========================
=#1======================

Subject		: 微信分享功能开发(Android版), !!!!!!!!!直接使用nl.x-services.plugins.socialsharing插件就可以!!!!!!!!!
Date		  : 20140815
Author		: Alex Zhou
Abstract	: 
Key Words	: Wechat; Weixin; Phonegap; Cordova; Plugin; Share

Main Body----------------
Method & Material~~~~~~~~
Online    : http://blog.csdn.net/chen1026241686/article/details/38368713
			      https://github.com/xu-li/cordova-plugin-wechat
			      https://github.com/xu-li/cordova-plugin-wechat/issues/1
			      https://github.com/xu-li/cordova-plugin-wechat-example
Code 		  : cordova plugin add https://github.com/xu-li/cordova-plugin-wechat
			      https://open.weixin.qq.com/cgi-bin/frame?t=resource/res_main_tmpl&verify=1&lang=zh_CN&target=res/app_download_android		##Android开发工具包中的libammsdk.jar, 在externalLibs/中

Procedure~~~~~~~~~~~~~~~~
1. 需要完全配置好Android-SDK开发环境(包括SDK, git, apache-ant, Java等, 见？文档);
2. 建好工程(ionic或cordova命令);
3. cordova plugin add https://github.com/xu-li/cordova-plugin-wechat; (同时安装好其他插件);
4. cordova platform add android; (执行本操作后, 会把所有需要的资源加入到platforms/android/目录中, 包括www\config.xml, plugins\*, res\*, 等等, 所以下面的步骤#7和#8都应该在本步骤之前完成);
5. 将libammsdk.jar放置到\platforms\android\CordovaLib\libs和\platforms\android\libs;
6. cordova build; (先编译一下试试看!), 编译出错, 按照错误提示作如下修改:
7. 修改\plugins\xu.li.cordova.wechat\src\android\Wechat.java和\platforms\android\src\xu\li\cordova\wechat\Wechat.java (本文件可以不修改), 即Android插件代码;
7.1 将line:23@ public class Weixin extends CordovaPlugin { 中的Weixin改为Wechat, 插件作者有误;
7.2 将line:17@ import com.tencent.mm.sdk.openapi.SendMessageToWX; 中的openapi改为modelmsg, 微信接口更新, 查阅Android_SDK.zip中的文档发现;
7.3 将line:19, 20, 21@ 作相同修改;
7.4 将line:25@ public static final String WXAPPID_PROPERTY_KEY = "weixinappid"; 中的weixinappid改为wechatappid, 插件作者笔误;
7.5 将line:1@ package xu.li.cordova.Wechat; 中的Weixin改为Wechat;
8. 在\www\config.xml中加入<preference name="wechatappid" value="wx427f444432aef6cc" />; 不要在\platforms\android\res\xml\config.xml中加, 每次ionic build或cordova build后，这个config.xml都会被\www\config.xml覆盖; 这里的wechatappid和上面的WXAPPID_PROPERTY_KEY对应;
9. 再次编译(cordova build或ionic build);
10. 使用方法: 
##<CODE>#################
Wechat.share({
    message: {
       title: "Message Title",
       description: "Message Description(optional)",
       mediaTagName: "Media Tag Name(optional)",
       thumb: "http://YOUR_THUMBNAIL_IMAGE",
       media: {
           type: Wechat.Type.WEBPAGE,   // webpage
           webpageUrl: "https://github.com/xu-li/cordova-plugin-wechat"    // webpage
       }
   },
   scene: Wechat.Scene.TIMELINE   // share to Timeline
}, function () {
    alert("Success");
}, function (reason) {
    alert("Failed: " + reason);
});
##</CODE>################
11. cordova emulate android或ionic emulate android;

Result~~~~~~~~~~~~~~~~~~~
出错: alert("Failed: " + reason) == alert('Failed: Class not found');
解决方案: 待解决;
其他方案: !!!!!!!!!直接使用nl.x-services.plugins.socialsharing插件就可以!!!!!!!!!

=#1-END==================
=========================



=========================
=#2======================

Subject   : 
Date      : 
Author    : Alex Zhou
Abstract  : 
Key Words : 

Main Body----------------

Method & Material~~~~~~~~
Online    : 
Code      : 

Procedure~~~~~~~~~~~~~~~~

Result~~~~~~~~~~~~~~~~~~~


=#2-END==================
=========================