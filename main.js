
function main() {
  Input.initialize();
  Input.initialize();
  Input.initialize();

  GlobalValues.getValue("BaseDir").Value = "http://127.0.0.1:8887/";
  var light = SceneObjectFactory.DirectionalLight;
  var camera = SceneObjectFactory.PerspectiveCamera;

  var player = SceneObjectFactory.Player[0];
  player.Transform.LocalPos = new Vector3(0.0, 10.0, 0.0);

  GlobalValues.getValue("Player").Value = player;

  camera.GameObject.Transform.LocalPos = new Vector3(0.0, 0.0, 0.0);
  camera.GameObject.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);
  light.GameObject.Transform.LocalRot = new Vector3(40.0, 20.0, 0.0);

  var startRoom = SceneObjectFactory.StartRoom;
  startRoom.RIG.Transform.LocalPos = new Vector3(0.0, 0.0, 0.0);
  startRoom.RIG.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);
  startRoom.forEachMaterial(function (mat) {
    mat.addLight(light);
    mat.UseAmbient = true;
  })
  var roomEnabler = new RoomEnabler(
      startRoom.RIG,
      startRoom,
      player.Transform,
      100.0
  );

  var corridor1 = SceneObjectFactory.Corridor;
  corridor1.RIG.Transform.LocalPos = new Vector3(0.0, 0.0, 36.0);
  corridor1.RIG.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);
  corridor1.forEachMaterial(function (mat) {
    mat.addLight(light);
    mat.UseAmbient = true;
  })
  roomEnabler = new RoomEnabler(
      corridor1.RIG,
      corridor1,
      player.Transform,
      100.0
  );

  var room1 = SceneObjectFactory.Room1;
  room1.forEachMaterial(function (mat) {
      mat.addLight(light);
      mat.UseAmbient = true;
  })
  roomEnabler = new RoomEnabler(
      room1.RIG,
      room1,
      player.Transform,
      100.0
  );

  var corridor2 = SceneObjectFactory.Corridor;
  corridor2.RIG.Transform.LocalPos = new Vector3(48.0, 0.0, 84.0);
  corridor2.RIG.Transform.LocalRot = new Vector3(0.0, 90.0, 0.0);
  corridor2.forEachMaterial(function (mat) {
    mat.addLight(light);
    mat.UseAmbient = true;
  })
  roomEnabler = new RoomEnabler(
      corridor2.RIG,
      corridor2,
      player.Transform,
      100.0
  );

  var room2 = SceneObjectFactory.Room2;
  room2.forEachMaterial(function (mat) {
      mat.addLight(light);
      mat.UseAmbient = true;
  });
  roomEnabler = new RoomEnabler(
      room2.RIG,
      room2,
      player.Transform,
      100.0
  );

  var corridor3 = SceneObjectFactory.Corridor;
  corridor3.RIG.Transform.LocalPos = new Vector3(-48.0, 0.0, 84.0);
  corridor3.RIG.Transform.LocalRot = new Vector3(0.0, 90.0, 0.0);
  corridor3.forEachMaterial(function (mat) {
    mat.addLight(light);
    mat.UseAmbient = true;
  })
  roomEnabler = new RoomEnabler(
      corridor3.RIG,
      corridor3,
      player.Transform,
      100.0
  );

  var room3 = SceneObjectFactory.Room3;
  room3.forEachMaterial(function (mat) {
    mat.addLight(light);
    mat.UseAmbient = true;
  })
  roomEnabler = new RoomEnabler(
      room3.RIG,
      room3,
      player.Transform,
      100.0
  );

  var corridor4 = SceneObjectFactory.Corridor;
  corridor4.RIG.Transform.LocalPos = new Vector3(96.0, 0.0, 132.0);
  corridor4.RIG.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);
  corridor4.forEachMaterial(function (mat) {
    mat.addLight(light);
    mat.UseAmbient = true;
  })
  roomEnabler = new RoomEnabler(
      corridor4.RIG,
      corridor4,
      player.Transform,
      100.0
  );

  var corridor5 = SceneObjectFactory.Corridor;
  corridor5.RIG.Transform.LocalPos = new Vector3(0.0, 0.0, 132.0);
  corridor5.RIG.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);
  corridor5.forEachMaterial(function (mat) {
    mat.addLight(light);
    mat.UseAmbient = true;
  })
  roomEnabler = new RoomEnabler(
      corridor5.RIG,
      corridor5,
      player.Transform,
      100.0
  );

  var corridor6 = SceneObjectFactory.Corridor;
  corridor6.RIG.Transform.LocalPos = new Vector3(-96.0, 0.0, 132.0);
  corridor6.RIG.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);
  corridor6.forEachMaterial(function (mat) {
    mat.addLight(light);
    mat.UseAmbient = true;
  })
  roomEnabler = new RoomEnabler(
      corridor6.RIG,
      corridor6,
      player.Transform,
      100.0
  );

  var room4 = SceneObjectFactory.Room4;
  room4.forEachMaterial(function (mat) {
      mat.addLight(light);
      mat.UseAmbient = true;
  });
  roomEnabler = new RoomEnabler(
      room4.RIG,
      room4,
      player.Transform,
      100.0
  );


  var corridor7 = SceneObjectFactory.Corridor;
  corridor7.RIG.Transform.LocalPos = new Vector3(48.0, 0.0, 180.0);
  corridor7.RIG.Transform.LocalRot = new Vector3(0.0, 90.0, 0.0);
  corridor7.forEachMaterial(function (mat) {
    mat.addLight(light);
    mat.UseAmbient = true;
  })
  roomEnabler = new RoomEnabler(
      corridor7.RIG,
      corridor7,
      player.Transform,
      100.0
  );


  var room5 = SceneObjectFactory.Room5;
  room5.forEachMaterial(function (mat) {
      mat.addLight(light);
      mat.UseAmbient = true;
  });
  roomEnabler = new RoomEnabler(
      room5.RIG,
      room5,
      player.Transform,
      100.0
  );

  var corridor8 = SceneObjectFactory.Corridor;
  corridor8.RIG.Transform.LocalPos = new Vector3(-48.0, 0.0, 180.0);
  corridor8.RIG.Transform.LocalRot = new Vector3(0.0, 90.0, 0.0);
  corridor8.forEachMaterial(function (mat) {
    mat.addLight(light);
    mat.UseAmbient = true;
  })
  roomEnabler = new RoomEnabler(
      corridor8.RIG,
      corridor8,
      player.Transform,
      100.0
  );


  var room6 = SceneObjectFactory.Room6;
  room6.forEachMaterial(function (mat) {
      mat.addLight(light);
      mat.UseAmbient = true;
  });
  roomEnabler = new RoomEnabler(
      room6.RIG,
      room6,
      player.Transform,
      100.0
  );


  var corridor4 = SceneObjectFactory.Corridor;
  corridor4.RIG.Transform.LocalPos = new Vector3(96.0, 0.0, 228.0);
  corridor4.RIG.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);
  corridor4.forEachMaterial(function (mat) {
    mat.addLight(light);
    mat.UseAmbient = true;
  })
  roomEnabler = new RoomEnabler(
      corridor4.RIG,
      corridor4,
      player.Transform,
      100.0
  );

  var corridor5 = SceneObjectFactory.Corridor;
  corridor5.RIG.Transform.LocalPos = new Vector3(0.0, 0.0, 228.0);
  corridor5.RIG.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);
  corridor5.forEachMaterial(function (mat) {
    mat.addLight(light);
    mat.UseAmbient = true;
  })
  roomEnabler = new RoomEnabler(
      corridor5.RIG,
      corridor5,
      player.Transform,
      100.0
  );

  var corridor6 = SceneObjectFactory.Corridor;
  corridor6.RIG.Transform.LocalPos = new Vector3(-96.0, 0.0, 228.0);
  corridor6.RIG.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);
  corridor6.forEachMaterial(function (mat) {
    mat.addLight(light);
    mat.UseAmbient = true;
  })
  roomEnabler = new RoomEnabler(
      corridor6.RIG,
      corridor6,
      player.Transform,
      100.0
  );


  var room7 = SceneObjectFactory.Room7;
  room7.forEachMaterial(function (mat) {
      mat.addLight(light);
      mat.UseAmbient = true;
  });
  roomEnabler = new RoomEnabler(
      room7.RIG,
      room7,
      player.Transform,
      100.0
  );


  var corridor12 = SceneObjectFactory.Corridor;
  corridor12.RIG.Transform.LocalPos = new Vector3(48.0, 0.0, 276.0);
  corridor12.RIG.Transform.LocalRot = new Vector3(0.0, 90.0, 0.0);
  corridor12.forEachMaterial(function (mat) {
    mat.addLight(light);
    mat.UseAmbient = true;
  })
  roomEnabler = new RoomEnabler(
      corridor12.RIG,
      corridor12,
      player.Transform,
      100.0
  );

  var room8 = SceneObjectFactory.Room8;
  room8.forEachMaterial(function (mat) {
      mat.addLight(light);
      mat.UseAmbient = true;
  });
  roomEnabler = new RoomEnabler(
      room8.RIG,
      room8,
      player.Transform,
      100.0
  );

  var corridor13 = SceneObjectFactory.Corridor;
  corridor13.RIG.Transform.LocalPos = new Vector3(-48.0, 0.0, 276.0);
  corridor13.RIG.Transform.LocalRot = new Vector3(0.0, 90.0, 0.0);
  corridor13.forEachMaterial(function (mat) {
    mat.addLight(light);
    mat.UseAmbient = true;
  })
  roomEnabler = new RoomEnabler(
      corridor13.RIG,
      corridor13,
      player.Transform,
      100.0
  );


  var room9 = SceneObjectFactory.Room9;
  room9.forEachMaterial(function (mat) {
      mat.addLight(light);
      mat.UseAmbient = true;
  });
  roomEnabler = new RoomEnabler(
      room9.RIG,
      room9,
      player.Transform,
      100.0
  );

  var corridor14 = SceneObjectFactory.Corridor;
  corridor14.RIG.Transform.LocalPos = new Vector3(0.0, 0.0, 324.0);
  corridor14.RIG.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);
  corridor14.forEachMaterial(function (mat) {
    mat.addLight(light);
    mat.UseAmbient = true;
  })
  roomEnabler = new RoomEnabler(
      corridor14.RIG,
      corridor14,
      player.Transform,
      100.0
  );


  var room10 = SceneObjectFactory.Room10;
  room10.forEachMaterial(function (mat) {
      mat.addLight(light);
      mat.UseAmbient = true;
  });
  roomEnabler = new RoomEnabler(
      room10.RIG,
      room10,
      player.Transform,
      100.0
  );

  /*var room10 = SceneObjectFactory.Room4exits10x10;
  room10.RIG.Transform.LocalPos = new Vector3(0.0, 0.0, 372.0);
  room10.RIG.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);
  room10.forEachMaterial(function (mat) {
    mat.addLight(light);
    mat.UseAmbient = true;
  })

  var corridor15 = SceneObjectFactory.Corridor;
  corridor15.RIG.Transform.LocalPos = new Vector3(0.0, 0.0, 420.0);
  corridor15.RIG.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);
  corridor15.forEachMaterial(function (mat) {
    mat.addLight(light);
    mat.UseAmbient = true;
  })


  var room11 = SceneObjectFactory.Room1exits10x10;
  room11.RIG.Transform.LocalPos = new Vector3(0.0, 0.0, 468.0);
  room11.RIG.Transform.LocalRot = new Vector3(0.0, 0.0, 0.0);
  room11.forEachMaterial(function (mat) {
    mat.addLight(light);
    mat.UseAmbient = true;
  });*/

  Game.Instance.Graphics.ActiveCamera = camera;


  camera.GameObject.Transform.Parent = player.Transform;

  //Game.Instance.Graphics.AmbientLight = new Vector4(0.8, 0.75, 0.65, 1.0);
  Game.Instance.Graphics.AmbientLight = new Vector4(0.65, 0.807, 0.95, 1.0);

  Game.Instance.mainLoop().then(alert);
}

main();


