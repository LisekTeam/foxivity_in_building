$(document).ready(startMe);
var di = 0; //decoding iterator
var gi = 0; //global iterator
var valueLenght;
var valuesLenght;

function startMe() {
  setHeight();
  drawChar(gi);
  burgerOpen();
  $('.decoding-box').addClass('visible');
  var timeout7 = window.setTimeout(function() {
    $('.atf-container').addClass('marginized');
  }, 800);
  showSubtitles();
}

function setHeight() {
  $('#sec1-atf-cont').height($(window).innerHeight());
}

function switchLang() {
  var interval1 = setInterval(function() {
    $('.description-sentence-pl').each(function() {
      if($(this).hasClass('visible')) {
        $(this).removeClass('visible');
        var timeout12 = window.setTimeout(function() {
          $('.description-sentence-en').each(function() {
            $(this).addClass('visible');
          });
        }, 900);
      } else {
        $('.description-sentence-en').each(function() {
          $(this).removeClass('visible');
        });
        var timeout11 = window.setTimeout(function() {
          $('.description-sentence-pl').addClass('visible');
        }, 900);
      }
    });
  }, 10000);
}

function showSubtitles() {
  var timeout8 = window.setTimeout(function() {
    $('.description1').addClass('visible');
  }, 2900);
  var timeout9 = window.setTimeout(function() {
    $('.description2').addClass('visible');
  }, 6500);
  var timeout10 = window.setTimeout(function() {
    $('.description3').addClass('visible');
    switchLang();
  }, 9500);
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
        var timeout6 = window.setTimeout(function() {
          $('.menu-box').addClass('slided');
        }, 3200);
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
    }, 1200);
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
        }, 700);
      }
    }, 120 * (k+1));
  }
  $('#drawing-stop').on('click', function() {
    isDrawing = false;
  });
}

function burgerOpen() {
  $('#burger-menu-button').on('click', function() {
    var mainMenu = $(this).closest('.atf-container').find('.atf-main-menu');
    if(mainMenu.hasClass('open')) {
      mainMenu.removeClass('open');
    } else {
      mainMenu.addClass('open');
    }
  });
}
