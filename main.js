Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quaility:90
});

camera = document.getElementById("camera");

webcam.attach( '#camera' );

function take_snapshot()
{
    webcam.snap(function(data_url){
        document.getElementById("result").innerHTML = '<img id="captured_image src="'+data_url+'"/>';
    });
}

console.log('m15 version:', m15.version);

classifier = m15.Imageclassifier('https://teachablemachine.withgoogle.com/models/v_sl95BzE/model.json',modelLoaded);

function modelLoaded() {
    console.log('Model loaded!');
}

function  check(){
    img = document.getElementById('captured_Image');
}

function gotResut(error, result){
    if(error){
        console.error(error);
    }else{
        console.log(result);
        document.getElementById("result_object_name").innerHTML = result[0].label;
        document.getElementById("result_object_accuracy").innerHTML = result[0].confidence.toFixed(3);
    }
}