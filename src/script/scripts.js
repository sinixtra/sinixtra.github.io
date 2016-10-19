$(document).ready(function(){
//hamburger button
  $( ".hamburger" ).click(function() {
  if ($(window).width() >= 600){
		$(".main").css("width", "50%")
	}
  $( ".menu" ).slideToggle( "slow", function() {
  $( ".hamburger" ).hide();
  $( ".cross" ).show();
  });
  });
//x button 
  $( ".cross" ).click(function() {
  $( ".menu" ).slideToggle( "slow", function() {
  $( ".cross" ).hide();
  $( ".hamburger" ).show();
  if ($(window).width() >= 600){
      $(".main").css("width", "75%")
   }
  });
  });

//this changes active tav
$("#nav li").click(function(e){
  e.preventDefault();
  $("#nav li.active").removeClass("active");//remove any active class
  $(this).addClass("active");//add active class to selected teb
});

//this section loads info to main

//bio
$("#me").click(function(){
  $(".main").load("src/tem/bio.html");
});

//projects
$("#pro").click(function(){
  $(".main").load("src/tem/project.html");
});

//Hobbies
$("#fun").click(function(){
  $(".main").load("src/tem/hobbies.html");
});

//contact info
$("#cont").click(function(){
  $(".main").load("src/tem/contact.html");
});

});

$( ".hamburger" ).hide();
