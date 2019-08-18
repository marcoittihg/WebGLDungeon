/* Base class or all components of one object
*/
class Component{
	constructor(obj){
		typecheck(obj, GameObject, function cb() {
			throw "Error: A component always require an owner object!";
		})
		this.obj = obj;
	}

	get GameObject(){
		return this.obj;
	}
}