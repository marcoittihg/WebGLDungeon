
var v0 = Vector3.Zero();
console.log(v0);

var v1  = new Vector3(1.0,0.0,0.0);
var v2 = new Vector3(0.0,2.0,0.0);

var sum = Vector3.add(v1,v2);
var dot = Vector3.dot(v1,v2);
var cross = Vector3.cross(v1,v2);

console.log(sum);
console.log(dot);
console.log(cross);

var m31 = new Matr3x3([10,20,10,4,5,6,2,3,5]);
var m32 = new Matr3x3([3,2,4,3,3,9,4,4,2]);
var m3id = Matr3x3.Identity();

console.log(m31);
console.log(m3id)
console.log(m31.invert());

console.log(Matr3x3.multiply(m31, m32));
console.log(Matr3x3.multiplyVector(m31,v1));

var v4 = Vector4.Zero();
var m4id = Matr4x4.Identity();
var m4 = new Matr4x4([1,3,5,6,7,6,7,8,9,10,11,100,13,14,15,16]);

var v5 = new Vector4(1.0, 0.0, 2.0, -1.0);

console.log(Vector4.add(v4,v5));
console.log(m4);
console.log(m4.invert());
console.log(Matr4x4.multiply(m4, m4.invert()));

console.log(Matr4x4.multiplyVector(m4, new Vector4(1.0,0.0,0.0,0.0)));

console.log(m4.getSub3x3());

var baseDir = "http://127.0.0.1:8887/";
var susanModel;
get_json(baseDir + 'Susan.json', function(loadedModel){susanModel = loadedModel;});
console.log(susanModel);
