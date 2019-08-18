/* 4x4 Matrix class
*/
class Matr4x4{
	constructor(data){
		if(!Array.isArray(data)){
			throw "Wrong data type in Matr4x4.constructor";
		}
		if(data.length != 16){
			throw "A 4x4 matrix require 16 values";
		}

		this.values = data;
	}

	static Identity(){
		return new Matr4x4([1,0,0,0,
						0,1,0,0,
						0,0,1,0,
						0,0,0,1]);
	}
	getElem(x,y){
		var pos = 4*x + y;

		if(pos >= 16 || pos < 0){
			throw "Out of bound position for 3x3 Matrix"
		} else{
			return this.values[pos];
		}
	}

	setElem(x,y, val){
		var pos = 4*x + y;

		if(pos >= 16 || pos < 0){
			throw "Out of bound position for 3x3 Matrix"
		} else{
			this.values[pos] = val;
		}
	}

	getValues(){
		return [
		[this.values[0],this.values[1],this.values[2],this.values[3]],
		[this.values[4],this.values[5],this.values[6],this.values[7]],
		[this.values[8],this.values[9],this.values[10],this.values[11]],
		[this.values[12],this.values[13],this.values[14],this.values[15]] ];
	}

	get GLValues(){
		return [
		this.values[0],this.values[1],this.values[2],this.values[3],
		this.values[4],this.values[5],this.values[6],this.values[7],
		this.values[8],this.values[9],this.values[10],this.values[11],
		this.values[12],this.values[13],this.values[14],this.values[15] ];

	}

	transpose(){
		return new Matr4x4 ([
		this.values[0],this.values[4],this.values[8],this.values[12],
		this.values[1],this.values[5],this.values[9],this.values[13],
		this.values[2],this.values[6],this.values[10],this.values[14],
		this.values[3],this.values[7],this.values[11],this.values[15]]);
	}

	invert(){
		var a11 = this.values[0];
		var a12 = this.values[1];
		var a13 = this.values[2];
		var a14 = this.values[3];

		var a21 = this.values[4];
		var a22 = this.values[5];
		var a23 = this.values[6];
		var a24 = this.values[7];
		
		var a31 = this.values[8];
		var a32 = this.values[9];
		var a33 = this.values[10];
		var a34 = this.values[11];
		
		var a41 = this.values[12];
		var a42 = this.values[13];
		var a43 = this.values[14];
		var a44 = this.values[15];

		var det = a11 * (a22*a33*a44 + a23*a34*a42 + a24*a32*a43 - a24*a33*a42 - a23*a32*a44 - a22*a34*a43) -
			a21 * (a12*a33*a44 + a13*a34*a42 + a14*a32*a43 - a14*a33*a42 - a13*a32*a44 - a12*a34*a43) +
			a31 * (a12*a23*a44 + a13*a24*a42 + a14*a22*a43 - a14*a23*a42 - a13*a22*a44 - a12*a24*a43) -
			a41 * (a12*a23*a34 + a13*a24*a32 + a14*a22*a33 - a14*a23*a32 - a13*a22*a34 - a12*a24*a33);

		if(det == 0){
			throw "Det = 0, impossible to invert the matrix";
		}
		det = 1.0/det;

		var i11 = a22*a33*a44 + a23*a34*a42 + a24*a32*a43 - a24*a33*a42 - a23*a32*a44 - a22*a34*a43;
		var i12 = a14*a33*a42 + a13*a32*a44 + a12*a34*a43 - a12*a33*a44 - a13*a34*a42 - a14*a32*a43;
		var i13 = a12*a23*a44 + a13*a24*a42 + a14*a22*a43 - a14*a23*a42 - a13*a22*a44 - a12*a24*a43;
		var i14 = a14*a23*a32 + a13*a22*a34 + a12*a24*a33 - a12*a23*a34 - a13*a24*a32 - a14*a22*a33;

		var i21 = a24*a33*a41 + a23*a31*a44 + a21*a34*a43 - a21*a33*a44 - a23*a34*a41 - a24*a31*a43;
		var i22 = a11*a33*a44 + a13*a34*a41 + a14*a31*a43 - a14*a33*a41 - a13*a31*a44 - a11*a34*a43;
		var i23 = a14*a23*a41 + a13*a21*a44 + a11*a24*a43 - a11*a23*a44 - a13*a24*a41 - a14*a21*a43;
		var i24 = a11*a23*a34 + a13*a24*a31 + a14*a21*a33 - a14*a23*a31 - a13*a21*a34 - a11*a24*a33;

		var i31 = a21*a32*a44 + a22*a34*a41 + a24*a31*a42 - a24*a32*a41 - a22*a31*a44 - a21*a34*a42;
		var i32 = a14*a32*a41 + a12*a31*a44 + a11*a34*a42 - a11*a32*a44 - a12*a34*a41 - a14*a31*a42;
		var i33 = a11*a22*a44 + a12*a24*a41 + a14*a21*a42 - a14*a22*a41 - a12*a21*a44 - a11*a24*a42;
		var i34 = a14*a22*a31 + a12*a21*a34 + a11*a24*a32 - a11*a22*a34 - a12*a24*a31 - a14*a21*a32;

		var i41 = a23*a32*a41 + a22*a31*a43 + a21*a33*a42 - a21*a32*a43 - a22*a33*a41 - a23*a31*a42;
		var i42 = a11*a32*a43 + a12*a33*a41 + a13*a31*a42 - a13*a32*a41 - a12*a31*a43 - a11*a33*a42;
		var i43 = a13*a22*a41 + a12*a21*a43 + a11*a23*a42 - a11*a22*a43 - a12*a23*a41 - a13*a21*a42;
		var i44 = a11*a22*a33 + a12*a23*a31 + a13*a21*a32 - a13*a22*a31 - a12*a21*a33 - a11*a23*a32;

		return new Matr4x4(([
			i11 * det,
			i12 * det,
			i13 * det,
			i14 * det,

			i21 * det,
			i22 * det,
			i23 * det,
			i24 * det,

			i31 * det,
			i32 * det,
			i33 * det,
			i34 * det,

			i41 * det,
			i42 * det,
			i43 * det,
			i44 * det
			]));
	}

