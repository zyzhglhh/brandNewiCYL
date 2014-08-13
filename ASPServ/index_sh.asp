<!--#include file="top.asp" -->
<body>
	<div class="content">
		<table border=0 width="100%"><tr ><td align="center">
			<img src="../27/d1.png"></td><td><font size="5pt" ><%=comp%></font>
			</td></tr>
			<tr ><td align="center" colspan=2>
			<font size="3pt" color="#8692AC">智慧团青管理</font>
			</td></tr>
			</table>
						
	
		<!--<section class="cc-search" style="padding-top: 10px">
			<div class="c-form-search">
				<form name="searchForm" method="get" action="search.php">
					<input autocomplete="off" class="inp-search" id="keywords"
						name="keywords" type="search" value="" placeholder="请输入食材名称"> <input
						class="bton-search" name="search-bton" type="submit" value="">
				</form>
			</div>
		</section>-->
		<div class="content">&nbsp;
		<% sql="select count(*) from mall_dingdan where bz is not null and sysdate-ly_date<5 and  buyerid='"&shopid&"'"
		Set rs=conn.execute(sql)
		If CInt(rs(0))>0 then%>
		<p><a href="../mall/index/dingdan_list.asp?no=<%=shopid%>"><font color="white">--</font><img  src="../mall/index/lb.png" border=0><font color="#330902">:你的活动有<font color="red"><%=rs(0)%></font>条回复了.查看我的活动</font></a>
		<% rs.close
		Set rs=nothing
		End If
		'Response.write shopid%>
		【<%=comp2(shopid)%>】
