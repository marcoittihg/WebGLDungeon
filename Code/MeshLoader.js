/** Load and contain data about meshes
*/

class MeshLoader{
	constructor(){
		this.map = {};
		this.baseDir = "http://127.0.0.1:8887/";
	}

	static get Instance(){
		if(MeshLoader.INSTANCE == undefined){
			MeshLoader.INSTANCE = new MeshLoader();
		}

		return MeshLoader.INSTANCE;
	}

	getMeshData(path){
		typecheck(path, String, function cb(argument) {
			throw "The path must be a string";
		});

		var mapResult = this.map[path];

		if(mapResult != undefined){
			return mapResult;
		}else{
			var model;

			get_json(GlobalValues.getValue("BaseDir").Value + path, function(loadedModel){model = loadedModel;});
			this.map[path] = model;
			
			console.log(model);

			return model;
		}
	}

	preloadData(path, data){
		typecheck(path, String, function cb(argument) {
			throw "The path must be a string";
		});

		this.map[path] = data;
	}
}