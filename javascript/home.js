var dropdown=document.getElementById("dropdown-container");


$(document).ready(function(){
// navigation bar changing active state and scrolling to target element on click
  $(".nav a").click(function(event) {
      event.preventDefault();


      var clickedid=$(this).attr("href");
      console.log(clickedid);
      if(clickedid=="#contact-section"){

        $('html,body').animate({
            scrollTop: $(clickedid).offset().top-100
        }, 1000);
        if(dropdown.style.display=="block"){
          dropdown.style.display="none";
        }
      }
else{
      $('html,body').animate({
          scrollTop: $(clickedid).offset().top
      }, 1000);
      if(dropdown.style.display=="block"){
        dropdown.style.display="none";
      }
    }

  });


$(".service-icon a").click(function(e){
  e.preventDefault();
  var id=$(this).attr("href");

  $(".service-label").each(function(){
    $(this).removeClass("active");
  })
$("#slide"+id).addClass("active");

   $("#carouselHead").carousel(parseInt(id)-1);




})

$(document).scroll(function(){


// function to hide the elements after reaching top position on scroll
  $(".fadeout").each(function(){
    if($(this).offset().top<150){
      $(this).css("opacity","0");
    }
    else{
      $(this).css("opacity","1");
    }
  })

// function to change the active tab on the main navbar on scrolling

$(".scrollspy").each(function(){
var currentTop=$(document).scrollTop();
var min=$(this).offset().top-140;
var max=$(this).offset().top+$(this).height();

if(currentTop>=min && currentTop<=max){
  $("#navbar a").each(function(){

    $(this).removeClass("active");
  });
var id=$(this).attr("id");
$("a[href='#"+id+"']").addClass("active");
}

})


})
// function to change the active services navbar after clicking prev icon
$("#previous").click(function(e){
let count=1;
$(".carousel-item").each(function(){
  if($(this).offset().top!=0){
    let temp;
    if(count!=1){
      temp=count-1;
    }
    else{
      temp=6
    }
    $(".service-label").each(function(){
      $(this).removeClass("active");
    })
$(".service-label[id='slide"+temp+"']").addClass("active");
  }
  count++;
})

})
// function to change the active services navbar after clicking next icon
$("#next").click(function(e){
let count=1;
$(".carousel-item").each(function(){
  if($(this).offset().top!=0){
    let temp;
    if(count!=6){
      temp=count+1;
    }
    else{
      temp=1
    }
    $(".service-label").each(function(){
      $(this).removeClass("active");
    })
    $(".service-label[id='slide"+temp+"']").addClass("active");
  }
  count++;
})

});



})

// function for dropdown


// function for expanding drop down on click

document.getElementById("collapse-container").addEventListener("click",function(){

  if(dropdown.style.display=="block"){
     dropdown.style.display="none";

  }
  else{

        dropdown.style.display="block";

  }
});

window.addEventListener("resize",function(){
  if(document.body.offsetWidth>720){

    dropdown.style.display="none";

  }


});
