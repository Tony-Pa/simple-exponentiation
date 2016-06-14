var app = require('../index.js');

describe("app", function() {
  it("Pow x to n", function() {
  	//prepare
  		var result;
  	//act
  		result = app.pow(4, 4);
  	//assert
  	   expect(result).toEqual(256);
  });
  it("Pow x to -n", function() {
  	//prepare
  		var result;
  	//act
  		result = app.pow(2, -2);
  	//assert
  	   expect(result).toEqual(0.25);
  });
});
