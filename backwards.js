// https://docs.google.com/document/d/1dfEk85siPS5zaCiuvQKPa5phs6E8M4S8AVuaFWcyJSw/edit#heading=h.kjply3fxj86k
/*
Uppgift 4

Skriv testfall för funktionen backwards(x). Det är en funktion som ska ta en sträng som parameter. Den ska returnera en sträng som är den ursprungliga strängen baklänges. Funktionen ska också kunna ta tal som parametrar, genom att göra om dem till strängar.
*/

function backwards(str) {

	// tillåtna värden på in = 
	// string, number
	if(typeof str ==="number")
		str = str.toString(); // mest optimalt i JS?

	if(typeof str === "string") {
		let arr = str.split("");
		arr = arr.reverse();
		return arr.join("");
	}

	// otillåtna värden på in = 
	// boolean, null, undefined, symbol, object, function (obs null finns inte)
	throw new TypeError("Funciton parameter not string or number, given: " + typeof str);
}

module.exports = backwards;

// primites = string, number, boolean, null, undefined, symbol

// https://developer.mozilla.org/en-US/docs/Glossary/Primitive

// typeof

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof