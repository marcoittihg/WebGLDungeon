
class BezierCurve2{
	static get BezierLinear(){
		return new BezierCurve2(
			new Vector2(0.0, 0.0),
			new Vector2(0.333, 0.333),
			new Vector2(0.666, 0.666),
			new Vector2(1.0, 1.0)
			);
	}

	constructor(p0, p1, p2, p3){
		typecheck(p0, Vector2, function (argument) {
			throw "Wrong Bezier points";
		})
		typecheck(p1, Vector2, function (argument) {
			throw "Wrong Bezier points";
		})
		typecheck(p2, Vector2, function (argument) {
			throw "Wrong Bezier points";
		})
		typecheck(p3, Vector2, function (argument) {
			throw "Wrong Bezier points";
		})

		this.p0 = p0;
		this.p1 = p1;
		this.p2 = p2;
		this.p3 = p3;
	}

	evaluate(t){
		var x01 = Vector2.Lerp(this.p0, this.p1, t);
		var x12 = Vector2.Lerp(this.p1, this.p2, t);
		var x23 = Vector2.Lerp(this.p2, this.p3, t);
		var x012 = Vector2.Lerp(x01, x12, t);
		var x123 = Vector2.Lerp(x12, x23, t);

		return Vector2.Lerp(x012, x123, t);
	}
}