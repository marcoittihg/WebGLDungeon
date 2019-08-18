
class Script extends Component{
	constructor(obj){
		super(obj);
		obj.addComponent(this);
		
		Game.Instance.addScript(this);

		this.initialized = false;

		this.Start = function (argument) {}
		this.Update = function (argument) {}
		this.OnDestroy = function (argument) {}
	}
}