
class MaterialData{
	constructor(){
		this.program = undefined;

		this.texturePath = undefined;
		this.texMix = 1.0;

		this.normalMapPath = undefined;
		this.normalMapSpace = "Game";

		this.tilingX = 1.0;
		this.tilingY = 1.0;

		this.dirLights = [];
		this.pointLights = [];
		this.spotLights = [];

		this.useDiffuse = true;
		this.diffuseColor = new Vector4(1.0, 1.0, 1.0, 1.0);

		this.useAmbient = false;
		this.ambientColor = new Vector4(1.0, 1.0, 1.0, 1.0);

		this.specularType = "None";
		this.specularColor = new Vector4(1.0, 1.0, 1.0, 1.0);
		this.specularGamma = 64.0;

		this.shadingType = "Phong";

		this.useEmission = false;
		this.emissionColor = new Vector4(0.0, 0.0, 0.0, 0.0);

		this.dirty = true;

		this.disabled = false;

		this.mats = new Set();
	}

	set Disabled(val){
		this.disabled = val;
	}

	get MatNumber(){
		return this.mats.size;
	}
	addMaterial(mat){
		typecheck(mat, Material, function (argument) {
			throw "mat is not a Material";
		})
		this.mats.add(mat);
		this.dirty = true;
	}
	
	set TilingX(val){
		typecheck(val, Number, function(argument) {
			throw "The tiling must be a Number";
		});

		this.tilingX = val;
	}

	set TilingY(val){
		typecheck(val, Number, function(argument) {
			throw "The tiling must be a Number";
		});

		this.tilingY = val;
	}
	set NormalMapPath(val){
		typecheck(val, String, function(argument) {
			throw "The path must be a string";
		});

		this.normalMapPath = val;
		this.dirty = true;
	}

	set NormalMapSpace(val){
		if(val != "Game" && val != "Tangent"){
			throw "The normal map space can only be Game or Tangent";
		}

		this.normalMapSpace = val;
	}

	set TexturePath(val){
		typecheck(val, String, function(argument) {
			throw "The path must be a string";
		});

		this.texturePath = val;
		this.dirty = true;
	}

	set TexMix(val){
		typecheck(val, Number, function(argument) {
			throw "The mix must be a Number";
		});

		this.texMix = val;
	}

	addLight(light){
		typecheck(light, Light, function (argument) {
			throw "The given argument is not a light";
		});

		if(light instanceof DirectionalLight){
			this.dirLights.push(light);
		}else if (light instanceof SpotLight){
			this.spotLights.push(light);
		}else{
			//point light
			this.pointLights.push(light);
		}
		this.dirty = true;
	}

	removeLight(light){
		typecheck(light, Light, function (argument) {
			throw "The givenn argument is not a light";
		});

		var la;
		if(light instanceof DirectionalLight){
			la = this.dirLights;
		}else if (light instanceof SpotLight){
			la = this.spotLights;
		}else{
			//point light
			la = this.pointLights;
		}

		for (var i = 0; i < la.length; i++) {
			if(la[i] === light){
				if(i == la.length -1){
					la[i] = undefined;
				}else{
					la[i] = la[la.length-1];
				}

				this.dirty = true;
				break;
			}
		}
	}
			

	set UseDiffuse(val){
		typecheck(val, Boolean,function (argument) {
			throw "UseDiffuse reqire a Boolean";
		});

		this.useDiffuse = val;
		this.dirty = true;
	}
	set DiffuseColor(val){
		typecheck(val, Vector4,function (argument) {
			throw "DiffuseColor reqire a Vector4";
		});

		this.diffuseColor = val;
		this.dirty = true;
	}

	set UseAmbient(val){
		typecheck(val, Boolean,function (argument) {
			throw "UseAmbient reqire a Boolean";
		});

		this.useAmbient = val;
		this.dirty = true;
	}
	set AmbientColor(val){
		typecheck(val, Vector4,function (argument) {
			throw "AmbientColor reqire a Vector4";
		});

		this.ambientColor = val;
		this.dirty = true;
	}

	set SpecularType(val){
		if(val != "None" && val != "Phong" && val != "Blinn") {
			throw "SpecularType can only be None, Phong or Blinn";
		};

		this.specularType = val;
		this.dirty = true;
	}
	set SpecularColor(val){
		typecheck(val, Vector4,function (argument) {
			throw "SpecularColor reqire a Vector4";
		});

		this.specularColor = val;
		this.dirty = true;
	}
	set SpecularGamma(val){
		typecheck(val, Number,function (argument) {
			throw "SpecularGamma reqire a Number";
		});

		this.specularGamma = val;
		this.dirty = true;
	}

