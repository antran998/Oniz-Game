var mouseX,mouseY;
var animationFrame;
var choose = new Array();
var lastButtonChose=-1;

for(var i = 1;i<=25;i++){
	choose[i]=-1;
	moneyForEachBet[i]=0;
}

canvasDraw.addEventListener('mousemove',function(e){
	
	mouseX = ((e.clientX-canvasDraw.getBoundingClientRect().left));
	mouseY = ((e.clientY-canvasDraw.getBoundingClientRect().top));
	// show.innerHTML = mouseX;
	if(canvasDraw.style.display!='none'){
		hover();
	}
})

canvasDraw.addEventListener('mousedown',function(e){
	mousedownEvent();
})
canvasDraw.addEventListener('mouseup',function(e){
	if(currbutton!=''){
		if(currbutton<=25){
			ctx.clearRect(0,0,canvasDraw.width,canvasDraw.height)
			ctx.drawImage(board,0,0);
			ctx.drawImage(ball,378,0);
			ctx.drawImage(bet,330,board.height+10)
			ctx.drawImage(chip,280,board.height+45);
			ctx.fillText(moneyBet, 545, board.height+30);
			for(var i = 1;i<=25;i++){
				if(choose[i]!=-1){
					ctx.drawImage(brightBoard,buttonRow[i].x1,buttonRow[i].y1,buttonRow[i].x2,buttonRow[i].y2,buttonRow[i].x1,buttonRow[i].y1,buttonRow[i].x2,buttonRow[i].y2);
				}
			}
			choose[currbutton]=i;

			ctx.save();
			ctx.translate(buttonRow[currbutton].x1,buttonRow[currbutton].y1);
			var grd = ctx.createLinearGradient(0, 0, buttonRow[currbutton].x2, buttonRow[currbutton].y2);
			grd.addColorStop("0", "yellow");
			grd.addColorStop("0.5", "white");
			grd.addColorStop("1.0", "yellow");

			ctx.lineWidth = '3';
			ctx.strokeStyle = grd;
			ctx.stroke(buttonStrokeGrd[currbutton]);
			ctx.restore();
		}
		else{
			if(currbutton<=33){
				switch(currbutton) {
		  			case 26:
		  				moneyBet+=1;
		  				break;
		  			case 27:
		  				moneyBet+=6;
		  				break;
		  			case 28:
		  				moneyBet+=10;
		  				break;
		  			case 29:
		  				moneyBet+=20;
		  				break;
		  			case 30:
		  				moneyBet+=50;
		  				break;
		  			case 31:
		  				moneyBet+=100;
		  				break;
		  			case 32:
		  				moneyBet+=500;
		  				break;
		  			case 33:
		  				moneyBet+=1000;
		  				break;
				}
				ctx.clearRect(430,board.height+11,120,20)				
				ctx.fillText(moneyBet, 545, board.height+30);
				ctx.filter = 'none';
			}
			else{
				if(currbutton==34){ // clear button
					ctx.filter = 'none';
					moneyBet=0;
					ctx.clearRect(0,0,canvasDraw.width,canvasDraw.height)
					ctx.drawImage(board,0,0);
					ctx.drawImage(ball,378,0);
					ctx.drawImage(bet,330,board.height+10)
					ctx.drawImage(chip,280,board.height+45);
					ctx.fillText(moneyBet, 545, board.height+30);

					for(var i = 1;i<=25;i++){
						if(moneyForEachBet[i]==0){
							choose[i]=-1;
						}						
					}
					for(var i = 1;i<=25;i++){
						if(moneyForEachBet[i]!=0){
							ctx.drawImage(brightBoard,buttonRow[i].x1,buttonRow[i].y1,buttonRow[i].x2,buttonRow[i].y2,buttonRow[i].x1,buttonRow[i].y1,buttonRow[i].x2,buttonRow[i].y2);
						}
					}
					lastButtonChose=-1;
				}
				else{ // bet button
					ctx.filter = 'none';
					if(moneyBet==0 && lastButtonChose==-1){
						alertError();											
					}
					if(moneyBet==0 && lastButtonChose!=-1){
						alertError();
					}
					if(moneyBet!=0 && lastButtonChose==-1){
						alertError();
					}
					if(moneyBet!=0 && choose[lastButtonChose]!=-1 && lastButtonChose!=-1){
						enableAutoplay(betSound);
						moneyForEachBet[lastButtonChose]+=moneyBet;

						ctx.clearRect(0,0,canvasDraw.width,canvasDraw.height)
						ctx.drawImage(board,0,0);
						ctx.drawImage(ball,378,0);
						ctx.drawImage(bet,330,board.height+10)
						ctx.drawImage(chip,280,board.height+45);

						for(var i = 1;i<=25;i++){
							if(choose[i]!=-1){
								ctx.drawImage(brightBoard,buttonRow[i].x1,buttonRow[i].y1,buttonRow[i].x2,buttonRow[i].y2,buttonRow[i].x1,buttonRow[i].y1,buttonRow[i].x2,buttonRow[i].y2);
							}
						}
						readMoneyIn(lastButtonChose,moneyBet);
						moneyBet=0;
						ctx.fillText(moneyBet, 545, board.height+30);
						lastButtonChose=-1;
					}
				}				
			}
		}
	}
	else{
		if (ctx.isPointInPath(buttonRow2D[0], mouseX, mouseY)) {

			// shake
			canvasDraw.style.display = 'none';
			mouseX = 0;
			mouseY = 0;
			canvasDraw2.style.display = 'block';
			rollingTheBall();
			// shake
		}
	}
})

