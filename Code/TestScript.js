
class TestScript extends Script{
	constructor(obj){
		super(obj);
		this.c = 0;

		this.Start= function (argument) {
		}
		this.Update= function (argument) {
			var dy = Game.Instance.DeltaTime * 10.0;
			var rot = this.GameObject.Transform.LocalRot;
			this.GameObject.Transform.LocalRot = new Vector3(rot.x, rot.y-dy, rot.z);
		}
		this.OnDestroy= function (argument) {
		}
	}
}