function main() {
	var shi = document.getElementsByTagName('img')[0];
	var fu = document.getElementsByTagName('img')[1];
	var mi = document.getElementsByTagName('img')[2];
	var you = document.getElementById('you');
	var ia = document.getElementById('ia');
	var count = 0;
	var result;
	var victory = document.getElementById('win');
	var defeat = document.getElementById('lose');
	var matchNull = document.getElementById('egal');
	var youNum;
	var iaNum;
	var reset = document.getElementById('reset');
	var instantResult = document.getElementById('instantResult');

	shi.addEventListener("click", function(){
		you.style.backgroundImage = "url('img/pierre.png')";
		bgi(you);
		youNum = 0;
		opClick(iaNum, ia, result, youNum, iaNum, count, victory, defeat, matchNull);
	});
	fu.addEventListener("click", function(){
		you.style.backgroundImage = "url('img/paspied.jpeg')";
		bgi(you);
		youNum = 1;
		opClick(iaNum, ia, result, youNum, iaNum, count, victory, defeat, matchNull);
	});
	mi.addEventListener("click", function(){
		you.style.backgroundImage = "url('img/sixseau.jpg')";
		bgi(you);
		youNum = 2;
		opClick(iaNum, ia, result, youNum, iaNum, count, victory, defeat, matchNull);
	});
	reset.addEventListener("click", function(){
		resetGame(victory, defeat, matchNull, you, ia);
	});
}

function opClick (iaNum, ia, result, youNum, iaNum, count, victory, defeat, matchNull)
{
	count++;
	iaNum = game(ia);
	result = vict(youNum, iaNum);
	calcWL(victory, defeat, matchNull, result, instantResult);
	console.log(result);
}

function game(ia) {
	var img = Math.floor(Math.random() * Math.floor(3));

	if (img == 0)
	{
		ia.style.backgroundImage = "url('img/pierre.png')";
		bgi(ia);
		return 0;
	}
	else if (img == 1)
	{
		ia.style.backgroundImage = "url('img/paspied.jpeg')";
		bgi(ia);
		return 1;
	}
	else
	{
		ia.style.backgroundImage = "url('img/sixseau.jpg')";
		bgi(ia);
		return 2;
	}
}

function bgi(argument) {
	argument.style.backgroundRepeat = "no-repeat";
	argument.style.backgroundSize = "100% 100%";
}

function vict(youNum, iaNum) {
	if (youNum == iaNum)
		return (1);
	else if ((youNum == 2 && iaNum == 0) || (youNum == 0 && iaNum == 1) || (youNum == 1 && iaNum == 2))
		return (0);
	else
		return (2);
}

function calcWL(victory, defeat, matchNull, result, instantResult)
{
	if (result == 0)
	{
		instantResult.innerHTML = "You Win This Time";
		victory.innerHTML = (parseInt(victory.innerHTML) + 1)+" Win";
	}

	else if (result == 2)
	{
		instantResult.innerHTML = "You Lose This Time";
		defeat.innerHTML = (parseInt(defeat.innerHTML) + 1)+" Lose";
	}
	else
	{
		instantResult.innerHTML = "You make Ex Aequo This Time";
		matchNull.innerHTML = (parseInt(matchNull.innerHTML) + 1)+" Null";
	}
}

function resetGame(victory, defeat, matchNull, you, ia) {
	you.style.backgroundImage = "none";
	ia.style.backgroundImage = "none";
	victory.innerHTML = 0;
	defeat.innerHTML = 0;
	matchNull.innerHTML = 0;
}

main();