canvasDraw.addEventListener('mouseleave',function(e){
	mouseX = 0;
	mouseY = 0;
	ctx.clearRect(0,0,canvasDraw.width,canvasDraw.height)
	ctx.drawImage(board,0,0);
	ctx.drawImage(ball,378,0);
	ctx.drawImage(bet,330,board.height+10)
	ctx.drawImage(chip,280,board.height+45);
	ctx.fillText(moneyBet, 545, board.height+30);
	
	for(var i = 1;i<=25;i++){
		if(choose[i]!=-1){
			if(moneyForEachBet[i]!=0){
				ctx.drawImage(brightBoard,buttonRow[i].x1,buttonRow[i].y1,buttonRow[i].x2,buttonRow[i].y2,buttonRow[i].x1,buttonRow[i].y1,buttonRow[i].x2,buttonRow[i].y2);
			}
			else{				
				ctx.save();
				ctx.translate(buttonRow[i].x1,buttonRow[i].y1);
				var grd = ctx.createLinearGradient(0, 0, buttonRow[i].x2, buttonRow[i].y2);
				grd.addColorStop("0", "yellow");
				grd.addColorStop("0.5", "white");
				grd.addColorStop("1.0", "yellow");

				ctx.lineWidth = '3';
				ctx.strokeStyle = grd;
				ctx.stroke(buttonStrokeGrd[i]);
				ctx.restore();
			}
		}
	}
})

////////////////////////////////////////////////

var currbutton='';
var lastbutton='';

