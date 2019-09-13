/** Contain data about the mesh
*/

class Mesh extends Component{
	constructor(obj){
		super(obj);
		obj.addComponent(this);
		this.path = undefined;
		this.index = 0;
	}

	checkIfPathDefined(){
		if(this.path == undefined){
			throw "The path to the mesh is not defined";
		}
	}

	set Path(value){
		typecheck(value, String, function(argument) {
			throw "The path must be a String";
		});

		this.path = value;

		this.indexes = [].concat.apply(
			[],
			MeshLoader.Instance.getMeshData(this.path).meshes[this.index].faces
		);
	}

	set Index(val){
		typecheck(val, Number, function (argument) {
			throw "The mesh index must be a number";
		});

		this.index = val;
	}

	get Vertices(){
		this.checkIfPathDefined();
		return MeshLoader.Instance.getMeshData(this.path).meshes[this.index].vertices;
	}
	
	get Normals(){
		this.checkIfPathDefined();
		return MeshLoader.Instance.getMeshData(this.path).meshes[this.index].normals;
	}

	get Tangents(){
		this.checkIfPathDefined();
		return MeshLoader.Instance.getMeshData(this.path).meshes[this.index].tangents;
	}

	get Bitangents(){
		this.checkIfPathDefined();
		return MeshLoader.Instance.getMeshData(this.path).meshes[this.index].bitangents;
	}

	get Indexes(){
		this.checkIfPathDefined();
		return this.indexes;
	}
	get TextureCoords(){
		this.checkIfPathDefined();
		return MeshLoader.Instance.getMeshData(this.path).meshes[this.index].texturecoords[0];
	}
}