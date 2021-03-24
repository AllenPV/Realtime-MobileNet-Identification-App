function setup() {
    Canvas = createCanvas(300, 300);
    Canvas.center();
    Video = createCapture(VIDEO);
    Video.hide();
    classifier = ml5.imageClassifier("MobileNet", modelLoaded);
}

function modelLoaded() {
    console.log("Model is Loaded");
}

function draw() {
    image(Video, 0, 0, 300, 300);
    classifier.classify(Video, gotResults)
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else{
        document.getElementById("Object_Answer").innerHTML = results[0].label;
    document.getElementById("Accuracy_Answer").innerHTML = results[0].confidence.toFixed(3);

}
}