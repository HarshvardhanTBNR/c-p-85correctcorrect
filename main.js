var canvas=new fabric.Canvas('myCanvas')
var super_hero_width=30;
var super_hero_height=30;
var player_x=10;
var player_y=10;
var super_hero_image="";



    
function player_update(){
    fabric.Image.fromURL("hulk.jpg",function(Img){
    player_object=Img;
    player_object.scaleToWidth(150);
    player_object.scaleToHeight(140);
    player_object.set({
    top:player_y,
    left:player_x
    });
    canvas.add(player_object);
    });
    }
    
    function new_image(get_image){
    fabric.Image.fromURL(get_image,function(Img){
    super_hero_image=Img;
    super_hero_image.scaleToWidth(super_hero_width);
    super_hero_image.scaleToHeight(super_hero_height);
    super_hero_image.set({
    top:player_y,
    left:player_x
    });
    canvas.add(super_hero_image);
    });
    }