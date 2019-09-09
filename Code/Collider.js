
class Collider extends Component{
	constructor(obj){
		super(obj);
		obj.addComponent(this);
	}
}