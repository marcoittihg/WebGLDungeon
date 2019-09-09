class Physics{
	constructor(){
		function start(argument) {
			setupPhysicsWorld(this);
		}
		function setupPhysicsWorld(phy){
		    let collisionConfiguration  = new Ammo.btDefaultCollisionConfiguration(),
		        dispatcher              = new Ammo.btCollisionDispatcher(collisionConfiguration),
		        overlappingPairCache    = new Ammo.btDbvtBroadphase(),
		        solver                  = new Ammo.btSequentialImpulseConstraintSolver();

		    phy.physicsWorld = new Ammo.btDiscreteDynamicsWorld(
		    	dispatcher, overlappingPairCache, solver, collisionConfiguration
		    	);
		    phy.physicsWorld.setGravity(new Ammo.btVector3(0, -9.81, 0));
		}

		Ammo().then(start.bind(this));

		this.rigidbodyset = new Set();
		this.tmpTransform = new Ammo.btTransform();
	}

	addRB(rb){
		typecheck(rb, Rigidbody, function (argument) {
			throw "Physics.addRb require a Rigidbody object";
		});

		this.rigidbodyset.add(rb);
		this.physicsWorld.addRigidBody(rb.body);
	}

	removeRB(rb){
		typecheck(rb, Rigidbody, function (argument) {
			throw "Physics.removeRB require a Rigidbody object";
		});

		this.rigidbodyset.delete(rb);
		this.physicsWorld.removeRigidBody(rb.body);
	}


	doStep(dt){
		dt = Game.Instance.DeltaTime;
		var tmpTransform = this.tmpTransform;

		this.physicsWorld.stepSimulation(dt,10);

		this.rigidbodyset.forEach(function(rb) {
			var ms = rb.body.getMotionState();
			if(ms){
				ms.getWorldTransform( tmpTransform );

				let p = tmpTransform.getOrigin();
				let r = tmpTransform.getRotation();

				var obj = rb.obj;

				obj.Transform.LocalPos = new Vector3(p.x(), p.y(), p.z());
				obj.Transform.LocalRot = new Quaternion({w:r.w(), x:r.x(), y:r.y(), z:r.z()});
			}
		});
	}



}