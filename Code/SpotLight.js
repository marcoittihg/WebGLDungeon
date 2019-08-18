
class SpotLight extends Light{
	constructor(obj){
		super(obj);

		this.coneOut = 45.0;
		this.coneIn = 0.8;
		this.decayFactor = 1;
		this.targetDistance = 1.0;
	}

	set ConeOut(val){
		typecheck(val, Number, function (argument) {
			throw "The coneOut must be a number";
		});

		if(val < 0){
			throw "The coneOut must be a positive number";
		}

		this.coneOut = val;
	}

	set ConeIn(val){
		typecheck(val, Number, function (argument) {
			throw "The coneIn must be a number";
		});

		if(val < 0.0 || val > 1.0){
			throw "The coneIn must be a precentage";
		}

		this.coneIn = val;
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

	get ConeOut(){
		return this.coneOut;
	}

	get ConeIn(){
		return this.coneIn;
	}

	get DecayFactor(){
		return this.decayFactor;
	}

	get TargetDistance(){
		return this.targetDistance;
	}
}