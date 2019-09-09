
class MaterialComponent extends Component{
	constructor(obj, material){
		typecheck(material, Material, function (argument) {
			throw "mateial must be a Material object";
		})
		super(obj);
		obj.addComponent(this);

		this.material = material;
	}

	get Material(){
		return this.material;
	}
}