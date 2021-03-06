
// constant
var canvas_name = "canvas";

// params
var synth_canvas = null;



// test
var test_piece1 = [{x:20,y:20}, {x:100,y:50}, {x:50,y:100},{x:0,y:90}];

var synth_json1 = "";


// manager and util for HTML5's Canvas

class Canvas{
  constructor(canvas_name){

    this.canvas_name = canvas_name;

    this.canvas = document.getElementById(canvas_name);

    if (canvas.getContext){
      this.ctx = canvas.getContext('2d');
    }

  }

  init_canvas(){
    // layout
    this.width = this.canvas.width;
    this.height =  this.canvas.height;

    // design
    this.ctx.pathStyle = "#fff";
    this.ctx.fillStyle = "#6699ff";
    this.ctx.font = "14px ''";

    //user
    this.background_style = "#ccffff";
    this.arrow_headlen = 10;

  }
  
  reset_screen(){
    var fill_style  = this.ctx.fillStyle;
    this.ctx.fillStyle = this.background_style;

    this.ctx.fillRect(0, 0, this.width, this.height);
    
    this.ctx.fillStyle = fill_style;
  }

  draw_polygon(point_list){

    this.ctx.beginPath();
    for(var i in point_list){
      this.ctx.lineTo(point_list[i].x, point_list[i].y);
    }
    this.ctx.closePath();

    this.ctx.fill();
    this.ctx.stroke();
  }

  draw_text(x,y,text){
    this.ctx.strokeText(text, x, y);
  }

  draw_arrow(fromx, fromy, tox, toy){
    var headlen = this.arrow_headlen;
    var angle = Math.atan2(toy-fromy,tox-fromx);
    
    this.ctx.moveTo(fromx, fromy);
    this.ctx.lineTo(tox, toy);
    this.ctx.lineTo(tox-headlen*Math.cos(angle-Math.PI/6),toy-headlen*Math.sin(angle-Math.PI/6));
    this.ctx.moveTo(tox, toy);
    this.ctx.lineTo(tox-headlen*Math.cos(angle+Math.PI/6),toy-headlen*Math.sin(angle+Math.PI/6));
    this.ctx.stroke();
  }
}


// draw synth
class SynthCanvas extends Canvas{

  draw_piece(piece){
    this.reset_screen();

    this.draw_polygon(piece);
    this.draw_text(10,200,"ああああ");
    this.draw_arrow(10,20,100,200);

  }

}

// synth
class Synth{
  constructor(synth){
    this.piece1 = "";
    this.piece2 = "";
  }
}


// in index.html

// laod when page loaded

function init_canvas(){
    
  synth_canvas = new SynthCanvas(canvas_name);
  synth_canvas.init_canvas();
}



// 
function draw_to_canvas(){
  synth_canvas.draw_piece(test_piece1);
}


