// https://docs.google.com/document/d/1dfEk85siPS5zaCiuvQKPa5phs6E8M4S8AVuaFWcyJSw/edit#heading=h.b5nyrbszssbm
/*
Uppgift 3
Skriv testfall för funktionen sellProduct(product). Funktionen tar ett objekt som parameter, som ska ha följande egenskaper: name, price, count. När funktionen anropas ska antalet produkter minskas med ett. Om det inte finns några kvar ska funktionen kasta ett exception med throw. (Repetition felhantering)
Exempel på hur ett produktobjekt kan se ut:
{
	name: 'Hello Kitty umbrella',
	price: 299,
	count: 3
}
*/
function sellProduct(product) {

	if(typeof product === "object")
		if(typeof product.name === "string" && typeof product.price === "number" && typeof product.count === "number")
			if(product.name != "" && product.price != 0 && product.count > 0)
				product.count--;
				return product;
			else
				throw new RangeError("Object properties values not correct");
		else
			throw new TypeError("Parameter not a correctly formatted object");
	else
		throw new TypeError("Parameter not an object");

}
module.exports = sellProduct;

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error

// TypeError = Creates an instance representing an error that occurs when a variable or parameter is not of a valid type.

// RangeError = Creates an instance representing an error that occurs when a numeric variable or parameter is outside of its valid range