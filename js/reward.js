var moneyReward;
var sumCheck;

function checkReward(condition,dice1,dice2,dice3){
	// moneyReward = 0;
	// sumCheck=0;

	// // check sum of dice
	// for(var i =1;i<=3;i++){
	// 	sumCheck+=finaldice[i];
	// }
	// if(choose[1]!=-1){
	// 	if(moneyForEachBet[1]!=0){
	// 		if(sumCheck>=4&&sumCheck<=10){
	// 			moneyReward+=moneyForEachBet[1];
	// 			choose[1]=-1;
	// 		}
	// 	}		
	// }
	// if(choose[5]!=-1){
	// 	if(moneyForEachBet[5]!=0){
	// 		if(sumCheck>=11&&sumCheck<=17){
	// 			moneyReward+=moneyForEachBet[5];
	// 			choose[5]=-1;
	// 		}
	// 	}
	// }
	// for(var i =6;i<=25;i++){
	// 	if(choose[i]!=-1){
	// 		if(moneyForEachBet[i]!=0){
	// 			var compareVal = i-2;
	// 			if(compareVal==sumCheck){
	// 				moneyReward+=moneyForEachBet[i];
	// 				choose[i]=-1;
	// 			}
	// 		}
	// 	}	
	// }

	// //// compare two dices
	// if(choose[2]!=-1){
	// 	if(moneyForEachBet[2]!=0){
	// 		for(var i = 1;i<=3;i++){
	// 			if(finaldice[1]==i){
	// 				if(finaldice[2]==i){
	// 					moneyReward+=moneyForEachBet[i];
	// 					choose[2]=-1;
	// 				}
	// 				if(finaldice[3]==i){
	// 					moneyReward+=moneyForEachBet[i];
	// 					choose[2]=-1;
	// 				}
	// 			}
	// 			else{
	// 				if(finaldice[2]==i){
	// 					if(finaldice[3]==i){
	// 						moneyReward+=moneyForEachBet[i];
	// 						choose[2]=-1;
	// 					}
	// 				}
	// 			}
	// 		}
	// 	}
	// }
	// if(choose[4]!=-1){
	// 	if(moneyForEachBet[4]!=0){
	// 		for(var i = 4;i<=6;i++){
	// 			if(finaldice[1]==i){
	// 				if(finaldice[2]==i){
	// 					moneyReward+=moneyForEachBet[i];
	// 					choose[4]=-1;
	// 				}
	// 				if(finaldice[3]==i){
	// 					moneyReward+=moneyForEachBet[i];
	// 					choose[4]=-1;
	// 				}
	// 			}
	// 			else{
	// 				if(finaldice[2]==i){
	// 					if(finaldice[3]==i){
	// 						moneyReward+=moneyForEachBet[i];
	// 						choose[4]=-1;
	// 					}
	// 				}
	// 			}
	// 		}
	// 	}
	// }

	// ////
	// if(choose[3]!=-1){
	// 	if(moneyForEachBet[3]!=0){
	// 		if(finaldice[1]==finaldice[2] && finaldice[1]==finaldice[3] && finaldice[2]==finaldice[3]){
	// 			moneyReward+=moneyForEachBet[3];
	// 		}
	// 		choose[3]=-1;
	// 	}
	// }
	
	// // compare each dice // third row
	// for(var i = 20;i<=25;i++){
	// 	if(choose[i]!=-1){
	// 		if(moneyForEachBet[i]!=0){
	// 			if(finaldice[1]==i-19){
	// 				moneyReward+=moneyForEachBet[i];
	// 				choose[i]=-1;
	// 			}
	// 			if(finaldice[2]==i-19){
	// 				moneyReward+=moneyForEachBet[i];
	// 				choose[i]=-1;
	// 			}
	// 			if(finaldice[3]==i-19){
	// 				moneyReward+=moneyForEachBet[i];
	// 				choose[i]=-1;
	// 			}
	// 		}
	// 	}	
	// }

	// for(var i = 1;i<=25;i++){
	// 	if(choose[i]!=-1){
	// 		if(moneyForEachBet[i]!=0){
	// 			moneyReward-=moneyForEachBet[i];
	// 			choose[i]=-1;
	// 			moneyForEachBet[i]=0;
	// 		}
	// 	}
	// }

	if(condition==1){
		startBlur('WIN',dice1,dice2,dice3);
	}
	
	if(condition==2){
		startBlur('LOST',dice1,dice2,dice3);
	}
	if(condition==3){
		var doBet =0;
		for(var i = 1;i<=25;i++){
			if(moneyForEachBet[i]!=0){
				doBet=1;
			}
		}
		if(doBet==1){
			startBlur('DRAW',dice1,dice2,dice3);
		}
	}
	
}

