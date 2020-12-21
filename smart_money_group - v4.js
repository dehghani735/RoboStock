true == function()
{
//***********************//
// telegram_bot function //
//***********************//
var telegram_bot = function(post)
	{
		//main_bot
		//1453426469:AAH_eJCxgezX8RRxpbmtFooFZG0qOvU_6CI
		//-473128118
		//test_bot
		//1420256469:AAEhUi0579r5OPKJqraB9q5mMHHAfZ6rgO4
		//-444656312
		 const Http = new XMLHttpRequest();
		 var Token="1420256469:AAEhUi0579r5OPKJqraB9q5mMHHAfZ6rgO4";
		 var ID= "-444656312";
		 var url='https://api.telegram.org/bot'+Token+'/sendMessage?text='+post+'&chat_id='+ID;
		 Http.open("GET", url);
		 Http.send();
	}
//***************************//
// emoji code from w3schools //
//***************************//
var code = {
	nemad : "127981",
	power : "128170",
	buy: "128178",
	pl: "9889",
	pc: "128205",
	bcI: "128372",
	up: "129001",
	down: "128997",
	special: "128998",
	moderateSpecial: "128993",
	randeman: "128200",
	bear: "128059",
	bull: "128046",
	cry: "128575",
	smile: "128570"
}
//***************************//
// emoji in javascript       //
//***************************//
function emoji(ecode)
{
	return String.fromCodePoint(ecode);
}

function getProperNumberString(n){
	var snum = "";
	if(n<0){
		var tn = -1*n;
		snum = tn + "-";

	} else {
		snum = n + "";
	}
	return snum;
}

function getMinMaxIh(){
	var min = 100000000000;
	var max = -1;
	if([ih] != undefined){
		for(var i=0; i<[ih].length; ++i){

			if([ih][i].PClosing > max){
				max = [ih][i].PClosing;
			}

			if([ih][i].PClosing < min){
				min = [ih][i].PClosing;
			}
		}
	}

	return {min, max}
}

function getBuyCountAvg() {
	if([ih] != undefined){
		for(var i=0; i<20; ++i){

		}
	}
}

function distFromAFinalPrice(firstPrice, finalPrice){
	return ((firstPrice - finalPrice)/firstPrice)*100
}

function isSignal(hour, minutes, seconds, p){
	var power = 1.5;
	var count = 40;
	if(hour == 9 && minutes <= 5){
		count = 40;
	} else if(hour == 9 && minutes > 5 && minutes <= 10 ) {
		count = 60;
	} else if(hour == 9 && minutes > 10 && minutes <= 30 ) {
		count = 100;
	} else if(hour == 9 && minutes > 30) {
		count = 200;
	} else if(hour == 10 && minutes <= 30) {
		count = 300;
	} else if(hour == 10 && minutes > 30) {
		count = 400;
	} else {
		count = 600;
	}

	// console.log((l18));
	// console.log((ct).Buy_CountI);
	// console.log(count);
	// console.log(p);
	// console.log(power);
	// console.log((plp));
	// console.log((pcp));
	// console.log('---------------------------');

	var zero = ((tmax) + (tmin))/2;
	var domain = ((1 - ((tmin) / zero)) * 100).toFixed(2);

	if((((pcp) + domain) <= 0.5) || ((plp) + domain <= 1)){
		if((ct).Buy_CountI >= count && p >= power && ((plp) - (pcp)) < 2){
			return {signal: true};
		}
	}
	return {signal: false};
}

function getProperColor() {
	var zero = ((tmax) + (tmin))/2;
	var domain = ((1 - ((tmin) / zero)) * 100).toFixed(2);

	if((((pcp) + domain) <= 0.5) || ((plp) + domain <= 1)){
		return emoji(code.special)
	}

	if ((((plp) + domain) > 1) || ((plp) + domain < 3)) {
		return emoji(code.moderateSpecial)
	}

	if((pl) <= (pc)){
		return emoji(code.down)
	}

	return emoji(code.up)

}

var buyOnSell = (((ct).Buy_I_Volume / (ct).Buy_CountI) / ((ct).Sell_I_Volume / (ct).Sell_CountI)).toFixed(1);
var buyEachPerson = ((((ct).Buy_I_Volume / (ct).Buy_CountI) * (pc))/10).toFixed(0);
var sellEachPerson = ((((ct).Sell_I_Volume / (ct).Sell_CountI) * (pc))/10).toFixed(0);
var zeroPrice = ((tmax) + (tmin))/2;
var topReachedPrice = (((pmax) - zeroPrice)/(zeroPrice))*100;
var bottomReachedPrice = (((pmin) - zeroPrice)/(zeroPrice))*100;

//*****************//
var date = new Date();

var seconds = date.getSeconds();
var minutes = date.getMinutes();
var hour = date.getHours();


if(localStorage.getItem("shouldSeparate") == null){
	localStorage.setItem("shouldSeparate", "true");
}

if(localStorage.getItem("shouldReload") == null){
	localStorage.setItem("shouldReload", "true");
}


if(hour >= 9 && hour <= 23 && (minutes % 3 === 1)){
	var endPart = "\n" + "**********************************" + "\n";
	console.log(localStorage.getItem("shouldSeparate"));
	if(localStorage.getItem("shouldSeparate") == "true"){
		telegram_bot(encodeURIComponent(endPart));
		localStorage.setItem("shouldSeparate", "false");
		localStorage.setItem("shouldReload", "true");
	}
}

if(hour >= 9 && hour <= 23 && (minutes % 3 === 2)){
	console.log(localStorage.getItem("shouldReload"));
	if(localStorage.getItem("shouldReload") == "true"){
		location.reload();
		localStorage.setItem("shouldSeparate", "true");
		localStorage.setItem("shouldReload", "false");
	}
}

if (hour >= 9 && hour <= 23 && (minutes % 3 === 0))
{
	if(hour == 12 && minutes > 45){
		return false;
	}
	if ( (ct).Buy_CountI >= 10 && buyEachPerson >= 20000000 && (((pc) < (pl) && buyOnSell >= 1.2) || buyOnSell >= 1.5) && (pl)!=(tmax))
	{
		if([ih] != undefined){
			var randeman7 = ((([ih][0].PClosing - [ih][6].PClosing)/[ih][6].PClosing)*100).toFixed(0);
			var randeman30 = ((([ih][0].PClosing - [ih][29].PClosing)/[ih][29].PClosing)*100).toFixed(0);
			var randeman60 = ((([ih][0].PClosing - [ih][59].PClosing)/[ih][59].PClosing)*100).toFixed(0);
			var minMaxPrice = getMinMaxIh();
			var emj = getProperColor();
			var sig = isSignal(hour, minutes, seconds, buyOnSell).signal;
			var post_n = emoji(code.nemad) + " نماد : #" + (l18) + "\n" +
					 emoji(code.buy) + " سرانه خرید هر نفر : " + (buyEachPerson/1000000).toFixed(0) + "\n" +
					 emoji(code.power) + " قدرت خریدار به فروشنده : " + buyOnSell + "\n" +
					 emoji(code.bcI) + " تعداد خریدار حقیقی : " + (ct).Buy_CountI + "\n" +
					 emoji(code.bcI) + " میانگین تعداد خریدار حقیقی در ماه : " + (ct).Buy_CountI + "\n" +
					 emoji(code.pc) + " قیمت پایانی : " + getProperNumberString((pcp)) + "\n" +
					 emj + " قیمت لحظه ای : " + getProperNumberString((plp)) + "\n" +
					 emoji(code.cry) +  " کمترین : " + getProperNumberString((bottomReachedPrice).toFixed(2)) + "\n" +
					 emoji(code.smile) + " بیشترین : " + getProperNumberString((topReachedPrice).toFixed(2)) + "\n" +
					 // emoji(code.pc) + " کف دو ماهه : " + (minMaxPrice.min) + "\n" +
					 // emoji(code.pc) + " سقف دو ماهه : " + (minMaxPrice.max) + "\n" +
					 emoji(code.bull) + " فاصله تا سقف دو ماهه : " + ((((minMaxPrice.max - (pc))/(pc))*100).toFixed(0)) + "\n" +
					 emoji(code.bear) + " فاصله تا کف دو ماهه : " + (((((pc) - minMaxPrice.min)/(pc))*100).toFixed(0)) + "\n" +
					 emoji(code.randeman) + " بازدهی : " + " ( " + getProperNumberString(randeman7) + " ) "  + " ( " + getProperNumberString(randeman30) + " ) " + " ( " + getProperNumberString(randeman60) + " ) "  + "\n" +
					 ((sig) ? "#signal" : "") + "\n" +
					 ((sig) ? "@SajjadiMohsen" : "") + "\n" +
					 ((sig) ? "@Mhd_Frnd" : "") + "\n" +
					 ((sig) ? "@AliSaeedi_005" : "") + "\n";


			var post = encodeURIComponent(post_n);
			telegram_bot(post);
			return true;
		} else {
			var emj = getProperColor();
			var sig = isSignal(hour, minutes, seconds, buyOnSell).signal;
			var post_n = emoji(code.nemad) + " نماد : #" + (l18) + "\n" +
					 emoji(code.buy) + " سرانه خرید هر نفر : " + (buyEachPerson/1000000).toFixed(0) + "\n" +
					 emoji(code.power) + " قدرت خریدار به فروشنده : " + buyOnSell + "\n" +
					 emoji(code.bcI) + " تعداد خریدار حقیقی : " + (ct).Buy_CountI + "\n" +
					 emoji(code.pc) + " قیمت پایانی : " + getProperNumberString((pcp)) + "\n" +
					 emj + " قیمت لحظه ای : " + getProperNumberString((plp)) + "\n" +
					 emoji(code.cry) +  " کمترین : " + getProperNumberString((bottomReachedPrice).toFixed(2)) + "\n" +
					 emoji(code.smile) + " بیشترین : " + getProperNumberString((topReachedPrice).toFixed(2)) + "\n" +
					 // emoji(code.pc) + " کف دو ماهه : " + (minMaxPrice.min) + "\n" +
					 // emoji(code.pc) + " سقف دو ماهه : " + (minMaxPrice.max) + "\n" +
					 ((sig) ? "#signal" : "") + "\n" +
					 ((sig) ? "@SajjadiMohsen" : "") + "\n" +
					 ((sig) ? "@Mhd_Frnd" : "") + "\n" +
					 ((sig) ? "@AliSaeedi_005" : "") + "\n";

			var post = encodeURIComponent(post_n);
			telegram_bot(post);
			return true;
		}


	}

}

}()
