/** Componet that implement a perspective camera with look in view
*/
class Camera extends Component{
	constructor(obj){
		super(obj);
		obj.addComponent(this);

		this.transform = undefined;
		this.fov = 60.0;
		this.n =  0.3;
		this.f = 100.0;
		this.a = 1.0;
	}

	set Fov(fov){
		this.fov = fov;
	}

	set N(n){
		this.n = n;
	}

	set F(f){
		this.f=f;
	}

	set AspectRatio(a){
		this.a = a;
	}

	get ViewMatrix(){
		var transform = this.GameObject.Transform;
		return MatrFactory.makeLookInView(transform.localPos, transform.localRot);
	}

	get ProjectionMatrix(){
		this.a = GlobalValues.getValue("AspectRatio").Value;

		return MatrFactory.makePerspective(this.a, this.fov, this.f, this.n)
	}
}