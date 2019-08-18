/*Obbject of the scene
*/
class GameObject{
	constructor(){
		this.transform = new Transform(this);
		this.material = undefined;
		this.components = [this.transform,];
	}

	get Transform(){
		return this.transform;
	}

	get Material(){
		return this.material;
	}

	addComponent(newComponent){
		typecheck(newComponent, Component, function (argument) {
			throw "The argument is not a component";
		});

		if(newComponent instanceof Transform){
			throw "A GameObject can have only one transform";
		}

		if(this.material != undefined && newComponent instanceof Material){
			throw "A GameObject can have only one material";
		}

		if(newComponent instanceof Material){
			this.material = newComponent;
		}

		if(newComponent instanceof Camera){
			newComponent.Transform = this.Transform;
		}

		this.components.push(newComponent);
	}

	getComponent(type){
		for(var i = 0; i < this.components.length; i++){
			if(this.components[i] instanceof type){
				return this.components[i];
			}
		}

		return undefined;
	}
}