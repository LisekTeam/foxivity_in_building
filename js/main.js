$(document).ready(startMe);

function startMe() {
  setHeight();
  drawChar();
}

function setHeight() {
  $('#sec1-atf-cont').height($(window).innerHeight());
}

function drawChar() {
  var isDrawing = true;
  var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var values = ["foxivity","progressivity","expressivity","creativity"];
  var random;


  spellValue = [];
  for (i=0;i<values.length;i++) {
    var value = values[i];
    var valueLenght = value.length;
    for (j=0;j<valueLenght;j++) {
      spellValue.push(value.charAt(j));
      $('.decoding-phrase').append('<span class="single-char ondraw char' + j + '">x<span>');
      function drawAgain() {
        $('.single-char').each(function() {
          if(isDrawing == true && $(this).hasClass('ondraw')) {
            random = Math.floor(Math.random() * alphabet.length);
            $(this).html(alphabet[random]);
          }
        });
        var timeout1 = window.setTimeout(function() {
          drawAgain();
        }, 100);
      }
      drawAgain();
      // setTimeout(function() {
      //   $('.single-char').each(function() {
      //     $(this).remove();
      //   });
      // }, 10000);
    }

    // console.log(value);
    // console.log(spellValue);
  }
  for (k=0;k<valueLenght;k++) {
    setDelay(k);
  }
  function setDelay(k) {
    console.log('yes we test '+k);
    var currentChar = '.char'+k;
    var timeout2 = window.setTimeout(function() {
      $(currentChar).removeClass('ondraw').html(spellValue[k]);
    }, 300 * (k+1));
  }
  $('#drawing-stop').on('click', function() {
    isDrawing = false;
  });

  function qwe(l) {
    console.log(examp);
    console.log(examp[l]);
    console.log('adam');
  }

  var examp = [];
  for(l=0;l<10;l++) {
    var name = "name"+l;
    examp.push(name);

    setTimeout(qwe(l), 1000);
  }
  setTimeout(function() {
    console.log('qwerasd');
  },5000);
}