	set ShadingType(val){
		if(val != "Phong" && val != "Gouraud") {
			throw "ShadingType can only be Phong or Gouraud";
		};

		this.shadingType = val;
		this.dirty = true;
	}

	set UseEmission(val){
		typecheck(val, Boolean,function (argument) {
			throw "UseEmission reqire a Boolean";
		});

		this.useEmission = val;
		this.dirty = true;
	}
	set EmissionColor(val){
		typecheck(val, Vector4,function (argument) {
			throw "EmissionColor reqire a Vector4";
		});

		this.emissionColor = val;
		this.dirty = true;
	}

	compile(){
		var gl = GlobalValues.getValue("GL").Value;

		var vertices = [];
		var normals = [];
		var indexes = [];
		var textureCoords = [];
		var tangents = [];
		var bitangents = [];
		var goIndex = [];

		var indexBase = 0;
		var count = 0;
		var md = this
		this.mats.forEach(function (mat) {
			var mesh = mat.GameObject.getComponent(Mesh);

			vertices = vertices.concat(mesh.Vertices);
			normals = normals.concat(mesh.Normals);
			if(md.texturePath != undefined){
				textureCoords = textureCoords.concat(mesh.TextureCoords);
			}
			tangents = tangents.concat(mesh.Tangents);
			bitangents = bitangents.concat(mesh.Bitangents);

			var idxs = mesh.Indexes;
			for (var i = idxs.length - 1; i >= 0; i--) {
				idxs[i] += indexBase;
			} 

			indexes = indexes.concat(idxs);
			for (var i = indexBase; i < indexBase+mesh.Vertices.length/3; i++) {
				goIndex[i] = count;
			}

			indexBase += mesh.Vertices.length/3;
			count+=1;
		});

		this.indexesLen = indexes.length;

		this.program = ShaderFactory.Instance.getProgram(this);

		var vao = gl.createVertexArray();
  		gl.bindVertexArray(vao);

		var positionAttributeLocation = gl.getAttribLocation(this.program, "in_pos");  
		var normalAttributeLocation = gl.getAttribLocation(this.program, "in_norm");
		var uvAttributeLocation = gl.getAttribLocation(this.program, "in_uv");
		var indexAttributeLocation = gl.getAttribLocation(this.program, "in_index");

		var positionBuffer = gl.createBuffer();
		gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
		gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
		gl.enableVertexAttribArray(positionAttributeLocation);
		gl.vertexAttribPointer(positionAttributeLocation, 3, gl.FLOAT, false, 0, 0);

		var normalBuffer = gl.createBuffer();
		gl.bindBuffer(gl.ARRAY_BUFFER, normalBuffer);
		gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(normals), gl.STATIC_DRAW);
		gl.enableVertexAttribArray(normalAttributeLocation);
		gl.vertexAttribPointer(normalAttributeLocation, 3, gl.FLOAT, false, 0, 0);

