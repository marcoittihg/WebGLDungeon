class Rigidbody extends Component{
	constructor(obj, mass){
		super(obj);
		obj.addComponent(this);

		this.mass = mass;

		this.updateRB();

		this.addedToPhysics = false;
	}

	updateRB(){
		if(this.addedToPhysics){
	    	Game.Instance.Physics.removeRB(this);
		}

		var pos = this.obj.Transform.LocalPos;
		var rot = this.obj.Transform.LocalRot;

		let transform = new Ammo.btTransform();
		transform.setIdentity();
		transform.setOrigin(new Ammo.btVector3(pos.X, pos.Y, pos.Z));
		transform.setRotation( new Ammo.btQuaternion(rot.x, rot.y, rot.z, rot.w) );
    	
	    let motionState = new Ammo.btDefaultMotionState( transform );

		var collider = this.GameObject.getComponent(Collider);

		let colShape;
		console.log(collider);
		if(collider){
			if(collider instanceof BoxCollider){
				var size = collider.Size;
			    colShape = new Ammo.btBoxShape( new Ammo.btVector3( size.X/2.0, size.Y/2.0, size.Z/2.0 ) );
			    colShape.setMargin( 0.05 );

			} else if(collider instanceof SphereCollider){
			    colShape = new Ammo.btSphereShape( collider.Radius );
			    colShape.setMargin( 0.05 );

			}else{
			    colShape = new Ammo.btSphereShape( 1 );
			    colShape.setMargin( 0.05 );
			}

		} else {
		    colShape = new Ammo.btSphereShape( 1 );
		    colShape.setMargin( 0.05 );
		}

	    let localInertia = new Ammo.btVector3( 0, 0, 0 );
	    colShape.calculateLocalInertia( this.mass, localInertia );

	    let rbInfo = new Ammo.btRigidBodyConstructionInfo( this.mass, motionState, colShape, localInertia );
	    
	    this.body = new Ammo.btRigidBody( rbInfo );

	    Game.Instance.Physics.addRB(this);
	    this.addedToPhysics = true;
	}

	reposition(){
		var pos = this.obj.Transform.LocalPos;
		var rot = this.obj.Transform.LocalRot;

		let transform = new Ammo.btTransform();
		transform.setIdentity();
		transform.setOrigin(new Ammo.btVector3(pos.X, pos.Y, pos.Z));
		transform.setRotation( new Ammo.btQuaternion(rot.x, rot.y, rot.z, rot.w) );

		this.body.setWorldTransform(transform);
		this.body.activate();
	}

}