
class BoxCollider extends Collider{
	constructor(obj, size, center){
		typecheck(size, Vector3, function (argument) {
			throw "Size must be a Vector3";
		})

		if(center != undefined){
			typecheck(center, Vector3, function (argument) {
				throw "Center must be a Vector3";
			});
		}else{
			center = new Vector3(0.0, 0.0, 0.0);
		}

		super(obj);

		this.size = size;
		this.center = center;

		var rb = this.obj.getComponent(Rigidbody);
		if(rb.addedToPhysics){
			this.updateCollider();
		}

	}

	updateCollider(){
		var rb = this.obj.getComponent(Rigidbody);
		if(rb && rb.addedToPhysics){
			let colShape = new Ammo.btBoxShape( new Ammo.btVector3(this.size.X/2.0,this.size.Y/2.0,this.size.Z/2.0) );
			rb.body.setCollisionShape(colShape);
		}
	}
	set Size(val){
		typecheck(val, Vector3, function (argument) {
			throw "The size of the collider is not a Vector3";
		});

		this.size = val;
		this.updateCollider();
	}

	get Size(){
		return this.size;
	}

	get Center(){
		return this.center;
	}
}