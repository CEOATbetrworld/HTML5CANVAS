var c = document.querySelector("#c");
var ctx = c.getContext("2d");

/*var image = new Image();

image.onload = function(){
    console.log("Loaded image");
    ctx.drawImage(image,0,0,c.width,c.height);
    var savedImage = c.toDataURL();
    window.open(savedImage);
    ;
}
image.src="images/canvas.png";

 ctx.fillStyle = "blue";
 ctx.strokeStyle ="green";
 ctx.strokeRect(50,50,100,100);
 ctx.beginPath();
 ctx.moveTo(75,75);
 ctx.lineTo(125,125);
 ctx.lineTo(125,75);
 ctx.fill();*/
 //ctx.clearRect(0, 0, c.width, c.height);//this
 //c.width = c.width;//and this can be used to clear entire canvas
 ctx.font = "36pt Impact";
 ctx.textAlign = "center";

 ctx.fillStyle = "white";
 ctx.fillText("CANVAS MEMES!",c.width / 2, 40);

 ctx.strokeStyle = "black";
 ctx.lineWidth = 3;
 ctx.strokeText("CANVAS MEMES!",c.width / 2, 40);