function hover(){
	var mouseOutSide = 35;
	for(var i = 1;i<=35;i++){
		if (ctx.isPointInPath(buttonRow2D[i], mouseX, mouseY)) {
			mouseOutSide--;
			currbutton=i;
		}
	}
	if(mouseOutSide==35){
		canvasDraw.style.cursor= 'default';
		ctx.clearRect(0,0,canvasDraw.width,canvasDraw.height)
		ctx.drawImage(board,0,0);
		ctx.drawImage(ball,378,0);
		ctx.drawImage(bet,330,board.height+10)
		ctx.drawImage(chip,280,board.height+45);
		ctx.fillText(moneyBet, 545, board.height+30);
		
		for(var i = 1;i<=25;i++){
			if(choose[i]!=-1){
				if(moneyForEachBet[i]!=0){
					ctx.drawImage(brightBoard,buttonRow[i].x1,buttonRow[i].y1,buttonRow[i].x2,buttonRow[i].y2,buttonRow[i].x1,buttonRow[i].y1,buttonRow[i].x2,buttonRow[i].y2);
				}
				else{				
					ctx.save();
					ctx.translate(buttonRow[i].x1,buttonRow[i].y1);
					var grd = ctx.createLinearGradient(0, 0, buttonRow[i].x2, buttonRow[i].y2);
					grd.addColorStop("0", "yellow");
					grd.addColorStop("0.5", "white");
					grd.addColorStop("1.0", "yellow");

					ctx.lineWidth = '3';
					ctx.strokeStyle = grd;
					ctx.stroke(buttonStrokeGrd[i]);
					ctx.restore();
				}
			}
		}

		currbutton='';
		lastbutton='';
		
		cancelAnimationFrame(animationFrame);
		angle=0;
	}
	else{
		if(currbutton!=''){
			if(currbutton!=lastbutton){
				if(currbutton<=25){
					canvasDraw.style.cursor= 'pointer';
					ctx.clearRect(0,0,canvasDraw.width,canvasDraw.height)
					ctx.drawImage(board,0,0);
					ctx.drawImage(ball,378,0);
					ctx.drawImage(bet,330,board.height+10)
					ctx.drawImage(chip,280,board.height+45);
					ctx.fillText(moneyBet, 545, board.height+30);
					
					for(var i = 1;i<=25;i++){
						if(choose[i]!=-1){
							if(moneyForEachBet[i]!=0){
								ctx.drawImage(brightBoard,buttonRow[i].x1,buttonRow[i].y1,buttonRow[i].x2,buttonRow[i].y2,buttonRow[i].x1,buttonRow[i].y1,buttonRow[i].x2,buttonRow[i].y2);
							}
							else{				
								ctx.save();
								ctx.translate(buttonRow[i].x1,buttonRow[i].y1);
								var grd = ctx.createLinearGradient(0, 0, buttonRow[i].x2, buttonRow[i].y2);
								grd.addColorStop("0", "yellow");
								grd.addColorStop("0.5", "white");
								grd.addColorStop("1.0", "yellow");

								ctx.lineWidth = '3';
								ctx.strokeStyle = grd;
								ctx.stroke(buttonStrokeGrd[i]);
								ctx.restore();
							}
						}
					}
					
					ctx.save();
					ctx.translate(buttonRow[currbutton].x1,buttonRow[currbutton].y1);
					var grd = ctx.createLinearGradient(0, 0, buttonRow[currbutton].x2, buttonRow[currbutton].y2);
					grd.addColorStop("0", "yellow");
					grd.addColorStop("0.5", "white");
					grd.addColorStop("1.0", "yellow");

					ctx.lineWidth = '3';
					ctx.strokeStyle = grd;

					ctx.stroke(buttonStrokeGrd[currbutton]);
					lastbutton=currbutton;
					ctx.restore();
				}
				else{ // chip
					if(currbutton<=33){
						canvasDraw.style.cursor= 'pointer';
						cancelAnimationFrame(animationFrame);
						angle=0;					

						ctx.clearRect(0, 0, canvasDraw.width, canvasDraw.height);
	    
					 	ctx.drawImage(board,0,0);
						ctx.drawImage(ball,378,0);
						ctx.drawImage(bet,330,board.height+10)
						ctx.drawImage(chip,280,board.height+45);
						ctx.fillText(moneyBet, 545, board.height+30);
						
						for(var i = 1;i<=25;i++){
							if(choose[i]!=-1){
								if(moneyForEachBet[i]!=0){
									ctx.drawImage(brightBoard,buttonRow[i].x1,buttonRow[i].y1,buttonRow[i].x2,buttonRow[i].y2,buttonRow[i].x1,buttonRow[i].y1,buttonRow[i].x2,buttonRow[i].y2);
								}
								else{				
									ctx.save();
									ctx.translate(buttonRow[i].x1,buttonRow[i].y1);
									var grd = ctx.createLinearGradient(0, 0, buttonRow[i].x2, buttonRow[i].y2);
									grd.addColorStop("0", "yellow");
									grd.addColorStop("0.5", "white");
									grd.addColorStop("1.0", "yellow");

									ctx.lineWidth = '3';
									ctx.strokeStyle = grd;
									ctx.stroke(buttonStrokeGrd[i]);
									ctx.restore();
								}
							}
						}

						startRotate();
						lastbutton=currbutton;
					}
					else{
						canvasDraw.style.cursor= 'pointer';
						cancelAnimationFrame(animationFrame);
						ctx.save();
						if(currbutton==35){
							ctx.filter = 'brightness(0.5)';
							ctx.drawImage(bet,225,0,100,50,556,board.height+10,100,50)// bet button
						}
						else{
							ctx.filter = 'brightness(0.5)';
							ctx.drawImage(bet,35,0,50,20,365,board.height+10,50,20)// clear button
						}
						ctx.restore();
						lastbutton=currbutton;
					}
				}
			}

		}
	}
	animationFrame = requestAnimationFrame(hover);
}

