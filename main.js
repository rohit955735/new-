Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});
camera = document.getElementById("cam");
Webcam.attach("#camera");
function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innberHTML='<img id="selfie_image" src="'+data_uri+'"/>';
    })
};        
console.log("ml5 version:",ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/0qQaRosvG/model.json",modelLoaded);
function modelLoaded(){
    console.log("modelLoaded");
}