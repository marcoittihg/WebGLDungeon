
class SceneObjectFactory{

	static get Room1(){
		var room1 =SceneObjectFactory.RoomT1;
		var tileX = 6.0;
		var tileZ = 6.0;

		room1.setMaterialData(4, MaterialDataFactory.Instance.NewMaterialData);

		room1.RIG.Transform.LocalPos = new Vector3(96.0, 0.0, 84.0);
		room1.RIG.Transform.LocalRot = new Vector3(0.0, 90.0, 0.0);

		var column;
		column = SceneObjectFactory.getColumn(room1.getMaterialData(2))[0];
		column.Transform.LocalPos = new Vector3(3.5*tileX,-3.0,-3.5*tileZ);
		column.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);
		room1.addGameObject(column);

		var key;
		key = SceneObjectFactory.getKey(room1.getMaterialData(4))[0];
		key.Transform.LocalPos = new Vector3(3.5*tileX,3.0,-3.5*tileZ);
		key.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);
		room1.addGameObject(key);
		var rotateKey = new RotateKey(key);
		var player = GlobalValues.getValue("Player").Value;
		var keyScript = new KeyScript(key, player.Transform, 10.0);

		var keyLight = new PointLight(key);
		keyLight.Color = new Vector4(1.0,0.843,0.0,1.0);
		keyLight.TargetDistance = 5.0;
		room1.forEachMaterial(function (mat) {
		    mat.addLight(keyLight);
		  });

		return room1;
	}

	static get Room2(){
		var room2 =SceneObjectFactory.RoomT2;

		room2.RIG.Transform.LocalPos = new Vector3(0.0, 0.0, 84.0);
		room2.RIG.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);
		return room2;
	}

	static get Room3(){
		var room3 =SceneObjectFactory.RoomT1;

		room3.RIG.Transform.LocalPos = new Vector3(-96.0, 0.0, 84.0);
		room3.RIG.Transform.LocalRot = new Vector3(0.0, 180.0, 0.0);

		return room3;
	}

	static get Room4(){
		var room4 =SceneObjectFactory.RoomT3;

		room4.RIG.Transform.LocalPos = new Vector3(96.0, 0.0, 180.0);
		room4.RIG.Transform.LocalRot = new Vector3(0.0, 90.0, 0.0);

		return room4;
	}

	static get Room5(){
		var room5 =SceneObjectFactory.RoomT2;

		room5.RIG.Transform.LocalPos = new Vector3(0.0, 0.0, 180.0);
		room5.RIG.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);

		return room5;
	}

	static get Room6(){
		var room6 =SceneObjectFactory.RoomT3;
		var tileX = 6.0;
		var tileZ = 6.0;

		room6.setMaterialData(4, MaterialDataFactory.Instance.NewMaterialData);

		room6.RIG.Transform.LocalPos = new Vector3(-96.0, 0.0, 180.0);
		room6.RIG.Transform.LocalRot = new Vector3(0.0, -90.0, 0.0);

		var column;
		column = SceneObjectFactory.getColumn(room6.getMaterialData(2))[0];
		column.Transform.LocalPos = new Vector3(0.0*tileX,-3.0,3.0*tileZ);
		column.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);
		room6.addGameObject(column);

		var key;
		key = SceneObjectFactory.getKey(room6.getMaterialData(4))[0];
		key.Transform.LocalPos = new Vector3(0.0*tileX,3.0,3.0*tileZ);
		key.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);
		room6.addGameObject(key);

		var rotateKey = new RotateKey(key);

		var player = GlobalValues.getValue("Player").Value;
		var keyScript = new KeyScript(key, player.Transform, 10.0);

		var keyLight = new PointLight(key);
		keyLight.Color = new Vector4(1.0,0.843,0.0,1.0);
		keyLight.TargetDistance = 5.0;
		room6.forEachMaterial(function (mat) {
		    mat.addLight(keyLight);
		  });
		return room6;
	}

	static get Room7(){
		var room7 =SceneObjectFactory.RoomT1;

		room7.RIG.Transform.LocalPos = new Vector3(96.0, 0.0, 276.0);
		room7.RIG.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);

		return room7;
	}

	static get Room8(){
		var room8 =SceneObjectFactory.RoomT2;
		var tileX = 6.0;
		var tileZ = 6.0;

		room8.setMaterialData(4, MaterialDataFactory.Instance.NewMaterialData);

		room8.RIG.Transform.LocalPos = new Vector3(0.0, 0.0, 276.0);
		room8.RIG.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);

		var column;
		column = SceneObjectFactory.getColumn(room8.getMaterialData(2))[0];
		column.Transform.LocalPos = new Vector3(-1.0*tileX,-3.0,0.0*tileZ);
		column.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);
		room8.addGameObject(column);

		var key;
		key = SceneObjectFactory.getKey(room8.getMaterialData(4))[0];
		key.Transform.LocalPos = new Vector3(-1.0*tileX,3.0,0.0*tileZ);
		key.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);
		room8.addGameObject(key);

		var rotateKey = new RotateKey(key);

		var player = GlobalValues.getValue("Player").Value;
		var keyScript = new KeyScript(key, player.Transform, 10.0);

		var keyLight = new PointLight(key);
		keyLight.Color = new Vector4(1.0,0.843,0.0,1.0);
		keyLight.TargetDistance = 5.0;
		room8.forEachMaterial(function (mat) {
		    mat.addLight(keyLight);
		  });
		return room8;
	}
	static get Room9(){
		var room9 =SceneObjectFactory.RoomT1;

		room9.RIG.Transform.LocalPos = new Vector3(-96.0, 0.0, 276.0);
		room9.RIG.Transform.LocalRot = new Vector3(0.0, -90.0, 0.0);

		return room9;
	}

	static get Room10(){
		var room10 =SceneObjectFactory.Room4exits10x10Base;
		var tileX = 6.0;
		var tileZ = 6.0;

		room10.setMaterialData(3, MaterialDataFactory.Instance.NewMaterialData);

		room10.RIG.Transform.LocalPos = new Vector3(0.0, 0.0, 372.0);
		room10.RIG.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);

		var wall;
		wall = SceneObjectFactory.getWall(room10.getMaterialData(1))[0];
		wall.Transform.LocalPos = new Vector3(-5.0*tileX,0.0,0.5*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 90.0, 0.0);
		room10.addGameObject(wall);
		wall = SceneObjectFactory.getWall(room10.getMaterialData(1))[0];
		wall.Transform.LocalPos = new Vector3(-5.0*tileX,0.0,-0.5*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 90.0, 0.0);
		room10.addGameObject(wall);
		wall = SceneObjectFactory.getWall(room10.getMaterialData(1))[0];
		wall.Transform.LocalPos = new Vector3(5.0*tileX,0.0,0.5*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 90.0, 0.0);
		room10.addGameObject(wall);
		wall = SceneObjectFactory.getWall(room10.getMaterialData(1))[0];
		wall.Transform.LocalPos = new Vector3(5.0*tileX,0.0,-0.5*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 90.0, 0.0);
		room10.addGameObject(wall);

		var column;
		column = SceneObjectFactory.getColumn(room10.getMaterialData(2))[0];
		column.Transform.LocalPos = new Vector3(-1.0*tileX,0.0,-5.0*tileZ);
		column.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);
		room10.addGameObject(column);
		column = SceneObjectFactory.getColumn(room10.getMaterialData(2))[0];
		column.Transform.LocalPos = new Vector3(1.0*tileX,0.0,-5.0*tileZ);
		column.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);
		room10.addGameObject(column);
		column = SceneObjectFactory.getColumn(room10.getMaterialData(2))[0];
		column.Transform.LocalPos = new Vector3(-1.0*tileX,0.0,5.0*tileZ);
		column.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);
		room10.addGameObject(column);
		column = SceneObjectFactory.getColumn(room10.getMaterialData(2))[0];
		column.Transform.LocalPos = new Vector3(1.0*tileX,0.0,5.0*tileZ);
		column.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);
		room10.addGameObject(column);

		var door;
		door = SceneObjectFactory.getDoor(room10.getMaterialData(3));
		door[0].Transform.LocalPos = new Vector3(0.0*tileX,0.0,5.0*tileZ);
		door[0].Transform.LocalRot = new Vector3(0.0, 180.0, 0.0);
		door[0].Transform.LocalScale = new Vector3(8.0, 8.0, 8.0);
		room10.addGameObject(door[0]);

		var player = GlobalValues.getValue("Player").Value;
		var doorScript = new DoorScript(door[0], player.Transform, 20.0);

		return room10;
	}

	static get RoomT3(){
		var tileX = 6.0;
		var tileZ = 6.0;

		var room3 = SceneObjectFactory.Room3exits10x10;
		room3.setMaterialData(3, MaterialDataFactory.Instance.NewMaterialData);

		var wall;
		wall = SceneObjectFactory.getWall(room3.getMaterialData(1))[0];
		wall.Transform.LocalPos = new Vector3(1.0*tileX,0.0,-4.5*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 90.0, 0.0);
		room3.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room3.getMaterialData(1))[0];
		wall.Transform.LocalPos = new Vector3(-1.0*tileX,0.0,-4.5*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 90.0, 0.0);
		room3.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room3.getMaterialData(1))[0];
		wall.Transform.LocalPos = new Vector3(4.5*tileX,0.0,-1.0*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);
		room3.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room3.getMaterialData(1))[0];
		wall.Transform.LocalPos = new Vector3(4.5*tileX,0.0,1.0*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);
		room3.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room3.getMaterialData(1))[0];
		wall.Transform.LocalPos = new Vector3(-4.5*tileX,0.0,-1.0*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);
		room3.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room3.getMaterialData(1))[0];
		wall.Transform.LocalPos = new Vector3(-4.5*tileX,0.0,1.0*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);
		room3.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room3.getMaterialData(1))[0];
		wall.Transform.LocalPos = new Vector3(-3.5*tileX,0.0,1.0*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);
		room3.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room3.getMaterialData(1))[0];
		wall.Transform.LocalPos = new Vector3(-2.5*tileX,0.0,1.0*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);
		room3.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room3.getMaterialData(1))[0];
		wall.Transform.LocalPos = new Vector3(-1.5*tileX,0.0,1.0*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);
		room3.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room3.getMaterialData(1))[0];
		wall.Transform.LocalPos = new Vector3(0.5*tileX,0.0,1.0*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);
		room3.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room3.getMaterialData(1))[0];
		wall.Transform.LocalPos = new Vector3(1.5*tileX,0.0,1.0*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);
		room3.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room3.getMaterialData(1))[0];
		wall.Transform.LocalPos = new Vector3(2.5*tileX,0.0,1.0*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);
		room3.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room3.getMaterialData(1))[0];
		wall.Transform.LocalPos = new Vector3(3.5*tileX,0.0,1.0*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);
		room3.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room3.getMaterialData(1))[0];
		wall.Transform.LocalPos = new Vector3(3.5*tileX,0.0,2.0*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);
		room3.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room3.getMaterialData(1))[0];
		wall.Transform.LocalPos = new Vector3(1.5*tileX,0.0,2.0*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);
		room3.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room3.getMaterialData(1))[0];
		wall.Transform.LocalPos = new Vector3(0.5*tileX,0.0,2.0*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);
		room3.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room3.getMaterialData(3))[0];
		wall.Transform.LocalPos = new Vector3(-0.5*tileX,0.0,2.0*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);
		room3.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room3.getMaterialData(3))[0];
		wall.Transform.LocalPos = new Vector3(-1.5*tileX,0.0,2.0*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);
		room3.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room3.getMaterialData(3))[0];
		wall.Transform.LocalPos = new Vector3(-2.0*tileX,0.0,2.5*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 90.0, 0.0);
		room3.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room3.getMaterialData(3))[0];
		wall.Transform.LocalPos = new Vector3(-2.0*tileX,0.0,3.5*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 90.0, 0.0);
		room3.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room3.getMaterialData(3))[0];
		wall.Transform.LocalPos = new Vector3(2.0*tileX,0.0,2.5*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 90.0, 0.0);
		room3.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room3.getMaterialData(3))[0];
		wall.Transform.LocalPos = new Vector3(2.0*tileX,0.0,3.5*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 90.0, 0.0);
		room3.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room3.getMaterialData(3))[0];
		wall.Transform.LocalPos = new Vector3(-3.0*tileX,0.0,1.5*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 90.0, 0.0);
		room3.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room3.getMaterialData(3))[0];
		wall.Transform.LocalPos = new Vector3(-3.0*tileX,0.0,2.5*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 90.0, 0.0);
		room3.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room3.getMaterialData(3))[0];
		wall.Transform.LocalPos = new Vector3(-3.0*tileX,0.0,3.5*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 90.0, 0.0);
		room3.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room3.getMaterialData(3))[0];
		wall.Transform.LocalPos = new Vector3(-4.0*tileX,0.0,2.5*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 90.0, 0.0);
		room3.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room3.getMaterialData(3))[0];
		wall.Transform.LocalPos = new Vector3(-4.0*tileX,0.0,3.5*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 90.0, 0.0);
		room3.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room3.getMaterialData(3))[0];
		wall.Transform.LocalPos = new Vector3(-3.5*tileX,0.0,4.0*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);
		room3.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room3.getMaterialData(3))[0];
		wall.Transform.LocalPos = new Vector3(3.0*tileX,0.0,2.5*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 90.0, 0.0);
		room3.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room3.getMaterialData(3))[0];
		wall.Transform.LocalPos = new Vector3(3.0*tileX,0.0,3.5*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 90.0, 0.0);
		room3.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room3.getMaterialData(3))[0];
		wall.Transform.LocalPos = new Vector3(4.0*tileX,0.0,2.5*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 90.0, 0.0);
		room3.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room3.getMaterialData(3))[0];
		wall.Transform.LocalPos = new Vector3(4.0*tileX,0.0,4.5*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 90.0, 0.0);
		room3.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room3.getMaterialData(3))[0];
		wall.Transform.LocalPos = new Vector3(3.5*tileX,0.0,4.0*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);
		room3.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room3.getMaterialData(3))[0];
		wall.Transform.LocalPos = new Vector3(0.5*tileX,0.0,0.0*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);
		room3.addGameObject(wall);
		
		wall = SceneObjectFactory.getWall(room3.getMaterialData(3))[0];
		wall.Transform.LocalPos = new Vector3(1.5*tileX,0.0,0.0*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);
		room3.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room3.getMaterialData(3))[0];
		wall.Transform.LocalPos = new Vector3(-0.5*tileX,0.0,0.0*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);
		room3.addGameObject(wall);
		
		wall = SceneObjectFactory.getWall(room3.getMaterialData(3))[0];
		wall.Transform.LocalPos = new Vector3(-1.5*tileX,0.0,0.0*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);
		room3.addGameObject(wall);


		wall = SceneObjectFactory.getWall(room3.getMaterialData(3))[0];
		wall.Transform.LocalPos = new Vector3(0.5*tileX,0.0,-1.0*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);
		room3.addGameObject(wall);
		
		wall = SceneObjectFactory.getWall(room3.getMaterialData(3))[0];
		wall.Transform.LocalPos = new Vector3(1.5*tileX,0.0,-1.0*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);
		room3.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room3.getMaterialData(3))[0];
		wall.Transform.LocalPos = new Vector3(-0.5*tileX,0.0,-1.0*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);
		room3.addGameObject(wall);


		wall = SceneObjectFactory.getWall(room3.getMaterialData(3))[0];
		wall.Transform.LocalPos = new Vector3(0.5*tileX,0.0,-2.0*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);
		room3.addGameObject(wall);
		
		wall = SceneObjectFactory.getWall(room3.getMaterialData(3))[0];
		wall.Transform.LocalPos = new Vector3(1.5*tileX,0.0,-2.0*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);
		room3.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room3.getMaterialData(3))[0];
		wall.Transform.LocalPos = new Vector3(-0.5*tileX,0.0,-2.0*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);
		room3.addGameObject(wall);
		
		wall = SceneObjectFactory.getWall(room3.getMaterialData(3))[0];
		wall.Transform.LocalPos = new Vector3(-1.5*tileX,0.0,-2.0*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);
		room3.addGameObject(wall);
		
		wall = SceneObjectFactory.getWall(room3.getMaterialData(3))[0];
		wall.Transform.LocalPos = new Vector3(2.5*tileX,0.0,-2.0*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);
		room3.addGameObject(wall);
		
		wall = SceneObjectFactory.getWall(room3.getMaterialData(3))[0];
		wall.Transform.LocalPos = new Vector3(2.0*tileX,0.0,-0.5*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 90.0, 0.0);
		room3.addGameObject(wall);
		
		wall = SceneObjectFactory.getWall(room3.getMaterialData(3))[0];
		wall.Transform.LocalPos = new Vector3(-2.0*tileX,0.0,-0.5*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 90.0, 0.0);
		room3.addGameObject(wall);
		
		wall = SceneObjectFactory.getWall(room3.getMaterialData(3))[0];
		wall.Transform.LocalPos = new Vector3(-2.0*tileX,0.0,-1.5*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 90.0, 0.0);
		room3.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room3.getMaterialData(3))[0];
		wall.Transform.LocalPos = new Vector3(3.0*tileX,0.0,-1.5*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 90.0, 0.0);
		room3.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room3.getMaterialData(3))[0];
		wall.Transform.LocalPos = new Vector3(3.0*tileX,0.0,-0.5*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 90.0, 0.0);
		room3.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room3.getMaterialData(3))[0];
		wall.Transform.LocalPos = new Vector3(3.0*tileX,0.0,0.5*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 90.0, 0.0);
		room3.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room3.getMaterialData(3))[0];
		wall.Transform.LocalPos = new Vector3(4.5*tileX,0.0,-2.0*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);
		room3.addGameObject(wall);
		
		wall = SceneObjectFactory.getWall(room3.getMaterialData(3))[0];
		wall.Transform.LocalPos = new Vector3(4.0*tileX,0.0,-2.5*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 90.0, 0.0);
		room3.addGameObject(wall);
		
		wall = SceneObjectFactory.getWall(room3.getMaterialData(3))[0];
		wall.Transform.LocalPos = new Vector3(4.0*tileX,0.0,-3.5*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 90.0, 0.0);
		room3.addGameObject(wall);
		
		wall = SceneObjectFactory.getWall(room3.getMaterialData(3))[0];
		wall.Transform.LocalPos = new Vector3(2.0*tileX,0.0,-3.5*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 90.0, 0.0);
		room3.addGameObject(wall);
		
		wall = SceneObjectFactory.getWall(room3.getMaterialData(3))[0];
		wall.Transform.LocalPos = new Vector3(2.5*tileX,0.0,-4.0*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);
		room3.addGameObject(wall);
		
		wall = SceneObjectFactory.getWall(room3.getMaterialData(3))[0];
		wall.Transform.LocalPos = new Vector3(3.5*tileX,0.0,-4.0*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);
		room3.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room3.getMaterialData(3))[0];
		wall.Transform.LocalPos = new Vector3(2.5*tileX,0.0,-3.0*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);
		room3.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room3.getMaterialData(3))[0];
		wall.Transform.LocalPos = new Vector3(-3.0*tileX,0.0,0.5*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 90.0, 0.0);
		room3.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room3.getMaterialData(3))[0];
		wall.Transform.LocalPos = new Vector3(-3.0*tileX,0.0,-0.5*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 90.0, 0.0);
		room3.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room3.getMaterialData(3))[0];
		wall.Transform.LocalPos = new Vector3(-3.0*tileX,0.0,-1.5*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 90.0, 0.0);
		room3.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room3.getMaterialData(3))[0];
		wall.Transform.LocalPos = new Vector3(-2.0*tileX,0.0,-4.5*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 90.0, 0.0);
		room3.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room3.getMaterialData(3))[0];
		wall.Transform.LocalPos = new Vector3(-2.0*tileX,0.0,-3.5*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 90.0, 0.0);
		room3.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room3.getMaterialData(3))[0];
		wall.Transform.LocalPos = new Vector3(-4.0*tileX,0.0,-3.5*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 90.0, 0.0);
		room3.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room3.getMaterialData(3))[0];
		wall.Transform.LocalPos = new Vector3(-3.5*tileX,0.0,-3.0*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);
		room3.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room3.getMaterialData(3))[0];
		wall.Transform.LocalPos = new Vector3(-2.5*tileX,0.0,-3.0*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);
		room3.addGameObject(wall);



		return room3;
	}

	static get RoomT2(){
		var tileX = 6.0;
		var tileZ = 6.0;

		var room2 = SceneObjectFactory.Room4exits10x10;
		room2.setMaterialData(3, MaterialDataFactory.Instance.NewMaterialData);

		var wall;
		wall = SceneObjectFactory.getWall(room2.getMaterialData(1))[0];
		wall.Transform.LocalPos = new Vector3(4.5*tileX,0.0,1.0*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);
		room2.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room2.getMaterialData(1))[0];
		wall.Transform.LocalPos = new Vector3(4.5*tileX,0.0,-1.0*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);
		room2.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room2.getMaterialData(1))[0];
		wall.Transform.LocalPos = new Vector3(-4.5*tileX,0.0,1.0*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);
		room2.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room2.getMaterialData(1))[0];
		wall.Transform.LocalPos = new Vector3(-4.5*tileX,0.0,-1.0*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);
		room2.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room2.getMaterialData(1))[0];
		wall.Transform.LocalPos = new Vector3(1.0*tileX,0.0,4.5*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 90.0, 0.0);
		room2.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room2.getMaterialData(1))[0];
		wall.Transform.LocalPos = new Vector3(-1.0*tileX,0.0,4.5*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 90.0, 0.0);
		room2.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room2.getMaterialData(1))[0];
		wall.Transform.LocalPos = new Vector3(1.0*tileX,0.0,-4.5*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 90.0, 0.0);
		room2.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room2.getMaterialData(1))[0];
		wall.Transform.LocalPos = new Vector3(-1.0*tileX,0.0,-4.5*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 90.0, 0.0);
		room2.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room2.getMaterialData(1))[0];
		wall.Transform.LocalPos = new Vector3(-1.0*tileX,0.0,-3.5*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 90.0, 0.0);
		room2.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room2.getMaterialData(1))[0];
		wall.Transform.LocalPos = new Vector3(-1.0*tileX,0.0,-2.5*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 90.0, 0.0);
		room2.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room2.getMaterialData(1))[0];
		wall.Transform.LocalPos = new Vector3(-1.0*tileX,0.0,-1.5*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 90.0, 0.0);
		room2.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room2.getMaterialData(1))[0];
		wall.Transform.LocalPos = new Vector3(-0.5*tileX,0.0,-3.0*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);
		room2.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room2.getMaterialData(1))[0];
		wall.Transform.LocalPos = new Vector3(0.5*tileX,0.0,-3.0*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);
		room2.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room2.getMaterialData(1))[0];
		wall.Transform.LocalPos = new Vector3(1.5*tileX,0.0,-3.0*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);
		room2.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room2.getMaterialData(1))[0];
		wall.Transform.LocalPos = new Vector3(2.5*tileX,0.0,-3.0*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);
		room2.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room2.getMaterialData(1))[0];
		wall.Transform.LocalPos = new Vector3(1.5*tileX,0.0,-4.0*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);
		room2.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room2.getMaterialData(1))[0];
		wall.Transform.LocalPos = new Vector3(2.5*tileX,0.0,-4.0*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);
		room2.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room2.getMaterialData(3))[0];
		wall.Transform.LocalPos = new Vector3(3.5*tileX,0.0,-4.0*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);
		room2.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room2.getMaterialData(3))[0];
		wall.Transform.LocalPos = new Vector3(4.0*tileX,0.0,-3.5*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 90.0, 0.0);
		room2.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room2.getMaterialData(3))[0];
		wall.Transform.LocalPos = new Vector3(1.5*tileX,0.0,-2.0*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);
		room2.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room2.getMaterialData(3))[0];
		wall.Transform.LocalPos = new Vector3(2.5*tileX,0.0,-2.0*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);
		room2.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room2.getMaterialData(3))[0];
		wall.Transform.LocalPos = new Vector3(3.5*tileX,0.0,-2.0*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);
		room2.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room2.getMaterialData(3))[0];
		wall.Transform.LocalPos = new Vector3(1.0*tileX,0.0,-1.5*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 90.0, 0.0);
		room2.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room2.getMaterialData(3))[0];
		wall.Transform.LocalPos = new Vector3(1.5*tileX,0.0,-1.0*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);
		room2.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room2.getMaterialData(3))[0];
		wall.Transform.LocalPos = new Vector3(2.5*tileX,0.0,-1.0*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);
		room2.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room2.getMaterialData(3))[0];
		wall.Transform.LocalPos = new Vector3(3.5*tileX,0.0,-1.0*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);
		room2.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room2.getMaterialData(3))[0];
		wall.Transform.LocalPos = new Vector3(1.5*tileX,0.0,0.0*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);
		room2.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room2.getMaterialData(3))[0];
		wall.Transform.LocalPos = new Vector3(2.5*tileX,0.0,0.0*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);
		room2.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room2.getMaterialData(3))[0];
		wall.Transform.LocalPos = new Vector3(4.5*tileX,0.0,1.0*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);
		room2.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room2.getMaterialData(3))[0];
		wall.Transform.LocalPos = new Vector3(1.0*tileX,0.0,0.5*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 90.0, 0.0);
		room2.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room2.getMaterialData(3))[0];
		wall.Transform.LocalPos = new Vector3(1.5*tileX,0.0,1.0*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);
		room2.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room2.getMaterialData(3))[0];
		wall.Transform.LocalPos = new Vector3(2.0*tileX,0.0,1.5*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 90.0, 0.0);
		room2.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room2.getMaterialData(3))[0];
		wall.Transform.LocalPos = new Vector3(1.5*tileX,0.0,2.0*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);
		room2.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room2.getMaterialData(3))[0];
		wall.Transform.LocalPos = new Vector3(0.5*tileX,0.0,2.0*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);
		room2.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room2.getMaterialData(3))[0];
		wall.Transform.LocalPos = new Vector3(-0.5*tileX,0.0,2.0*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);
		room2.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room2.getMaterialData(3))[0];
		wall.Transform.LocalPos = new Vector3(-1.5*tileX,0.0,2.0*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);
		room2.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room2.getMaterialData(3))[0];
		wall.Transform.LocalPos = new Vector3(-2.5*tileX,0.0,2.0*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);
		room2.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room2.getMaterialData(3))[0];
		wall.Transform.LocalPos = new Vector3(-3.0*tileX,0.0,2.5*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 90.0, 0.0);
		room2.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room2.getMaterialData(3))[0];
		wall.Transform.LocalPos = new Vector3(-3.0*tileX,0.0,3.5*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 90.0, 0.0);
		room2.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room2.getMaterialData(3))[0];
		wall.Transform.LocalPos = new Vector3(-4.0*tileX,0.0,2.5*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 90.0, 0.0);
		room2.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room2.getMaterialData(3))[0];
		wall.Transform.LocalPos = new Vector3(-4.0*tileX,0.0,3.5*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 90.0, 0.0);
		room2.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room2.getMaterialData(3))[0];
		wall.Transform.LocalPos = new Vector3(-4.5*tileX,0.0,2.0*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);
		room2.addGameObject(wall);


		wall = SceneObjectFactory.getWall(room2.getMaterialData(3))[0];
		wall.Transform.LocalPos = new Vector3(0.0*tileX,0.0,2.5*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 90.0, 0.0);
		room2.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room2.getMaterialData(3))[0];
		wall.Transform.LocalPos = new Vector3(0.0*tileX,0.0,3.5*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 90.0, 0.0);
		room2.addGameObject(wall);


		wall = SceneObjectFactory.getWall(room2.getMaterialData(3))[0];
		wall.Transform.LocalPos = new Vector3(3.0*tileX,0.0,1.5*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 90.0, 0.0);
		room2.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room2.getMaterialData(3))[0];
		wall.Transform.LocalPos = new Vector3(3.0*tileX,0.0,2.5*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 90.0, 0.0);
		room2.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room2.getMaterialData(3))[0];
		wall.Transform.LocalPos = new Vector3(3.0*tileX,0.0,3.5*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 90.0, 0.0);
		room2.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room2.getMaterialData(3))[0];
		wall.Transform.LocalPos = new Vector3(4.0*tileX,0.0,2.5*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 90.0, 0.0);
		room2.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room2.getMaterialData(3))[0];
		wall.Transform.LocalPos = new Vector3(4.0*tileX,0.0,3.5*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 90.0, 0.0);
		room2.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room2.getMaterialData(3))[0];
		wall.Transform.LocalPos = new Vector3(3.5*tileX,0.0,4.0*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);
		room2.addGameObject(wall);


		wall = SceneObjectFactory.getWall(room2.getMaterialData(3))[0];
		wall.Transform.LocalPos = new Vector3(-0.5*tileX,0.0,-1.0*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);
		room2.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room2.getMaterialData(3))[0];
		wall.Transform.LocalPos = new Vector3(0.0*tileX,0.0,-0.5*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 90.0, 0.0);
		room2.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room2.getMaterialData(3))[0];
		wall.Transform.LocalPos = new Vector3(0.0*tileX,0.0,0.5*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 90.0, 0.0);
		room2.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room2.getMaterialData(3))[0];
		wall.Transform.LocalPos = new Vector3(-0.5*tileX,0.0,1.0*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);
		room2.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room2.getMaterialData(3))[0];
		wall.Transform.LocalPos = new Vector3(-1.5*tileX,0.0,1.0*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);
		room2.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room2.getMaterialData(3))[0];
		wall.Transform.LocalPos = new Vector3(-2.0*tileX,0.0,0.5*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 90.0, 0.0);
		room2.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room2.getMaterialData(3))[0];
		wall.Transform.LocalPos = new Vector3(-2.0*tileX,0.0,-0.5*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 90.0, 0.0);
		room2.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room2.getMaterialData(3))[0];
		wall.Transform.LocalPos = new Vector3(-2.0*tileX,0.0,-1.5*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 90.0, 0.0);
		room2.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room2.getMaterialData(3))[0];
		wall.Transform.LocalPos = new Vector3(-2.0*tileX,0.0,-2.5*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 90.0, 0.0);
		room2.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room2.getMaterialData(3))[0];
		wall.Transform.LocalPos = new Vector3(-2.0*tileX,0.0,-3.5*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 90.0, 0.0);
		room2.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room2.getMaterialData(3))[0];
		wall.Transform.LocalPos = new Vector3(-4.0*tileX,0.0,-2.5*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 90.0, 0.0);
		room2.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room2.getMaterialData(3))[0];
		wall.Transform.LocalPos = new Vector3(-4.0*tileX,0.0,-3.5*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 90.0, 0.0);
		room2.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room2.getMaterialData(3))[0];
		wall.Transform.LocalPos = new Vector3(-2.5*tileX,0.0,-4.0*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);
		room2.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room2.getMaterialData(3))[0];
		wall.Transform.LocalPos = new Vector3(-3.5*tileX,0.0,-4.0*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);
		room2.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room2.getMaterialData(3))[0];
		wall.Transform.LocalPos = new Vector3(-3.5*tileX,0.0,-2.0*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);
		room2.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room2.getMaterialData(3))[0];
		wall.Transform.LocalPos = new Vector3(-3.0*tileX,0.0,-1.5*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 90.0, 0.0);
		room2.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room2.getMaterialData(3))[0];
		wall.Transform.LocalPos = new Vector3(-3.0*tileX,0.0,-0.5*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 90.0, 0.0);
		room2.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room2.getMaterialData(3))[0];
		wall.Transform.LocalPos = new Vector3(-3.0*tileX,0.0,0.5*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 90.0, 0.0);
		room2.addGameObject(wall);



		return room2;
	}
	static get RoomT1(){
		var tileX = 6.0;
		var tileZ = 6.0;

		var room1 = SceneObjectFactory.Room2exits10x10;

		room1.setMaterialData(3, MaterialDataFactory.Instance.NewMaterialData);


		var wall;
		wall = SceneObjectFactory.getWall(room1.getMaterialData(1))[0];
		wall.Transform.LocalPos = new Vector3(1.0*tileX,0.0,-4.5*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 90.0, 0.0);
		room1.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room1.getMaterialData(1))[0];
		wall.Transform.LocalPos = new Vector3(1.0*tileX,0.0,-3.5*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 90.0, 0.0);
		room1.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room1.getMaterialData(1))[0];
		wall.Transform.LocalPos = new Vector3(1.5*tileX,0.0,-3.0*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);
		room1.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room1.getMaterialData(1))[0];
		wall.Transform.LocalPos = new Vector3(2.0*tileX,0.0,-2.5*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 90.0, 0.0);
		room1.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room1.getMaterialData(1))[0];
		wall.Transform.LocalPos = new Vector3(2.5*tileX,0.0,-2.0*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);
		room1.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room1.getMaterialData(1))[0];
		wall.Transform.LocalPos = new Vector3(3.5*tileX,0.0,-2.0*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);
		room1.addGameObject(wall);



		wall = SceneObjectFactory.getWall(room1.getMaterialData(1))[0];
		wall.Transform.LocalPos = new Vector3(4.0*tileX,0.0,-1.5*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 90.0, 0.0);
		room1.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room1.getMaterialData(1))[0];
		wall.Transform.LocalPos = new Vector3(4.0*tileX,0.0,-0.5*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 90.0, 0.0);
		room1.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room1.getMaterialData(1))[0];
		wall.Transform.LocalPos = new Vector3(4.0*tileX,0.0,-1.5*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 90.0, 0.0);
		room1.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room1.getMaterialData(1))[0];
		wall.Transform.LocalPos = new Vector3(4.0*tileX,0.0,0.5*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 90.0, 0.0);
		room1.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room1.getMaterialData(1))[0];
		wall.Transform.LocalPos = new Vector3(4.0*tileX,0.0,1.5*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 90.0, 0.0);
		room1.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room1.getMaterialData(1))[0];
		wall.Transform.LocalPos = new Vector3(4.0*tileX,0.0,2.5*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 90.0, 0.0);
		room1.addGameObject(wall);


		wall = SceneObjectFactory.getWall(room1.getMaterialData(1))[0];
		wall.Transform.LocalPos = new Vector3(2.0*tileX,0.0,-0.5*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 90.0, 0.0);
		room1.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room1.getMaterialData(1))[0];
		wall.Transform.LocalPos = new Vector3(2.5*tileX,0.0,-1.0*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);
		room1.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room1.getMaterialData(1))[0];
		wall.Transform.LocalPos = new Vector3(3.0*tileX,0.0,-0.5*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 90.0, 0.0);
		room1.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room1.getMaterialData(3))[0];
		wall.Transform.LocalPos = new Vector3(3.0*tileX,0.0,0.5*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 90.0, 0.0);
		room1.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room1.getMaterialData(3))[0];
		wall.Transform.LocalPos = new Vector3(3.0*tileX,0.0,1.5*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 90.0, 0.0);
		room1.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room1.getMaterialData(3))[0];
		wall.Transform.LocalPos = new Vector3(3.0*tileX,0.0,3.5*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 90.0, 0.0);
		room1.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room1.getMaterialData(3))[0];
		wall.Transform.LocalPos = new Vector3(3.0*tileX,0.0,4.5*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 90.0, 0.0);
		room1.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room1.getMaterialData(3))[0];
		wall.Transform.LocalPos = new Vector3(2.5*tileX,0.0,3.0*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);
		room1.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room1.getMaterialData(3))[0];
		wall.Transform.LocalPos = new Vector3(2.0*tileX,0.0,3.5*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 90.0, 0.0);
		room1.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room1.getMaterialData(3))[0];
		wall.Transform.LocalPos = new Vector3(1.5*tileX,0.0,4.0*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);
		room1.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room1.getMaterialData(3))[0];
		wall.Transform.LocalPos = new Vector3(0.5*tileX,0.0,4.0*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);
		room1.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room1.getMaterialData(3))[0];
		wall.Transform.LocalPos = new Vector3(-0.5*tileX,0.0,4.0*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);
		room1.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room1.getMaterialData(3))[0];
		wall.Transform.LocalPos = new Vector3(-1.5*tileX,0.0,4.0*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);
		room1.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room1.getMaterialData(3))[0];
		wall.Transform.LocalPos = new Vector3(-2.5*tileX,0.0,4.0*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);
		room1.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room1.getMaterialData(3))[0];
		wall.Transform.LocalPos = new Vector3(-3.5*tileX,0.0,4.0*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);
		room1.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room1.getMaterialData(3))[0];
		wall.Transform.LocalPos = new Vector3(0.5*tileX,0.0,3.0*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);
		room1.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room1.getMaterialData(3))[0];
		wall.Transform.LocalPos = new Vector3(-0.5*tileX,0.0,3.0*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);
		room1.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room1.getMaterialData(3))[0];
		wall.Transform.LocalPos = new Vector3(-1.5*tileX,0.0,3.0*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);
		room1.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room1.getMaterialData(3))[0];
		wall.Transform.LocalPos = new Vector3(-2.5*tileX,0.0,3.0*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);
		room1.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room1.getMaterialData(3))[0];
		wall.Transform.LocalPos = new Vector3(-3.5*tileX,0.0,3.0*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);
		room1.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room1.getMaterialData(3))[0];
		wall.Transform.LocalPos = new Vector3(1.5*tileX,0.0,2.0*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);
		room1.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room1.getMaterialData(3))[0];
		wall.Transform.LocalPos = new Vector3(1.0*tileX,0.0,2.5*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 90.0, 0.0);
		room1.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room1.getMaterialData(3))[0];
		wall.Transform.LocalPos = new Vector3(2.5*tileX,0.0,2.0*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);
		room1.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room1.getMaterialData(3))[0];
		wall.Transform.LocalPos = new Vector3(-1.0*tileX,0.0,-4.5*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 90.0, 0.0);
		room1.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room1.getMaterialData(3))[0];
		wall.Transform.LocalPos = new Vector3(-1.0*tileX,0.0,-3.5*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 90.0, 0.0);
		room1.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room1.getMaterialData(3))[0];
		wall.Transform.LocalPos = new Vector3(-1.5*tileX,0.0,-3.0*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);
		room1.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room1.getMaterialData(3))[0];
		wall.Transform.LocalPos = new Vector3(-2.0*tileX,0.0,-3.5*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 90.0, 0.0);
		room1.addGameObject(wall);


		wall = SceneObjectFactory.getWall(room1.getMaterialData(3))[0];
		wall.Transform.LocalPos = new Vector3(-4.5*tileX,0.0,-4.0*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);
		room1.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room1.getMaterialData(3))[0];
		wall.Transform.LocalPos = new Vector3(-3.5*tileX,0.0,-4.0*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);
		room1.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room1.getMaterialData(3))[0];
		wall.Transform.LocalPos = new Vector3(-3.0*tileX,0.0,-3.5*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 90.0, 0.0);
		room1.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room1.getMaterialData(3))[0];
		wall.Transform.LocalPos = new Vector3(-3.0*tileX,0.0,-2.5*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 90.0, 0.0);
		room1.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room1.getMaterialData(3))[0];
		wall.Transform.LocalPos = new Vector3(-3.5*tileX,0.0,-2.0*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);
		room1.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room1.getMaterialData(3))[0];
		wall.Transform.LocalPos = new Vector3(-4.0*tileX,0.0,-2.5*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 90.0, 0.0);
		room1.addGameObject(wall);


		wall = SceneObjectFactory.getWall(room1.getMaterialData(3))[0];
		wall.Transform.LocalPos = new Vector3(-3.5*tileX,0.0,-1.0*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);
		room1.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room1.getMaterialData(3))[0];
		wall.Transform.LocalPos = new Vector3(-3.5*tileX,0.0,1.0*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);
		room1.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room1.getMaterialData(3))[0];
		wall.Transform.LocalPos = new Vector3(-4.5*tileX,0.0,-1.0*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);
		room1.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room1.getMaterialData(3))[0];
		wall.Transform.LocalPos = new Vector3(-4.5*tileX,0.0,1.0*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);
		room1.addGameObject(wall);


		wall = SceneObjectFactory.getWall(room1.getMaterialData(3))[0];
		wall.Transform.LocalPos = new Vector3(-2.0*tileX,0.0,-0.5*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 90.0, 0.0);
		room1.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room1.getMaterialData(3))[0];
		wall.Transform.LocalPos = new Vector3(-2.0*tileX,0.0,-1.5*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 90.0, 0.0);
		room1.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room1.getMaterialData(3))[0];
		wall.Transform.LocalPos = new Vector3(-2.0*tileX,0.0,0.5*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 90.0, 0.0);
		room1.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room1.getMaterialData(3))[0];
		wall.Transform.LocalPos = new Vector3(-2.0*tileX,0.0,1.5*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 90.0, 0.0);
		room1.addGameObject(wall);


		wall = SceneObjectFactory.getWall(room1.getMaterialData(3))[0];
		wall.Transform.LocalPos = new Vector3(-1.5*tileX,0.0,-2.0*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);
		room1.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room1.getMaterialData(3))[0];
		wall.Transform.LocalPos = new Vector3(-0.5*tileX,0.0,-2.0*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);
		room1.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room1.getMaterialData(3))[0];
		wall.Transform.LocalPos = new Vector3(0.5*tileX,0.0,-2.0*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);
		room1.addGameObject(wall);


		wall = SceneObjectFactory.getWall(room1.getMaterialData(3))[0];
		wall.Transform.LocalPos = new Vector3(1.0*tileX,0.0,-0.5*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 90.0, 0.0);
		room1.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room1.getMaterialData(3))[0];
		wall.Transform.LocalPos = new Vector3(1.0*tileX,0.0,-1.5*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 90.0, 0.0);
		room1.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room1.getMaterialData(3))[0];
		wall.Transform.LocalPos = new Vector3(-0.5*tileX,0.0,0.0*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);
		room1.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room1.getMaterialData(3))[0];
		wall.Transform.LocalPos = new Vector3(0.5*tileX,0.0,0.0*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);
		room1.addGameObject(wall);


		wall = SceneObjectFactory.getWall(room1.getMaterialData(3))[0];
		wall.Transform.LocalPos = new Vector3(-0.5*tileX,0.0,2.0*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);
		room1.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room1.getMaterialData(3))[0];
		wall.Transform.LocalPos = new Vector3(-1.5*tileX,0.0,2.0*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);
		room1.addGameObject(wall);


		wall = SceneObjectFactory.getWall(room1.getMaterialData(3))[0];
		wall.Transform.LocalPos = new Vector3(0*tileX,0.0,1.5*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 90.0, 0.0);
		room1.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room1.getMaterialData(3))[0];
		wall.Transform.LocalPos = new Vector3(-0.5*tileX,0.0,1.0*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);
		room1.addGameObject(wall);
		return room1;
	}
	static get Player(){
  		var gameobject = Game.Instance.addGameObject();
  		var rb = new Rigidbody(gameobject, 1);
  		var collider = new SphereCollider(gameobject, 1);

  		var sus = SceneObjectFactory.Susan[0];
  		sus.Transform.LocalPos = new Vector3(0.0, -2000.0, 0.0);
  		sus.Transform.LocalRot = new Vector3(-90.0, 0.0, 0.0);

  		var script = new PlayerScript(gameobject);

  		rb.setPositionConstraints(false, true, false);
  		rb.setRotationConstraints(true, false, true);

  		return [gameobject];
	}


	static get BoxCollider(){
  		var gameobject = Game.Instance.addGameObject();
  		var rb = new Rigidbody(gameobject, 0);
  		var collider = new BoxCollider(gameobject, new Vector3(1.0, 1.0, 1.0));

  		return [gameobject];
	}

	static getFloorNxM(N,M){
		var room = new Room();

		var tileX = 6.0;
		var tileZ = 6.0;

		room.setMaterialData(0,MaterialDataFactory.Instance.NewMaterialData );

  		var gameobject = Game.Instance.addGameObject();
		room.RIG = gameobject;

		for (var i = 0; i < N; i++) {
			for (var j = 0; j < M; j++) {
				var floor = SceneObjectFactory.getFloorTile(room.getMaterialData(0))[0];
				floor.Transform.LocalPos = new Vector3((i-N/2.0+0.5)*tileX,0.0,(j-M/2.0+0.5)*tileZ);

				room.addGameObject(floor);
			}
		}


		var box = SceneObjectFactory.BoxCollider[0];
		var collider = box.getComponent(BoxCollider);
		collider.Size = new Vector3(tileX * N, 1.0, tileZ * M)

		room.addGameObject(box);

		return room;
	}

	static get Floor15x15(){
		return SceneObjectFactory.getFloorNxM(15,15);
	}
	static get Floor10x10(){
		return SceneObjectFactory.getFloorNxM(10,10);
	}
	static get Floor6x6(){
		return SceneObjectFactory.getFloorNxM(6,6);
	}

	static get Room4exits10x10(){
		var room = SceneObjectFactory.Room4exits10x10Base;

		var tileX = 6.0;
		var tileZ = 6.0;

		var column;
		column = SceneObjectFactory.getColumn(room.getMaterialData(2))[0];
		column.Transform.LocalPos = new Vector3(5.0*tileX,0.0,5.0*tileZ);
		column.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);
		room.addGameObject(column);
		
		column = SceneObjectFactory.getColumn(room.getMaterialData(2))[0];
		column.Transform.LocalPos = new Vector3(5.0*tileX,0.0,-5.0*tileZ);
		column.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);
		room.addGameObject(column);
		
		column = SceneObjectFactory.getColumn(room.getMaterialData(2))[0];
		column.Transform.LocalPos = new Vector3(-5.0*tileX,0.0,5.0*tileZ);
		column.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);
		room.addGameObject(column);
		
		column = SceneObjectFactory.getColumn(room.getMaterialData(2))[0];
		column.Transform.LocalPos = new Vector3(-5.0*tileX,0.0,-5.0*tileZ);
		column.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);
		room.addGameObject(column);
		
		column = SceneObjectFactory.getColumn(room.getMaterialData(2))[0];
		column.Transform.LocalPos = new Vector3(-1.0*tileX,0.0,5.0*tileZ);
		column.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);
		room.addGameObject(column);
		
		column = SceneObjectFactory.getColumn(room.getMaterialData(2))[0];
		column.Transform.LocalPos = new Vector3(1.0*tileX,0.0,5.0*tileZ);
		column.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);
		room.addGameObject(column);
		
		column = SceneObjectFactory.getColumn(room.getMaterialData(2))[0];
		column.Transform.LocalPos = new Vector3(-1.0*tileX,0.0,-5.0*tileZ);
		column.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);
		room.addGameObject(column);
		
		column = SceneObjectFactory.getColumn(room.getMaterialData(2))[0];
		column.Transform.LocalPos = new Vector3(1.0*tileX,0.0,-5.0*tileZ);
		column.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);
		room.addGameObject(column);
		
		column = SceneObjectFactory.getColumn(room.getMaterialData(2))[0];
		column.Transform.LocalPos = new Vector3(5.0*tileX,0.0,1.0*tileZ);
		column.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);
		room.addGameObject(column);
		
		column = SceneObjectFactory.getColumn(room.getMaterialData(2))[0];
		column.Transform.LocalPos = new Vector3(5.0*tileX,0.0,-1.0*tileZ);
		column.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);
		room.addGameObject(column);
		
		column = SceneObjectFactory.getColumn(room.getMaterialData(2))[0];
		column.Transform.LocalPos = new Vector3(-5.0*tileX,0.0,1.0*tileZ);
		column.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);
		room.addGameObject(column);
		
		column = SceneObjectFactory.getColumn(room.getMaterialData(2))[0];
		column.Transform.LocalPos = new Vector3(-5.0*tileX,0.0,-1.0*tileZ);
		column.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);
		room.addGameObject(column);

		return room;

	}

	static get Room3exits10x10(){
		var room = SceneObjectFactory.Room4exits10x10Base;
		var tileX = 6.0;
		var tileZ = 6.0;

		var wall;
		wall = SceneObjectFactory.getWall(room.getMaterialData(1))[0];
		wall.Transform.LocalPos = new Vector3(-0.5*tileX,0.0,5.0*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);
		room.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room.getMaterialData(1))[0];
		wall.Transform.LocalPos = new Vector3(0.5*tileX,0.0,5.0*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);
		room.addGameObject(wall);


		var column;
		column = SceneObjectFactory.getColumn(room.getMaterialData(2))[0];
		column.Transform.LocalPos = new Vector3(5.0*tileX,0.0,5.0*tileZ);
		column.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);
		room.addGameObject(column);
		
		column = SceneObjectFactory.getColumn(room.getMaterialData(2))[0];
		column.Transform.LocalPos = new Vector3(5.0*tileX,0.0,-5.0*tileZ);
		column.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);
		room.addGameObject(column);
		
		column = SceneObjectFactory.getColumn(room.getMaterialData(2))[0];
		column.Transform.LocalPos = new Vector3(-5.0*tileX,0.0,5.0*tileZ);
		column.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);
		room.addGameObject(column);
		
		column = SceneObjectFactory.getColumn(room.getMaterialData(2))[0];
		column.Transform.LocalPos = new Vector3(-5.0*tileX,0.0,-5.0*tileZ);
		column.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);
		room.addGameObject(column);
		
		column = SceneObjectFactory.getColumn(room.getMaterialData(2))[0];
		column.Transform.LocalPos = new Vector3(-1.0*tileX,0.0,-5.0*tileZ);
		column.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);
		room.addGameObject(column);
		
		column = SceneObjectFactory.getColumn(room.getMaterialData(2))[0];
		column.Transform.LocalPos = new Vector3(1.0*tileX,0.0,-5.0*tileZ);
		column.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);
		room.addGameObject(column);
		
		column = SceneObjectFactory.getColumn(room.getMaterialData(2))[0];
		column.Transform.LocalPos = new Vector3(5.0*tileX,0.0,1.0*tileZ);
		column.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);
		room.addGameObject(column);
		
		column = SceneObjectFactory.getColumn(room.getMaterialData(2))[0];
		column.Transform.LocalPos = new Vector3(5.0*tileX,0.0,-1.0*tileZ);
		column.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);
		room.addGameObject(column);
		
		column = SceneObjectFactory.getColumn(room.getMaterialData(2))[0];
		column.Transform.LocalPos = new Vector3(-5.0*tileX,0.0,1.0*tileZ);
		column.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);
		room.addGameObject(column);
		
		column = SceneObjectFactory.getColumn(room.getMaterialData(2))[0];
		column.Transform.LocalPos = new Vector3(-5.0*tileX,0.0,-1.0*tileZ);
		column.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);
		room.addGameObject(column);

		return room;

	}
	static get Room2exits10x10(){
		var room = SceneObjectFactory.Room4exits10x10Base;
		var tileX = 6.0;
		var tileZ = 6.0;

		var wall;
		wall = SceneObjectFactory.getWall(room.getMaterialData(1))[0];
		wall.Transform.LocalPos = new Vector3(-0.5*tileX,0.0,5.0*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);
		room.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room.getMaterialData(1))[0];
		wall.Transform.LocalPos = new Vector3(0.5*tileX,0.0,5.0*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);
		room.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room.getMaterialData(1))[0];
		wall.Transform.LocalPos = new Vector3(5.0*tileX,0.0,0.5*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 90.0, 0.0);
		room.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room.getMaterialData(1))[0];
		wall.Transform.LocalPos = new Vector3(5.0*tileX,0.0,-0.5*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 90.0, 0.0);
		room.addGameObject(wall);


		var column;
		column = SceneObjectFactory.getColumn(room.getMaterialData(2))[0];
		column.Transform.LocalPos = new Vector3(5.0*tileX,0.0,5.0*tileZ);
		column.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);
		room.addGameObject(column);
		
		column = SceneObjectFactory.getColumn(room.getMaterialData(2))[0];
		column.Transform.LocalPos = new Vector3(5.0*tileX,0.0,-5.0*tileZ);
		column.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);
		room.addGameObject(column);
		
		column = SceneObjectFactory.getColumn(room.getMaterialData(2))[0];
		column.Transform.LocalPos = new Vector3(-5.0*tileX,0.0,5.0*tileZ);
		column.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);
		room.addGameObject(column);
		
		column = SceneObjectFactory.getColumn(room.getMaterialData(2))[0];
		column.Transform.LocalPos = new Vector3(-5.0*tileX,0.0,-5.0*tileZ);
		column.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);
		room.addGameObject(column);
		
		column = SceneObjectFactory.getColumn(room.getMaterialData(2))[0];
		column.Transform.LocalPos = new Vector3(-1.0*tileX,0.0,-5.0*tileZ);
		column.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);
		room.addGameObject(column);
		
		column = SceneObjectFactory.getColumn(room.getMaterialData(2))[0];
		column.Transform.LocalPos = new Vector3(1.0*tileX,0.0,-5.0*tileZ);
		column.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);
		room.addGameObject(column);
		column = SceneObjectFactory.getColumn(room.getMaterialData(2))[0];
		column.Transform.LocalPos = new Vector3(-5.0*tileX,0.0,1.0*tileZ);
		column.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);
		room.addGameObject(column);
		
		column = SceneObjectFactory.getColumn(room.getMaterialData(2))[0];
		column.Transform.LocalPos = new Vector3(-5.0*tileX,0.0,-1.0*tileZ);
		column.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);
		room.addGameObject(column);

		return room;

	}
	static get Room1exits10x10(){
		var room = SceneObjectFactory.Room4exits10x10Base;
		var tileX = 6.0;
		var tileZ = 6.0;

		var wall;
		wall = SceneObjectFactory.getWall(room.getMaterialData(1))[0];
		wall.Transform.LocalPos = new Vector3(-0.5*tileX,0.0,5.0*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);
		room.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room.getMaterialData(1))[0];
		wall.Transform.LocalPos = new Vector3(0.5*tileX,0.0,5.0*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);
		room.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room.getMaterialData(1))[0];
		wall.Transform.LocalPos = new Vector3(5.0*tileX,0.0,0.5*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 90.0, 0.0);
		room.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room.getMaterialData(1))[0];
		wall.Transform.LocalPos = new Vector3(5.0*tileX,0.0,-0.5*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 90.0, 0.0);
		room.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room.getMaterialData(1))[0];
		wall.Transform.LocalPos = new Vector3(-5.0*tileX,0.0,0.5*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 90.0, 0.0);
		room.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room.getMaterialData(1))[0];
		wall.Transform.LocalPos = new Vector3(-5.0*tileX,0.0,-0.5*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 90.0, 0.0);
		room.addGameObject(wall);


		var column;
		column = SceneObjectFactory.getColumn(room.getMaterialData(2))[0];
		column.Transform.LocalPos = new Vector3(5.0*tileX,0.0,5.0*tileZ);
		column.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);
		room.addGameObject(column);
		
		column = SceneObjectFactory.getColumn(room.getMaterialData(2))[0];
		column.Transform.LocalPos = new Vector3(5.0*tileX,0.0,-5.0*tileZ);
		column.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);
		room.addGameObject(column);
		
		column = SceneObjectFactory.getColumn(room.getMaterialData(2))[0];
		column.Transform.LocalPos = new Vector3(-5.0*tileX,0.0,5.0*tileZ);
		column.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);
		room.addGameObject(column);
		
		column = SceneObjectFactory.getColumn(room.getMaterialData(2))[0];
		column.Transform.LocalPos = new Vector3(-5.0*tileX,0.0,-5.0*tileZ);
		column.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);
		room.addGameObject(column);
		
		column = SceneObjectFactory.getColumn(room.getMaterialData(2))[0];
		column.Transform.LocalPos = new Vector3(-1.0*tileX,0.0,-5.0*tileZ);
		column.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);
		room.addGameObject(column);
		
		column = SceneObjectFactory.getColumn(room.getMaterialData(2))[0];
		column.Transform.LocalPos = new Vector3(1.0*tileX,0.0,-5.0*tileZ);
		column.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);
		room.addGameObject(column);

		return room;

	}
	static get Room4exits10x10Base(){
		var room = SceneObjectFactory.Floor10x10;
		room.setMaterialData(1, MaterialDataFactory.Instance.NewMaterialData);
		room.setMaterialData(2, MaterialDataFactory.Instance.NewMaterialData);

		var tileX = 6.0;
		var tileZ = 6.0;

		var wall;
		wall = SceneObjectFactory.getWall(room.getMaterialData(1))[0];
		wall.Transform.LocalPos = new Vector3(5.0*tileX,0.0,4.5*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 90.0, 0.0);
		room.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room.getMaterialData(1))[0];
		wall.Transform.LocalPos = new Vector3(5.0*tileX,0.0,3.5*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 90.0, 0.0);
		room.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room.getMaterialData(1))[0];
		wall.Transform.LocalPos = new Vector3(5.0*tileX,0.0,2.5*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 90.0, 0.0);
		room.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room.getMaterialData(1))[0];
		wall.Transform.LocalPos = new Vector3(5.0*tileX,0.0,1.5*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 90.0, 0.0);
		room.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room.getMaterialData(1))[0];
		wall.Transform.LocalPos = new Vector3(5.0*tileX,0.0,-1.5*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 90.0, 0.0);
		room.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room.getMaterialData(1))[0];
		wall.Transform.LocalPos = new Vector3(5.0*tileX,0.0,-2.5*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 90.0, 0.0);
		room.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room.getMaterialData(1))[0];
		wall.Transform.LocalPos = new Vector3(5.0*tileX,0.0,-3.5*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 90.0, 0.0);
		room.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room.getMaterialData(1))[0];
		wall.Transform.LocalPos = new Vector3(5.0*tileX,0.0,-4.5*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 90.0, 0.0);
		room.addGameObject(wall);

		
		wall = SceneObjectFactory.getWall(room.getMaterialData(1))[0];
		wall.Transform.LocalPos = new Vector3(-5.0*tileX,0.0,4.5*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 90.0, 0.0);
		room.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room.getMaterialData(1))[0];
		wall.Transform.LocalPos = new Vector3(-5.0*tileX,0.0,3.5*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 90.0, 0.0);
		room.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room.getMaterialData(1))[0];
		wall.Transform.LocalPos = new Vector3(-5.0*tileX,0.0,2.5*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 90.0, 0.0);
		room.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room.getMaterialData(1))[0];
		wall.Transform.LocalPos = new Vector3(-5.0*tileX,0.0,1.5*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 90.0, 0.0);
		room.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room.getMaterialData(1))[0];
		wall.Transform.LocalPos = new Vector3(-5.0*tileX,0.0,-1.5*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 90.0, 0.0);
		room.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room.getMaterialData(1))[0];
		wall.Transform.LocalPos = new Vector3(-5.0*tileX,0.0,-2.5*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 90.0, 0.0);
		room.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room.getMaterialData(1))[0];
		wall.Transform.LocalPos = new Vector3(-5.0*tileX,0.0,-3.5*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 90.0, 0.0);
		room.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room.getMaterialData(1))[0];
		wall.Transform.LocalPos = new Vector3(-5.0*tileX,0.0,-4.5*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 90.0, 0.0);
		room.addGameObject(wall);

		
		wall = SceneObjectFactory.getWall(room.getMaterialData(1))[0];
		wall.Transform.LocalPos = new Vector3(-4.5*tileX,0.0,5.0*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);
		room.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room.getMaterialData(1))[0];
		wall.Transform.LocalPos = new Vector3(-3.5*tileX,0.0,5.0*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);
		room.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room.getMaterialData(1))[0];
		wall.Transform.LocalPos = new Vector3(-2.5*tileX,0.0,5.0*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);
		room.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room.getMaterialData(1))[0];
		wall.Transform.LocalPos = new Vector3(-1.5*tileX,0.0,5.0*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);
		room.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room.getMaterialData(1))[0];
		wall.Transform.LocalPos = new Vector3(1.5*tileX,0.0,5.0*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);
		room.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room.getMaterialData(1))[0];
		wall.Transform.LocalPos = new Vector3(2.5*tileX,0.0,5.0*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);
		room.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room.getMaterialData(1))[0];
		wall.Transform.LocalPos = new Vector3(3.5*tileX,0.0,5.0*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);
		room.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room.getMaterialData(1))[0];
		wall.Transform.LocalPos = new Vector3(4.5*tileX,0.0,5.0*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);
		room.addGameObject(wall);


		
		wall = SceneObjectFactory.getWall(room.getMaterialData(1))[0];
		wall.Transform.LocalPos = new Vector3(-4.5*tileX,0.0,-5.0*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);
		room.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room.getMaterialData(1))[0];
		wall.Transform.LocalPos = new Vector3(-3.5*tileX,0.0,-5.0*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);
		room.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room.getMaterialData(1))[0];
		wall.Transform.LocalPos = new Vector3(-2.5*tileX,0.0,-5.0*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);
		room.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room.getMaterialData(1))[0];
		wall.Transform.LocalPos = new Vector3(-1.5*tileX,0.0,-5.0*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);
		room.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room.getMaterialData(1))[0];
		wall.Transform.LocalPos = new Vector3(1.5*tileX,0.0,-5.0*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);
		room.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room.getMaterialData(1))[0];
		wall.Transform.LocalPos = new Vector3(2.5*tileX,0.0,-5.0*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);
		room.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room.getMaterialData(1))[0];
		wall.Transform.LocalPos = new Vector3(3.5*tileX,0.0,-5.0*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);
		room.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room.getMaterialData(1))[0];
		wall.Transform.LocalPos = new Vector3(4.5*tileX,0.0,-5.0*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);
		room.addGameObject(wall);

		return room;

	}

	static get StartRoom(){
		var room = SceneObjectFactory.Floor6x6;
		room.setMaterialData(1, MaterialDataFactory.Instance.NewMaterialData);
		room.setMaterialData(2, MaterialDataFactory.Instance.NewMaterialData);

		var tileX = 6.0;
		var tileZ = 6.0;

		var wall;
		wall = SceneObjectFactory.getWall(room.getMaterialData(1))[0];
		wall.Transform.LocalPos = new Vector3(3.0*tileX,0.0,2.5*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 90.0, 0.0);
		room.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room.getMaterialData(1))[0];
		wall.Transform.LocalPos = new Vector3(3.0*tileX,0.0,1.5*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 90.0, 0.0);
		room.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room.getMaterialData(1))[0];
		wall.Transform.LocalPos = new Vector3(3.0*tileX,0.0,0.5*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 90.0, 0.0);
		room.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room.getMaterialData(1))[0];
		wall.Transform.LocalPos = new Vector3(3.0*tileX,0.0,-0.5*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 90.0, 0.0);
		room.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room.getMaterialData(1))[0];
		wall.Transform.LocalPos = new Vector3(3.0*tileX,0.0,-1.5*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 90.0, 0.0);
		room.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room.getMaterialData(1))[0];
		wall.Transform.LocalPos = new Vector3(3.0*tileX,0.0,-2.5*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 90.0, 0.0);
		room.addGameObject(wall);


		wall = SceneObjectFactory.getWall(room.getMaterialData(1))[0];
		wall.Transform.LocalPos = new Vector3(-3.0*tileX,0.0,2.5*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 90.0, 0.0);
		room.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room.getMaterialData(1))[0];
		wall.Transform.LocalPos = new Vector3(-3.0*tileX,0.0,1.5*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 90.0, 0.0);
		room.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room.getMaterialData(1))[0];
		wall.Transform.LocalPos = new Vector3(-3.0*tileX,0.0,0.5*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 90.0, 0.0);
		room.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room.getMaterialData(1))[0];
		wall.Transform.LocalPos = new Vector3(-3.0*tileX,0.0,-0.5*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 90.0, 0.0);
		room.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room.getMaterialData(1))[0];
		wall.Transform.LocalPos = new Vector3(-3.0*tileX,0.0,-1.5*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 90.0, 0.0);
		room.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room.getMaterialData(1))[0];
		wall.Transform.LocalPos = new Vector3(-3.0*tileX,0.0,-2.5*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 90.0, 0.0);
		room.addGameObject(wall);


		wall = SceneObjectFactory.getWall(room.getMaterialData(1))[0];
		wall.Transform.LocalPos = new Vector3(2.5*tileX,0.0,-3.0*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);
		room.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room.getMaterialData(1))[0];
		wall.Transform.LocalPos = new Vector3(1.5*tileX,0.0,-3.0*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);
		room.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room.getMaterialData(1))[0];
		wall.Transform.LocalPos = new Vector3(0.5*tileX,0.0,-3.0*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);
		room.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room.getMaterialData(1))[0];
		wall.Transform.LocalPos = new Vector3(-0.5*tileX,0.0,-3.0*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);
		room.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room.getMaterialData(1))[0];
		wall.Transform.LocalPos = new Vector3(-1.5*tileX,0.0,-3.0*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);
		room.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room.getMaterialData(1))[0];
		wall.Transform.LocalPos = new Vector3(-2.5*tileX,0.0,-3.0*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);
		room.addGameObject(wall);


		wall = SceneObjectFactory.getWall(room.getMaterialData(1))[0];
		wall.Transform.LocalPos = new Vector3(2.5*tileX,0.0,3.0*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);
		room.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room.getMaterialData(1))[0];
		wall.Transform.LocalPos = new Vector3(1.5*tileX,0.0,3.0*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);
		room.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room.getMaterialData(1))[0];
		wall.Transform.LocalPos = new Vector3(-1.5*tileX,0.0,3.0*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);
		room.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room.getMaterialData(1))[0];
		wall.Transform.LocalPos = new Vector3(-2.5*tileX,0.0,3.0*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);
		room.addGameObject(wall);


		var column;
		column = SceneObjectFactory.getColumn(room.getMaterialData(2))[0];
		column.Transform.LocalPos = new Vector3(-3.0*tileX,0.0,3.0*tileZ);
		column.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);
		room.addGameObject(column);

		column = SceneObjectFactory.getColumn(room.getMaterialData(2))[0];
		column.Transform.LocalPos = new Vector3(-3.0*tileX,0.0,-3.0*tileZ);
		column.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);
		room.addGameObject(column);

		column = SceneObjectFactory.getColumn(room.getMaterialData(2))[0];
		column.Transform.LocalPos = new Vector3(3.0*tileX,0.0,3.0*tileZ);
		column.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);
		room.addGameObject(column);

		column = SceneObjectFactory.getColumn(room.getMaterialData(2))[0];
		column.Transform.LocalPos = new Vector3(3.0*tileX,0.0,-3.0*tileZ);
		column.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);
		room.addGameObject(column);

		column = SceneObjectFactory.getColumn(room.getMaterialData(2))[0];
		column.Transform.LocalPos = new Vector3(-1.0*tileX,0.0,3.0*tileZ);
		column.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);
		room.addGameObject(column);

		column = SceneObjectFactory.getColumn(room.getMaterialData(2))[0];
		column.Transform.LocalPos = new Vector3(1.0*tileX,0.0,3.0*tileZ);
		column.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);
		room.addGameObject(column);

		return room;
	}


	static get Corridor(){
		var room = SceneObjectFactory.getFloorNxM(2,6);
		room.setMaterialData(1, MaterialDataFactory.Instance.NewMaterialData);
		room.setMaterialData(2, MaterialDataFactory.Instance.NewMaterialData);

		var tileX = 6.0;
		var tileZ = 6.0;

		var wall;
		wall = SceneObjectFactory.getWall(room.getMaterialData(1))[0];
		wall.Transform.LocalPos = new Vector3(1.0*tileX,0.0,2.5*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 90.0, 0.0);
		room.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room.getMaterialData(1))[0];
		wall.Transform.LocalPos = new Vector3(1.0*tileX,0.0,1.5*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 90.0, 0.0);
		room.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room.getMaterialData(1))[0];
		wall.Transform.LocalPos = new Vector3(1.0*tileX,0.0,0.5*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 90.0, 0.0);
		room.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room.getMaterialData(1))[0];
		wall.Transform.LocalPos = new Vector3(1.0*tileX,0.0,-0.5*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 90.0, 0.0);
		room.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room.getMaterialData(1))[0];
		wall.Transform.LocalPos = new Vector3(1.0*tileX,0.0,-1.5*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 90.0, 0.0);
		room.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room.getMaterialData(1))[0];
		wall.Transform.LocalPos = new Vector3(1.0*tileX,0.0,-2.5*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 90.0, 0.0);
		room.addGameObject(wall);


		wall = SceneObjectFactory.getWall(room.getMaterialData(1))[0];
		wall.Transform.LocalPos = new Vector3(-1.0*tileX,0.0,2.5*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 90.0, 0.0);
		room.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room.getMaterialData(1))[0];
		wall.Transform.LocalPos = new Vector3(-1.0*tileX,0.0,1.5*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 90.0, 0.0);
		room.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room.getMaterialData(1))[0];
		wall.Transform.LocalPos = new Vector3(-1.0*tileX,0.0,0.5*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 90.0, 0.0);
		room.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room.getMaterialData(1))[0];
		wall.Transform.LocalPos = new Vector3(-1.0*tileX,0.0,-0.5*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 90.0, 0.0);
		room.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room.getMaterialData(1))[0];
		wall.Transform.LocalPos = new Vector3(-1.0*tileX,0.0,-1.5*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 90.0, 0.0);
		room.addGameObject(wall);

		wall = SceneObjectFactory.getWall(room.getMaterialData(1))[0];
		wall.Transform.LocalPos = new Vector3(-1.0*tileX,0.0,-2.5*tileZ);
		wall.Transform.LocalRot = new Vector3(0.0, 90.0, 0.0);
		room.addGameObject(wall);

		return room;
	}

	static get Susan(){
  		var gameobject = Game.Instance.addGameObject();
		var mat = new Material(gameobject, MaterialDataFactory.Instance.NewMaterialData);
		var mesh = new Mesh(gameobject);
  		mesh.Index = 0;

    	mesh.Path = "Models/Susan.json";
	    mat.TexturePath = "Textures/SusanTexture.png";
  		mat.shadingType = "Phong";

  		return [gameobject];
	}

	static getFloorTile(matData){
  		var gameobject = Game.Instance.addGameObject();
		var mat = new Material(gameobject, matData);
		var mesh = new Mesh(gameobject);
  		mesh.Index = 1;

    	mesh.Path = "Models/freeDungeon.json";
	    
	    mat.TexturePath = "Textures/dungeonTexture.png";
  		mat.shadingType = "Phong";

  		mat.SpecularType = "Phong";

  		return [gameobject];
	}

	static getWall(matData){
  		var gameobject = Game.Instance.addGameObject();
		var mat = new Material(gameobject, matData);
		var mesh = new Mesh(gameobject);
  		mesh.Index = 0;

    	mesh.Path = "Models/freeDungeon.json";
	    
	    mat.TexturePath = "Textures/dungeonTexture.png";
  		mat.shadingType = "Phong";

  		mat.SpecularType = "Phong";
  		return [gameobject];
	}

	static getColumn(matData){
  		var gameobject = Game.Instance.addGameObject();
		var mat = new Material(gameobject, matData);
		var mesh = new Mesh(gameobject);
  		mesh.Index = 5;

    	mesh.Path = "Models/freeDungeon.json";
	    
	    mat.TexturePath = "Textures/dungeonTexture.png";
  		mat.shadingType = "Phong";

  		return [gameobject];
	}

	static getDoor(matData){
  		var gameobject = Game.Instance.addGameObject();
		var mat = new Material(gameobject, matData);
		var mesh = new Mesh(gameobject);
  		mesh.Index = 0;

    	mesh.Path = "Models/Door.json";
	    
	    mat.TexturePath = "Textures/DoorTexture.png";
	    mat.NormalMapPath = "Textures/DoorNormal.jpg";
	    mat.NormalMapSpace = "Tangent";
  		mat.shadingType = "Phong";


  		var gameobject1 = Game.Instance.addGameObject();
		var mat1 = new Material(gameobject1, matData);
		var mesh1 = new Mesh(gameobject1);
  		mesh1.Index = 1;


    	mesh1.Path = "Models/Door.json";
	    
	    mat1.TexturePath = "Textures/DoorTexture.png";
	    mat1.NormalMapPath = "Textures/DoorNormal.jpg";
	    mat1.NormalMapSpace = "Tangent";
  		mat1.shadingType = "Phong";


  		var gameobject2 = Game.Instance.addGameObject();
		var mat2 = new Material(gameobject2, matData);
		var mesh2 = new Mesh(gameobject2);
  		mesh2.Index = 2;

    	mesh2.Path = "Models/Door.json";
	    
	    mat2.TexturePath = "Textures/DoorTexture.png";
	    mat2.NormalMapPath = "Textures/DoorNormal.jpg";
	    mat2.NormalMapSpace = "Tangent";
  		mat2.shadingType = "Phong";

  		gameobject1.Transform.Parent = gameobject.Transform;
  		gameobject2.Transform.Parent = gameobject.Transform;

  		return [gameobject, gameobject1, gameobject2];
	}

	static get Flashlight(){
  		var gameobject = Game.Instance.addGameObject();
		var mat = new Material(gameobject);
		var mesh = new Mesh(gameobject);
  		mesh.Index = 0;

    	mesh.Path = "Models/Flashlight3.0.json";
	    
	    mat.TexMix = 1.0;
	    mat.TexturePath = "Textures/DiffuseFlashlight.jpeg";
	    mat.NormalMapPath = "Textures/DiffuseNormalFlashlight.jpeg";
	    mat.NormalMapSpace = "Tangent";

	    mat.UseAmbient = true;
	    mat.AmbientColor = new Vector4(0.5, 0.5, 0.5, 1.0);

  		mat.shadingType = "Phong";

  		return [gameobject];
	}

	static getKey(matData){
  		var gameobject = Game.Instance.addGameObject();
		var mat = new Material(gameobject, matData);
		var mesh = new Mesh(gameobject);
  		mesh.Index = 0;

    	mesh.Path = "Models/The Key.json";
	    
	    mat.TexMix = 0.0;
	    mat.UseDiffuse = true;
	    mat.DiffuseColor = new Vector4(1.0,0.843,0.0,1.0);

	    mat.AmbientColor = new Vector4(0.2, 0.2, 0.2, 1.0);
	    mat.UseEmission = true;
	    mat.EmissionColor = new Vector4(0.125,0.10,0.0,0.2);

  		mat.shadingType = "Phong";

  		return [gameobject];

	}

	static get DirectionalLight(){
  		var gameobject = Game.Instance.addGameObject();
    	var light = new DirectionalLight(gameobject);
    	light.Color = new Vector4(1.0,0.96,0.84,1.0);

  		return light;
	}

	static get PerspectiveCamera(){
  		var gameobject = Game.Instance.addGameObject();
  		var cam = new Camera(gameobject);

  		return cam;
	}
}