function mousedownEvent(){
	cancelAnimationFrame(animationFrame);
	for(var i = 1;i<=33;i++){
		if (ctx.isPointInPath(buttonRow2D[i], mouseX, mouseY)) {
			enableAutoplay(hoverButton);
			if(i<=25){
				if(lastButtonChose!=i){
					console.log(i);
					choose[lastButtonChose]=-1;
					ctx.drawImage(brightBoard,buttonRow[i].x1,buttonRow[i].y1,buttonRow[i].x2,buttonRow[i].y2,buttonRow[i].x1,buttonRow[i].y1,buttonRow[i].x2,buttonRow[i].y2);
					lastButtonChose=i;
				}
			}
			if(i>=26&&i<=33){ // chip
				ctx.filter = 'brightness(2)';
			}
		}
	}
	if (ctx.isPointInPath(buttonRow2D[34], mouseX, mouseY)) {// clear button
		ctx.clearRect(0,0,canvasDraw.width,canvasDraw.height)
		ctx.drawImage(board,0,0);
		ctx.drawImage(ball,378,0);
		ctx.drawImage(bet,330,board.height+10)
		ctx.drawImage(chip,280,board.height+45);
		ctx.fillText(moneyBet, 545, board.height+30);
		for(var i =1;i<=25;i++){
			if(moneyForEachBet[i]!=0){
				ctx.drawImage(brightBoard,buttonRow[i].x1,buttonRow[i].y1,buttonRow[i].x2,buttonRow[i].y2,buttonRow[i].x1,buttonRow[i].y1,buttonRow[i].x2,buttonRow[i].y2);
			}
		}			
		
		ctx.filter = 'brightness(2)';
		ctx.drawImage(bet,35,0,50,20,365,board.height+10,50,20)
	}

	if (ctx.isPointInPath(buttonRow2D[35], mouseX, mouseY)) {// bet button
		ctx.clearRect(0,0,canvasDraw.width,canvasDraw.height)
		ctx.drawImage(board,0,0);
		ctx.drawImage(ball,378,0);
		ctx.drawImage(bet,330,board.height+10)
		ctx.drawImage(chip,280,board.height+45);
		ctx.fillText(moneyBet, 545, board.height+30);
		for(var i =1;i<=25;i++){
			if(moneyForEachBet[i]!=0){
				ctx.drawImage(brightBoard,buttonRow[i].x1,buttonRow[i].y1,buttonRow[i].x2,buttonRow[i].y2,buttonRow[i].x1,buttonRow[i].y1,buttonRow[i].x2,buttonRow[i].y2);
			}
		}		
		if(choose[i]!=-1 && lastButtonChose!=-1){
			if(moneyForEachBet[i]!=0){
				ctx.drawImage(brightBoard,buttonRow[i].x1,buttonRow[i].y1,buttonRow[i].x2,buttonRow[i].y2,buttonRow[i].x1,buttonRow[i].y1,buttonRow[i].x2,buttonRow[i].y2);
			}
			ctx.filter = 'brightness(2)';
			ctx.drawImage(bet,225,0,100,50,556,board.height+10,100,50)
		}
	}
	
	animationFrame = requestAnimationFrame(mousedownEvent);
	cancelAnimationFrame(animationFrame);
}

