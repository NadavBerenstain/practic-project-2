let theNumber = Number(prompt("Pick a number"));
console.log("Your number is the square root of " +
            theNumber * theNumber);
var level = 10;
var timeOfShow = 0;
var numArry = [];
    for(let i = 0; i < level*2; i++) {
        numArry.push(2);
       }


function goodRandomNum(level1) {
    var realLevel = level1*2;
    var cardVal = Math.floor(Math.random()*realLevel);
    if (numArry[cardVal] > 0) {
      numArry[cardVal] = numArry[cardVal] -1;
      return cardVal;
    } else {
       return goodRandomNum(level1);
    }
}


function createGame(upToDateLevel) {
    level = upToDateLevel;
    var $table = $('#myTable');
    for(let i =0; i < level; i++) {
            var $newRow = $('<tr>');
            $newRow.append('<th id="' + i + 'a" name="card" onclick="showCard(\'' + i + 'a\')" value="' + goodRandomNum(level) + '"><button><img height="200px" width="120px" src="https://opengameart.org/sites/default/files/card%20back%20black.png"></button></th>');
            $newRow.append('<th id="' + i + 'b" name="card" onclick="showCard(\'' + i + 'b\')" value="' + goodRandomNum(level) + '"><button><img height="200px" width="120px" src="https://opengameart.org/sites/default/files/card%20back%20black.png"></button></th>');
            $newRow.append('<th id="' + i + 'c" name="card" onclick="showCard(\'' + i + 'c\')" value="' + goodRandomNum(level) + '"><button><img height="200px" width="120px" src="https://opengameart.org/sites/default/files/card%20back%20black.png"></button></th>');
            $newRow.append('<th id="' + i + 'd" name="card" onclick="showCard(\'' + i + 'd\')" value="' + goodRandomNum(level) + '"><button><img height="200px" width="120px" src="https://opengameart.org/sites/default/files/card%20back%20black.png"></button></th>');
            $table.append($newRow);
        }
    }
    /*<h1>bla</h1>*/

function showCard(valToShow) {
    while (timeOfShow < 2) {
        timeOfShow++;
        return $('#' + valToShow).text($('#' + valToShow).attr('value'));
    }
  return; //"need to fic:\Users\nadav\Desktop\practic project 2\main.jsx";
}


function checkCardsVal() {
        for(let i =0; i < level; i++) {
            var val = $('#'+i+'a').val("HI");
            var val2 = $('#'+i+'b').val();
            var val3 = $('#'+i+'c').val();
            var val4 = $('#'+i+'d').val();
            $('#checkValue').append(val2,val3,val4);
        }
    }

$(function () {
    $('#howManyCards').submit(function(event) {
        event.preventDefault();
        var difficultyLevel = parseInt($('input[name=difficultyLevel]:checked').val());
        createGame(difficultyLevel);
      });
})


/*
$(function () {
    $('#button[name=card]').click(function() {
        showCard();
    })
})
*/