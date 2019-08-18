/** Contain the global values of the project
*/
class GlobalValues{
	static getValue(name){
		typecheck(name, String, function (argument) {
			throw "The name of the value must be a string";
		});

		if(GlobalValues.map == undefined){
			GlobalValues.map = {};
		}

		var val = GlobalValues.map[name];

		if(val == undefined){
			val = new Value(undefined);
			GlobalValues.map[name] = val;
		}

		return val;
	}
}