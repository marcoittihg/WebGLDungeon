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

	set Material(mat){
		typecheck(mat, Material, function (argument) {
			throw "Set Material require a Material";
		});

		if(this.material != undefined){
			this.material.removeGameObject(this);
		}

		this.material = new MaterialComponent(this, mat);
	}

	addComponent(newComponent){
		typecheck(newComponent, Component, function (argument) {
			throw "The argument is not a component";
		});

		if(newComponent instanceof Transform){
			throw "A GameObject can have only one transform";
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