describe("First jasmine project", function() {
	it("should say hello jasmine", function() {
		expect(helloWorld()).toBe("hello world");
	});

	it("should write datable on the page", function(){
		expect(title).toBe("Learning unit testing jasmine");
		expect(title).not.toBe("Knockout");
	});

	it("should include in the title Jasmine", function(){
		expect(title).toMatch(/Jasmine/i);
	});

	it("verificacion de suma",function(){
		expect(suma(2,2)).toBe(4);
		expect(suma(3,6)).toBe(9);
		expect(suma(-50,"1000")).toBe(950);
		expect(suma(-50,"iefasd")).toBe(null);
		expect(suma(4,8)).toBeGreaterThan(10);
		expect(suma(80,80)).toBeLessThan(170);
	});
});

