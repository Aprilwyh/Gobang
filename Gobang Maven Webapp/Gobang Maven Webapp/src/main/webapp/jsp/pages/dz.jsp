<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<%@page isELIgnored="false"%>
<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<title>人机对战</title>
	<link rel="stylesheet" type="text/css" href="css/dz.css" />
	<link rel="stylesheet" type="text/css" href="css/common.css" />
	<link rel="stylesheet" type="text/css" href="css/GyUtils.css" />
	<script type="text/javascript" src="js/common/jquery-1.7.2.js"></script>
	<script type="text/javascript" src="js/common/common.js" charset="utf-8"></script>
	<script type="text/javascript" src="js/yw/dz.js" charset="utf-8"></script>
	<script type="text/javascript" src="js/common/GyUtils.js" charset="utf-8"></script>
	<!-- <script type="text/javascript" src="js/tx/pgy.js"></script> -->
</head>
<body>
<div class="wrapper" style="margin: auto;">
	<!-- 棋盘 -->
	<div class="chessboard">
		<!-- top line -->
		<div class="chess-top"></div>
		<div class="chess-top"></div>
		<div class="chess-top"></div>
		<div class="chess-top"></div>
		<div class="chess-top"></div>
		<div class="chess-top"></div>
		<div class="chess-top"></div>
		<div class="chess-top"></div>
		<div class="chess-top"></div>
		<div class="chess-top"></div>
		<div class="chess-top"></div>
		<div class="chess-top"></div>
		<div class="chess-top"></div>
		<div class="chess-top"></div>
		<div class="chess-top chess-right"></div>
		<!-- line 1 -->
		<div class="chess-left"></div>		
		<div class="chess-middle"></div>
		<div class="chess-middle"></div>
		<div class="chess-middle"></div>
		<div class="chess-middle"></div>
		<div class="chess-middle"></div>
		<div class="chess-middle"></div>
		<div class="chess-middle"></div>
		<div class="chess-middle"></div>
		<div class="chess-middle"></div>
		<div class="chess-middle"></div>
		<div class="chess-middle"></div>
		<div class="chess-middle"></div>
		<div class="chess-middle"></div>
		<div class="chess-right"></div>
		<!-- line 2 -->
		<div class="chess-left"></div>
		<div class="chess-middle"></div>
		<div class="chess-middle"></div>
		<div class="chess-middle"></div>
		<div class="chess-middle"></div>
		<div class="chess-middle"></div>
		<div class="chess-middle"></div>
		<div class="chess-middle"></div>
		<div class="chess-middle"></div>
		<div class="chess-middle"></div>
		<div class="chess-middle"></div>
		<div class="chess-middle"></div>
		<div class="chess-middle"></div>
		<div class="chess-middle"></div>
		<div class="chess-right"></div>
		<!-- line 3 -->
		<div class="chess-left"></div>
		<div class="chess-middle"></div>
		<div class="chess-middle"></div>
		<div class="chess-middle"></div>
		<div class="chess-middle"></div>
		<div class="chess-middle"></div>
		<div class="chess-middle"></div>
		<div class="chess-middle"></div>
		<div class="chess-middle"></div>
		<div class="chess-middle"></div>
		<div class="chess-middle"></div>
		<div class="chess-middle"></div>
		<div class="chess-middle"></div>
		<div class="chess-middle"></div>
		<div class="chess-right"></div>
		<!-- line 4 -->
		<div class="chess-left"></div>
		<div class="chess-middle"></div>
		<div class="chess-middle"></div>
		<div class="chess-middle"></div>
		<div class="chess-middle"></div>
		<div class="chess-middle"></div>
		<div class="chess-middle"></div>
		<div class="chess-middle"></div>
		<div class="chess-middle"></div>
		<div class="chess-middle"></div>
		<div class="chess-middle"></div>
		<div class="chess-middle"></div>
		<div class="chess-middle"></div>
		<div class="chess-middle"></div>
		<div class="chess-right"></div>
		<!-- line 5 -->
		<div class="chess-left"></div>
		<div class="chess-middle"></div>
		<div class="chess-middle"></div>
		<div class="chess-middle"></div>
		<div class="chess-middle"></div>
		<div class="chess-middle"></div>
		<div class="chess-middle"></div>
		<div class="chess-middle"></div>
		<div class="chess-middle"></div>
		<div class="chess-middle"></div>
		<div class="chess-middle"></div>
		<div class="chess-middle"></div>
		<div class="chess-middle"></div>
		<div class="chess-middle"></div>
		<div class="chess-right"></div>
		<!-- line 6 -->
		<div class="chess-left"></div>
		<div class="chess-middle"></div>
		<div class="chess-middle"></div>
		<div class="chess-middle"></div>
		<div class="chess-middle"></div>
		<div class="chess-middle"></div>
		<div class="chess-middle"></div>
		<div class="chess-middle"></div>
		<div class="chess-middle"></div>
		<div class="chess-middle"></div>
		<div class="chess-middle"></div>
		<div class="chess-middle"></div>
		<div class="chess-middle"></div>
		<div class="chess-middle"></div>
		<div class="chess-right"></div>
		<!-- line 7 -->
		<div class="chess-left"></div>
		<div class="chess-middle"></div>
		<div class="chess-middle"></div>
		<div class="chess-middle"></div>
		<div class="chess-middle"></div>
		<div class="chess-middle"></div>
		<div class="chess-middle"></div>
		<div class="chess-middle"></div>
		<div class="chess-middle"></div>
		<div class="chess-middle"></div>
		<div class="chess-middle"></div>
		<div class="chess-middle"></div>
		<div class="chess-middle"></div>
		<div class="chess-middle"></div>
		<div class="chess-right"></div>
		<!-- line 8 -->
		<div class="chess-left"></div>
		<div class="chess-middle"></div>
		<div class="chess-middle"></div>
		<div class="chess-middle"></div>
		<div class="chess-middle"></div>
		<div class="chess-middle"></div>
		<div class="chess-middle"></div>
		<div class="chess-middle"></div>
		<div class="chess-middle"></div>
		<div class="chess-middle"></div>
		<div class="chess-middle"></div>
		<div class="chess-middle"></div>
		<div class="chess-middle"></div>
		<div class="chess-middle"></div>
		<div class="chess-right"></div>
		<!-- line 9 -->
		<div class="chess-left"></div>
		<div class="chess-middle"></div>
		<div class="chess-middle"></div>
		<div class="chess-middle"></div>
		<div class="chess-middle"></div>
		<div class="chess-middle"></div>
		<div class="chess-middle"></div>
		<div class="chess-middle"></div>
		<div class="chess-middle"></div>
		<div class="chess-middle"></div>
		<div class="chess-middle"></div>
		<div class="chess-middle"></div>
		<div class="chess-middle"></div>
		<div class="chess-middle"></div>
		<div class="chess-right"></div>
		<!-- line 10 -->
		<div class="chess-left"></div>
		<div class="chess-middle"></div>
		<div class="chess-middle"></div>
		<div class="chess-middle"></div>
		<div class="chess-middle"></div>
		<div class="chess-middle"></div>
		<div class="chess-middle"></div>
		<div class="chess-middle"></div>
		<div class="chess-middle"></div>
		<div class="chess-middle"></div>
		<div class="chess-middle"></div>
		<div class="chess-middle"></div>
		<div class="chess-middle"></div>
		<div class="chess-middle"></div>
		<div class="chess-right"></div>
		<!-- line 11 -->
		<div class="chess-left"></div>
		<div class="chess-middle"></div>
		<div class="chess-middle"></div>
		<div class="chess-middle"></div>
		<div class="chess-middle"></div>
		<div class="chess-middle"></div>
		<div class="chess-middle"></div>
		<div class="chess-middle"></div>
		<div class="chess-middle"></div>
		<div class="chess-middle"></div>
		<div class="chess-middle"></div>
		<div class="chess-middle"></div>
		<div class="chess-middle"></div>
		<div class="chess-middle"></div>
		<div class="chess-right"></div>
		<!-- line 12 -->
		<div class="chess-left"></div>
		<div class="chess-middle"></div>
		<div class="chess-middle"></div>
		<div class="chess-middle"></div>
		<div class="chess-middle"></div>
		<div class="chess-middle"></div>
		<div class="chess-middle"></div>
		<div class="chess-middle"></div>
		<div class="chess-middle"></div>
		<div class="chess-middle"></div>
		<div class="chess-middle"></div>
		<div class="chess-middle"></div>
		<div class="chess-middle"></div>
		<div class="chess-middle"></div>
		<div class="chess-right"></div>
		<!-- line 13 -->
		<div class="chess-left"></div>
		<div class="chess-middle"></div>
		<div class="chess-middle"></div>
		<div class="chess-middle"></div>
		<div class="chess-middle"></div>
		<div class="chess-middle"></div>
		<div class="chess-middle"></div>
		<div class="chess-middle"></div>
		<div class="chess-middle"></div>
		<div class="chess-middle"></div>
		<div class="chess-middle"></div>
		<div class="chess-middle"></div>
		<div class="chess-middle"></div>
		<div class="chess-middle"></div>
		<div class="chess-right"></div>
		<!-- bottom line  -->
		<div class="chess-bottom"></div>
		<div class="chess-bottom"></div>
		<div class="chess-bottom"></div>
		<div class="chess-bottom"></div>
		<div class="chess-bottom"></div>
		<div class="chess-bottom"></div>
		<div class="chess-bottom"></div>
		<div class="chess-bottom"></div>
		<div class="chess-bottom"></div>
		<div class="chess-bottom"></div>
		<div class="chess-bottom"></div>
		<div class="chess-bottom"></div>
		<div class="chess-bottom"></div>
		<div class="chess-bottom"></div>
		<div class="chess-bottom chess-right"></div>
	</div>
	<!-- 操作 -->
	<div class = "operation">
		<div class="simple" hidden="hidden">
			<div><img src="img/light.png" alt="nydIsDisplay1"/></div>
			<div><img src="img/gray.png" alt="nydIsDisplay1"/></div>
			<div><img src="img/gray.png" alt="nydIsDisplay1"/></div>
		</div>
		<div class="commonly">
			<div><img src="img/light.png" alt="nydIsDisplay1"/></div>
			<div><img src="img/light.png" alt="nydIsDisplay1"/></div>
			<div><img src="img/gray.png" alt="nydIsDisplay1"/></div>
		</div>
		<div class="difficulty" hidden="hidden">
			<div><img src="img/light.png" alt="nydIsDisplay1"/></div>
			<div><img src="img/light.png" alt="nydIsDisplay1"/></div>
			<div><img src="img/light.png" alt="nydIsDisplay1"/></div>
		</div>
		<div class="nydIsDisplay" hidden="hidden"><span style="font-family: STXinwei;color: blue;">当前游戏：</span><input id ="nyd" readonly="readonly" style="width: 100px;border-radius: 4px;border: 1px solid #eee;"/></div>
		<input hidden="hidden" id="isRrdz" value="${rrdz}"/>
	</div>
	<!-- 图片请求 不会在页面显示 -->
	<div style="display: none">
		<!-- 图片需合并 减少http请求数 -->
		<img src="img/black.png" alt="preload" />
		<img src="img/white.png" alt="preload" />
		<img src="img/hover.png" alt="preload" />
		<img src="img/hover_up.png" alt="preload" />
		<img src="img/hover_down.png" alt="preload" />
		<img src="img/hover_up_left.png" alt="preload" />
		<img src="img/hover_up_right.png" alt="preload" />
		<img src="img/hover_left.png" alt="preload" />
		<img src="img/hover_right.png" alt="preload" />
		<img src="img/hover_down_left.png" alt="preload" />
		<img src="img/hover_down_right.png" alt="preload" />
		<img src="img/black_last.png" alt="preload" />
		<img src="img/white_last.png" alt="preload" />
	</div>
