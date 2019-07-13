var diceAnimation;
var dice = [
	{x:'',y:''},
	{x:0,y:0},
	{x:145,y:0},
	{x:290,y:0},
	{x:0,y:150},
	{x:145,y:150},
	{x:290,y:150}
];
var finaldice = Array();
var diceImg = new Image;
diceImg.src ='img/dice.png';

function result(dice1,dice2,dice3){
	canvasDraw2.style.display = 'block';
	canvasDraw.style.display = 'none';
	ctx2.clearRect(0,0,canvasDraw2.width,canvasDraw2.height);
	ctx2.drawImage(board,0,0);
	ctx2.drawImage(plate,378,0);
	ctx2.drawImage(bet,330,board.height+10)
	ctx2.drawImage(chip,280,board.height+45);
	ctx2.fillText(moneyBet, 545, board.height+30);
	for(var i = 1;i<=25;i++){
		if(choose[i]!=-1){
			if(moneyForEachBet[i]!=0){
				ctx2.drawImage(brightBoard,buttonRow[i].x1,buttonRow[i].y1,buttonRow[i].x2,buttonRow[i].y2,buttonRow[i].x1,buttonRow[i].y1,buttonRow[i].x2,buttonRow[i].y2);
			}
		}
	}
	showDices();

	function showDices(){
		finaldice[1]=dice1;
		finaldice[2]=dice2;
		finaldice[3]=dice3;
		ctx2.save()
		ctx2.scale(0.25,0.25);// 283,150 x+145,y+150
		ctx2.drawImage(diceImg,dice[finaldice[1]].x,dice[finaldice[1]].y,125,125,420/0.25,55/0.25,125,125);
		ctx2.drawImage(diceImg,dice[finaldice[2]].x,dice[finaldice[2]].y,125,125,480/0.25,55/0.25,125,125);
		ctx2.drawImage(diceImg,dice[finaldice[3]].x,dice[finaldice[3]].y,125,125,450/0.25,100/0.25,125,125);
		var w = diceImg.width;
		var h = diceImg.height;
		ctx2.restore();
		diceAnimation=requestAnimationFrame(showDices);
		cancelAnimationFrame(diceAnimation);
		setTimeout(function(){
			checkReward(1,4,4,4);
		},2000)
		setTimeout(function(){
			canvasDraw2.style.display = 'none';
			canvasDraw.style.display = 'block';

			ctx.clearRect(0,0,canvasDraw.width,canvasDraw.height)
			ctx.drawImage(board,0,0);
			ctx.drawImage(ball,378,0);
			ctx.drawImage(bet,330,board.height+10)
			ctx.drawImage(chip,280,board.height+45);
			ctx.fillText(moneyBet, 545, board.height+30);
			for(var i = 1;i<=25;i++){
				choose[i]=-1;
			}
			lastButtonChose=-1;
		},4000);
	}
}
