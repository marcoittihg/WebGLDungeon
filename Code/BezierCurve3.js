
class BezierCurve3{
	static get BezierLinear(){
		return new BezierCurve3(
			new Vector3(0.0, 0.0, 0.0),
			new Vector3(0.333, 0.333, 0.333),
			new Vector3(0.666, 0.666, 0.666),
			new Vector3(1.0, 1.0, 1.0)
			);
	}

	constructor(p0, p1, p2, p3){
		typecheck(p0, Vector3, function (argument) {
			throw "Wrong Bezier points";
		})
		typecheck(p1, Vector3, function (argument) {
			throw "Wrong Bezier points";
		})
		typecheck(p2, Vector3, function (argument) {
			throw "Wrong Bezier points";
		})
		typecheck(p3, Vector3, function (argument) {
			throw "Wrong Bezier points";
		})

		this.p0 = p0;
		this.p1 = p1;
		this.p2 = p2;
		this.p3 = p3;
	}

	evaluate(t){
		var x01 = Vector3.Lerp(this.p0, this.p1, t);
		var x12 = Vector3.Lerp(this.p1, this.p2, t);
		var x23 = Vector3.Lerp(this.p2, this.p3, t);
		var x012 = Vector3.Lerp(x01, x12, t);
		var x123 = Vector3.Lerp(x12, x23, t);

		return Vector3.Lerp(x012, x123, t);
	}
}