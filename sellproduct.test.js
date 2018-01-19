const sellProduct = require('./sellproduct');

// test('adds 1 + 2 to equal 3', () => {
//   expect(sum(1, 2)).toBe(3);
// });

describe('sell product', () => {

	test('Is product an object', () => {
		expect(sellProduct("test")).toThrowError();
		expect(sellProduct({})).toThrowError(TypeError);
	});

	test('One properties missing, two correct property', () => {

		expect(sellProduct(
			{
				name: "",
				price: 0
			})).toThrowError(TypeError);

		expect(sellProduct(
			{
				name: "",
				count: 0
			})).toThrowError(TypeError);

		expect(sellProduct(
			{
				price: 0,
				count: 0
			})).toThrowError(TypeError);

	});

	test('Two properties missing, one correct property', () => {

		expect(sellProduct(
			{
				name: ""
			})).toThrowError(TypeError);

		expect(sellProduct(
			{
				price: 0
			})).toThrowError(TypeError);

		expect(sellProduct(
			{
				count: 0
			})).toThrowError(TypeError);

	});

	test.only('Is product a correctly formatted object', () => {

		/*expect(sellProduct(
			{
				name: "",
				price: 0,
				count: 0
			})).toThrowError("Object properties values not correct");*/

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