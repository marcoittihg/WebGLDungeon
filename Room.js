
class Room{
	constructor(){
		this.gos = new Set();
		this.rig = undefined;

		this.materialsData = [];
	}

	getMaterialData(index){
		return this.materialsData[index];
	}

	setMaterialData(index, val){
		this.materialsData[index] = val;
	}

	set RIG(go){
		typecheck(go, GameObject, function (argument) {
			throw "go is not a GameObject";
		});

		if(this.rig){
			this.gos.delete(this.rig);
		}

		this.rig = go;


		this.gos.forEach(function (go2) {
			console.log(go.Transform)
			go2.Transform.Parent = go.Transform;
		});

		this.gos.add(this.rig);
	}

	get RIG(){
		return this.rig;
	}

	addGameObject(go){
		typecheck(go, GameObject, function (argument) {
			throw "go is not a GameObject";
		});

		this.gos.add(go);

		if(this.rig){
			go.Transform.Parent = this.rig.Transform;
		}
	}

	forEachGameObject(fun){
		this.gos.forEach(function (go) {
			fun(go);
		});
	}
	forEachMaterial(fun){
		for (var i = 0; i < this.materialsData.length; i++) {
			fun(this.materialsData[i]);
		}
	}
}