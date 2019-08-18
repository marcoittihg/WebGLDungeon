
class PointLight extends Light{
	constructor(obj){
		super(obj);

		this.decayFactor = 2;
		this.targetDistance = 1.0;
	}

	set DecayFactor(val){
		if(val != 0 && val != 1 && val != 2){
			throw "The decay factor must be an integer,  0,1 or 2";
		}

		this.decayFactor = val;
	}

	set TargetDistance(val){
		typecheck(val, Number, function (argument) {
			throw "The target distance must be a Number";
		})

		this.targetDistance = val;
	}

	get DecayFactor(){
		return this.decayFactor;
	}

	get TargetDistance(){
		return this.targetDistance;
	}
}