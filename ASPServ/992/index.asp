<!--#include file="top.asp" -->
<%st=request.querystring("st")
lx=request.querystring("lx") 
shopid1="91"%>
<header>		
		<div class="loc_logo_nav">
			<div class="loc_logo_navbtn">
				<div class="loc_logo">
				    					<div class="logo">
						<h1><a href="../index.asp?no=<%=shopid%>"><img src="../27/d1.png" width=30 >团青活动</a></h1>
					</div>
				</div>
				<div class="navbtn" id="navbtn"></div>
			</div>
			<nav>
				<ul>
					<!--#include file="list_st.inc" -->
				</ul>
			</nav>
		</div>	
		<div class="clear"></div>
		<img src="../img/hd12.png">
	</header>
	<!-- header end --><script src="js/2014/m/tabbedContent.js"></script>
<script src="js/2014/m/jquery.mobile-1.0a4.1.min.js"></script>
<script>
        window.onload=function(){
            var sharing = location.href + '<$separate$>'
                        + document.title + '<$separate$>'
                        + document.title + '<$separate$>'
                        + document.getElementsByTagName('img')[0].src;

            if (!!sharing) {
                parent.postMessage(sharing,"*");
            }
        }        
</script>

	
	<section class="clear">
		        		<div class="tabbed_content">
			<div class="tabs">
			<div class="moving_bg">&nbsp;</div>
				<span class="tab_item">团工委活动</span>
				<span class="tab_item">部门活动</span>
				<span class="tab_item">他山之石</span>
				<span class="tab_item">活动回顾</span>
				

			</div>
			
			<div class="slide_content">						
				<div class="tabslider" >
					<div>&nbsp;</div>
					           		<ul>
		  

  <% mc=request("mc")
		st1="4583"		
				po=Request.Cookies("xsunion")("reg_nbr")
set rs=server.CreateObject("ADODB.RecordSet")
sql2="Select id,title,pic,dprice,price,yprice,seodescription,clicknumber,addtime,kucun,guige,starttime,endtime,areaname from  mall_pro where areapath like '%0,2,91,%' and  zhuangtai=2"
If shopid1<>"" Then 
sql2=sql2&" and  shopid='91'" 
End If 
If st<>"" Then 
sql2=sql2&" and areapath like '%"&st&"%'"
End If 
'If st1<>"" Then 
'sql2=sql2&" and sortid like '%"&st1&"%'"
'End If  
If mc <>"" Then 
sql2=sql2&" and title like '%"&mc&"%'"
End If 
sql2=sql2&" order by addtime desc"
'Response.write sql2

rs.Open sql2,conn,1,1
 MaxPer=6
 y=0
do while not rs.eof
 %>

  <li>
   [<%=rs("areaname")%>]<br>
   
  <a href="../../mall/index/pro_show_dj3.asp?id=<%=rs("id")%>&no=<%=shopid%>" title="<%=rs(1)%>" rel="external" data-transition="slide"><img src="images/dj103.png" width=15><%=Left(rs("title"),20)%></a><span><em>浏览
  <%=rs(7)%>次</em><%=year(rs("addtime"))%>-<%=month(rs("addtime"))%>-<%=day(rs("addtime"))%></span></li>
				</li>
<%
y=y+1
if y>=MaxPer or rs.eof  then exit do         
rs.MoveNext
loop
%>
<%
rs.Close
set rs=nothing
%> 
 <li><center><a class="more_h" href="embedded.asp?no=<%=shopid%>&lx=党员课程表"><img src="../../41/images/button.jpg"></a></center></li>							
</ul>					
					            		<ul>
		  
		 <!--#include file="ad.asp" -->
				<% mc=request("mc")
				

				po=Request.Cookies("xsunion")("reg_nbr")
set rs=server.CreateObject("ADODB.RecordSet")
sql2="Select id,title,pic,dprice,price,yprice,seodescription,clicknumber,addtime,kucun,guige from  mall_pro where  areapath like '%0,2,91,%'  and sortpath like  '%0,3,8,4596,%' and addtime<=sysdate and  zhuangtai=2"
If shopid1<>"" Then 
sql2=sql2&" and  shopid like '"&shopid1&"0%'" 
End If 
If st<>"" Then 
sql2=sql2&" and areapath like '%"&st&"%'"
End If   
If mc <>"" Then 
sql2=sql2&" and title like '%"&mc&"%'"
End If 
sql2=sql2&" order by id desc"
rs.Open sql2,conn,1,1
 MaxPer=6
 y=0
do while not rs.eof
 %>
  <li>
  <% If rs("addtime")>sysdate Then %>
 [<%=rs(10)%>]
 <%else%>