</div>

<!-- 难易度弹窗 -->
<!--遮罩层-->
<div class="bgPop"></div>
<!--弹出框-->
<div class="pop">
    <h6 class="selectGame">选择难易度</h6>
    <div class = "selectGameDiv" id = 'simple'> 简单</div>
    <div class = "selectGameDiv" id = 'commonly'> 一般</div>
    <div class = "selectGameDiv" id = 'difficulty'> 困难</div>
</div>

<!--右侧悬浮菜单-->
<div class="slideRight">
<div class="slide">
	</ul>
		<ul class="info">
			<li class="buttton">
				<p><a href="#" id= "resetChessBoard"  onclick="$.myConfirm({title:'清盘提示',message:'确认清盘吗？清盘后将重新游戏...',callback:function(){goBang.resetChessBoard();}})">清盘</a></p>
			</li>
			<li class="buttton" id='giveUpLi'>
				<p><a href="#" id= "giveUp"  onclick="$.myConfirm({title:'认输提示',message:'确认认输吗',callback:function(){goBang.giveUp();}})">认输</a></p>
			</li>
			<li class="buttton">
				<p><a href="#" id= "RetractChess" onclick="$.myConfirm({title:'悔棋提示',message:'确认悔棋吗',callback:function(){goBang.retract();}})">悔棋</a></p>
			</li>
		</ul>
	</div>
</div>
</body>
</html>
