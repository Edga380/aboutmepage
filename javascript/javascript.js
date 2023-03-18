
document.addEventListener('click', Image_On);

function Image_On(image_id) {
    if(image_id.target.id == "image01"){
        document.getElementById("img-to-display").src="images/bubblespacewars01.jpg";
    }
    else if(image_id.target.id == "image02"){
        document.getElementById("img-to-display").src="images/hobbywebsite01.png";
    }
    else if(image_id.target.id == "image03"){
        document.getElementById("img-to-display").src="images/labyrinth2d01.png";
    }
    if(image_id.target.id != ""){
        document.getElementById("img-fullscreen").style.display = "block";
    }
}

function Image_Off() {
    document.getElementById("img-fullscreen").style.display = "none";
}