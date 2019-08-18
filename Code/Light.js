
class Light extends Component{
	constructor(obj){
		super(obj);
		this.color = new Vector4(1.0,1.0,1.0,1.0);
	}

	set Color(val){
		typecheck(val, Vector4, function (argument) {
			throw "The color must be a Vector4";
		});


		this.color = val;
	}

	get Color(){
		return this.color;
	}
}