function startBlur(result,dice1,dice2,dice3){
	result=result.toString();
	var blurPercent=100;
	var size = 50;
	var blurAnimation;

	var xDrop= new Array();
	var yDrop= new Array();
	var speedDrop= new Array();
	var chipNumberDrop = new Array();

	for(var i = 1;i<=100;i++){
		xDrop[i]=Math.floor(Math.random() * canvasDraw2.width)+15,
		yDrop[i]=Math.floor(Math.random() * (0.8*canvasDraw2.height))+15,
		speedDrop[i]=Math.floor(Math.random() * 10) + 4;

		chipNumberDrop[i] = Math.floor(Math.random() * 8);
	}

	if(result=='WIN'){
		enableAutoplay(chipRain1);
		setTimeout(function(){
			enableAutoplay(chipRain2);
		},500)
	}
	if(result=='LOST'){
		enableAutoplay(lostSound);
	}
	if(result=='DRAW'){
		enableAutoplay(drawSound);
	}
	

	blurText();
	function blurText(){
		ctx2.clearRect(0,0,canvasDraw2.width,canvasDraw2.height);
		ctx2.drawImage(board,0,0)
		ctx2.drawImage(plate,378,0);
		ctx2.drawImage(bet,330,board.height+10)
		ctx2.drawImage(chip,280,board.height+45);
		ctx2.fillText(moneyBet, 545, board.height+30);
		for(var i = 1;i<=25;i++){
			if(document.getElementById('area'+i).innerHTML!=''){
				document.getElementById('area'+i).innerHTML = '';
			}			
		}
		ctx2.save();
		ctx2.scale(0.25,0.25);// 283,150 x+145,y+150
		ctx2.drawImage(diceImg,dice[dice1].x,dice[dice1].y,125,125,420/0.25,55/0.25,125,125);
		ctx2.drawImage(diceImg,dice[dice2].x,dice[dice2].y,125,125,480/0.25,55/0.25,125,125);
		ctx2.drawImage(diceImg,dice[dice3].x,dice[dice3].y,125,125,450/0.25,100/0.25,125,125);
		ctx2.restore();

		///// money fall
		if(result=='WIN'){
			for(var i = 1;i<=100;i++){					
				yDrop[i]+=speedDrop[i];
				speedDrop[i]+=0.05;

				ctx2.save();
				ctx2.drawImage(chip,chip.height*chipNumberDrop[i]+chipNumberDrop[i]*9,0,chip.height,chip.height,xDrop[i],yDrop[i],chip.height,chip.height);
				ctx2.restore();

				if(yDrop[i]>0.8*canvasDraw2.height){
					// yDrop[i]=Math.floor(Math.random() * -100) -200;
					yDrop[i]=15;
					speedDrop[i]=Math.floor(Math.random() * 10) + 4;
					xDrop[i]=Math.floor(Math.random() * canvasDraw2.width)+15;
				}
			}
		}
		///// money fall

		ctx2.save();
		ctx2.font = size+"px foo";
		// if(result.indexOf('+')>-1){
		// 	ctx2.fillStyle = "#ffd700";
		// }
		// if(result.indexOf('-')>-1){
		// 	ctx2.fillStyle = "#ff0000";
		// }
		if(result=='WIN'){
			ctx2.fillStyle = "#ffd700";
		}
		if(result=='LOST'){
			ctx2.fillStyle = "#ff0000";
		}
		ctx2.textAlign = "center";
		ctx2.filter = 'opacity('+blurPercent+'%)';
		ctx2.fillText(result, canvasDraw2.width/2, canvasDraw2.height/2);
		ctx2.restore();
		if(result=='WIN'){
			blinkingButton();
		}

		blurPercent-=0.5;
		size+=2;
		var blurAnimation = requestAnimationFrame(blurText);
		if(blurPercent==50){
			cancelAnimationFrame(blurAnimation);
			countBounceError=0;
			for(var i = 1;i<=25;i++){
				moneyForEachBet[i]=0;
			}

			moneyReward = 0;
			sumCheck=0;
		}
	}

	function blinkingButton(){
		if(countBounceError<=5|| (countBounceError>=15&&countBounceError<=20)||(countBounceError>=30&&countBounceError<=35)||(countBounceError>=45&&countBounceError<=50)||(countBounceError>=60&&countBounceError<=65)){
			for(var i =1;i<=25;i++){
				if(moneyForEachBet[i]!=0){
					ctx2.save();
					ctx2.translate(buttonRow[i].x1,buttonRow[i].y1);
					var grd = ctx2.createLinearGradient(0, 0, buttonRow[i].x2, buttonRow[i].y2);
					grd.addColorStop("0", "yellow");
					grd.addColorStop("0.5", "white");
					grd.addColorStop("1.0", "yellow");

					ctx2.lineWidth = '3';
					ctx2.strokeStyle = grd;
					ctx2.stroke(buttonStrokeGrd[i]);
					ctx2.restore();
				}	
			}						
		}
		countBounceError++;
	}
}

