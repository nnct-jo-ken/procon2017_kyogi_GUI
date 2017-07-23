
// constant
var canvas_name = "canvas";

// params
var synth_canvas = null;


// test
var test_piece1 = [{x:20,y:20}, {x:100,y:50}, {x:50,y:100},{x:0,y:90}];

var synth_json1 = "";



// laod when page loaded
function init_canvas(){
  var canvas = document.getElementById(canvas_name);

  if (canvas.getContext){
    var ctx = canvas.getContext('2d');
    
    synth_canvas = new SynthCanvas(ctx);
  }
}

// 
function draw_to_canvas(){
  synth_canvas.draw_piece(test_piece1);
}

// draw synth
class SynthCanvas{
  constructor(ctx){
    this.ctx = ctx;
    this.init_canvas();
  }

  init_canvas(){
    this.ctx.pathStyle = "#fff";
  }

  draw_piece(piece){
    this.draw_polygon(piece);
  }
  
  draw_polygon(point_list){

    for(var i in point_list){
      this.ctx.lineTo(point_list[i].x, point_list[i].y);
    }

    this.ctx.closePath();
    this.ctx.stroke();
  }
}


class Synth{
  constructor(synth){
    this.piece1 = "";
    this.piece2 = "";
  }
}
