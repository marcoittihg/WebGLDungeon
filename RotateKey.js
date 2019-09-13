
class RotateKey extends Script{
	constructor(obj){
		super(obj);

		this.Start = function (argument) {
			this.GameObject.Transform.LocalScale = new Vector3(1.0, 1.0, 1.0);
			this.ry = 0;
		}
		this.Update = function (argument) {
			this.ry += Game.Instance.DeltaTime * 30.0;
			this.GameObject.Transform.setLocalRot(new Vector3( 0.0, this.ry ,0.0),"ZYX");

		}
		this.OnDestroy = function (argument) {}
	}
}