[<%=rs(10)%>]
  <%End If %>
   <br>
  <a href="../../mall/index/pro_show_dj3.asp?id=<%=rs("id")%>&po=<%=po%>" title="<%=rs(1)%>" rel="external" data-transition="slide"><img src="images/dj103.png" width=15><%=Left(rs("title"),20)%></a><span><em>浏览
  <%=rs(7)%>次</em><%=year(rs("addtime"))%>-<%=month(rs("addtime"))%>-<%=day(rs("addtime"))%></span></li>
				</li>
<%
y=y+1
if y>=MaxPer or rs.eof  then exit do         
rs.MoveNext
loop
%>
<%
rs.Close
set rs=nothing
%> 
	<li>move</li>		
</ul>           		
			         		
					            		<ul>
		
		  <% mc=request("mc")
			

				po=Request.Cookies("xsunion")("reg_nbr")
set rs=server.CreateObject("ADODB.RecordSet")
sql2="Select id,title,pic,dprice,price,yprice,seodescription,clicknumber,addtime,kucun,guige from  mall_pro where areapath like '%0,2,66,67,68,%' and  zhuangtai=2"
'If shopid1<>"" Then 
'sql2=sql2&" and  shopid like '"&shopid1&"%'" 
'End If 
If st<>"" Then 
sql2=sql2&" and areapath like '%"&st&"%'"
End If  
If mc <>"" Then 
sql2=sql2&" and title like '%"&mc&"%'"
End If 
sql2=sql2&" order by id desc"
rs.Open sql2,conn,1,1
 MaxPer=6
 y=0
do while not rs.eof
 %>
  <li>
  [<%=rs(10)%>]<br>
  <a href="../../mall/index/pro_show_dj3.asp?id=<%=rs("id")%>&po=<%=po%>" title="<%=rs(1)%>" rel="external" data-transition="slide"><%=Left(rs("title"),20)%></a><span><em>关注
  <%=rs(7)%>次&nbsp;报名：<%=hd1(rs(3))%></em><a href="../../mall/user/dj_pro_totaldy1.asp?id=<%=rs(0)%>&ln1=<%=rs("title")%>">参加人员------<%=year(rs("addtime"))%>-<%=month(rs("addtime"))%>-<%=day(rs("addtime"))%></a></span></li>
				</li>
<%
y=y+1
if y>=MaxPer or rs.eof  then exit do         
rs.MoveNext
loop
%>
<%
rs.Close
set rs=nothing
%> 
			
</ul>	
		            		<ul>
		 <!--#include file="ad.asp" -->
		  
				<%
mc1=request.querystring("mc1")
mc=request("q")
sjnr=request.querystring("id")
If request("shopid")<>"" Then 
shopid=request("shopid")
End If 
set rs=server.CreateObject("ADODB.RecordSet")
If mc1="2" Then 
sql2=session("sql2")
else
sql2="Select id,zt,tp1,fbsj,fblx,fblx1,js_sts,nr,ckcs,qy_zczj From web_xxfb_nr where  fblx='活动回顾'"
If shopid1<>"" Then 
sql2=sql2&" and staff_id like '"&shopid1&"%'"
End if
If mc<>"" Then 
sql2=sql2&" and zt like '%"&mc&"%'"
End If
'If st<>"" Then 
'sql2=sql2&" and qy_zczj like '%"&st&"%'"
'End If
If sjnr<>"" Then 
sql2=sql2&" and sjnr='"&sjnr&"' "
End If 
'If st1<>"" Then 
'sql2=sql2&" and qy_zczj like'%"&st1&"%'"
'End If 
session("sql2")=sql2
End If 
sql2=sql2& " order by id desc" 
rs.Open sql2,conn,1,1
'Response.write sql2
 MaxPer=8
  y=0
  
do while not rs.eof
 %>
  <li><a href="news1.asp?id=<%=rs(0)%>&no=<%=shopid%>&lx=<%=rs(4)%>" title="<%=rs(1)%>" rel="external" data-transition="slide"><img src="../img/db1.png" width=15 ><%=rs(1)%></a><span><em>浏览
  <%=rs("ckcs")%>次</em><%=year(rs("fbsj"))%>-<%=month(rs("fbsj"))%>-<%=day(rs("fbsj"))%></span></li>
  
<%
y=y+1
if y>=MaxPer or rs.eof  then exit do         
rs.MoveNext
Loop
rs.close
Set rs=nothing
%>
	<li>&nbsp;</li>	
</ul>   
</div>
			
			</div>
			
		</div>
		
		
	</section>
	<div id="top">
	 	<img src="images/2014/m/top_icon_31x11.png" id="goTopBtn">
	</div>
	<br><br>
	
	<!-- footer begin -->
	<!--#include file="foot.asp" -->
</body>
</html>