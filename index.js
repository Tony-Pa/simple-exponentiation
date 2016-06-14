var app = {
  pow: function (x, n) {
  var result = 1;
  var abs = Math.abs(n);

  for (var i = 0; i < abs; i++) {
  	result = result * x;
  }
  if (n > 0) {
   	return result;
  } else {
  	result = 1 / result;
      return result;
  };
  }
};

try {
module.exports = app;
} catch (e) {}
