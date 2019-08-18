/** Contain a single value that implement the observer pattern
*/
class Value{
	constructor(val){
		this.value = val;
		this.type = undefined;
		this.subscribers = [];
	}

	set Type(val){
		this.type = val;
	}

	set Value(val){
		if(this.type != undefined){
			typecheck(val, this.type, function (argument) {
				throw "Wrong type for the value";
			})
		}

		this.value = val;

		for (var i = this.subscribers.length - 1; i >= 0; i--) {
			this.subscribers[i](this.value);
		}
	}

	get Value(){
		return this.value;
	}

	subscribe(sub){
		typecheck(sub, Function, function (argument) {
			throw "The subscriber must be a function";
		});

		this.subscribers.push(sub);
	}

}