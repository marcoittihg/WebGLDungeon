
class ShaderFactory{
	constructor(){
	}

	static createShader(mat){
		typecheck(mat, Material,function () {
			throw "createShader require a material";
		});

		function inPositionDef(){
			return "in vec3 in_pos;\n";
		}
		function inNormalsDef(){
			return "in vec3 in_norm;\n";
		}
		function inUvDef(){
			return "in vec2 in_uv;\n";
		}

		function outPositionDef(){
			return "out vec3 out_pos;\n";
		}
		function outNormalsDef(){
			return "out vec3 out_norm;\n";
		}
		function outUvDef(){
			return "out vec2 out_uv;\n";
		}

		function lightDef(mat){
			var s = "";
			for (var i = 0; i < mat.dirLights.length; i++) {
				//Direct
				s += "uniform vec3 lDirPos"+i+";\n";
				s += "uniform vec3 lDirDir"+i+";\n";
				s += "uniform vec4 lDirColor"+i+";\n";
			}
			for (var i = 0; i < mat.pointLights.length; i++) {
				//Point
				s += "uniform vec3 lPointPos"+i+";\n";
				s += "uniform float lPointDecay"+i+";\n";
				s += "uniform float lPointTarget"+i+";\n";
				s += "uniform vec4 lPointColor"+i+";\n";
			}
			for (var i = 0; i < mat.spotLights.length; i++) {
				//Spot
				s += "uniform vec3 lSpotPos"+i+";\n";
				s += "uniform vec3 lSpotDir"+i+";\n";
				s += "uniform float lSpotConeOut"+i+";\n";
				s += "uniform float lSpotConeIn"+i+";\n";
				s += "uniform float lSpotDecay"+i+";\n";
				s += "uniform float lSpotTarget"+i+";\n";
				s += "uniform vec4 lSpotColor"+i+";\n";
			}
			return s;
		}

		function texSamplerDef(){
			return "uniform sampler2D u_texture;\n";
		}

		function diffuseDef() {
			return "uniform vec4 diffuseColor;\n";
		}
		function ambientDef() {
			var s = "uniform vec4 ambientLightColor;\n";
			return s+"uniform vec4 ambientColor;\n";
		}
		function specularDef() {
			var sh = "uniform vec4 specularColor;\n";
			sh += "uniform float specularGamma;\n";
			return sh;
		}
		function emissionDef() {
			return "uniform vec4 emissionColor;\n";
		}

		function wMatrixDef(){
			return "uniform mat4 wMatrix;\n";
		}
		function pMatrixDef() {
			return "uniform mat4 pMatrix;\n";
		}

		function eyePosDef(){
			return "uniform vec3 eyePos;\n"
		}

		function DTexMixDef(){
			return "uniform float DTexMix;\n"
		}

		function Uniforms(mat){
			var sh = lightDef(mat);

			sh += eyePosDef();
			
			sh += DTexMixDef();

			if(mat.texturePath != undefined){
				sh += texSamplerDef();
			}

			if(mat.useDiffuse){
				sh += diffuseDef();
			}

			if(mat.useAmbient){
				sh += ambientDef();
			}

			if(mat.specularType != "None"){
				sh += specularDef();
			}

			if(mat.useEmission){
				sh += emissionDef();
			}

			return sh;
		}

		function calcColorDef(mat){
			var s = "";
			if(mat.texturePath != undefined){
				s += "vec4 texcol = texture(u_texture, uv);\n";
			}else {
				s += "vec4 texcol = vec4(0.0, 0.0, 0.0, 0.0);\n";
			}

			if(mat.texturePath != undefined || mat.useDiffuse){
				s += "vec4 diffColor = diffuseColor * (1.0-DTexMix) + texcol * DTexMix;\n";
			}

			if(mat.useAmbient){
				s += "vec4 ambColor = ambientColor * (1.0-DTexMix) + texcol * DTexMix;\n";
			}

			if(mat.useEmission){
				s += "vec4 emit = emissionColor * (1.0-DTexMix) + texcol * DTexMix * max(max(emissionColor.r, emissionColor.g), emissionColor.b);\n";
			}

			s += "vec3 normalVec = normalize(norm);\n";
			s += "vec3 eyedirVec = normalize(eyePos - pos);\n";

			s+= "vec4 calc_color = vec4(0.0, 0.0, 0.0, 0.0);\n";

			if(mat.useEmission){
				s+="calc_color += emit;\n";
			}

			if(mat.useAmbient){
				s+="calc_color += ambColor * ambientLightColor;\n";
			}

			s+="vec4 lDiff;\n";
			s+="vec4 lSpec;\n";
			s+="vec3 rlx;\n";
			s+="vec3 lx;\n";
			s+="vec3 hlx;\n";

			s+="float aout;\n";
			s+="float ain;\n";
			s+="float Cout;\n";
			s+="float Cin;\n";

			s+="float lDecay;\n";

			//DIRECTIONAL
			for (var i = 0; i < mat.dirLights.length; i++) {
				if(mat.texturePath != undefined || mat.useDiffuse){
					s+="lDiff = diffColor*clamp(dot(lDirDir"+i+",normalVec),0.0,1.0);\n";
				}else{
					s+="lDiff = vec4(0.0, 0.0, 0.0, 0.0);\n";
				}

				if(mat.specularType == "Phong"){
					s+="lx = (lDirPos"+i+" - pos)/length(lDirPos"+i+"-pos);\n";
					s+="rlx = 2.0 * normalVec * dot(lx, normalVec) - lx;\n";
					s+="lSpec = specularColor * clamp(pow(dot(eyedirVec, rlx),specularGamma),0.0,1.0);\n";
				}else if(mat.specularType == "Blinn"){
					s+="lx = (lDirPos"+i+" - pos)/length(lDirPos"+i+" - pos);\n";
					s+="hlx = (lx + eyedirVec) / length(lx + eyedirVec);\n";
					s+="lSpec = specularColor * clamp(pow(dot(normalVec, hlx),specularGamma),0.0,1.0);\n";
				}else{
					//None
					s+="lSpec = vec4(0.0, 0.0, 0.0, 0.0);\n";
				}

				s+= "calc_color += lDirColor"+i+" * (lDiff+lSpec);\n";
			}

			//POINT
			for (var i = 0; i < mat.pointLights.length; i++) {
				s += "lDecay = pow(lPointTarget"+i+"/length(lPointPos"+i+" - pos), lPointDecay"+i+");\n";

				if(mat.texturePath != undefined || mat.useDiffuse){
					s+="lDiff = diffColor;\n";
				}else{
					s+="lDiff = vec4(0.0, 0.0, 0.0, 0.0);\n";
				}

				if(mat.specularType == "Phong"){
					s+="lx = (lPointPos"+i+" - pos)/length(lPointPos"+i+" - pos);\n";
					s+="rlx = 2.0 * normalVec * dot(lx, normalVec) - lx;\n";
					s+="lSpec = specularColor * clamp(pow(dot(eyedirVec, rlx),specularGamma),0.0,1.0);\n";
				}else if(mat.specularType == "Blinn"){
					s+="lx = (lPointPos"+i+" - pos)/length(lPointPos"+i+" - pos);\n";
					s+="hlx = (lx + eyedirVec) / length(lx + eyedirVec);\n";
					s+="lSpec = specularColor * clamp(pow(dot(normalVec, hlx),specularGamma),0.0,1.0);\n";
				}else{
					//None
					s+="lSpec = vec4(0.0, 0.0, 0.0, 0.0);\n";
				}

				s+= "calc_color += lPointColor"+i+" * lDecay * (lDiff+lSpec);\n";
			}
			//Spot
			for (var i = 0; i < mat.spotLights.length; i++) {

				s+="aout = lSpotConeOut"+i+";\n";
				s+="ain = aout * lSpotConeIn"+i+";\n";
				s+="Cout = cos(radians(aout/2.0));\n";
				s+="Cin = cos(radians(ain/2.0));\n";
				
				s+="lx = (lSpotPos"+i+" - pos)/length(lSpotPos"+i+" - pos);\n";
				s += "lDecay = pow(lSpotTarget"+i+"/length(lSpotPos"+i+" - pos), lSpotDecay"+i+") * clamp((dot(lx, lSpotDir"+i+")-Cout)/(Cin - Cout), 0.0, 1.0);\n";

				if(mat.texturePath != undefined || mat.useDiffuse){
					s+="lDiff = diffColor;\n";
				}else{
					s+="lDiff = vec4(0.0, 0.0, 0.0, 0.0);\n";
				}

				if(mat.specularType == "Phong"){
					s+="rlx = 2.0 * normalVec * dot(lx, normalVec) - lx;\n";
					s+="lSpec = specularColor * clamp(pow(dot(eyedirVec, rlx),specularGamma),0.0,1.0);\n";
				}else if(mat.specularType == "Blinn"){
					s+="hlx = (lx + eyedirVec) / length(lx + eyedirVec);\n";
					s+="lSpec = specularColor * clamp(pow(dot(normalVec, hlx),specularGamma),0.0,1.0);\n";
				}else{
					//None
					s+="lSpec = vec4(0.0, 0.0, 0.0, 0.0);\n";
				}

				s+= "calc_color += lSpotColor"+i+" * lDecay * (lDiff+lSpec);\n";
			}

			return s;
		}
		/***************
		* VERTEX SHADER
		****************/
		var vs = "#version 300 es\n";

		vs += "in vec3 in_pos;\n";
		vs += "in vec3 in_norm;\n";

		if(mat.texturePath != undefined){
			vs += "in vec2 in_uv;\n";
		}

		vs += "uniform mat4 pMatrix;\n";
		vs += "uniform mat4 wMatrix;\n";
		vs += "uniform mat3 nMatrix;\n";

		if(mat.shadingType == "Gouraud"){
			//Gouraud
			vs += Uniforms(mat);
			vs += "out vec4 fs_color;\n";
		}else{
			//Phong
			vs += "out vec3 fs_pos;\n";
			vs += "out vec3 fs_norm;\n";

			if(mat.texturePath != undefined){
				vs += "out vec2 fs_uv;\n";
			}
		}

		vs += "void main() {\n";

		vs += "vec3 pos = (wMatrix * vec4(in_pos, 1.0)).xyz;\n";
		vs += "vec3 norm = nMatrix * in_norm;\n";

		if(mat.texturePath != undefined){
			vs += "vec2 uv = vec2(in_uv.x, in_uv.y);\n";
		}
		vs +="gl_Position = wMatrix * vec4(in_pos, 1.0);\n";

		if(mat.shadingType == "Gouraud"){
			vs += calcColorDef(mat);
			vs += "fs_color = calc_color;\n";
		}else{
			vs += "fs_pos = pos;\n";
			vs += "fs_norm = norm;\n";

			if(mat.texturePath != undefined){
				vs += "fs_uv = uv;\n";
			}
		}

		vs += "}\n";

		/*****************
		* FRAGMENT SHADER
		******************/
		var fs = "#version 300 es\n";
		fs += "precision mediump float;\n";

		if(mat.shadingType == "Gouraud"){
			//Gouraud
			fs += "in vec4 fs_color;\n";
		}else{
			//Phong
			fs += "in vec3 fs_pos;\n";
			fs += "in vec3 fs_norm;\n";

			if(mat.texturePath != undefined){
				fs += "in vec2 fs_uv;\n";
			}

			fs += Uniforms(mat);
		}

		fs += "out vec4 out_color;\n";

		fs += "void main() {\n";


		if(mat.shadingType == "Gouraud"){
			//Gouraud
			fs += "out_color = vec4(fs_color.rgb,1.0);\n";
		}else{
			//Phong
			fs += "vec3 pos = fs_pos;\n";
			fs += "vec3 norm = fs_norm;\n";

			if(mat.texturePath != undefined){
				fs += "vec2 uv = fs_uv;\n";
			}

			fs += calcColorDef(mat);

			fs += "out_color = vec4(calc_color.rgb,1.0);\n";
		}

		fs += "}\n";

		var gl = GlobalValues.getValue("GL").Value;
		console.log(vs);
		console.log(fs);
		var vertexShader = createShader(gl, gl.VERTEX_SHADER, vs);
	    var fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fs);
	    var program = createProgram(gl, vertexShader, fragmentShader);

		return program;
	}
}