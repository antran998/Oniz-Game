var ctx = canvasDraw.getContext('2d');

var board = new Image();

var brightBoard = new Image();
brightBoard.src = 'img/full-img-bright.png';
var ball = new Image();
ball.src = 'img/ball.png';
var chip = new Image();
chip.src = 'img/chip.png';
var bet = new Image();
bet.src = 'img/bet.png';

var buttonRow2D = new Array();
var buttonRow2DTemp = new Array();
var buttonRow = new Array();
var buttonRowTemp = new Array();
var buttonStrokeGrd = new Array();
var buttonStrokeGrdTemp = new Array();

var x = 58;
var moneyBet = 0;

var moneyForEachBet = new Array();
var moneyForAll = new Array();

var animationLoad;

var textContent = '';

board.onload = function(){

	canvasDraw.width = board.width;
	canvasDraw.height = board.height+90;
	canvasDraw2.width = board.width;
	canvasDraw2.height = board.height+90;
	boardContainer.style.height=canvasDraw.height+5+'px';
	ctx.drawImage(board,0,0);
	startLoad();
}
board.src = 'img/full-img4.png';

function startLoad(){
	ctx.drawImage(ball,378,0);
	ctx.drawImage(bet,330,board.height+10)
	ctx.drawImage(chip,280,board.height+45);
	ctx.font = "15px serif";
	ctx.fillStyle = "#FFF";
	ctx.textAlign = "right";
	ctx.fillText(moneyBet, 545, board.height+30);

	buttonRow2D[0] = new Path2D();
	buttonRow2D[0].arc(463, ball.width/2, ball.width/2, 0, 2 * Math.PI);
	buttonRow[0]={
		index:0,
		x1:375,
		x2:ball.width,
		y1:0,
		y2:ball.width
	};

	for(var i = 1 ;i<=5;i++){
		if(i==3){
			buttonRow2D[i] = new Path2D();
			buttonRow2D[i].rect(x,198,258,188);
			buttonRow[i]={
				index:i,
				x1:x,
				x2:258,
				y1:198,
				y2:188
			};
			buttonStrokeGrd[i] = new Path2D();
			buttonStrokeGrd[i].rect(0,0,258,188);
			x+=266;
		}
		else{
			buttonRow2D[i] = new Path2D();
			buttonRow2D[i].rect(x,198,126,188)
			buttonRow[i]={
				index:i,
				x1:x,
				x2:126,
				y1:198,
				y2:188
			};
			buttonStrokeGrd[i] = new Path2D();
			buttonStrokeGrd[i].rect(0,0,126,188);
			x+=133;
		}
	}
	x=85;
	for(var i=6;i<=19;i++){
		switch(i) {
		  case 9:
		 	buttonRow2D[i] = new Path2D();
		    buttonRow2D[i].rect(x,399,47,73)
		    buttonRow[i]={
				index:i,
				x1:x,
				x2:47,
				y1:399,
				y2:73
			};
			x+=52;
		    break;
		  case 12:
		  	buttonRow2D[i] = new Path2D();
		    buttonRow2D[i].rect(x,399,47,73)
		    buttonRow[i]={
				index:i,
				x1:x,
				x2:47,
				y1:399,
				y2:73
			};
			x+=53;
		    break;
		  case 13:
		  	buttonRow2D[i] = new Path2D();
		    buttonRow2D[i].rect(x,399,47,73)
		    buttonRow[i]={
				index:i,
				x1:x,
				x2:47,
				y1:399,
				y2:73
			};
			x+=53;
		    break;
		  case 15:
		  	buttonRow2D[i] = new Path2D();
		  	buttonRow2D[i].rect(x,399,47,73)
		  	buttonRow[i]={
				index:i,
				x1:x,
				x2:47,
				y1:399,
				y2:73
			};
			x+=52;
		  	break;
		  case 18:
		  	buttonRow2D[i] = new Path2D();
		  	buttonRow2D[i].rect(x,399,47,73)
		  	buttonRow[i]={
				index:i,
				x1:x,
				x2:47,
				y1:399,
				y2:73
			};
			x+=53;
		  	break;
		  default:
		  	buttonRow2D[i] = new Path2D();
		    buttonRow2D[i].rect(x,399,47,73)
		    buttonRow[i]={
				index:i,
				x1:x,
				x2:47,
				y1:399,
				y2:73
			};
			x+=53;
			break;
		}
		buttonStrokeGrd[i] = new Path2D();
		buttonStrokeGrd[i].rect(0,0,47,73);
	}
	x=146;
	for(var i=20;i<=25;i++){
		if(i>=23){
			buttonRow2D[i] = new Path2D();
			buttonRow2D[i].rect(x,486,100,45)
			buttonRow[i]={
				index:i,
				x1:x,
				x2:100,
				y1:486,
				y2:45
			};
			x+=104;
		}
		else{
			buttonRow2D[i] = new Path2D();
			buttonRow2D[i].rect(x,486,100,45)
			buttonRow[i]={
				index:i,
				x1:x,
				x2:100,
				y1:486,
				y2:45
			};
			x+=104;
		}
		buttonStrokeGrd[i] = new Path2D();
		buttonStrokeGrd[i].rect(0,0,100,45);
		
	}
	x=300;
	for (var i = 26; i <= 33; i++) {
		buttonRow2D[i] = new Path2D();
	    buttonRow2D[i].arc(x, board.height+66, chip.height/2+2 , 0, 2 * Math.PI);
	    buttonRow[i]={
			index:i,
			x:x,
			y:board.height+66,
			r:chip.height/2+2,
			sa:0,
			se:2 * Math.PI
		};
		x+=50;
	}
	for(var i = 34 ; i <= 35 ; i++){
		if(i==34){
			// clear button
			x=365;
			buttonRow2D[i] = new Path2D();
			buttonRow2D[i].rect(x,board.height+13,50,16);
			buttonRow[i]={
				index:i,
				x1:x,
				x2:50,
				y1:board.height+13,
				y2:16
			};
		}
		else{
			// bet button
			x=556;
			buttonRow2D[i] = new Path2D();
			buttonRow2D[i].rect(x,board.height+10,65,25);
			buttonRow[i]={
				index:i,
				x1:x,
				x2:65,
				y1:board.height+10,
				y2:25
			};
		}
		
	}

	countdown.style.left = buttonRow[0].x1+'px';
	countdown.style.top = buttonRow[0].y1+20+'px';

	for(var i=1;i<=5;i++){
		if(i!=3){
			document.getElementById('area'+i).style.left = buttonRow[i].x1+0.35*buttonRow[i].x2+'px';
			document.getElementById('area'+i).style.top = buttonRow[i].y1+'px';
			document.getElementById('area'+i).style.fontSize = 15+'px';
		}
		else{
			document.getElementById('area'+i).style.left = buttonRow[i].x1+0.45*buttonRow[i].x2+'px';
			document.getElementById('area'+i).style.top = buttonRow[i].y1+'px';
			document.getElementById('area'+i).style.fontSize = 15+'px';
		}
	}
	for(var i=6;i<=19;i++){
		document.getElementById('area'+i).style.left = buttonRow[i].x1+0.1*buttonRow[i].x2+'px';
		document.getElementById('area'+i).style.top = buttonRow[i].y1+0.9*buttonRow[i].y2+'px';
		document.getElementById('area'+i).style.fontSize = 10+'px';
	}
	for(var i=20;i<=25;i++){
		document.getElementById('area'+i).style.left = buttonRow[i].x1+0.1*buttonRow[i].x2+'px';
		document.getElementById('area'+i).style.top = buttonRow[i].y1+0.05*buttonRow[i].x2+'px';
		document.getElementById('area'+i).style.fontSize = 10+'px';
	}

	/// shaking
	// canvasDraw.style.display = 'none';
	// mouseX = 0;
	// mouseY = 0;
	// canvasDraw2.style.display = 'block';
	// rollingTheBall();
	//shaking

	animationLoad = requestAnimationFrame(startLoad);
	cancelAnimationFrame(animationLoad);
}

