/* Vector with 2 components
*/
class Vector2{
	constructor(x, y){
		this.x = x;
		this.y = y;
	}

	get X(){
		return this.x;
	}
	get Y(){
		return this.y;
	}

	static Lerp(a,b,t){
		return new Vector2((1-t)*a.X+ t * b.X,(1-t)*a.Y+ t * b.Y);
	}
}