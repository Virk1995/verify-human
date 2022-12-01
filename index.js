var checkbox=document.querySelector(".checkbox");
var submitted=document.querySelector("button");
checkbox.disabled=true;
submitted.disabled=true;

var elements=document.querySelectorAll(".colorbox");

elements.forEach(function(element){

  var color= colorGenerate();
  $(element).html(color);
  $(element).css("background-color",color);
  var selectColor=$(".selectcolor").html(color);
  $(element).click(function(){
    if(selectColor.html()===$(this).html()){
      checkbox.disabled=false;
      submitted.disabled=false;
      checkbox.checked=true;
      submitted.classList.remove("btn-light");
      submitted.classList.add("btn-success");
      alert("Thanks for choosing color, please submit for futher verification")
    }
    else{
      alert("please select the correct color for verification");
     location.reload();
    }

  });


});
function colorGenerate(){
var colorCode="123456ABCDEF";
var color="#";
for(var i=0; i<6; i++){
  var randomNumber=Math.random();
  randomNumber=Math.floor(randomNumber*12);
  color= color+colorCode[randomNumber];
}
return color;
}
