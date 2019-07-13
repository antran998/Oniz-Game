function showTextOnShaker(textInput,condition){

	if(condition==0){ // count down
		var showTextAnmiation = setInterval(function(){
			enableAutoplay(tickSound);
			countdown.style.display = 'block';
			if(textInput<10){
				countdown.innerHTML = '0'+textInput;
			}
			else{
				countdown.innerHTML = textInput;
			}
			
			textInput--;
			if(textInput==-2){
				countdown.style.display = 'none';
				clearInterval(showTextAnmiation);
				result(4,4,4);
			}
		},1000);
	}
	else{
		countdown.innerHTML = textInput;
	}
		
}
