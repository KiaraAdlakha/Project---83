canvas= document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

var Last_position_of_X,Last_position_of_Y;

color="Black";
widthOfLine=3;

Mouse_Event="";

width = screen.width;
height= screen.height;
new_width= width - 70;
new_height= height - 300;

if (width<992) 
{
    document.getElementById("myCanvas").width = new_width;
    document.getElementById("myCanvas").height = new_height;
}

canvas.addEventListener("mousedown" , my_mousedown);
function my_mousedown(e)
{
    Mouse_Event="mousedown";
    color=document.getElementById("colour").value;
widthOfLine=document.getElementById("width_of_line").value;
}
canvas.addEventListener("mouseup" , my_mouseup);
function my_mouseup(e)
{
    Mouse_Event="mouseup";
}
canvas.addEventListener("mouseleave" , my_mouseleave);
function my_mouseleave(e)
{
    Mouse_Event="mouseleave"
}
canvas.addEventListener("mousemove" , my_mousemove);
function my_mousemove(e)
{
    current_position_of_X = e.clientX - canvas.offsetLeft;
    current_position_of_y = e.clientY - canvas.offsetTop;
    console.log("mousemove");
    console.log(current_position_of_X);
    console.log(current_position_of_y);
    if (Mouse_Event == "mousedown") 
    {
      console.log("hi");
      ctx.beginPath();
      ctx.strokeStyle= color;
      ctx.lineWidth = widthOfLine;
      ctx.moveTo(Last_position_of_X,Last_position_of_Y);
      ctx.lineTo(current_position_of_X,current_position_of_y);

      ctx.stroke();
    }
     
    Last_position_of_X=current_position_of_X;
    Last_position_of_Y=current_position_of_y;
}
canvas.addEventListener("touchstart" , my_touchstart);
function my_touchstart(e)
{
    Last_position_of_touch_X= e.touches[0].clientX - canvas.offsetLeft;
    Last_position_of_touch_Y= e.touches[0].clientY - canvas.offsetTop;
    color=document.getElementById("colour").value;
    widthOfLine=document.getElementById("width_of_line").value;
}
canvas.addEventListener("touchmove" , my_touchmove);
function my_touchmove(e)
{
current_position_of_touch_X = e.touches[0].clientX - canvas.offsetLeft;
current_position_of_touch_Y  = e.touches[0].clientY - canvas.offsetTop;

ctx.beginPath();
ctx.strokeStyle= color;
ctx.lineWidth = widthOfLine;
ctx.moveTo(Last_position_of_touch_X,Last_position_of_touch_Y);
ctx.lineTo(current_position_of_touch_X,current_position_of_touch_Y);
ctx.stroke();

Last_position_of_touch_X=current_position_of_touch_X;
Last_position_of_touch_Y=current_position_of_touch_Y;
}
function clear_area()
{
    ctx.clearRect(0,0,canvas.width,canvas.height);
}