</div>
		<section class="in-commt">
			<p class="in-comm-tag">		
						
						 <a href='../main_dj.asp?no=<%=shopid%>&po=<%=shopid%>' style="display: block; font-size: 18px; color: #fff; text-indent: 1em; font-weight: bold; height: 50px; line-height: 50px; background: -webkit-gradient(linear, 0 0, 0 100%, from(#ff9737), to(#cc6202) );">我的分享<font size=2 color="#F0EBE4">--全面方便的向宣传</font></a><span class="space10">|</span>
						 <a href='../88/index.asp?no=<%=shopid%>' style="display: block; font-size: 18px; color: #fff; text-indent: 1em; font-weight: bold; height: 50px; line-height: 50px; background: -webkit-gradient(linear, 0 0, 0 100%, from(#ff9737), to(#cc6202) );">签到管理<font size=2 color="#F0EBE4">--活动签到管理</font></a><span class="space10">|</span>
						  <a href='../27/index.asp?no=<%=shopid%>' style="display: block; font-size: 18px; color: #fff; text-indent: 1em; font-weight: bold; height: 50px; line-height: 50px; background: -webkit-gradient(linear, 0 0, 0 100%, from(#ff9737), to(#cc6202) );">通讯录<font size=2 color="#F0EBE4">--活动签到管理</font></a><span class="space10">|</span>
						 <a href='../../mall/user/dj_pro_total.asp?no=<%=shopid%>' style="display: block; font-size: 18px; color: #fff; text-indent: 1em; font-weight: bold; height: 50px; line-height: 50px; background: -webkit-gradient(linear, 0 0, 0 100%, from(#ff9737), to(#cc6202) );">活动统计<font size=2 color="#F0EBE4">--第一时间得到成员的报名信息</font></a><span class="space10">|</span>
						  <a href='../../mall/index/dingdan_list_dj.asp?no=<%=shopid%>' style="display: block; font-size: 18px; color: #fff; text-indent: 1em; font-weight: bold; height: 50px; line-height: 50px; background: -webkit-gradient(linear, 0 0, 0 100%, from(#ff9737), to(#cc6202) );">我要签到<font size=2 color="#F0EBE4">--出示活动电子证，活动签到</font></a><span class="space10">|</span>
						  <a href='../../mall/index/dingdan_list_djbm.asp?no=<%=shopid%>' style="display: block; font-size: 18px; color: #fff; text-indent: 1em; font-weight: bold; height: 50px; line-height: 50px; background: -webkit-gradient(linear, 0 0, 0 100%, from(#ff9737), to(#cc6202) );">活动组织<font size=2 color="#F0EBE4">--组织活动的人员报名情况</font></a><span class="space10">|</span>
						 <a href='../../94/index.asp?no=<%=shopid%>' style="display: block; font-size: 18px; color: #fff; text-indent: 1em; font-weight: bold; height: 50px; line-height: 50px; background: -webkit-gradient(linear, 0 0, 0 100%, from(#ff9737), to(#cc6202) );">建言献策<font size=2 color="#F0EBE4">--留言及建议</font></a><span class="space10">|</span>
						  <a href='category.asp?no=<%=shopid%>' style="display: block; font-size: 18px; color: #fff; text-indent: 1em; font-weight: bold; height: 50px; line-height: 50px; background: -webkit-gradient(linear, 0 0, 0 100%, from(#ff9737), to(#cc6202) );">活动提醒<font size=2 color="#F0EBE4">--及时的给报名后的成员提醒</font></a><span class="space10">|</span>
						  <a href='../70/index.asp?no=<%=shopid%>' style="display: block; font-size: 18px; color: #fff; text-indent: 1em; font-weight: bold; height: 50px; line-height: 50px; background: -webkit-gradient(linear, 0 0, 0 100%, from(#ff9737), to(#cc6202) );">我的缘份<font size=2 color="#F0EBE4">--团青年交友互动</font></a><span class="space10">|</span>
						  <a href='#' style="display: block; font-size: 18px; color: #fff; text-indent: 1em; font-weight: bold; height: 50px; line-height: 50px; background: -webkit-gradient(linear, 0 0, 0 100%, from(#ff9737), to(#cc6202) );">意见征询<font size=2 color="#F0EBE4">--征求建议，取得民意</font></a><span class="space10">|</span>
						<!-- <a href='#' style="display: block; font-size: 18px; color: #fff; text-indent: 1em; font-weight: bold; height: 50px; line-height: 50px; background: -webkit-gradient(linear, 0 0, 0 100%, from(#ff9737), to(#cc6202) );">对帐结算<font size=2 color="#F0EBE4">--轻松的完成与业务人员的结算</font></a><span class="space10">|</span>-->
						 <a href='../../mall/user/dj_pro_totalxh.asp?no=<%=shopid%>' style="display: block; font-size: 18px; color: #fff; text-indent: 1em; font-weight: bold; height: 50px; line-height: 50px; background: -webkit-gradient(linear, 0 0, 0 100%, from(#ff9737), to(#cc6202) );">相关统计<font size=2 color="#F0EBE4">--了解整体情况</font></a><span class="space10">|</span>
										 <!--<a href='#../hs_1/lxr_login.asp' style="display: block; font-size: 18px; color: #fff; text-indent: 1em; font-weight: bold; height: 50px; line-height: 50px; background: -webkit-gradient(linear, 0 0, 0 100%, from(#ff9737), to(#cc6202) );">会员管理<font size=2 color="#F0EBE4">--会员发卡/对帐结算/活动分析</font></a><span class="space10">|</span>
						 <a href='../5/news_mb.asp?no=900006822' style="display: block; font-size: 18px; color: #fff; text-indent: 1em; font-weight: bold; height: 50px; line-height: 50px; background: -webkit-gradient(linear, 0 0, 0 100%, from(#ff9737), to(#cc6202) );">微站模板<font size=2 color="#F0EBE4">--上百种精美模板</font></a><span class="space10">|</span>
						 <a href='../mall/index/dingdan_list_gwc.asp?no=<%=shopid%>' style="display: block; font-size: 18px; color: #fff; text-indent: 1em; font-weight: bold; height: 50px; line-height: 50px; background: -webkit-gradient(linear, 0 0, 0 100%, from(#ff9737), to(#cc6202) );">个人购物车<font size=2 color="#F0EBE4">--未下活动操作</font></a><span class="space10">|</span>
						  <a href='../5/news_help.asp' style="display: block; font-size: 18px; color: #fff; text-indent: 1em; font-weight: bold; height: 50px; line-height: 50px; background: -webkit-gradient(linear, 0 0, 0 100%, from(#ff9737), to(#cc6202) );">操作帮助<font size=2 color="#F0EBE4">--轻松的操作所有功能</font></a><span class="space10">|</span>
						   <a href='../mall/index/dingdan_list.asp?no=<%=shopid%>' style="display: block; font-size: 18px; color: #fff; text-indent: 1em; font-weight: bold; height: 50px; line-height: 50px; background: -webkit-gradient(linear, 0 0, 0 100%, from(#ff9737), to(#cc6202) );">个人活动<font size=2 color="#F0EBE4">--个人及推荐活动</font></a><span class="space10">|</span>-->
						<!-- <a href="user.php@act=user_center"
					style="display: block; font-size: 18px; color: #fff; text-indent: 1em; font-weight: bold; height: 50px; line-height: 50px; background: -webkit-gradient(linear, 0 0, 0 100%, from(#ff9737), to(#cc6202) );">
					增值利益<font size=2 color="#F0EBE4">--增值服务同时，获得利益</font></a>-->
			</p>
		</section>

		<!--#include file="foot.asp" -->
	</div>
	<script src="../dist/js/1.10.2/jquery.min.js"></script>
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