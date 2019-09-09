
function main() {


  GlobalValues.getValue("BaseDir").Value = "http://127.0.0.1:8887/";


  var gameobject = Game.Instance.addGameObject();
  console.log(gameobject)
  var mat = new Material(gameobject);
  var mesh = new Mesh(gameobject);
  mesh.Index = 5;
  gameobject.Transform.LocalPos = new Vector3(0.0,-1.0,3.0);
  gameobject.Transform.LocalRot = new Vector3(0.0,0.0,0.0);
  gameobject.Transform.LocalScale = new Vector3(1.0,1.0,1.0);
  var rb = new Rigidbody(gameobject, 0);
  mat.TilingX = 10;
  mat.TilingY = 10;
  var gameobjectl = Game.Instance.addGameObject();
  var light = new DirectionalLight(gameobjectl);

  gameobjectl.Transform.LocalPos = new Vector3(0.0,0.0,0.0);
  gameobjectl.Transform.LocalRot = new Vector3(30.0,0.0,0.0);

  mat.addLight(light);


  var camobj = Game.Instance.addGameObject();
  cam = new Camera(camobj);
  camobj.Transform.LocalPos = new Vector3(0.0,4.0,-1.0);
  camobj.Transform.LocalRot = new Vector3(30.0,0.0,0.0);
  Game.Instance.Graphics.ActiveCamera = cam;


  MeshLoader.Instance.getMeshData("Models/freeDungeon.json")
  mesh.Path = "Models/freeDungeon.json";

  //mat.TexturePath = "Models/stone_tile2.png";
  //mat.NormalMapPath = "Models/stone_tile2_normal.png";
  mat.NormalMapSpace = "Tangent";
  mat.TexMix = 0.0;
  mat.shadingType = "Phong";
  //mat.shadingType = "Gouraud";


  var coll = new BoxCollider(gameobject, new Vector3(10,0,10));

  Game.Instance.mainLoop().then(alert);
}

main();