	getSub3x3(){
		return new Matr3x3([
			this.values[0],this.values[1],this.values[2],
			this.values[4],this.values[5],this.values[6],
			this.values[8],this.values[9],this.values[10]
			]);
	}

	static multiply(m1, m2){
		var cb = function function_name() {
			throw "At least one of the two given arguments is not of type Matr4x4";
		};

		typecheck(m1, Matr4x4,cb);
		typecheck(m2, Matr4x4,cb);


		var out = [];

		m1 = m1.getValues();
		m2 = m2.getValues();
		
		for (var i = 0; i < 4; i++) {
			for (var j = 0; j < 4; j++) {
				out[4*i+j] = m1[i][0]*m2[0][j] + m1[i][1]*m2[1][j] + m1[i][2]*m2[2][j] + m1[i][3]*m2[3][j];
			}
		}

		return new Matr4x4(out);
	}

	static multiplyArray(ma){
		if(!Array.isArray(ma)){
			throw "multiplyArray need an array of 4x4 matrices";
		}

		var len = ma.length;

		if (len == 1){
			return ma[0];
		}

		var tmp = Matr4x4.multiply(ma[len-2], ma[len-1]);

		for (var i = len-3; i >= 0; i--){
			tmp = Matr4x4.multiply(ma[i], tmp);
		}

		return tmp;
	}


	static multiplyVector(m, v){
		typecheck(m, Matr4x4,function cb1(){
			throw "The first argument is not of type Matr4x4";
		});
		typecheck(v, Vector4,function cb2(){
			throw "The second argument is not of type Vector4";
		});

		return new Vector4(
			m.values[0]*v.X+m.values[1]*v.Y+m.values[2]*v.Z+m.values[3]*v.W,
			m.values[4]*v.X+m.values[5]*v.Y+m.values[6]*v.Z+m.values[7]*v.W,
			m.values[8]*v.X+m.values[9]*v.Y+m.values[10]*v.Z+m.values[11]*v.W,
			m.values[12]*v.X+m.values[13]*v.Y+m.values[14]*v.Z+m.values[15]*v.W
			);
	}
}