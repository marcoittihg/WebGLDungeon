/** Automatically create most common transform matrixes
*/
class MatrFactory{

	/** Return a transform matrix that translate the object
	*/
	static makeTranslate(dx, dy, dz){
		return new Matr4x4([
			1.0, 0.0, 0.0, dx,
			0.0, 1.0, 0.0, dy,
			0.0, 0.0, 1.0, dz,
			0.0, 0.0, 0.0, 1.0
			]);
	}

	/** Return a matrix that scale the object
	*/
	static makeScale(sx, sy, sz){
		return new Matr4x4([
			sx, 0.0, 0.0, 0.0,
			0.0, sy, 0.0, 0.0,
			0.0, 0.0, sz, 0.0,
			0.0, 0.0, 0.0, 1.0
			]);

	}

	/** Return a matrix that rotate the object by alpha radians
	*	along the x axis
	*/
	static makeRotateX(alpha){
		var sa = Math.sin(alpha);
		var ca = Math.cos(alpha);

		return new Matr4x4([
			1.0, 0.0, 0.0, 0.0,
			0.0, ca, -sa, 0.0,
			0.0, sa, ca, 0.0,
			0.0, 0.0, 0.0, 1.0
			]);
	}

	/** Return a matrix that rotate the object by alpha radians
	*	along the y axis
	*/
	static makeRotateY(alpha){
		var sa = Math.sin(alpha);
		var ca = Math.cos(alpha);

		return new Matr4x4([
			ca, 0.0, sa, 0.0,
			0.0, 1.0, 0.0, 0.0,
			-sa, 0.0, ca, 0.0,
			0.0, 0.0, 0.0, 1.0
			]);
	}

	/** Return a matrix that rotate the object by alpha radians
	*	along the z axis
	*/
	static makeRotateZ(alpha){
		var sa = Math.sin(alpha);
		var ca = Math.cos(alpha);

		return new Matr4x4([
			ca, -sa, 0.0, 0.0,
			sa, ca, 0.0, 0.0,
			0.0, 0.0, 1.0, 0.0,
			0.0, 0.0, 0.0, 1.0
			]);
	}


	/** Return a matrix that perform a shear along the x axis
	*/
	static makeShearX(hy, hz){
		return new Matr4x4([
			1.0, 0.0, 0.0, 0.0,
			hy, 1.0, 0.0, 0.0,
			hz, 0.0, 1.0, 0.0,
			0.0, 0.0, 0.0, 1.0
			]);
	}

	/** Return a matrix that perform a shear along the y axis
	*/
	static makeShearX(hx, hz){
		return new Matr4x4([
			1.0, hx, 0.0, 0.0,
			0.0, 1.0, 0.0, 0.0,
			0.0, hz, 1.0, 0.0,
			0.0, 0.0, 0.0, 1.0
			]);
	}

	/** Return a matrix that perform a shear along the z axis
	*/
	static makeShearX(hx, hy){
		return new Matr4x4([
			1.0, 0.0, hx, 0.0,
			0.0, 1.0, hy, 0.0,
			0.0, 0.0, 1.0, 0.0,
			0.0, 0.0, 0.0, 1.0
			]);
	}

	/** Return a perspective projection matrix
	* 	a - Aspect ratio
	* 	theta - FOV angle in deg
	* 	f - Far plane
	* 	n - Near plane
	*/
	static makePerspective(a, theta, f, n){
		var tt2 = Math.tan(degToRad(theta)/2.0);

		return new Matr4x4([
			1.0/a/tt2, 0.0, 0.0, 0.0,
			0.0, 1.0/tt2, 0.0, 0.0,
			0.0, 0.0, (f+n)/(n-f), (2.0*f*n)/(n-f),
			0.0, 0.0, -1.0, 0.0
			]);
	}

	static makeLookInView(cameraPos, cameraDir){
		var cb = function function_name() {
			throw "At least one of the two given arguments is not of type Vector3";
		};

		typecheck(cameraPos, Vector3, cb);
		typecheck(cameraDir, Vector3, cb);

		var cx = cameraPos.X;
		var cy = cameraPos.Y;
		var cz = cameraPos.Z;

		var alpha = cameraDir.Y;
		var beta = cameraDir.X;
		var rho = cameraDir.Z;


		var r180 = MatrFactory.makeRotateY(degToRad(180.0));

		var mt = MatrFactory.makeTranslate(-cx, -cy, -cz);
		var ry = MatrFactory.makeRotateY(degToRad(-alpha));
		var rx = MatrFactory.makeRotateX(degToRad(-beta));
		var rz = MatrFactory.makeRotateZ(degToRad(-rho));

		return Matr4x4.multiplyArray([r180, rz,rx,ry,mt]);
	}

	static makeWorld(pos, dir, scal){
		function cb(){
			throw "At leat one argument is not a Vector3";
		}

		typecheck(pos, Vector3, cb);
		typecheck(dir, Vector3, cb);
		typecheck(scal, Vector3, cb);

		var s = MatrFactory.makeScale(scal.X, scal.Y, scal.Z);

		var rz = MatrFactory.makeRotateZ(degToRad(dir.Z));
		var rx = MatrFactory.makeRotateX(degToRad(dir.X));
		var ry = MatrFactory.makeRotateY(degToRad(dir.Y));
		var t = MatrFactory.makeTranslate(-pos.X, pos.Y, pos.Z);

		return Matr4x4.multiplyArray([t,ry,rx,rz,s]);
	}
}



