/* Basic transform for one object
*/

class Transform extends Component{
	constructor(obj){
		super(obj);
		this.worldMatrix = Matr4x4.Identity();

		this.localPos = Vector3.Zero;
		this.localRot = Quaternion.fromEuler(0.0,0.0,0.0,'XYZ');
		this.localScale = new Vector3(1.0,1.0,1.0);

		this.parent = undefined;
		this.childTransforms = new Set();
	}


	get Forward(){
		var v = this.GlobalRotation.rotateVector([0.0, 0.0, 1.0]);
		return new Vector3(v[0], v[1], v[2]);
	}
	get Backward(){
		var v = this.GlobalRotation.rotateVector([0.0, 0.0, -1.0]);
		return new Vector3(v[0], v[1], v[2]);
	}
	get Left(){
		var v = this.GlobalRotation.rotateVector([1.0, 0.0, 0.0]);
		return new Vector3(v[0], v[1], v[2]);
	}
	get Right(){
		var v = this.GlobalRotation.rotateVector([-1.0, 0.0, 0.0]);
		return new Vector3(v[0], v[1], v[2]);
	}
	get Up(){
		var v = this.GlobalRotation.rotateVector([0.0, 1.0, 0.0]);
		return new Vector3(v[0], v[1], v[2]);
	}
	get Down(){
		var v = this.GlobalRotation.rotateVector([0.0, -1.0, 0.0]);
		return new Vector3(v[0], v[1], v[2]);
	}

	get WorldMatrix(){
		var v = this.worldMatrix;
	}

	get GlobalWorldMatrix(){
		if(this.parent == undefined){
			return this.worldMatrix;
		}else{
			var v = Matr4x4.multiply( this.parent.GlobalWorldMatrix, this.worldMatrix);

			return v;
		}
	}

	get GlobalPosition(){
		var gwm = this.GlobalWorldMatrix;
		var posX = gwm.getElem(0,3);
		var posY = gwm.getElem(1,3);
		var	posZ = gwm.getElem(2,3);

		return new Vector3(posX, posY, posZ);
	}

	get GlobalRotation(){
		if(this.parent == undefined){
			return this.localRot;
		}else{
			return this.localRot.mul(this.parent.GlobalRotation);
		}
	}

	get Parent(){
		return this.parent;
	}
	set Parent(pTransform){
		typecheck(pTransform, Transform, function (argument) {
			throw "pTransform must be a Transform object";
		});

		if(this.parent != undefined){
			this.parent.removeChildTransform(this);
		}

		this.parent = pTransform;
		this.parent.addChildTransform(this);
	}

	addChildTransform(argument){
		typecheck(argument, Transform, function (argument) {
			throw "The argument must be a Transform object";
		});

		this.childTransforms.add(argument);

	}
	removeChildTransform(argument) {
		typecheck(argument, Transform, function (argument) {
			throw "The argument must be a Transform object";
		});
		
		this.childTransforms.delete(argument);
	}

	set LocalPos(val){
		typecheck(val, Vector3, function (argument) {
			throw "LocalPos must be a Vector3"
		});
		this.localPos = val;
		this.worldMatrix = MatrFactory.makeWorld(this.localPos, this.localRot, this.localScale);
		
		var rb = this.GameObject.getComponent(Rigidbody);
		if(rb && rb.addedToPhysics){
			rb.reposition();
		}
	}

	setLocalRot(val, order){
		typecheck(val, [Vector3, Quaternion], function (argument) {
			throw "LocalRot must be a Vector3 or a Quaternion"
		});
		if(order == undefined){
			order = "ZXY";
		}
		if(typecheckReturn(val, Vector3)){
			this.localRot = Quaternion.fromEuler(
				degToRad(val.Z),
				degToRad(val.X),
				degToRad(val.Y),
				order);
		}else{
			this.localRot = val;
		}
		this.worldMatrix = MatrFactory.makeWorld(this.localPos, this.localRot, this.localScale);

		var rb = this.GameObject.getComponent(Rigidbody);
		if(rb && rb.addedToPhysics){
			rb.reposition();
		}
	}
	set LocalRot(val){
		typecheck(val, [Vector3, Quaternion], function (argument) {
			throw "LocalRot must be a Vector3 or a Quaternion"
		});
		if(typecheckReturn(val, Vector3)){
			this.localRot = Quaternion.fromEuler(
				degToRad(val.Z),
				degToRad(val.X),
				degToRad(val.Y),
				"ZXY");
		}else{
			this.localRot = val;
		}

		this.worldMatrix = MatrFactory.makeWorld(this.localPos, this.localRot, this.localScale);
		
		var rb = this.GameObject.getComponent(Rigidbody);
		if(rb && rb.addedToPhysics){
			rb.reposition();
		}
	}
	set LocalScale(val){
		typecheck(val, Vector3, function (argument) {
			throw "LocalScale must be a Vector3"
		});
		this.localScale = val;
		this.worldMatrix = MatrFactory.makeWorld(this.localPos, this.localRot, this.localScale);

		var rb = this.GameObject.getComponent(Rigidbody);
		if(rb && rb.addedToPhysics){
			rb.reposition();
		}
	}
	
	get LocalPos(){
		return this.localPos;
	}
	get LocalRot(){
		return this.localRot;
	}
	get LocalScale(){
		return this.localScale;
	}
}