/** Material of one object
*/
class Material extends Component{
	constructor(obj, matData){
		super(obj);
		obj.addComponent(this);

		matData.addMaterial(this);

		this.matData = matData;

	}

	set TilingX(val){

		this.matData.TilingX = val;
	}

	set TilingY(val){
		this.matData.TilingY = val;
	}
	set NormalMapPath(val){
		this.matData.NormalMapPath = val;
	}

	set NormalMapSpace(val){
		this.matData.NormalMapSpace = val;
	}

	set TexturePath(val){
		this.matData.TexturePath = val;
	}

	set TexMix(val){
		this.matData.TexMix = val;
	}

	addLight(light){
		this.matData.addLight(light);
	}

	removeLight(light){
		this.matData.removeLight(light);
	}
			

	set UseDiffuse(val){
		this.matData.UseDiffuse = val;
	}
	set DiffuseColor(val){
		this.matData.DiffuseColor = val;
	}

	set UseAmbient(val){
		this.matData.UseAmbient = val;
	}
	set AmbientColor(val){
		this.matData.AmbientColor = val;
	}

	set SpecularType(val){
		this.matData.SpecularType = val;
	}
	set SpecularColor(val){
		this.matData.SpecularColor = val;
	}
	set SpecularGamma(val){
		this.matData.SpecularGamma = val;
	}

	set ShadingType(val){
		this.matData.ShadingType = val;
	}

	set UseEmission(val){
		this.matData.UseEmission = val;
	}
	set EmissionColor(val){
		this.matData.EmissionColor = val;
	}

	draw(){
		var gl = GlobalValues.getValue("GL").Value;

  		gl.bindVertexArray(this.vao);

		this.beforeDraw();

  		var mesh = this.GameObject.getComponent(Mesh);
    	gl.drawElements(gl.TRIANGLES, mesh.Indexes.length, gl.UNSIGNED_SHORT, 0);
	}
}