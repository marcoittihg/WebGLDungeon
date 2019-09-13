class Graphics{
	constructor(){
		this.activeCamera = undefined;

		this.ambientLight = new Vector4(1.0, 1.0, 1.0, 1.0);
	}

	set ActiveCamera(camera){
		typecheck(camera, Camera, function (argument) {
			throw "the ActiveCamera must be a Camera component";
		});

		this.activeCamera = camera;
	}
	get ActiveCamera(){
		return this.activeCamera;
	}

	set AmbientLight(val){
		typecheck(val, Vector4, function (argument) {
			throw "The ambient light must be a color";
		});

		this.ambientLight = val;
	}

	get AmbientLight(){
		return this.ambientLight;
	}

	drawScene(gos){
		var gl = GlobalValues.getValue("GL").Value;

		resizeCanvasToDisplaySize(gl.canvas);
	    gl.clearColor(0.85, 0.85, 0.85, 1.0);
	    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);


	    MaterialDataFactory.Instance.forEachMD(function (md) {
	    	md.draw();
	    });
	    
		/*for (var i = 0; i < gos.length; i++) {
			var go = gos[i];
			var mat = go.getComponent(Material);

			if(mat == undefined){
				continue;
			}
			mat.draw();
		}*/

	}
}