		var idxBuffer = gl.createBuffer();
		gl.bindBuffer(gl.ARRAY_BUFFER, idxBuffer);
		gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(goIndex), gl.STATIC_DRAW);
		gl.enableVertexAttribArray(indexAttributeLocation);
		gl.vertexAttribPointer(indexAttributeLocation, 1, gl.FLOAT, false, 0, 0);

		if(this.texturePath != undefined){
			var uvBuffer = gl.createBuffer();
			gl.bindBuffer(gl.ARRAY_BUFFER, uvBuffer);
			gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(textureCoords), gl.STATIC_DRAW);
			gl.enableVertexAttribArray(uvAttributeLocation);
			gl.vertexAttribPointer(uvAttributeLocation, 2, gl.FLOAT, false, 0, 0);

		    this.texture = TextureLoader.Instance.getTexture(this.texturePath);
		}

		if(this.normalMapPath != undefined){
			if(this.normalMapSpace == "Tangent"){
				var tanAttributeLocation = gl.getAttribLocation(this.program, "in_tan");

				var tangentBuffer = gl.createBuffer();
				gl.bindBuffer(gl.ARRAY_BUFFER, tangentBuffer);
				gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(tangents), gl.STATIC_DRAW);
				gl.enableVertexAttribArray(tanAttributeLocation);
				gl.vertexAttribPointer(tanAttributeLocation, 3, gl.FLOAT, false, 0, 0);

				var bitanAttributeLocation = gl.getAttribLocation(this.program, "in_biTan");

				var bitangentBuffer = gl.createBuffer();
				gl.bindBuffer(gl.ARRAY_BUFFER, bitangentBuffer);
				gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(bitangents), gl.STATIC_DRAW);
				gl.enableVertexAttribArray(bitanAttributeLocation);
				gl.vertexAttribPointer(bitanAttributeLocation, 3, gl.FLOAT, false, 0, 0);

			}

		    this.normalMap = TextureLoader.Instance.getTexture(this.normalMapPath);
		}

		var indexBuffer = gl.createBuffer();
		gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
		gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indexes), gl.STATIC_DRAW);
	
  		this.vao = vao;
	}

	beforeDraw(){
		var gl = GlobalValues.getValue("GL").Value;

		var camera = Game.Instance.Graphics.ActiveCamera;
		var pM = camera.ProjectionMatrix;
		var vM = camera.ViewMatrix;
		var pMatrix = Matr4x4.multiply(pM, vM);

		for (var i = 0; i < this.dirLights.length; i++) {
			//Directionals
			var light = this.dirLights[i];
			var lTransform = light.GameObject.Transform;

			var pos = lTransform.GlobalPosition;

			var rot = lTransform.GlobalRotation;

			var dir = Vector3.DirFromQuaternion(rot);

			var color = light.Color;

			var lPosLocation = gl.getUniformLocation(this.program, "lDirPos"+i); 
			var lDirLocation = gl.getUniformLocation(this.program, "lDirDir"+i); 
			var lColorLocation = gl.getUniformLocation(this.program, "lDirColor"+i); 

			gl.uniform3f(lPosLocation, pos.X, pos.Y, pos.Z);
			gl.uniform3f(lDirLocation, dir.X, dir.Y, dir.Z);
			gl.uniform4f(lColorLocation, color.X, color.Y, color.Z, color.W);
		}
		for (var i = 0; i < this.pointLights.length; i++) {
			//Point
			var light = this.pointLights[i];
			var lTransform = light.GameObject.Transform;

			var pos = lTransform.GlobalPosition;

			var rot = lTransform.GlobalRotation;
			var dir = Vector3.DirFromQuaternion(rot);

			var color = light.Color;

			var lPosLocation = gl.getUniformLocation(this.program, "lPointPos"+i); 
			var lDirLocation = gl.getUniformLocation(this.program, "lPointDir"+i); 
			var lColorLocation = gl.getUniformLocation(this.program, "lPointColor"+i); 
			var lDecayLocation = gl.getUniformLocation(this.program, "lPointDecay"+i); 
			var lTargetLocation = gl.getUniformLocation(this.program, "lPointTarget"+i); 

			gl.uniform3f(lPosLocation, pos.X, pos.Y, pos.Z);
			gl.uniform3f(lDirLocation, dir.X, dir.Y, dir.Z);
			gl.uniform4f(lColorLocation, color.X, color.Y, color.Z, color.W);
			gl.uniform1f(lDecayLocation, light.DecayFactor);
			gl.uniform1f(lTargetLocation, light.TargetDistance);
		}
		for (var i = 0; i < this.spotLights.length; i++) {
			//Spot
			var light = this.spotLights[i];
			var lTransform = light.GameObject.Transform;

			var pos = lTransform.GlobalPosition;

			var dir = Vector3.DirFromEulerAngles(lTransform.GlobalPosition);

			var color = light.Color;

			var lPosLocation = gl.getUniformLocation(this.program, "lSpotPos"+i); 
			var lDirLocation = gl.getUniformLocation(this.program, "lSpotDir"+i); 
			var lColorLocation = gl.getUniformLocation(this.program, "lSpotColor"+i); 
			var lDecayLocation = gl.getUniformLocation(this.program, "lSpotDecay"+i); 
			var lTargetLocation = gl.getUniformLocation(this.program, "lSpotTarget"+i); 
			var lConeOutLocation = gl.getUniformLocation(this.program, "lSpotConeOut"+i); 
			var lConeInLocation = gl.getUniformLocation(this.program, "lSpotConeIn"+i); 

			gl.uniform3f(lPosLocation, pos.X, pos.Y, pos.Z);
			gl.uniform3f(lDirLocation, dir.X, dir.Y, dir.Z);
			gl.uniform4f(lColorLocation, color.X, color.Y, color.Z, color.W);
			gl.uniform1f(lDecayLocation, light.DecayFactor);
			gl.uniform1f(lTargetLocation, light.TargetDistance);
			gl.uniform1f(lConeOutLocation, light.ConeOut);
			gl.uniform1f(lConeInLocation, light.ConeIn);
		}
		//Eye pos
		var activeCameraT = Game.Instance.Graphics.ActiveCamera.GameObject.Transform;

		var eyePosLocation = gl.getUniformLocation(this.program, "eyePos"); 
		gl.uniform3f(eyePosLocation, activeCameraT.GlobalPosition.X, activeCameraT.GlobalPosition.Y, activeCameraT.GlobalPosition.Z);

		if(this.texturePath != undefined){
			var textureLocation = gl.getUniformLocation(this.program, "u_texture"); 
    		gl.activeTexture(gl.TEXTURE0);
		    gl.bindTexture(gl.TEXTURE_2D, this.texture);
    		gl.uniform1i(textureLocation, 0);

    		var tilingLocation = gl.getUniformLocation(this.program, "tiling");
    		gl.uniform2f(tilingLocation, this.tilingX, this.tilingY);
		}

		if(this.normalMapPath != undefined){
			var normalLocation = gl.getUniformLocation(this.program, "u_norm"); 
    		gl.activeTexture(gl.TEXTURE1);
		    gl.bindTexture(gl.TEXTURE_2D, this.normalMap);
    		gl.uniform1i(normalLocation, 1);
		}

		if(this.useDiffuse){
			var location = gl.getUniformLocation(this.program, "diffuseColor");
			gl.uniform4f(location, this.diffuseColor.X, this.diffuseColor.Y, this.diffuseColor.Z, this.diffuseColor.W);
		}

		if(this.useAmbient){
			var location = gl.getUniformLocation(this.program, "ambientColor");
			var locationl = gl.getUniformLocation(this.program, "ambientLightColor");

			var ambL = Game.Instance.Graphics.AmbientLight;

			gl.uniform4f(location, this.ambientColor.X, this.diffuseColor.Y, this.ambientColor.Z, this.ambientColor.W);
			gl.uniform4f(locationl, ambL.X, ambL.Y, ambL.Z, ambL.W);
		}

		if(this.specularType != "None"){
			var locationC = gl.getUniformLocation(this.program, "specularColor");
			var locationG = gl.getUniformLocation(this.program, "specularGamma");
			
			gl.uniform4f(locationC, this.specularColor.X, this.specularColor.Y, this.specularColor.Z, this.specularColor.W);
			gl.uniform1f(locationG, this.specularGamma);
		}

		if(this.useEmission == true){
			var location = gl.getUniformLocation(this.program, "emissionColor");
			gl.uniform4f(location, this.emissionColor.X, this.emissionColor.Y, this.emissionColor.Z, this.emissionColor.W);
		}

		var locationD = gl.getUniformLocation(this.program, "DTexMix");
		gl.uniform1f(locationD, this.texMix);

		var locationW = gl.getUniformLocation(this.program, "wMatrix");
		var locationN = gl.getUniformLocation(this.program, "nMatrix");
		var locationP = gl.getUniformLocation(this.program, "pMatrix");
		var locationV = gl.getUniformLocation(this.program, "vMatrix");
		gl.uniformMatrix4fv(locationP, gl.false, pM.GLValues);
		gl.uniformMatrix4fv(locationV, gl.false, vM.GLValues);
		
		var wArray = [];
		var nArray = [];
		this.mats.forEach(function (mat) {
			var go = mat.GameObject;
			var wM = go.Transform.GlobalWorldMatrix;
			var wMatrix = Matr4x4.multiply(pMatrix, wM);

			wArray = wArray.concat(wM.GLValues);
			nArray = nArray.concat(wM.transpose().invert().transpose().getSub3x3().GLValues);
		})

		gl.uniformMatrix4fv(locationW, gl.false, wArray);
		gl.uniformMatrix3fv(locationN, gl.false, nArray);

	}


	draw(){
		if(this.MatNumber == 0 || this.disabled){
			return;
		}

		var gl = GlobalValues.getValue("GL").Value;

		if(this.dirty){
			this.compile();
			this.dirty = false;
		}

  		gl.bindVertexArray(this.vao);

  		gl.useProgram(this.program);
  		gl.bindVertexArray(this.vao);
		this.beforeDraw();
  		gl.bindVertexArray(this.vao);

		
    	gl.drawElements(gl.TRIANGLES, this.indexesLen, gl.UNSIGNED_SHORT, 0);
	}
}