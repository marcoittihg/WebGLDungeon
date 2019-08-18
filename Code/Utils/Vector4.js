/* Vector with 4 components
*/
class Vector4{
	constructor(x, y, z, w){
		this.x = x;
		this.y = y;
		this.z = z;
		this.w = w;
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
	get W(){
		return this.w;
	}

	get XYZ(){
		return new Vector3(X,Y,Z);
	}

	static Zero(){
		return new Vector4(0.0, 0.0, 0.0, 0.0);
	}

	static add(v1, v2){
		var cb = function function_name() {
			throw "At least one of the two given arguments is not of type Vector4";
		};
		typecheck(v1, Vector4, cb);
		typecheck(v2, Vector4, cb);

		return new Vector4(v1.x + v2.x, v1.y + v2.y, v1.z + v2.z, v1.w + v2.w);
	}

	static dot(v1,v2){
		var cb = function function_name() {
			throw "At least one of the two given arguments is not of type Vector4";
		};
		typecheck(v1, Vector4, cb);
		typecheck(v2, Vector4, cb);

		return v1.x*v2.x+v1.y*v2.y+v1.z*v2.z+v1.w*v2.w;
	}

}