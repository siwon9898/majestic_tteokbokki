

window.addEventListener('load', function () {

  var history = document.querySelectorAll("#history");
  var colors = document.querySelectorAll("#colors");
  var yours = document.querySelectorAll("#yours");
  var txts = document.querySelectorAll("#pg3_detailtxt")
  var menuItem = [history, colors, yours];
  // menuItem.forEach(function(){
  console.log(txts)
  // })

  menuItem.forEach(one => 
    // console.log(one[1])
    one[1].addEventListener("mouseover", function(event){
      for( var i = 0 ; i < 2 ; i++ ) {
        one[i].style.width = "30rem";
        one[i].style.transition= "0.5s ease-in-out";
        one[i].style.fontSize="5rem"
      }
      one[0].style.opacity = 0;
      one[1].style.opacity = 1;
    }
    )
  )

  menuItem.forEach(one =>
    one[1].addEventListener("mouseout", function(event){
      for( var i = 0 ; i < 2 ; i++ ) {
        one[i].style.width = "25rem";
        one[i].style.transition= "0.5s ease-in-out";
        one[i].style.fontSize="3rem"
      }
      one[0].style.opacity = 1;
      one[1].style.opacity = 0;
    }
    ))


    var menuItem2 = document.querySelectorAll(".menuHeader");



  

})
