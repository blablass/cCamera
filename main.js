var speed = window.webkitSpeechRecognition;
var recognition = new speed();
function start(){
    document.getElementById("giveAid").innerHTML = "";
    recognition.start();
}
recognition.onresult = function (EVENT){
    console.log(EVENT);
    content = EVENT.results[0][0].transcript
    console.log(content)  
    document.getElementById("giveAid").innerHTML = content 
    speak() 
}
function speak(){
    var sinth = window.speechSynthesis;
    var dalta = document.getElementById("giveAid").value;
    var ihatevar = new SpeechSynthesisUtterance(dalta);
    sinth.speak(ihatevar);
    Webcam.attach(camera);
}
Webcam.set({
    width:360,
    height:250,
    image_format:"png",
    png_quality:100
});
camera = document.getElementById("camera");
