
var canvas_name = "canvas";

var canvas_width ; 
var canvas_height; 


function draw_to_canvas(){
    var canvas = document.getElementById(canvas_name);

    if (canvas.getContext){
        canvas_width = canvas.clientWidth;
        var ctx = canvas.getContext('2d');

        
        draw_pieces(ctx);
    }
}


function draw_pieces(ctx){
/*
    ctx.fillRect(50,50,300,200);
    ctx.clearRect(120,80,200,140);
    ctx.strokeRect(200,20,180,260);
*/
    ctx.beginPath();
    ctx.arc(Math.random()*canvas_width, 100,50, 0,Math.PI*2, false);
    ctx.stroke();
}
