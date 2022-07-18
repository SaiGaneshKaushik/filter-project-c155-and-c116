nosex = 0;
nosey=0;
function preload(){
   clown_img = loadImage("https://i.postimg.cc/WzRLpvCn/moustache-PNG15.png");
}
function setup(){
   canvas = createCanvas(300,300);
   canvas.center();
   video = createCapture(VIDEO);
   video.size(300,300);
   video.hide();
   posenet = ml5.poseNet(video, modelLoaded);
   posenet.on('pose',gotPoses);
}
function gotPoses(results)
{
   if(results.length > 0){
      console.log(results);
      nosex= results[0].pose.nose.x -28;
      nosey= results[0].pose.nose.y -1;
      console.log("nose x=" + nosex);
      console.log("nose y=" + nosey);
   }
}
function modelLoaded(){
   console.log("posenet is succussfully initialized");
}
function draw(){
  image(video, 0,0,300,300);
  image(clown_img, nosex, nosey, 65, 65);
}
function take_snapshot(){
   save("myfilter.png");
}