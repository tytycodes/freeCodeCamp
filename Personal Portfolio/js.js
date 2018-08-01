/*
Ty Washburn
Personal Portfolio project assignment for freeCodeCamp 
JS file
*/

/* 
After clicking once, the animation goes away. How do I make it animate every time?
*/
$(document).ready(function(){
  
$("#title-button").click(function(){
    $("#title-button").addClass("animated pulse");
  });  

$("#intro-btn").click(function(){
    $("#intro-btn").addClass("animated pulse");
  });  

$("#port-btn").click(function(){
    $("#port-btn").addClass("animated pulse");
  }); 

$("#con-btn").click(function(){
    $("#con-btn").addClass("animated pulse");
  }); 
  
});
 