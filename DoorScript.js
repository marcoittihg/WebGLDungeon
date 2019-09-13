
class DoorScript extends Script{
	constructor(obj, playerTransform, threshold){
		typecheck(playerTransform, Transform, function (argument) {
			throw "playerTransform is not a Transform";
		});
		typecheck(threshold, Number, function (argument) {
			throw "threshold is not a Number";
		});

		super(obj);

		this.playerTransform = playerTransform;
		this.threshold = threshold;

		this.Start = function (argument) {
		}
		this.Update = function (argument) {
			var pos1 = this.GameObject.Transform.GlobalPosition;
			var pos2 = this.playerTransform.GlobalPosition;
			var dist = Vector3.sub(pos2, pos1);
			dist = Vector3.magnitude(dist);

			var player = this.playerTransform.GameObject.getComponent(PlayerScript);
			if(dist < threshold && player.getKeys() >= 3){
				player.resetKeys();
				this.animate();
			}

		}
		this.OnDestroy = function (argument) {}
	}

	animate(){
		var startPos = this.GameObject.Transform.LocalPos;

		var positions = new BezierCurve3(
				startPos,
				Vector3.add(startPos, new Vector3(0.0,0.0,4.0)),
				Vector3.add(startPos, new Vector3(2.5,0.0,4.5)),
				Vector3.add(startPos, new Vector3(5.5,0.0,5.0))
			);
		var rotations = [this.GameObject.Transform.LocalRot, Quaternion.fromEuler(0.0, 0.0, degToRad(100.0)).mul(this.GameObject.Transform.LocalRot)];
		
		var b2 = new BezierCurve2(
			new Vector2(0.0, 0.0),
			new Vector2(1.0, 0.0),
			new Vector2(1.0, 0.0),
			new Vector2(1.0, 1.0),
			);
		var bezierPos = b2;
		var bezierRot = b2;

		var animationScript =
		 new AnimationScript(this.GameObject, positions, rotations, bezierPos, bezierRot);

		animationScript.Time= 4.0;
		animationScript.playAnimation();
	}
}