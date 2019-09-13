
class TextureLoader{
	constructor(){
		this.map = {};
	}

	static get Instance(){
		if(TextureLoader.INSTANCE == undefined){
			TextureLoader.INSTANCE = new TextureLoader();
		}

		return TextureLoader.INSTANCE;
	}

	getTexture(path){
		typecheck(path, String, function cb(argument) {
			throw "The path must be a string";
		});

		var mapResult = this.map[path];

		if(mapResult != undefined){
			return mapResult;
		}else{
			var gl = GlobalValues.getValue("GL").Value;
		    var texture = gl.createTexture();
		    var image = new Image();
		    requestCORSIfNotSameOrigin(image, GlobalValues.getValue("BaseDir").Value + path);
		    image.src = GlobalValues.getValue("BaseDir").Value + path;
		    image.onload= function() {
		      gl.bindTexture(gl.TEXTURE_2D, texture);
		              gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
		      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
		              gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
		              gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
		      gl.generateMipmap(gl.TEXTURE_2D);
		    };

		    this.map[path] = texture;
			return texture;
		}
	}
}