const sellProduct = require('./sellproduct');

// test('adds 1 + 2 to equal 3', () => {
//   expect(sum(1, 2)).toBe(3);
// });

describe('sell product', () => {

	test('Is product an object', () => {

		function sendString() {
			return sellProduct("test");
		}
		expect(sendString).toThrowError(TypeError);

		function sendEmptyObj() {
			return sellProduct({});
		}
		expect(sendEmptyObj).toThrowError(TypeError);

	});

	test('One properties missing, two correct property', () => {

		function missingCount() {
			return sellProduct(
			{
				name: "",
				price: 0
			})
		}
		expect(missingCount).toThrowError(TypeError);

		function missingPrice() {
			return sellProduct(
			{
				name: "",
				count: 0
			})
		}
		expect(missingPrice).toThrowError(TypeError);

		function missingName() {
			return sellProduct(
			{
				price: 0,
				count: 0
			})
		}
		expect(missingName).toThrowError(TypeError);

	});

	test('Two properties missing, one correct property', () => {

		function onlyName() {
			return sellProduct(
			{
				name: ""
			})
		}

		expect(onlyName).toThrowError(TypeError);

		function onyPrice() {
			return sellProduct(
			{
				price: 0
			})
		}
		expect(onyPrice).toThrowError(TypeError);

		function onyCount() {
			return sellProduct(
			{
				count: 0
			})
		}
		expect(onyCount).toThrowError(TypeError);

	});

	test('Is product a correctly formatted object', () => {

		function sellProductError() {
			return sellProduct(
			{
				name: "",
				price: 0,
				count: 0
			});
		}

		expect(sellProductError).toThrowError(RangeError, "Object properties values not correct");

		expect(sellProduct(
			{
				name: "Test",
				price: 123,
				count: 1
			})).toEqual(
			{
				name: "Test",
				price: 123,
				count: 0
			});
	});

});

// describe
// http://facebook.github.io/jest/docs/en/api.html#describename-fn

// test (är samma sak som it)
// http://facebook.github.io/jest/docs/en/api.html#testname-fn-timeout