var angle=0;
function rotateChip() {
	var chipNumber = currbutton-26;
    ctx.translate(300+chipNumber*50,board.height+66);
    ctx.rotate(angle);

    ctx.drawImage(chip,chip.height*chipNumber+chipNumber*9,0,chip.height,chip.height,chip.height/-2,chip.height/-2,chip.height,chip.height);

    if (angle >= 2*3.14) {
        angle = 0;
    }
    angle += 0.05;
}

function startRotate() {
	var chipNumber = currbutton-26;
   
	ctx.save();
	ctx.clearRect(280+chipNumber*50-2,board.height+44,chip.height+4,chip.height+4);

    rotateChip();
    ctx.restore();
    animationFrame = requestAnimationFrame(startRotate);
}

var countBounceError = 0;
var errorAnimation;
function alertError(){
	canvasDraw.style.display = 'none';
	canvasDraw2.style.display = 'block';

	ctx2.clearRect(0,0,canvasDraw.width,canvasDraw.height);
	ctx2.drawImage(board,0,0);
	ctx2.drawImage(ball,378,0);
	ctx2.drawImage(bet,330,board.height+10)
	ctx2.drawImage(chip,280,board.height+45);
	ctx2.font = "15px serif";
	ctx2.fillStyle = "#FFF";
	ctx2.textAlign = "right";
	ctx2.fillText(moneyBet, 545, board.height+30);
	
	if(countBounceError<=5|| (countBounceError>=15&&countBounceError<=20)||(countBounceError>=30&&countBounceError<=35)){
		enableAutoplay(alertSound);
		if(moneyBet==0 && lastButtonChose==-1){
			for(var i =1;i<=25;i++){
				ctx2.save();
				ctx2.lineWidth = '3';
				ctx2.strokeStyle = 'red';
				ctx2.stroke(buttonRow2D[i]);
				ctx2.restore();
			}
			for(var i =26;i<=33;i++){
				ctx2.save();
				ctx2.lineWidth = '3';
				ctx2.strokeStyle = 'red';
				ctx2.stroke(buttonRow2D[i]);
				ctx2.restore();
			}			
		}
		if(moneyBet==0 && lastButtonChose!=-1){
			for(var i =26;i<=33;i++){
				ctx2.save();
				ctx2.lineWidth = '3';
				ctx2.strokeStyle = 'red';
				ctx2.stroke(buttonRow2D[i]);
				ctx2.restore();
			}
		}
		if(moneyBet!=0 && lastButtonChose==-1){
			for(var i =1;i<=25;i++){
				ctx2.save();
				ctx2.lineWidth = '3';
				ctx2.strokeStyle = 'red';
				ctx2.stroke(buttonRow2D[i]);
				ctx2.restore();
			}
		}
	}
	countBounceError++;
	errorAnimation = requestAnimationFrame(alertError);
	if(countBounceError==37){
		cancelAnimationFrame(errorAnimation);
		countBounceError=0;
		canvasDraw.style.display = 'block';
		canvasDraw2.style.display = 'none';
	}
}
