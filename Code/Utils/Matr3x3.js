/* 3x3 Matrix class
*/
class Matr3x3{
	constructor(data){
		if(!Array.isArray(data)){
			throw "Wrong data type in Matr3x3.constructor";
		}
		if(data.length != 9){
			throw "A 3x3 matrix require 9 values";
		}

		this.values = data;
	}

	static Identity(){
		return new Matr3x3([1,0,0,
						0,1,0,
						0,0,1,]);
	}

	getElem(x,y){
		var pos = 3*x + y;

		if(pos >= 9 || pos < 0){
			throw "Out of bound position for 3x3 Matrix"
		} else{
			return this.values[pos];
		}
	}

	setElem(x,y, val){
		var pos = 3*x + y;

		if(pos >= 9 || pos < 0){
			throw "Out of bound position for 3x3 Matrix"
		} else{
			this.values[pos] = val;
		}
	}

	getValues(){
		return [
		[this.values[0],this.values[1],this.values[2]],
		[this.values[3],this.values[4],this.values[5]],
		[this.values[6],this.values[7],this.values[8]]];
	}

	get GLValues(){
		return [
		this.values[0],this.values[1],this.values[2],
		this.values[3],this.values[4],this.values[5],
		this.values[6],this.values[7],this.values[8]];

	}
	transpose(){
		return new Matr3x3([
			this.values[0], this.values[3], this.values[6], 
			this.values[1], this.values[4], this.values[7], 
			this.values[2], this.values[5], this.values[8]
			])
	}

	invert(){
		var m = this.getValues();
		var a = m[0][0];
		var b = m[0][1];
		var c = m[0][2];
		var d = m[1][0];
		var e = m[1][1];
		var f = m[1][2];
		var g = m[2][0];
		var h = m[2][1];
		var i = m[2][2];

		var det = a*e*i + b*f*g + c*d*h - g*e+c  - h*f*a - i*d*b;

		if(det == 0){
			throw "Det = 0, impossible to invert the matrix";
		}

		det = 1.0/det;

		var A = e*i-f*h;
		var B = -(d*i-f*g);
		var C = d*h-e*g;
		var D = -(b*i-c*h);
		var E = a*i-c*g;
		var F = -(a*h-b*g);
		var G = b*f-c*e;
		var H = -(a*f-c*d);
		var I = a*e-b*d;
		return new Matr3x3([
				A*det, D*det, G*det, 
				B*det, E*det, H*det, 
				C*det, F*det, I*det
			]);
	}

	static multiply(m1, m2){
		var cb = function function_name() {
			throw "At least one of the two given arguments is not of type Matr3x3";
		};

		typecheck(m1, Matr3x3,cb);
		typecheck(m2, Matr3x3,cb);

		var out = [];

		m1 = m1.getValues();
		m2 = m2.getValues();

		for (var i = 0; i < 3; i++) {
			for (var j = 0; j < 3; j++) {
				out[3*i+j] = m1[i][0]*m2[0][j] + m1[i][1]*m2[1][j] + m1[i][2]*m2[2][j];
			}
		}

		return new Matr3x3(out);
	}

	static multiplyVector(m, v){
		typecheck(m, Matr3x3,function cb1(){
			throw "The first argument is not of type Matr3x3";
		});
		typecheck(v, Vector3,function cb2(){
			throw "The second argument is not of type Vector3";
		});

		return new Vector3(
			m.values[0]*v.X+m.values[1]*v.Y+m.values[2]*v.Z,
			m.values[3]*v.X+m.values[4]*v.Y+m.values[5]*v.Z,
			m.values[6]*v.X+m.values[7]*v.Y+m.values[8]*v.Z,
			);
	}
}