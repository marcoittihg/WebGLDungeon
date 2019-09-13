
class AnimationScript extends Script{
	constructor(obj, positions, rotations, bezierPosition, bezierRotations){
		super(obj);
		this.positions = positions;
		this.rotations = rotations;
		this.bezierPosition = bezierPosition;
		this.bezierRotations = bezierRotations;

		this.time = 1.0;
		this.play = false;
		this.t = 0;

		var script = this;

		this.Start = function (argument) {
		}
		this.Update = function (argument) {
			if(this.play == true){
				this.t += Game.Instance.DeltaTime / this.time;

				if(this.t > 1.0){
					this.play = false;
					return;
				}


				var bPos = bezierPosition.evaluate(this.t);
				var bRot = bezierRotations.evaluate(this.t);

				console.log(bPos.Y, bRot.Y);

				var pos = this.positions.evaluate(bPos.Y);
				var rot = this.qsLerp(bRot.Y);

				obj.Transform.LocalPos = pos;
				obj.Transform.LocalRot = rot;

			}

		}
		this.OnDestroy = function (argument) {}
	}

	set Time(val){
		this.time = val;
	}

	playAnimation(){
		this.play = true;
		this.t = 0;

		console.log(this.rotations)
		this.qsLerp = this.rotations[0].slerp(this.rotations[1]);
	}
}