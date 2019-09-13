
class RoomEnabler extends Script{
	constructor(obj, room, transform, threshold){
		typecheck(transform, Transform, function (argument) {
			throw "transform is not a Transform";
		});
		typecheck(threshold, Number, function (argument) {
			throw "threshold is not a Number";
		});
		typecheck(room, Room, function (argument) {
			throw "room is not a Room";
		});

		super(obj);

		this.transform = transform;
		this.threshold = threshold;
		this.room = room;


		this.Start = function (argument) {
		}
		this.Update = function (argument) {
			var pos1 = this.GameObject.Transform.GlobalPosition;
			var pos2 = this.transform.GlobalPosition;
			var dist = Vector3.sub(pos2, pos1);
			dist = Vector3.magnitude(dist);

			var threshold = this.threshold;
			room.forEachMaterial(function (mat) {
				mat.Disabled = dist > threshold;
			});
		}
		this.OnDestroy = function (argument) {}
	}
}