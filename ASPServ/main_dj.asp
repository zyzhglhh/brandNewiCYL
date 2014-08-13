<!--#include file="../inc/conn.asp" -->
<%

root="../mall/"

po=Request.Cookies("xsunion")("reg_nbr")
If po<>"" Then
shopid=po
End If 
If request.querystring("no")<>"" Then 
shopid=request.querystring("no")
End If 


      sql2="select jyfw,logo,company,realname,telephone,email,address from com_user where companyid='"&shopid&"'"
      Set rs2=conn.execute(sql2)
      If Not rs2.eof Then
      jyfw=rs2("jyfw")
logo=rs2("logo")
comp=rs2("company")
lxr=rs2("realname")
tel=rs2("telephone")
mail=rs2("email")
addr=rs2("address")
      Else
      
      End If 
    rs2.close
    Set rs2=nothing
      
      %>
<!DOCTYPE html>
<html lang="zh-cn">
<head>
  <title>智慧团青</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
  <meta http-equiv="Content-Type" content="text/html; charset=gbk">
  <link href="./img/favicon.ico" type="image/x-icon" rel="shortcut icon" />
  <!-- Bootstrap -->
  <link href="./dist/css/bootstrap.min.css" rel="stylesheet">
  <!--link rel="stylesheet" href="/bootstrap/dist/css/custom/mine.css"-->

  <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
  <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
  <!--[if lt IE 9]>
  <script src="http://cdn.bootcss.com/html5shiv/3.7.0/html5shiv.min.js"></script>
  <script src="http://cdn.bootcss.com/respond.js/1.3.0/respond.min.js"></script>
  <![endif]-->
  <style type="text/css">
    .header {
      background-color: #f60;
      padding: 0;
      margin: 0 0.6em;
      min-height: 5em;
    }
    .header h3 {
      padding: 0;
      margin: 0;
      font-family: "微软雅黑";
      color: #fff;
    }
    .header h5 {
      font-family: "微软雅黑";
      color: #fff;
    }
    .header .package {
      position: relative;
      top: 0.6em;
    }
    .background {
      position: absolute;
      top: 5em;
      left: 0.6em;
      right: 0.6em;
      z-index: -999;
    }
    .wrapper {
      padding: 0 1em;
      margin: 0 0.6em;
    }

    .no-edge {
      margin: 0;
      padding: 0;
    }
    .sm-edge {
      margin: 0 -7px;
      padding: 0;
    }

    .cell-button {
      margin: 0;
      padding: 0;
      height: 100%;
      width: 100%;
      color: #000;
      font-size: 1.3em;
      font-family: "微软雅黑";
    }
    .cell-button .text-lg {
      color: #fff;
    }
    .height-lg {
      height: 7.6em;
      padding: 0.2em;
    }
    .text-lg {
      font-size: 2em;
    }

    .backimg {
      height: 3em;
      width: 3em;
      background-color: #c00;
      border-radius: 5px;
      padding-top: 0.5em;
      margin-top: 0.5em;
      margin-bottom: 0.3em;
    }
    .no-backimg {
      background-color: transparent;
      padding: 0;
      border-radius: 0;
      margin-bottom: 0.3em;
    }

  </style>
</head>
<body>

  <div class="background">
 <!-- <img src="img/main_backimg_fade.png" alt="钱塘江" class="img-responsive center-block background-img">-->
 <%ddd=Right(day(now()),1)
 If ddd>7 Then 
ddd=ddd-6
End if
tp11="img/1234"&ddd&".jpg"
'Response.write tp11
 %>
 
 <img src="<%=tp11%>" alt="钱塘江" class="img-responsive center-block background-img"></div>

  <div class="header">
    <div class="package">
      <div class="header-title center-block text-center"><h3>建设美丽浙江 创造美好生活</h3></div>
      <div class="header-content center-block text-center"><h5>浙江省直机关“智慧团青”先锋版</h5></div>
    </div>
  </div>

<div class="wrapper">
    <div class="row sm-edge">
      <div class="col-xs-4 height-lg no-edge"><a href="991/index.asp?lx=团青动态"><div class="cell-button"><div class="backimg center-block text-center no-backimg"><img src="img/badge.png" alt="团徽" class="img-responsive"></div><p class="text-center">团青时讯</p></div></a></div>
	   <!-- <div class="col-xs-4 height-lg no-edge"><a href="27/index.asp?no=<%=shopid%>"><div class="cell-button"><div class="backimg center-block text-center"><span class="glyphicon glyphicon-send text-lg"></span></div><p class="text-center">团青组织</p></div></a></div>-->
      <div class="col-xs-4 height-lg no-edge"><a href="991/index_gx.asp?no=<%=shopid%>&lx=智汇共享"><div class="cell-button"><div class="backimg center-block text-center"><span class="glyphicon glyphicon-share text-lg"></span></div><p class="text-center">智汇共享</p></div></a></div>
      <div class="col-xs-4 height-lg no-edge"><a href="992/index.asp?lx=智慧连接&no=<%=shopid%>"><div class="cell-button"><div class="backimg center-block text-center"><span class="glyphicon glyphicon-link text-lg"></span></div><p class="text-center">智慧连接</p></div></a></div>
      <div class="col-xs-4 height-lg no-edge"><a href="991/index_11.asp?no=<%=shopid%>"><div class="cell-button"><div class="backimg center-block text-center"><span class="glyphicon glyphicon-star text-lg"></span></div><p class="text-center"><font color="#000000">一团一品</font></p></div></a></div>
	  <div class="col-xs-4 height-lg no-edge"><a href="991/index_cx.asp?no=<%=shopid%>&lx=智汇共享"><div class="cell-button"><div class="backimg center-block text-center"><span class="glyphicon glyphicon-send text-lg"></span></div><p class="text-center"><font color="#000000">青年创业</font></p></div></a></div>
          <div class="col-xs-4 height-lg no-edge"><a href="27/index_ds.asp?no=<%=shopid%>"><div class="cell-button"><div class="backimg center-block text-center"><span class="glyphicon glyphicon-heart text-lg"></span></div><p class="text-center"><font color="#000000">智会相亲</font></p></div></a></div>
      <div class="col-xs-4 height-lg no-edge"><a href="51/index.asp?no=91"><div class="cell-button"><div class="backimg center-block text-center"><span class="glyphicon glyphicon-fire text-lg"></span></div><p class="text-center"><font color="#000000">最美浙江</font></p></div></a></div>
      <div class="col-xs-4 height-lg no-edge"><a href="../ecp_qs.asp?no=<%=shopid%>"><div class="cell-button"><div class="backimg center-block text-center"><span class="glyphicon glyphicon-phone text-lg"></span></div><p class="text-center"><font color="#000000">智惠生活</font></p></div></a></div>
      <div class="col-xs-4 height-lg no-edge"><a href="38/index_sh.asp?no=<%=shopid%>"><div class="cell-button"><div class="backimg center-block text-center"><span class="glyphicon glyphicon-wrench text-lg"></span></div><p class="text-center"><font color="#000000">我的订制</font></p></div></a></div></font>
  </div>

  <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
  <script src="./dist/js/1.10.2/jquery.min.js"></script>
  <!-- Include all compiled plugins (below), or include individual files as needed -->
  <script src="./dist/js/bootstrap.min.js"></script>

  <script type="text/javascript">
    $(document).ready(function() {
      var cookie = document.cookie.match(new RegExp('(^| )xsunion=([^;]*)(;|$)'));
      if(!!cookie[0]) {
          localStorage.setItem('xsunion', cookie[0]);
      }
      //alert(cookie);
    });
  </script>

</body>
</html>