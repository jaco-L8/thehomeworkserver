//taken from here https://stackoverflow.com/questions/15191058/css-rotation-cross-browser-with-jquery-animate

 //animate when starting 
$(document).ready(function() {

    $('#image').show(0).animate({
        top: '-110px'
    }, 2000);
   //rotate right
    $('#image').show(0).animate(
        { deg: 10},
        {
          duration: 1200,
          step: function(now) {
            $(this).css({ transform: 'rotate(' + now + 'deg)' });
          }
        }
      );
     //rotate left
      $('#image').show(0).animate(
        { deg: -10},
        {
          duration: 1200,
          step: function(now) {
            $(this).css({ transform: 'rotate(' + now + 'deg)' });
          }
        }
      );
      //rotate centre
      $('#image').show(0).animate(
        { deg: 0},
        {
          duration: 1200,
          step: function(now) {
            $(this).css({ transform: 'rotate(' + now + 'deg)' });
          }
        }
      );
    $('#image').show(0).animate({
        top: '-1500px'
    }, 2000);
    $('#image').hide(0);
  });



