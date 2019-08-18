/* Vector with 3 components
*/
class Vector3{
	constructor(x, y, z){
		this.x = x;
		this.y = y;
		this.z = z;
	}

	get X(){
		return this.x;
	}
	get Y(){
		return this.y;
	}
	get Z(){
		return this.z;
	}

	static Zero(){
		return new Vector3(0.0, 0.0, 0.0);
	}

	static add(v1, v2){
		var cb = function function_name() {
			throw "At least one of the two given arguments is not of type Vector3";
		};
		typecheck(v1, Vector3, cb);
		typecheck(v2, Vector3, cb);

		return new Vector3(v1.x + v2.x, v1.y + v2.y, v1.z + v2.z);
	}

	static sub(v1,v2){
		var cb = function function_name() {
			throw "At least one of the two given arguments is not of type Vector3";
		};
		typecheck(v1, Vector3, cb);
		typecheck(v2, Vector3, cb);

		return new Vector3(v1.x - v2.x, v1.y - v2.y, v1.z - v2.z);
	}
	static mul(v1,v2){
		var cb = function function_name() {
			throw "At least one of the two given arguments is not of type Vector3";
		};
		typecheck(v1, Vector3, cb);
		typecheck(v2, Vector3, cb);

		return new Vector3(v1.x * v2.x, v1.y * v2.y, v1.z * v2.z);
	}

	static dot(v1,v2){
		var cb = function function_name() {
			throw "At least one of the two given arguments is not of type Vector3";
		};
		typecheck(v1, Vector3, cb);
		typecheck(v2, Vector3, cb);

		return v1.x*v2.x+v1.y*v2.y+v1.z*v2.z;
	}

	static cross(v1,v2){
		var cb = function function_name() {
			throw "At least one of the two given arguments is not of type Vector3";
		};
		typecheck(v1, Vector3, cb);
		typecheck(v2, Vector3, cb);

		return new Vector3(
			v1.y*v2.z-v1.z*v2.y,
			v1.x*v2.z-v1.z*v2.x,
			v1.x*v2.y-v1.y*v2.x);
	}

	static DirFromEulerAngles(angle){
		typecheck(angle, Vector3, function (argument) {
			throw "The euler angle must  be a Vector3";
		});

		var rz = MatrFactory.makeRotateZ(degToRad(angle.Z));
		var rx = MatrFactory.makeRotateX(degToRad(angle.X));
		var ry = MatrFactory.makeRotateY(degToRad(angle.Y));
		return Matr3x3.multiplyVector(
				Matr4x4.multiplyArray([ry,rx,rz]).getSub3x3(),
				new Vector3(0.0, 0.0, 1.0)
				);

	}
}