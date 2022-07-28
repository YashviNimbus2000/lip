lipX=0;
lipY=0;

function preload()
{
lip_red = loadImage('https://i.postimg.cc/PxFvYgkv/l1.png');
}

function setup()
{
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}


function take_snapshot()
{
save('myFilterImage.png');
}
 
function modelLoaded()
{
    console.log('PoseNet Is Initialized');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        lipX = results[0].pose.nose.x -15;
        lipY = results[0].pose.nose.y +5;
        console.log("lip x =" + lipX);
        console.log("lip y =" + lipY);
    }
}

function draw()
{
image(video, 0, 0, 300, 300);
image(lip_red, lipX, lipY, 30, 30);
}


