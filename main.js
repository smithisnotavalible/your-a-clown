noseX = 0
noseY = 0
righteyeX = 0
righteyeY = 0
function preload() {
    nose = loadImage("https://i.postimg.cc/6QZrCMqQ/clown-nose-removebg-preview.png");
    hat = loadImage("https://i.postimg.cc/jd8m1SX7/istockphoto-494238567-612x612-removebg-preview.png")
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO)
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses)
}

function modelLoaded() {
    console.log('PoseNet Is Initialized');
}

function draw() {
    image(video, 0, 0, 300, 300);
    image(nose, noseX - 15, noseY - 10, 30, 30);
    image(hat, righteyeX - 100, righteyeY - 135, 220, 120);
}

function take_snapshot() {
   save('myFilterImage.png')
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x
        noseY = results[0].pose.nose.y
        righteyeX = results[0].pose.rightEye.x
        righteyeY = results[0].pose.rightEye.y
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y);
    }
}