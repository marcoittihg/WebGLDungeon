var typeMap = {};

typeMap[String] = 'string';
typeMap[Number] = 'number';
typeMap[Function] = 'function';
typeMap[Boolean] = 'boolean';

function typecheck(obj, type, onTestFail) {
	if(obj instanceof Object){
		if(!(obj instanceof type)){
			onTestFail();
		}
	}else{
		type = typeMap[type];

		if(!(typeof obj === type)){
			onTestFail();
		}
	}
}

function requestCORSIfNotSameOrigin(img, url) {
  if ((new URL(url)).origin !== window.location.origin) {
    img.crossOrigin = "";
  }
}

function degToRad(angle){
	return angle*Math.PI/180.0;
}

function resizeCanvasToDisplaySize(canvas, multiplier) {
	multiplier = multiplier || 1;
	const width  = canvas.clientWidth  * multiplier | 0;
	const height = canvas.clientHeight * multiplier | 0;

	if (canvas.width !== width ||  canvas.height !== height) {
		canvas.width  = width;
		canvas.height = height;
		return true;
	}
	return false;
}

function loadFile(url, data, callback, errorCallback) {
	// Set up an synchronous request! Important!
	var request = new XMLHttpRequest();
	request.open('GET', url, false);

	// Hook the event that gets called as the request progresses
	request.onreadystatechange = function () {
		// If the request is "DONE" (completed or failed) and if we got HTTP status 200 (OK)
		
			
		if (request.readyState == 4 && request.status == 200) {
				callback(request.responseText, data)
			//} else { // Failed
			//	errorCallback(url);
		}
		
	};

	request.send(null);    
}

function loadFiles (urls, callback, errorCallback) {
	var numUrls = urls.length;
	var numComplete = 0;
	var result = [];

	// Callback for a single file
	function partialCallback(text, urlIndex) {
		result[urlIndex] = text;
		numComplete++;

		// When all files have downloaded
		if (numComplete == numUrls) {
			callback(result);
		}
	}

	for (var i = 0; i < numUrls; i++) {
		loadFile(urls[i], i, partialCallback, errorCallback);
	}
}

function createShader(gl, type, source) {
	var shader = gl.createShader(type);
	gl.shaderSource(shader, source);
	gl.compileShader(shader);
	var success = gl.getShaderParameter(shader, gl.COMPILE_STATUS);

	if (success) {    
		return shader;
	}else{
		console.log(gl.getShaderInfoLog(shader));  // eslint-disable-line
		gl.deleteShader(shader);
		throw "could not compile shader:" + gl.getShaderInfoLog(shader);
	}

}

function createProgram(gl, vertexShader, fragmentShader) {
  var program = gl.createProgram();
  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);
  gl.linkProgram(program);
  var success = gl.getProgramParameter(program, gl.LINK_STATUS);
  if (success) {
    return program;
  }else{
     throw ("program filed to link:" + gl.getProgramInfoLog (program));
    console.log(gl.getProgramInfoLog(program));  // eslint-disable-line
    gl.deleteProgram(program);
    return undefined;
  }
}

function get_json(url, func) {
	var xmlHttp = new XMLHttpRequest();
	xmlHttp.open("GET", url, false); // if true == asynchronous...
	xmlHttp.onreadystatechange = function() {
		if (xmlHttp.readyState == 4 && xmlHttp.status==200) {
			//the file is loaded. Parse it as JSON and launch function
			func(JSON.parse(xmlHttp.responseText));
		}
	};
	//send the request
	xmlHttp.send();
}