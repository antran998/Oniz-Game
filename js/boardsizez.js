// format money type
function numberWithDots(x) {
	x=x.toString();
    return x.replace(/\B(?=(\d{3})+(?!\d))/,"."); // \B not boundary \d{3} 3 digit /d 
}

function contentTopLeft(textId,textMoney){
	userId.innerHTML = textId;

	textMoney = numberWithDots(textMoney.toFixed(2));
	cashAmount.innerHTML = textMoney+'$';
}
contentTopLeft("053185",200000);

function contentBottomLeft(idMember){
	var list = document.querySelector(".bottom-left");

	var table = document.createElement('table');
	table.setAttribute("class","full-width");
	list.insertBefore(table,list.childNodes[list.length]);

	var tr = document.createElement('tr');
	tr.setAttribute("class","board-row");
	table.appendChild(tr);

	var td1 = document.createElement('td');
	td1.setAttribute("class","icon-bottomLeft");
	td1.innerHTML = '<i class="fas fa-user-circle"></i>';
	tr.appendChild(td1);

	var td2 = document.createElement('td');
	td2.setAttribute("class","userID-bottomLeft");
	td2.innerHTML = idMember;
	tr.appendChild(td2);
}

function contentTopRight(userId,command,amount){
	var commandArray = [
		'',
		'S',
		'dbl',
		'trpl',
		'dbl',
		'B',
		'4',
		'5',
		'6',
		'7',
		'8',
		'9',
		'10',
		'11',
		'12',
		'13',
		'14',
		'15',
		'16',
		'17',
		'one',
		'two',
		'three',
		'four',
		'five',
		'six'
	];
	var list = document.querySelector(".top-right");

	var table = document.createElement('table');
	table.setAttribute("class","full-width");
	list.insertBefore(table,list.childNodes[list.length]);

	var tr = document.createElement('tr');
	tr.setAttribute("class","board-row");
	table.appendChild(tr);

	var td1 = document.createElement('td');
	td1.setAttribute("class","userID-topRight");
	td1.innerHTML = '<i class="fas fa-user-circle"></i> '+userId;
	tr.appendChild(td1);

	var td2 = document.createElement('td');
	td2.setAttribute("class","bet-topRight");
	tr.appendChild(td2);

	var span1 = document.createElement('span');
	span1.setAttribute("class","choose-topRight");
	span1.innerHTML = commandArray[command];
	td2.appendChild(span1);

	var td3 = document.createElement('td');
	td3.setAttribute("class","amount-topRight");
	td3.innerHTML =  numberWithDots(amount)+'$';
	tr.appendChild(td3);
}

function contentBottomRight(idTab,dice1,dice2,dice3){
	var diceArray = ['','one','two','three','four','five','six'];

	var list = document.querySelector(".bottom-right");

	var table = document.createElement('table');
	table.setAttribute("class","full-width");
	list.insertBefore(table,list.childNodes[list.length]);

	var tr = document.createElement('tr');
	tr.setAttribute("class","board-row");
	table.appendChild(tr);

	var td1 = document.createElement('td');
	td1.setAttribute("class","tableID-bottomRight");
	td1.innerHTML = '<i class="fas fa-table"></i> '+idTab;
	tr.appendChild(td1);

	var td2 = document.createElement('td');
	td2.setAttribute("class","dices-bottomRight");
	td2.innerHTML = '<i class="fas fa-dice-'+diceArray[dice1]+'"></i> <i class="fas fa-dice-'+diceArray[dice2]+'"></i> <i class="fas fa-dice-'+diceArray[dice3]+'"></i>';
	tr.appendChild(td2);
}

function contentBottomCenter(userId,dateTime,bet,amount,amountReturn,dice1,dice2,dice3,status){
	var containList = document.querySelector('.rowBottom');

	var diceArray = ['','one','two','three','four','five','six'];
	var list = document.querySelector(".bottom-center");

	var table = document.createElement('table');
	table.setAttribute("class","full-width");
	list.insertBefore(table,list.childNodes[list.length]);

	var tr = document.createElement('tr');
	tr.setAttribute("class","board-row");
	table.appendChild(tr);

	var td1 = document.createElement('td');
	td1.setAttribute("class","userID-bottomCenter");
	td1.innerHTML = userId;
	tr.appendChild(td1);

	var td2 = document.createElement('td');
	td2.setAttribute("class","dateTime-bottomCenter");
	td2.innerHTML = dateTime;
	tr.appendChild(td2);

	var td3 = document.createElement('td');
	td3.setAttribute("class","bet-bottomCenter");
	td3.innerHTML = bet;
	tr.appendChild(td3);

	var td4 = document.createElement('td');
	td4.setAttribute("class","amount-bottomCenter");
	td4.innerHTML =  numberWithDots(amount)+"$";
	tr.appendChild(td4);

	var td5 = document.createElement('td');
	td5.setAttribute("class","amountReturn-bottomCenter");
	td5.innerHTML =  numberWithDots(amountReturn)+"$";
	tr.appendChild(td5);

	var td6 = document.createElement('td');
	td6.setAttribute("class","result-bottomCenter");
	td6.innerHTML = '<i class="fas fa-dice-'+diceArray[dice1]+'"></i> <i class="fas fa-dice-'+diceArray[dice2]+'"></i> <i class="fas fa-dice-'+diceArray[dice3]+'"></i>';
	tr.appendChild(td6);

	var td7 = document.createElement('td');
	td7.setAttribute("class","status-bottomCenter");
	td7.innerHTML = status;
	tr.appendChild(td7);

	var td8 = document.createElement('td');
	td8.setAttribute("class","leftover-bottomCenter");
	tr.appendChild(td8);
	
	if(document.querySelector('.part-bottom').offsetTop<document.querySelector('.bottom-center').offsetTop+document.querySelector('.bottom-center').offsetHeight){
		var backgroundBottom = document.createElement("IMG");
		backgroundBottom.setAttribute("src", "img/part-mid.png");
		document.querySelector('.rowBottom').insertBefore(backgroundBottom,containList.childNodes[2]);
	}
}

setInterval(function(){
	contentTopRight(Math.floor(Math.random() * 685715) + 125141,Math.floor(Math.random() * 25) + 1,Math.floor(Math.random() * 10000) + 1);	
	contentBottomRight(Math.floor(Math.random() * 500) + 1,Math.floor(Math.random() * 6) + 1,Math.floor(Math.random() * 6) + 1,Math.floor(Math.random() * 6) + 1);
	contentBottomLeft(Math.floor(Math.random() * 685715) + 125141);
},2000)
setInterval(function(){

	contentBottomCenter(Math.floor(Math.random() * 685715) + 125141,'05:05:05 30/12/19','S',Math.floor(Math.random() * 9998) + 1541,Math.floor(Math.random() * 9999) + 1541,Math.floor(Math.random() * 6) + 1,Math.floor(Math.random() * 6) + 1,Math.floor(Math.random() * 6) + 1,'DRAW');
},2000)