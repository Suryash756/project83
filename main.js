 var last_positionx;
var last_positiony;

canvas=document.getElementById("myCanvas");
color="black";
width=5;
ctx=canvas.getContext("2d");

screen_width=screen.width;

canvas_width=screen.width-70;
canvas_height=screen.height-300;

if(screen_width<992){

    document.getElementById("myCanvas").width=canvas_width;
    document.getElementById("myCanvas").height=canvas_height;
}

canvas.addEventListener("touchstart",My_touch_start);

function My_touch_start(e){

color=document.getElementById("input_color").value;
width=document.getElementById("input_width").value;

last_positionx=e.touches[0].clientX-canvas.offsetLeft;
last_positiony=e.touches[0].clientY-canvas.offsetTop;
}


canvas.addEventListener("touchmove",my_touchmove);

function my_touchmove(e){

 currentpositionX=e.touches[0].clientX-canvas.offsetLeft;
 currentpositionY=e.touches[0].clientY-canvas.offsetTop;

 ctx.beginPath();
 ctx.strokeStyle=color;
 ctx.lineWidth=width;
 ctx.moveTo(last_positionx,last_positiony);
 ctx.lineTo(currentpositionX,currentpositionY);
 ctx.stroke();

 last_positionx=currentpositionX;
 last_positiony=currentpositionY;
}

function clear_canvas(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}