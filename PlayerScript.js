
class PlayerScript extends Script{
	constructor(obj){
		super(obj);

		this.Start = function (argument) {
			this.rb = this.GameObject.getComponent(Rigidbody);

			var script = this;
			script.dx = 0;
			script.dy = 0;
			Input.onDrag = function (x,y) {
				script.dx -= x;
				script.dy -= y;

				if(script.dy > 80.0){
					script.dy = 80.0;
				}
				if(script.dy < -80.0){
					script.dy = -80.0;
				}
			};

			this.keys = 0;
		}
		this.Update = function (argument) {
			var wkState = Input.getKeyState("w");
			var skState = Input.getKeyState("s");
			var akState = Input.getKeyState("a");
			var dkState = Input.getKeyState("d");

			var dir = Vector3.Zero;
			if(wkState){
				dir = Vector3.add(dir, obj.Transform.Forward);
			}
			if(skState){
				dir = Vector3.add(dir, obj.Transform.Backward);
			}
			if(akState){
				dir = Vector3.add(dir, obj.Transform.Left);
			}
			if(dkState){
				dir = Vector3.add(dir, obj.Transform.Right);
			}

			if(Vector3.magnitude(dir) != 0){
				dir = Vector3.normalize(dir);
			}

			var dt = Game.Instance.DeltaTime;

			dir = Vector3.scale(dir, 100.0 * dt);

			this.rb.addForce(dir);

			this.GameObject.Transform.setLocalRot(new Vector3( this.dy, this.dx,0.0),"ZYX");
		}
		this.OnDestroy = function (argument) {}
	}

	incKeys(){
		this.keys += 1;
		console.log(this.keys)
	}

	getKeys(){
		return this.keys;
	}

	resetKeys(){
		this.keys = 0;
	}
}