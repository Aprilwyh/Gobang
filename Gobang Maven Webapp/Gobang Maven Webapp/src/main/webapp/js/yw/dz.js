/**
 * 五子棋对战js
 * date: 2018-4-15
 * author: weiyanhui
 * 
 * ready 页面加载完毕执行
 */
$(document).ready(function() {
	isRrdz();
	pop(isRrdz);
	goBang.init();
});

var isRrdz;//是否人机对战标识Boolean
/**
 * 判断是否为人人对战
 * 初始化时调用，直接为isRrdz赋值
 */
function isRrdz(){
	isRrdzParam = $("#isRrdz").val();
	isRrdz= isRrdzParam=="rrdz";
};
/**
 * goBang 五子棋属性对象
 */
var goBang = {
	NO_CHESS: 0,	//没有棋子
	BLACK_CHESS: -1,	//黑色棋子
	WHITE_CHESS: 1,		//白色棋子
	chessArr: [],	//记录棋子
	chessBoardHtml: "",
	humanPlayer: "black",	//玩家棋子颜色（默认黑色）
	AIPlayer: "white",	//AI棋子颜色
	isPlayerTurn: true, //轮到player下棋
	isGameStart: false,	//游戏已经开始
	isGameOver: false, //游戏结束
	playerLastChess: [], //玩家最后下子位置
	AILastChess: [], //AI最后下子位置
	
	/**
	 * 初始化方法
	 */
	init: function () {
		this.chessBoardHtml = $("div.chessboard").html();
		var _goBangChess = this;
		this.resetChessBoard();
	},
	/**
	 * 重置棋盘
	 */
	resetChessBoard: function () {
		$("div.chessboard").html(this.chessBoardHtml);
		this.isGameOver = false;
		this.isGameStart = false;
		this.isPlayerTurn = true;
		//初始化棋子状态
		var i, j;
		for (i = 0; i < 15; i++) {
			this.chessArr[i] = [];
			for (j = 0; j < 15; j++) {
				this.chessArr[i][j] = this.NO_CHESS;
			}
		}
		this.hoverChessBoard();
		this.clickChessBoard();
	},
	/**
	 * 鼠标悬浮效果
	 */
	hoverChessBoard: function (){
		var _goBangChess = this;
		//鼠标在棋盘上移动效果 绑定鼠标悬停事件 .hover(IN进，OUT出)
		$("div.chessboard div").hover(
			function () {
				if (!_goBangChess.isPlayerTurn || _goBangChess.isGameOver) { return; }
				var index = $(this).index(),
					i = index / 15 | 0,
					j = index % 15;
				if (_goBangChess.chessArr[i][j] === _goBangChess.NO_CHESS) {
					if (i === 0 && j === 0) {
						$(this).addClass("hover-up-left");
					}
					else if (i === 0 && j === 14) {
						$(this).addClass("hover-up-right");
					}
					else if (i === 14 && j === 0) {
						$(this).addClass("hover-down-left");
					}
					else if (i === 14 && j === 14) {
						$(this).addClass("hover-down-right");
					}
					else if (i === 0) {
						$(this).addClass("hover-up");
					}
					else if (i === 14) {
						$(this).addClass("hover-down");
					}
					else if (j === 0) {
						$(this).addClass("hover-left");
					}
					else if (j === 14) {
						$(this).addClass("hover-right");
					}
					else {
						$(this).addClass("hover");
					}
				}
			},
			function () {
				if (!_goBangChess.isPlayerTurn || _goBangChess.isGameOver) { return; }
				var index = $(this).index(),
					i = index / 15 | 0,
					j = index % 15;
					if (i === 0 && j === 0) {
						$(this).removeClass("hover-up-left");
					}
					else if (i === 0 && j === 14) {
						$(this).removeClass("hover-up-right");
					}
					else if (i === 14 && j === 0) {
						$(this).removeClass("hover-down-left");
					}
					else if (i === 14 && j === 14) {
						$(this).removeClass("hover-down-right");
					}
					else if (i === 0) {
						$(this).removeClass("hover-up");
					}
					else if (i === 14) {
						$(this).removeClass("hover-down");
					}
					else if (j === 0) {
						$(this).removeClass("hover-left");
					}
					else if (j === 14) {
						$(this).removeClass("hover-right");
					}
					else {
						$(this).removeClass("hover");
					}
			}
		);
	},
	/**
	 * 点击下子
	 */
	clickChessBoard:function (){
		//player下棋事件 绑定click点击事件
		var _goBangChess = this;
		$("div.chessboard div").click(function () {
			if (!_goBangChess.isPlayerTurn || _goBangChess.isGameOver) {
				return;
			}
			if (!_goBangChess.isGameStart) {
				_goBangChess.gameStart();
			}
			var index = $(this).index(),
				i = index / 15 | 0,
				j = index % 15;
			if (_goBangChess.chessArr[i][j] === _goBangChess.NO_CHESS) {
				_goBangChess.playChess(i, j, _goBangChess.humanPlayer);
				if (i === 0 && j === 0) {
					$(this).removeClass("hover-up-left");
				}
				else if (i === 0 && j === 14) {
					$(this).removeClass("hover-up-right");
				}
				else if (i === 14 && j === 0) {
					$(this).removeClass("hover-down-left");
				}
				else if (i === 14 && j === 14) {
					$(this).removeClass("hover-down-right");
				}
				else if (i === 0) {
					$(this).removeClass("hover-up");
				}
				else if (i === 14) {
					$(this).removeClass("hover-down");
				}
				else if (j === 0) {
					$(this).removeClass("hover-left");
				}
				else if (j === 14) {
					$(this).removeClass("hover-right");
				}
				else {
					$(this).removeClass("hover");
				}
				_goBangChess.playerLastChess = [i, j];
				_goBangChess.playerWinOrNot(i, j);
			}
		});
	},
	/**
	 * 游戏开始
	 */
	gameStart: function () {
		//AI先手
		if (!this.isPlayerTurn) {
			this.AImoveChess();
		}
		this.isGameStart = true;
	},
	/**
	 * 游戏结束
	 */
	gameOver: function () {
		this.isGameStart = false;
	},
	/**
	 * 行棋 
	 * @param i 行
	 * @param j 列
	 * @param color 棋子颜色
	 */
	playChess: function (i, j, color) {
		this.chessArr[i][j] = color === "black" ? this.BLACK_CHESS : this.WHITE_CHESS;
		var lastChess = color !== "black" ? "black" : "white";
		if (color === this.AIPlayer) {
			$("div.chessboard div." + color + "-last").addClass(color).removeClass(color + "-last");
			$("div.chessboard div:eq(" + (i * 15 + j) + ")").addClass(color + "-last");
		}
		else {
			$("div.chessboard div:eq(" + (i * 15 + j) + ")").addClass(color);
		}
	},
	/**
	 * 判读玩家是否赢了
	 * @param i 最后一个棋子的位置 上下左边
	 * @param j 最后一个棋子的位置 左右坐标
	 */
	playerWinOrNot: function (i, j) {
		var _goBangChess = this;
		var nums,	//连续棋子个数
			chessColor = this.humanPlayer === "black" ? this.BLACK_CHESS : this.WHITE_CHESS,
			m, n;
		nums = _goBangChess.isFiveX(i,j,chessColor);//水平方向
		if(_goBangChess.isFive(nums))
			return;
		nums = _goBangChess.isFiveY(i,j,chessColor);//垂直方向
		if(_goBangChess.isFive(nums))
			return;
		nums = _goBangChess.isFiveXY(i,j,chessColor);//左斜方向
		if(_goBangChess.isFive(nums))
			return;
		nums = _goBangChess.isFiveYX(i,j,chessColor);//右斜方向
		if(_goBangChess.isFive(nums))
			return;
		this.AImoveChess();
	},
	/**
	 * 判断是否成五 X方向
	 * @param i
	 * @param j
	 * @param nums
	 */
	isFiveX: function(i,j,chessColor){
		var m,nums = 1;
		//x方向 →
		for (m = j - 1; m >= 0; m--) {//→
			if (this.chessArr[i][m] === chessColor) {
				nums++;
			}else {
				break;
			}
		}
		for (m = j + 1; m < 15; m++) {//←
			if (this.chessArr[i][m] === chessColor) {
				nums++;
			}else {
				break;
			}
		}
		return nums;
	},
	isFiveY: function(i,j,chessColor){
		var m,nums = 1;
		//y方向
		for (m = i - 1; m >= 0; m--) {//↑
			if (this.chessArr[m][j] === chessColor) {
				nums++;
			}else {
				break;
			}
		}
		for (m = i + 1; m < 15; m++) {//↓
			if (this.chessArr[m][j] === chessColor) {
				nums++;
			}else {
				break;
			}
		}
		return nums;
	},
	isFiveXY: function(i,j,chessColor){
		var m,n,nums = 1;
		//左斜方向
		for (m = i - 1, n = j - 1; m >= 0 && n >= 0; m--, n--) {//↖
			if (this.chessArr[m][n] === chessColor) {
				nums++;
			}else {
				break;
			}
		}
		for (m = i + 1, n = j + 1; m < 15 && n < 15; m++, n++) {//↘
			if (this.chessArr[m][n] === chessColor) {
				nums++;
			}else {
				break;
			}
		}
		return nums;
	},
	isFiveYX: function(i,j,chessColor){
		var m,n,nums = 1;
		//右斜方向
		for (m = i - 1, n = j + 1; m >= 0 && n < 15; m--, n++) {//↗
			if (this.chessArr[m][n] === chessColor) {
				nums++;
			}else {
				break;
			}
		}
		for (m = i + 1, n = j - 1; m < 15 && n >= 0; m++, n--) {//↙
			if (this.chessArr[m][n] === chessColor) {
				nums++;
			}else {
				break;
			}
		}
	},
	/**
	 * 成五 判赢
	 * @param nums
	 * @returns {Boolean}
	 */
	isFive: function(nums){
		if (nums >= 5) {
			this.playerWin();
			return true;
		}else {
			return false;
		}
	},
	playerWin: function () {
		this.showResult(true);
		this.gameOver();
	},
	/**
	 * AI下棋 如果是人人，AI不下改由对方下
	 */
	AImoveChess: function () {
		if(isRrdz){//是人人 对战
			this.isPlayerTurn = false;
			this.AIisPlayerChess();
		}else{
		this.isPlayerTurn = false;
		var maxX = 0,
			maxY = 0,
			maxWeight = 0,
			i, j, tem;
		for (i = 14; i >= 0; i--) {//从下往上
			for (j = 14; j >= 0; j--) {//从左往右
				if (this.chessArr[i][j] !== this.NO_CHESS) {
					continue;
				}
				tem = this.computeWeight(i, j);
				if (tem > maxWeight) {
					maxWeight = tem;
					maxX = i;
					maxY = j;
				}
			}
		}
		this.playChess(maxX, maxY, this.AIPlayer);
		this.AILastChess = [maxX, maxY];
		if ((maxWeight >= 100000 && maxWeight < 250000) || (maxWeight >= 500000)) {
			this.showResult(false);
			this.gameOver();
		}
		else {
			this.isPlayerTurn = true;
		}
	}
	},
//------------------AIisPlayer------------------------------------------
	/**
	 * 人人对战 令一人下棋
	 */
	AIisPlayerChess: function () {
		//player下棋事件
		var _goBangChess = this;
		$("div.chessboard div").click(function () {
			if (_goBangChess.isPlayerTurn || _goBangChess.isGameOver) {
				return;
			}
			if (!_goBangChess.isGameStart) {
				_goBangChess.gameStart();
			}
			var index = $(this).index(),
				i = index / 15 | 0,
				j = index % 15;
			if (_goBangChess.chessArr[i][j] === _goBangChess.NO_CHESS) {
				_goBangChess.playChess(i, j, _goBangChess.AIPlayer);
				if (i === 0 && j === 0) {
					$(this).removeClass("hover-up-left");
				}
				else if (i === 0 && j === 14) {
					$(this).removeClass("hover-up-right");
				}
				else if (i === 14 && j === 0) {
					$(this).removeClass("hover-down-left");
				}
				else if (i === 14 && j === 14) {
					$(this).removeClass("hover-down-right");
				}
				else if (i === 0) {
					$(this).removeClass("hover-up");
				}
				else if (i === 14) {
					$(this).removeClass("hover-down");
				}
				else if (j === 0) {
					$(this).removeClass("hover-left");
				}
				else if (j === 14) {
					$(this).removeClass("hover-right");
				}
				else {
					$(this).removeClass("hover");
				}
				_goBangChess.AILastChess = [i, j];
				tem = goBang.computeWeight(i,j);
				if ((tem >= 100000 && tem < 250000) || (tem >= 500000)) {
					goBang.showResult(false);
					goBang.gameOver();
				}
				else {
					goBang.isPlayerTurn = true;
				}
			}
		});
		//鼠标在棋盘上移动效果
		$("div.chessboard div").hover(
			function () {
				if (_goBangChess.isPlayerTurn || _goBangChess.isGameOver) { return; }
				var index = $(this).index(),
					i = index / 15 | 0,
					j = index % 15;
				if (_goBangChess.chessArr[i][j] === _goBangChess.NO_CHESS) {
					if (i === 0 && j === 0) {
						$(this).addClass("hover-up-left");
					}
					else if (i === 0 && j === 14) {
						$(this).addClass("hover-up-right");
					}
					else if (i === 14 && j === 0) {
						$(this).addClass("hover-down-left");
					}
					else if (i === 14 && j === 14) {
						$(this).addClass("hover-down-right");
					}
					else if (i === 0) {
						$(this).addClass("hover-up");
					}
					else if (i === 14) {
						$(this).addClass("hover-down");
					}
					else if (j === 0) {
						$(this).addClass("hover-left");
					}
					else if (j === 14) {
						$(this).addClass("hover-right");
					}
					else {
						$(this).addClass("hover");
					}
				}
			},
			function () {
				if (_goBangChess.isPlayerTurn || _goBangChess.isGameOver) { return; }
				var index = $(this).index(),
					i = index / 15 | 0,
					j = index % 15;
					if (i === 0 && j === 0) {
						$(this).removeClass("hover-up-left");
					}
					else if (i === 0 && j === 14) {
						$(this).removeClass("hover-up-right");
					}
					else if (i === 14 && j === 0) {
						$(this).removeClass("hover-down-left");
					}
					else if (i === 14 && j === 14) {
						$(this).removeClass("hover-down-right");
					}
					else if (i === 0) {
						$(this).removeClass("hover-up");
					}
					else if (i === 14) {
						$(this).removeClass("hover-down");
					}
					else if (j === 0) {
						$(this).removeClass("hover-left");
					}
					else if (j === 14) {
						$(this).removeClass("hover-right");
					}
					else {
						$(this).removeClass("hover");
					}
			}
		);
	},
//------------------------AIisPlayer------------------------------------------
	/**
	 * 显示游戏结果
	 */
	showResult: function(isPlayerWin) {
		if (isPlayerWin) {
//			$("#result_tips").html("恭喜你获胜！");
		}
		else {
//			$("#result_tips").html("哈哈，你输咯！");
		}
		this.isGameOver = true;
		this.showWinChesses(isPlayerWin);
	},
	/**
	 * 标记显示获胜棋子
	 * @param isPlayerWin 是否玩家获胜
	 */
	showWinChesses: function (isPlayerWin) {
		var nums = 1,	//连续棋子个数
			lineChess = [],	//连续棋子位置
			i,
			j,
			chessColor,
			m, n;
		if (isPlayerWin) {
			chessColor = this.humanPlayer === "black" ? this.BLACK_CHESS : this.WHITE_CHESS;
			i = this.playerLastChess[0];
			j = this.playerLastChess[1];
		}
		else {
			chessColor = this.AIPlayer === "black" ? this.BLACK_CHESS : this.WHITE_CHESS;
			i = this.AILastChess[0];
			j = this.AILastChess[1];
		}
		$("div.chessboard div." + this.AIPlayer + "-last").addClass(this.AIPlayer).removeClass(this.AIPlayer + "-last");
		//x方向
		lineChess[0] = [i];
		lineChess[1] = [j];
		for (m = j - 1; m >= 0; m--) {
			if (this.chessArr[i][m] === chessColor) {
				lineChess[0][nums] = i;
				lineChess[1][nums] = m;
				nums++;
			}
			else {
				break;
			}
		}
		for (m = j + 1; m < 15; m++) {
			if (this.chessArr[i][m] === chessColor) {
				lineChess[0][nums] = i;
				lineChess[1][nums] = m;
				nums++;
			}
			else {
				break;
			}
		}
		if (nums >= 5) {
			for (k = nums - 1; k >= 0; k--) {
				this.markChess(lineChess[0][k] * 15 + lineChess[1][k], isPlayerWin ? this.humanPlayer : this.AIPlayer);
			}
			return;
		}
		//y方向
		nums = 1;
		lineChess[0] = [i];
		lineChess[1] = [j];
		for (m = i - 1; m >= 0; m--) {
			if (this.chessArr[m][j] === chessColor) {
				lineChess[0][nums] = m;
				lineChess[1][nums] = j;
				nums++;
			}
			else {
				break;
			}
		}
		for (m = i + 1; m < 15; m++) {
			if (this.chessArr[m][j] === chessColor) {
				lineChess[0][nums] = m;
				lineChess[1][nums] = j;
				nums++;
			}
			else {
				break;
			}
		}
		if (nums >= 5) {
			for (k = nums - 1; k >= 0; k--) {
				this.markChess(lineChess[0][k] * 15 + lineChess[1][k], isPlayerWin ? this.humanPlayer : this.AIPlayer);
			}
			return;
		}
		//左斜方向
		nums = 1;
		lineChess[0] = [i];
		lineChess[1] = [j];
		for (m = i - 1, n = j - 1; m >= 0 && n >= 0; m--, n--) {
			if (this.chessArr[m][n] === chessColor) {
				lineChess[0][nums] = m;
				lineChess[1][nums] = n;
				nums++;
			}
			else {
				break;
			}
		}
		for (m = i + 1, n = j + 1; m < 15 && n < 15; m++, n++) {
			if (this.chessArr[m][n] === chessColor) {
				lineChess[0][nums] = m;
				lineChess[1][nums] = n;
				nums++;
			}
			else {
				break;
			}
		}
		if (nums >= 5) {
			for (k = nums - 1; k >= 0; k--) {
				this.markChess(lineChess[0][k] * 15 + lineChess[1][k], isPlayerWin ? this.humanPlayer : this.AIPlayer);
			}
			return;
		}
		//右斜方向
		nums = 1;
		lineChess[0] = [i];
		lineChess[1] = [j];
		for (m = i - 1, n = j + 1; m >= 0 && n < 15; m--, n++) {
			if (this.chessArr[m][n] === chessColor) {
				lineChess[0][nums] = m;
				lineChess[1][nums] = n;
				nums++;
			}
			else {
				break;
			}
		}
		for (m = i + 1, n = j - 1; m < 15 && n >= 0; m++, n--) {
			if (this.chessArr[m][n] === chessColor) {
				lineChess[0][nums] = m;
				lineChess[1][nums] = n;
				nums++;
			}
			else {
				break;
			}
		}
		if (nums >= 5) {
			for (k = nums - 1; k >= 0; k--) {
				this.markChess(lineChess[0][k] * 15 + lineChess[1][k], isPlayerWin ? this.humanPlayer : this.AIPlayer);
			}
		}
	},
	markChess: function (pos, color) {
		$("div.chessboard div:eq(" + pos + ")").removeClass(color).addClass(color + "-last");
	},
	//下子到i，j X方向 结果: 多少连子 两边是否截断
	putDirectX: function (i, j, chessColor) {
		var m, n,
			nums = 1,
			side1 = false,
			side2 = false;
		for (m = j - 1; m >= 0; m--) {
			if (this.chessArr[i][m] === chessColor) {
				nums++;
			}
			else {
				if (this.chessArr[i][m] === this.NO_CHESS) {
					side1 = true;
				}
				break;
			}
		}
		for (m = j + 1; m < 15; m++) {
			if (this.chessArr[i][m] === chessColor) {
				nums++;
			}
			else {
				if (this.chessArr[i][m] === this.NO_CHESS) {
					side2 = true;
				}
				break;
			}
		}
		return {"nums": nums, "side1": side1, "side2": side2};
	},
	//下子到i，j Y方向 结果
	putDirectY: function (i, j, chessColor) {
		var m, n,
			nums = 1,
			side1 = false,
			side2 = false;
		for (m = i - 1; m >= 0; m--) {
			if (this.chessArr[m][j] === chessColor) {
				nums++;
			}
			else {
				if (this.chessArr[m][j] === this.NO_CHESS) {
					side1 = true;
				}
				break;
			}
		}
		for (m = i + 1; m < 15; m++) {
			if (this.chessArr[m][j] === chessColor) {
				nums++;
			}
			else {
				if (this.chessArr[m][j] === this.NO_CHESS) {
					side2 = true;
				}
				break;
			}
		}
		return {"nums": nums, "side1": side1, "side2": side2};
	},
	//下子到i，j XY方向 结果
	putDirectXY: function (i, j, chessColor) {
		var m, n,
			nums = 1,
			side1 = false,
			side2 = false;
		for (m = i - 1, n = j - 1; m >= 0 && n >= 0; m--, n--) {
			if (this.chessArr[m][n] === chessColor) {
				nums++;
			}
			else {
				if (this.chessArr[m][n] === this.NO_CHESS) {
					side1 = true;
				}
				break;
			}
		}
		for (m = i + 1, n = j + 1; m < 15 && n < 15; m++, n++) {
			if (this.chessArr[m][n] === chessColor) {
				nums++;
			}
			else {
				if (this.chessArr[m][n] === this.NO_CHESS) {
					side2 = true;
				}
				break;
			}
		}
		return {"nums": nums, "side1": side1, "side2": side2};
	},
	putDirectYX: function (i, j, chessColor) {
		var m, n,
			nums = 1,
			side1 = false,
			side2 = false;
		for (m = i - 1, n = j + 1; m >= 0 && n < 15; m--, n++) {
			if (this.chessArr[m][n] === chessColor) {
				nums++;
			}
			else {
				if (this.chessArr[m][n] === this.NO_CHESS) {
					side1 = true;
				}
				break;
			}
		}
		for (m = i + 1, n = j - 1; m < 15 && n >= 0; m++, n--) {
			if (this.chessArr[m][n] === chessColor) {
				nums++;
			}
			else {
				if (this.chessArr[m][n] === this.NO_CHESS) {
					side2 = true;
				}
				break;
			}
		}
		return {"nums": nums, "side1": side1, "side2": side2};
	},
	/**
	 * 计算下子至i,j的权重 
	 * @param i
	 * @param j
	 * @returns {Number}
	 */
	computeWeight: function (i, j) {
		var weight = 14 - (Math.abs(i - 7) + Math.abs(j - 7)), //基于棋盘位置权重
			pointInfo = {},	//某点下子后连子信息
			chessColor = this.AIPlayer === "black" ? this.BLACK_CHESS : this.WHITE_CHESS;
		//x方向
		pointInfo = this.putDirectX(i, j, chessColor);
		weight += this.weightStatus(pointInfo.nums, pointInfo.side1, pointInfo.side2, true);//AI下子权重
		pointInfo = this.putDirectX(i, j, -chessColor);
		weight += this.weightStatus(pointInfo.nums, pointInfo.side1, pointInfo.side2, false);//player下子权重
		//y方向
		pointInfo = this.putDirectY(i, j, chessColor);
		weight += this.weightStatus(pointInfo.nums, pointInfo.side1, pointInfo.side2, true);//AI下子权重
		pointInfo = this.putDirectY(i, j, -chessColor);
		weight += this.weightStatus(pointInfo.nums, pointInfo.side1, pointInfo.side2, false);//player下子权重
		//左斜方向
		pointInfo = this.putDirectXY(i, j, chessColor);
		weight += this.weightStatus(pointInfo.nums, pointInfo.side1, pointInfo.side2, true);//AI下子权重
		pointInfo = this.putDirectXY(i, j, -chessColor);
		weight += this.weightStatus(pointInfo.nums, pointInfo.side1, pointInfo.side2, false);//player下子权重
		//右斜方向
		pointInfo = this.putDirectYX(i, j, chessColor);
		weight += this.weightStatus(pointInfo.nums, pointInfo.side1, pointInfo.side2, true);//AI下子权重
		pointInfo = this.putDirectYX(i, j, -chessColor);
		weight += this.weightStatus(pointInfo.nums, pointInfo.side1, pointInfo.side2, false);//player下子权重
		return weight;
	},
	/**
	 * 权重方案   独：两边为空可下子，单：一边为空
	 * @param nums
	 * @param side1
	 * @param side2
	 * @param isAI
	 * @returns {Number}
	 */
	weightStatus: function (nums, side1, side2, isAI) {
		var weight = 0;
		switch (nums) {
			case 1:
				if (side1 && side2) {
					weight = isAI ? 15 : 10;	//独一
				}
				break;
			case 2:
				if (side1 && side2) {
					weight = isAI ? 100 : 50;	//独二
				}
				else if (side1 || side2) {
					weight = isAI ? 10 : 5;	//单二
				}
				break;
			case 3:
				if (side1 && side2) {
					weight = isAI ? 500 : 200;	//独三
				}
				else if (side1 || side2) {
					weight = isAI ? 30 : 20;	//单三
				}
				break;
			case 4:
				if($("#nyd").val()=="simple"){
					if (side1 && side2) {
						weight = isAI ? 50 : 20;	//独四
					}
					else if (side1 || side2) {
						weight = isAI ? 40 : 1;	//单四
					}

				}else{
					if (side1 && side2) {
						weight = isAI ? 5000 : 2000;	//独四
					}
					else if (side1 || side2) {
						weight = isAI ? 400 : 100;	//单四
					}
				}
				break;
			case 5:
				weight = isAI ? 100000 : 10000;	//五
				break;
			default:
				weight = isAI ? 500000 : 250000;
				break;
		}
		return weight;
	},
	/**
	 * 悔棋
	 */
	retract: function(){
		if(this.isGameOver){
			$.myToast('游戏已结束');
			return;
		}
		var iplayerLastChess,jplayerLastChess,iAILastChess,jAILastChess;
		if(this.playerLastChess.length==0&&this.AILastChess.length==0){
			$.myToast('请先行棋');
			return;
		}
		iplayerLastChess = this.playerLastChess[0];//玩家最后下子位置
		jplayerLastChess = this.playerLastChess[1];
		iAILastChess = this.AILastChess[0];//AI最后下子位置
		jAILastChess = this.AILastChess[1];
		if(this.chessArr[iplayerLastChess][jplayerLastChess] == this.NO_CHESS &&
				this.chessArr[iAILastChess][jAILastChess] == this.NO_CHESS){
			$.myToast('未行棋');
			return;
		}
		if(this.playerLastChess.length!=0){//撤销棋手最后落子
			this.chessArr[iplayerLastChess][jplayerLastChess] = this.NO_CHESS;
			$("div.chessboard div:eq(" + (iplayerLastChess * 15 + jplayerLastChess) + ")")
			.removeClass(this.humanPlayer+"-last").removeClass(this.humanPlayer);
		}
		if(this.AILastChess.length!=0){//撤销AI最后落子
			$("div.chessboard div:eq(" + (iAILastChess * 15 + jAILastChess) + ")")
			.removeClass(this.AIPlayer+"-last").removeClass(this.AIPlayer);
		}
		this.chessArr[iAILastChess][jAILastChess] = this.NO_CHESS;
		$.myToast('悔棋成功');
	},
	giveUp: function(){
		if(this.isGameOver){
			$.myToast('游戏已结束');
			return;
		}
		if(!this.isGameStart){
			$.myToast('游戏已结束');
			return;
		}
		var _goBangChess = this;
		_goBangChess.isGameOver= true; //游戏结束
	}
};

