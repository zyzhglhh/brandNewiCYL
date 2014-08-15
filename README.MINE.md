Title:程序开发档案
=========================

=#1======================
Subject		: 微信分享功能开发(Android版)
Date		: 20140815
Author		: Alex Zhou
Abstract	: 
Key Words	: Wechat; Weixin; Phonegap; Cordova; Plugin; Share
Main Body----------------
Method & Material~~~~~~~~
Online Pages: http://blog.csdn.net/chen1026241686/article/details/38368713
			  https://github.com/xu-li/cordova-plugin-wechat
			  https://github.com/xu-li/cordova-plugin-wechat/issues/1
			  https://github.com/xu-li/cordova-plugin-wechat-example
Code 		: cordova plugin add https://github.com/xu-li/cordova-plugin-wechat
			  https://open.weixin.qq.com/cgi-bin/frame?t=resource/res_main_tmpl&verify=1&lang=zh_CN&target=res/app_download_android		##Android开发工具包中的libammsdk.jar
Procedure	: 
1. 需要完全配置好Android-SDK开发环境(包括SDK, git, apache-ant, Java等, 见？文档);
2. 建好工程(ionic或cordova命令);
3. cordova platform add android;
4. cordova plugin add https://github.com/xu-li/cordova-plugin-wechat;
5. 将libammsdk.jar放置到\platforms\android\CordovaLib\libs和\platforms\android\libs;
6. cordova build; 编译出错, 按照错误提示作如下修改:
7. 修改\platforms\android\src\xu\li\cordova\wechat\Wechat.java, 即Android插件代码; 
7.1 将line:23@ public class Weixin extends CordovaPlugin { 中的Weixin改为Wechat, 插件作者有误;
7.2 将line:17@ import com.tencent.mm.sdk.openapi.SendMessageToWX; 中的openapi改为modelmsg, 微信接口更新, 查阅Android_SDK.zip中的文档发现;
7.3 将line:19, 20, 21@ 作相同修改;
7.4 将line:25@ public static final String WXAPPID_PROPERTY_KEY = "weixinappid"; 中的weixinappid改为wechatappid, 插件作者笔误;
8. 在\platforms\android\res\xml\config.xml中加入<preference name="wechatappid" value="wx427f444432aef6cc" />; 这里的wechatappid和上面的WXAPPID_PROPERTY_KEY对应;
