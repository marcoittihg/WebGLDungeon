

class MaterialDataFactory{
	constructor(){
		this.mds = new Set();
	}
	static get Instance(){
		if(MaterialDataFactory.INSTANCE == undefined){
			MaterialDataFactory.INSTANCE = new MaterialDataFactory();
		}

		return MaterialDataFactory.INSTANCE;
	}

	get NewMaterialData(){
		var md = new MaterialData();
		this.mds.add(md);

		return md;
	}

	forEachMD(fun){
		this.mds.forEach(function (md) {
			fun(md);
		})
	}

}