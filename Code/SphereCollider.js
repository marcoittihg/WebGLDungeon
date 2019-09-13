
class SphereCollider extends Collider{
	constructor(obj, radius, center){
		typecheck(radius, Number, function (argument) {
			throw "radius must be a Number";
		});

		if(center != undefined){
			typecheck(center, Vector3, function (argument) {
				throw "Center must be a Vector3";
			});
		}else{
			center = new Vector3(0.0, 0.0, 0.0);
		}

		super(obj);

		this.radius = radius;
		this.center = center;

		var rb = this.obj.getComponent(Rigidbody);
		if(rb.addedToPhysics){
			this.updateCollider()
		}
	}

	updateCollider(){
		var rb = this.obj.getComponent(Rigidbody);
		if(rb){
			let colShape = new Ammo.btSphereShape( this.radius );
			rb.body.setCollisionShape(colShape);
		}

	}

	get Radius(){
		return this.radius;
	}

	get Center(){
		return this.center;
	}
}