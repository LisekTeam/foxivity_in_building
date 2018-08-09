$(document).ready(startMe);
var di = 0; //decoding iterator
var gi = 0; //global iterator
var valueLenght;
var valuesLenght;

function startMe() {
  setHeight();
  drawChar(gi);
  var timeout5 = window.setTimeout(function() {
    $('.atf-container').addClass('marginized');
  }, 800);

}

function setHeight() {
  $('#sec1-atf-cont').height($(window).innerHeight());
}

function drawChar(gi) {
  di = 0;
  var isDrawing = true;
  var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var values = ["progressivity","expressivity","creativity","foxivity"];
  var random;
  var gcheck = gi - 1;
  valuesLenght = values.length;
  spellValue = [];
    var value = values[gi];
    valueLenght = value.length;
    for (j=0;j<valueLenght;j++) {
      spellValue.push(value.charAt(j));
      $('.decoding-phrase').append('<span class="single-char fox' + gi + ' ondraw char' + j + '">x<span>');
      var valueParam = valuesLenght - 1;
      if ($('.single-char').hasClass('fox'+valueParam)) {
        $('.single-char').each(function() {
          $(this).addClass('foxed');
        });
      }
      function drawAgain() {
        $('.single-char').each(function() {
          if(isDrawing == true && $(this).hasClass('ondraw')) {
            random = Math.floor(Math.random() * alphabet.length);
            $(this).html(alphabet[random]);
          }
        });
        var timeout1 = window.setTimeout(function() {
          drawAgain();
        }, 90);
      }
      drawAgain();
    }
  if (gi == 0) {
    var timeout4 = window.setTimeout(function() {
      for (k=0;k<valueLenght;k++) {
        decodeMe(k);
      }
    }, 1200);
  } else {
    var timeout5 = window.setTimeout(function() {
      for (k=0;k<valueLenght;k++) {
        decodeMe(k);
      }
    }, 1500);
  }
  function decodeMe(k) {
    var currentChar = '.char'+k;
    var timeout2 = window.setTimeout(function() {
      $(currentChar).removeClass('ondraw').html(spellValue[k]);
      di++;
      if(di == valueLenght) {
        gi++;
        var timeout3 = window.setTimeout(function() {
          if (gi<valuesLenght) {
            $('.single-char').each(function() {
              $(this).remove();
            });
          } else {
            $('.extention').addClass('visible');
          }
          drawChar(gi);
        }, 500);
      }
    }, 180 * (k+1));
  }
  $('#drawing-stop').on('click', function() {
    isDrawing = false;
  });
}
