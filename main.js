img="";
objects=[];
status="";

function setup()
{
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="status:detecting objects";
}

function modelLoaded()
{
console.log("model Loaded!");
status = true;
objectDetector.detect(img, gotResult);
}

function gotResult(error, results)
{
if(error)
{
    console.log(error);
}
console.log(results);

}

function preload()
{
    img = loadImage("dog_cat.jpg");
}

function draw()
{
    image(img, 0, 0, 640, 450);
    fill("#0000FF");
    text("Dog", 45, 75);
    noFill();
    stroke("#FF0000");
    rect(30, 60, 450, 640);

    fill("#0000FF");
text("cat",350, 100);
noFill();
stroke("#0000FF");
rect(350, 100, 250, 300);
}
