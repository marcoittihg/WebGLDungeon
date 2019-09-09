
class BoxCollider extends Collider{
	constructor(obj, size){
		typecheck(size, Vector3, function (argument) {
			throw "Size must be a Vector3";
		})

		super(obj);

		this.size = size;

		var rb = this.obj.getComponent(Rigidbody);
		if(rb){
			let colShape = new Ammo.btBoxShape( new Ammo.btVector3(size.X/2.0,size.Y/2.0,size.Z/2.0) );
			rb.body.setCollisionShape(colShape);
		}
	}

	get Size(){
		return this.size;
	}
}