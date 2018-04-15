<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
 	<%@ include file="../../html/NavigationBar.html" %>
<!DOCTYPE HTML>
<html>
  <head>
    <base href="<%=basePath%>">
    <title>五指棋博弈游戏</title>
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->
	<script type="text/javascript" src="js/tx/pgy.js"></script>
  </head>
  
  <body>
	 <div style="width:100%;height:100%;">
	    <iframe id="contentFrame" name="contentFrame" frameborder="0"
					scrolling="no" style="width:100%;height:100%;"></iframe>
	 </div>
  </body>
</html>
