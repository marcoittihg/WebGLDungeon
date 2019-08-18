
function main() {

  GlobalValues.getValue("BaseDir").Value = "http://127.0.0.1:8887/";

  var gameobject2 = Game.Instance.addGameObject();

  gameobject2.Transform.LocalPos = new Vector3(1.0,1.0,0.0);

  var gameobject = Game.Instance.addGameObject();
  var mat = new Material(gameobject);
  var mesh = new Mesh(gameobject);
  var ts = new TestScript(gameobject);

  var gameobjectl = Game.Instance.addGameObject();
  var light = new DirectionalLight(gameobjectl);

  gameobjectl.Transform.LocalPos = new Vector3(0.0,0.0,6.0);
  gameobjectl.Transform.LocalRot = new Vector3(-90.0,0.0,0.0);

  mat.addLight(light);

  gameobject.Transform.LocalPos = new Vector3(0.0,0.0,3.0);
  gameobject.Transform.LocalRot = new Vector3(-90.0,0.0,0.0);

  var camobj = Game.Instance.addGameObject();
  cam = new Camera(camobj);
  camobj.Transform.LocalPos = new Vector3(0.0,0.0,0.0);
  camobj.Transform.LocalRot = new Vector3(-20.0,0.0,0.0);
  Game.Instance.Graphics.ActiveCamera = cam;


  MeshLoader.Instance.getMeshData("Models/Susan.json")
  mesh.Path = "Models/Susan.json";

  mat.TexturePath = "Models/SusanTexture.png";

  mat.shadingType = "Phong";
  //mat.shadingType = "Gouraud";

  //mat.SpecularType = "Blinn";
  mat.SpecularType = "Phong";
  mat.SpecularGamma = 64.0;

  mat.UseAmbient = true;
  mat.UseEmission = true;
  mat.EmissionColor = new Vector4(0.5,0.5,0.0,0.0);

  mat.TexMix = 0.5;

  gameobject.Transform.Parent = gameobject2.Transform;

  Game.Instance.mainLoop().then(alert);
}

main();


