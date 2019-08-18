/** Contain data about the mesh
*/

class Mesh extends Component{
	constructor(obj){
		super(obj);
		obj.addComponent(this);
		this.path = undefined;
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
	}

	get Vertices(){
		this.checkIfPathDefined();
		return MeshLoader.Instance.getMeshData(this.path).meshes[0].vertices;
	}
	
	get Normals(){
		this.checkIfPathDefined();
		return MeshLoader.Instance.getMeshData(this.path).meshes[0].normals;
	}

	get Indexes(){
		this.checkIfPathDefined();
		return [].concat.apply(
			[],
			MeshLoader.Instance.getMeshData(this.path).meshes[0].faces
		);
	}
	get TextureCoords(){
		this.checkIfPathDefined();
		return MeshLoader.Instance.getMeshData(this.path).meshes[0].texturecoords[0];
	}
}