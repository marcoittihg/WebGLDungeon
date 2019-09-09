class Game{
	constructor(){
		this.canvas = document.getElementById("c");
		this.gl = this.canvas.getContext("webgl2");
		if (!this.gl) {
			document.write("GL context not opened");
			throw "GL context not opened";
		}


		GlobalValues.getValue("GL").Value = this.gl;

  		resizeCanvasToDisplaySize(this.gl.canvas);

		this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
		this.gl.clearColor(0.85, 0.85, 0.85, 1.0); 
		this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
		this.gl.enable(this.gl.DEPTH_TEST);
  		this.gl.enable(this.gl.CULL_FACE);

    	this.gameobjects = [];
    	this.graphics = new Graphics(this.gl);
    	this.physics = new Physics();

    	this.targetFPS = 60;
    	this.stop = false;

    	this.scriptSet = new Set();
	}

	static get Instance(){
		if(Game.INSTANCE == undefined){
			Game.INSTANCE = new Game();
		}

		return Game.INSTANCE;
	}

	addGameObject(){
		var go = new GameObject();
		this.gameobjects.push(go);

		return go;
	}

	get Graphics(){
		return this.graphics;
	}

	get Physics(){
		return this.physics;
	}

	get DeltaTime(){
		return 1.0 / this.targetFPS;
	}

	addScript(script){
		typecheck(script, Script, function (argument) {
			throw "addScript accept only script objects";
		});

		this.scriptSet.add(script);
	}

	removeScript(script){
		typecheck(script, Script, function (argument) {
			throw "addScript accept only script objects";
		});

		var result = this.scriptSet.delete(script);

		if(result){
			script.OnDestroy();
			script.initialized = false;
		}
	}

	async mainLoop(){
		const sleep = (milliseconds) => {
		  return new Promise(resolve => setTimeout(resolve, milliseconds))
		}

    	var lastUpdate = (new Date).getTime();

    	while(this.stop == false){
    		//Call start
    		this.scriptSet.forEach(function(script) {
    			if(!script.initialized){
    				script.Start();
    				script.initialized = true;
    			}
    		});

    		this.physics.doStep()

    		//Call Update
    		this.scriptSet.forEach(function(script) {
    			script.Update();
    		});

	  		GlobalValues.getValue("AspectRatio").Value = this.gl.canvas.width/this.gl.canvas.height;
			
			this.graphics.drawScene(this.gameobjects);

	    	var upTime = (new Date).getTime();
	    	var delta = upTime - lastUpdate;

	    	if(delta < 1000.0 / this.targetFPS){
	    		await sleep (1000.0  / this.targetFPS - delta);
	    	}

	    	lastUpdate = upTime;
    	}

		return 0;
	}
}