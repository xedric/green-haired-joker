const backwards = require('./backwards');

describe("Backwards takes string or number and reverses", () => {

	test("Parameter is string", () => {

		expect(backwards("hej")).toBe("jeh");

	});

	test("Parameter is empty string", () => {

		expect(backwards("")).toBe("");

	});

	test("Parameter is number", () => {
		
		expect(backwards(1337)).toBe("7331");

	});

	test("Parameter is boolean", () => {

		function sendBoolean() {
			backwards(true);
		}

		expect(sendBoolean).toThrow(TypeError);

	});

	// test("", () => {});
});