var canvas = new fabric.Canvas("myCanvas");
var player_x = 10;
var player_y = 10;
var block_width = 30;
var block_height = 30;
var player_object = "";
var block_object = "";


function player_update(){
    fabric.Image.fromURL("player.png",function(Img){
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(150);
        player_object.set({
            top: player_y, left: player_x
        });
        canvas.add(player_object);
    });
}




function block_update(getimage){
    fabric.Image.fromURL(getimage,function(Img){
        block_object = Img;
        block_object.scaleToWidth(block_width);
        block_object.scaleToHeight(block_height);
        block_object.set({
            top: player_y, left: player_x
        });
        canvas.add(block_object);
    });
}

window.addEventListener("keydown",key_down);

function key_down(e){
      var keypressed = e.keyCode;
    
      if(e.shiftKey == true &&  keypressed == "80")
      {
          console.log("shift+p");
          block_width = block_width +10;
          block_height = block_height + 10;
          document.getElementById("current_width").innerHTML = block_width;
          document.getElementById("current_height").innerHTML = block_height;
      }

      if(e.shiftKey == true &&  keypressed == "77")
      {
          console.log("shift+m");
          block_width = block_width - 10;
          block_height = block_height - 10;
          document.getElementById("current_width").innerHTML = block_width;
          document.getElementById("current_height").innerHTML = block_height;
      }

      if(keypressed == '71')
      {
          block_update("Green_ranger.jpg");
          console.log("G")
      }


      if(keypressed == '82')
      {
          block_update("Red_ranger.jpg");
          console.log("R")
      }

      if(keypressed == '89')
      {
          block_update("Yellow_ranger.jpg");
          console.log("Y")
      }

      if(keypressed == '80')
      {
          block_update("Pink_ranger.jpg");
          console.log("P")
      }

      if(keypressed == '66')
      {
          block_update("Blue_ranger.jpg");
          console.log("B")
      }

}