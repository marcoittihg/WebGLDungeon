
class Input{
	static initialize(){
		if(!Input.initialized){
			var canvas = document.getElementById("c");
			canvas.addEventListener("mousedown", Input.mouseDown, false);
			canvas.addEventListener("mouseup", Input.mouseUp, false);
			window.addEventListener("keydown", Input.keyDown, false);
			window.addEventListener("keyup", Input.keyUp, false);
			canvas.addEventListener("mousemove", Input.mouseMove, false);

			Input.lastMouseX = -100;
			Input.lastMouseY = -100;
			Input.mDown = false;

			Input.onDragSubs = [];

			Input.keys = [];

			Input.keyMap = [];
			Input.keyMap["w"] = 87;
			Input.keyMap["s"] = 83;
			Input.keyMap["a"] = 65;
			Input.keyMap["d"] = 68;

			Input.initialized = true;
		}
	}

	static mouseDown(e){
		Input.mDown = true;
		Input.lastMouseX = e.pageX;
		Input.lastMouseY = e.pageY;
	}
	static mouseUp(e){
		Input.mDown = false;
		Input.lastMouseX = -100;
		Input.lastMouseY = -100;

	}

	static keyDown(e){
		if(!Input.keys[e.keyCode]){
			Input.keys[e.keyCode] = true;
		}
	}
	static keyUp(e){
		if(Input.keys[e.keyCode]){
			Input.keys[e.keyCode] = false;
		}
	}

	static getKeyState(key){
		return Input.keys[Input.keyMap[key]];
	}

	static mouseMove(e){
		if(Input.mDown){
			var dx = e.pageX - Input.lastMouseX;
			var dy = Input.lastMouseY - e.pageY;
			Input.lastMouseX = event.pageX;
			Input.lastMouseY = event.pageY;

			for (var i = 0; i < Input.onDragSubs.length; i++) {
				Input.onDragSubs[i](dx, dy);
			}
		}
	}

	static set onDrag(fun){
		Input.onDragSubs.push(fun);
	}
}