////////////////////////////////////
function readMoneyIn(betArea,amount){
	if(document.getElementById('area'+betArea).innerHTML!=''){
		var temValue = parseInt(document.getElementById('area'+betArea).innerHTML)+amount;
	}
	else{
		var temValue = 0+amount;
	}	

	document.getElementById('area'+betArea).innerHTML = temValue.toString();
	if(betArea>=1&&betArea<=5){
		var textSize1=100;
		var zoomSpeed1=5;
	}
	
	if(betArea>=6&&betArea<=19){
		var textSize2=50;
		var zoomSpeed2=2.5;
	}
	
	if(betArea>=20&&betArea<=25){
		var textSize3=50;
		var zoomSpeed3=2.5;
	}

	var moneyBouncing;

	slamMoney();
	function slamMoney(){
		
		if(betArea>=1&&betArea<=5){
			
			document.getElementById('area'+betArea).style.textAlign = 'center';
			document.getElementById('area'+betArea).style.fontSize = textSize1+'px';
			
			textSize1-=zoomSpeed1;
			zoomSpeed1+=2;
			moneyBouncing = requestAnimationFrame(slamMoney);

			if(textSize1<15){
				document.getElementById('area'+betArea).style.fontSize = 15+'px';
				cancelAnimationFrame(moneyBouncing);
			}
		}
		
		if(betArea>=6&&betArea<=19){
			
			document.getElementById('area'+betArea).style.textAlign = 'center';
			document.getElementById('area'+betArea).style.fontSize = textSize2+'px';
			
			textSize2-=zoomSpeed2;
			zoomSpeed2+=1;

			moneyBouncing = requestAnimationFrame(slamMoney);

			if(textSize2<10){
				document.getElementById('area'+betArea).style.fontSize = 10+'px';
				cancelAnimationFrame(moneyBouncing);
				
			}
		}

		if(betArea>=20&&betArea<=25){
			
			document.getElementById('area'+betArea).style.textAlign = 'center';
			document.getElementById('area'+betArea).style.fontSize = textSize3+'px';
			
			textSize3-=zoomSpeed3;
			zoomSpeed3+=1;

			moneyBouncing = requestAnimationFrame(slamMoney);

			if(textSize3<10){
				document.getElementById('area'+betArea).style.fontSize = 10+'px';
				cancelAnimationFrame(moneyBouncing);
				
			}
		}			
	}
}

