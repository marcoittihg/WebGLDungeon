class Rigidbody extends Component{
	constructor(obj, mass){
		super(obj);
		obj.addComponent(this);

		this.mass = mass;

		this.addedToPhysics = false;
	    Game.Instance.Physics.addRBSet(this);
	    this.tmpTransform = new Ammo.btTransform();
	    this.tmpVec3 = new Ammo.btVector3(0.0, 0.0, 0.0);
	    this.tmpQuat =  new Ammo.btQuaternion(0.0, 0.0, 0.0, 0.0);

	    this.posConstraints = [false, false, false];
	    this.rotConstraints = [false, false, false];
	}

	updateRB(){
		if(this.addedToPhysics){
	    	Game.Instance.Physics.removeRB(this);
		}

		var pos = this.obj.Transform.LocalPos;
		var rot = this.obj.Transform.LocalRot;

		this.tmpTransform.setIdentity();
		this.tmpTransform.setOrigin(new Ammo.btVector3(pos.X, pos.Y, pos.Z));
		this.tmpTransform.setRotation( new Ammo.btQuaternion(rot.x, rot.y, rot.z, rot.w) );
    	
	    let motionState = new Ammo.btDefaultMotionState( this.tmpTransform );

		var collider = this.GameObject.getComponent(Collider);

		let colShape;

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

	    this.setPositionConstraints(this.posConstraints[0], this.posConstraints[1], this.posConstraints[2])
	    this.setRotationConstraints(this.rotConstraints[0], this.rotConstraints[1], this.rotConstraints[2])
	    
	    this.body.setDamping(0.997, 0.997);

	    Game.Instance.Physics.addRB(this);
	    this.addedToPhysics = true;
	}

	reposition(){
		var pos = this.obj.Transform.GlobalWorldMatrix;
		var rot = this.obj.Transform.GlobalRotation;

		var posX = pos.getElem(0,3);
		var posY = pos.getElem(1,3);
		var	posZ = pos.getElem(2,3);

		this.tmpTransform.setIdentity();

		this.tmpVec3.setX(posX);
		this.tmpVec3.setY(posY);
		this.tmpVec3.setZ(posZ);
		this.tmpTransform.setOrigin(this.tmpVec3);

		this.tmpQuat.setX(rot.x);
		this.tmpQuat.setY(rot.y);
		this.tmpQuat.setZ(rot.z);
		this.tmpQuat.setW(rot.w);
		this.tmpTransform.setRotation(this.tmpQuat);

		this.body.setWorldTransform(this.tmpTransform);
		this.body.activate();
	}

	setPositionConstraints(x,y,z){
		function cb(argument) {
			throw "All constraints must be Boolean";
		}
		typecheck(x, Boolean, cb);
		typecheck(y, Boolean, cb);
		typecheck(z, Boolean, cb);

		if(this.body){
			x = x ? 0.0 : 1.0;
			y = y ? 0.0 : 1.0;
			z = z ? 0.0 : 1.0;

			this.tmpVec3.setX(x);
			this.tmpVec3.setY(y);
			this.tmpVec3.setZ(z);

			this.body.setLinearFactor(this.tmpVec3);
		}else{
			this.posConstraints = [x,y,z];
		}
	}

	setRotationConstraints(x,y,z){
		function cb(argument) {
			throw "All constraints must be Boolean";
		}
		typecheck(x, Boolean, cb);
		typecheck(y, Boolean, cb);
		typecheck(z, Boolean, cb);

		if(this.body){
			x = x ? 0.0 : 1.0;
			y = y ? 0.0 : 1.0;
			z = z ? 0.0 : 1.0;

			this.tmpVec3.setX(x);
			this.tmpVec3.setY(y);
			this.tmpVec3.setZ(z);

			this.body.setAngularFactor(this.tmpVec3);
		}else{
			this.rotConstraints = [x,y,z];
		}
	}

	addForce(force){
		typecheck(force, Vector3, function (argument) {
			throw "addForcerequire a Vector3";
		});

		this.tmpVec3.setX(force.X);
		this.tmpVec3.setY(force.Y);
		this.tmpVec3.setZ(force.Z);

		this.body.applyCentralImpulse(this.tmpVec3);
	}
}