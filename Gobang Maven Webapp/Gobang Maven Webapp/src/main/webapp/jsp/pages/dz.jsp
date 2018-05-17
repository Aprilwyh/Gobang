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
	<script type="text/javascript" src="js/common/jquery-1.7.2.js"></script>
	<script type="text/javascript" src="js/common/common.js" charset="utf-8"></script>
	<script type="text/javascript" src="js/yw/dz.js" charset="utf-8"></script>
	<!-- <script type="text/javascript" src="js/tx/pgy.js"></script> -->
</head>
<body>
<div class="wrapper" style="margin: auto;">
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
	<div class = "operation">
		<div><span style="font-family: STXinwei;color: blue;">难易度：</span><input id ="nyd" readonly="readonly" style="width: 100px;border-radius: 4px;border: 1px solid #eee;"/></div>
		<div class = "operationBoard" style="text-align: left;padding: 20px;">
			<a id= "resetChessBoard" href="#">清盘</a>
			<a id= "RetractChess" href="#">悔棋</a>
		</div>
	</div>

	<div class="operating-panel"  hidden="hidden">
		<p>
			<a id="black_btn" class="btn selected" href="#">黑&nbsp;&nbsp;子</a>
			<a id="white_btn" class="btn" href="#">白&nbsp;&nbsp;子</a>
		</p>
		<p>
			<a id="first_move_btn" class="btn selected" href="#">先&nbsp;&nbsp;手</a>
			<a id="second_move_btn" class="btn" href="#">后&nbsp;&nbsp;手</a>
		</p>
		<a id="replay_btn" class="btn" href="#">开&nbsp;&nbsp;&nbsp;始</a>
		<p id="result_info">胜率：100%</p>
		<p id="result_tips"></p>
		<input hidden="hidden" id="isRrdz" value="${rrdz}"/>
	</div>

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
<!--遮罩层-->
	<div class="bgPop"></div>
	<!--弹出框-->
	<div class="pop">
	    <h6 class="selectGame">选择游戏</h6>
	    <div class = "selectGameDiv" id = 'simple'> 简单</div>
	    <div class = "selectGameDiv" id = 'commonly'> 一般</div>
	    <div class = "selectGameDiv" id = 'difficulty'> 困难</div>
	</div>
</body>
</html>
