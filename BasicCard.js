// function MyObject(bar) {
//   this.bar = bar;
// }

// MyObject.prototype.foo = function foo() {
//   console.log(this.bar);
// };

// module.exports = MyObject;

// // In another module:
// var MyObjectOrSomeCleverName = require("./my_object.js");
// var my_obj_instance = new MyObjectOrSomeCleverName("foobar");
// my_obj_instance.foo(); // => "foobar"

function Basic(front, back) {
	if(this instanceof Basic) {
		this.front = front,
		this.back = back	
	} else {
		return new Basic(front, back);
	}
	
}

module.exports = Basic;



