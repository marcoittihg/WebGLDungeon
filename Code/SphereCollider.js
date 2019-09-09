
class SphereCollider extends Collider{
	constructor(obj, radius){
		typecheck(radius, Number, function (argument) {
			throw "radius must be a Number";
		});

		super(obj);

		this.radius = radius;

		var rb = this.obj.getComponent(Rigidbody);
		if(rb){
			let colShape = new Ammo.btSphereShape( radius );
			rb.body.setCollisionShape(colShape);
		}
	}

	get Radius(){
		return this.radius;
	}
}