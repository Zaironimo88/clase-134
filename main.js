nariz_x=0;
nariz_y=0;
mano_derecha_x=0;
mano_izquierda_x=0;
diferencia=0;
function setup()
{
video=createCapture(VIDEO);
video.size(350,350);
canvas=createCanvas(550,540);
canvas.position(560,150);
poseNet = ml5.poseNet(video,modelLoaded);
poseNet.on('pose',obtener_poses);
}

function modelLoaded()
{
console.log("posenet iniciando");
}

function draw()
{
background('#F35D3D');
document.getElementById("square_side").innerHTML = "El alto y ancho del cuadrado será: " + diferencia +"px";
fill('#DA3714');
stroke('#DA3714');
square(nariz_x, nariz_y, diferencia)
}



function obtener_poses(results)
{
if(results.length > 0)
{
console.log(results);
nariz_x = results[0].pose.nose.x;
nariz_y = results[0].pose.nose.y;
mano_derecha_x = results[0].pose.rightWrist.x;
mano_izquierda_x = results[0].pose.leftWrist.x;
diferencia = floor(mano_izquierda_x - mano_derecha_x);
}
}