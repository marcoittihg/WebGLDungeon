
class KeyScript extends Script{
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

			if(dist < threshold){
				this.GameObject.Transform.LocalPos = new Vector3(0.0, -10.0, 0.0);
				playerTransform.GameObject.getComponent(PlayerScript).incKeys();
			}

		}
		this.OnDestroy = function (argument) {}
	}
}