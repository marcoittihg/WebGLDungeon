/* Basic transform for one object
*/

class Transform extends Component{
	constructor(obj){
		super(obj);
		this.worldMatrix = Matr4x4.Identity();

		this.localPos = Vector3.Zero();
		this.localRot = Vector3.Zero();
		this.localScale = new Vector3(1.0,1.0,1.0);

		this.parent = undefined;
		this.childTransforms = new Set();
	}

	get WorldMatrix(){
		return this.worldMatrix;
	}

	get GlobalWorldMatrix(){
		if(this.parent == undefined){
			return this.WorldMatrix;
		}else{
			return Matr4x4.multiply( this.parent.GlobalWorldMatrix, this.WorldMatrix);
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
	}

	set LocalRot(val){
		typecheck(val, Vector3, function (argument) {
			throw "LocalRot must be a Vector3"
		});
		this.localRot = val;
		this.worldMatrix = MatrFactory.makeWorld(this.localPos, this.localRot, this.localScale);
	}
	set LocalScale(val){
		typecheck(val, Vector3, function (argument) {
			throw "LocalScale must be a Vector3"
		});
		this.localScale = val;
		this.worldMatrix = MatrFactory.makeWorld(this.localPos, this.localRot, this.localScale);
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