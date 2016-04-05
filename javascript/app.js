$(document).ready(function() {

    // console.log('loading');

    var $gameCells = $('.cell');
    //console.log($gameCells);
    var moves = ["", "", "", "", "", "", "", ""]
    var count = 0;
    var turn = 'X';
    var switchBoard = 0;
    var scoreX = 0;
    var scoreO = 0;
    // var champ = null;
    //var hasWinner= 0;
    // var startNewGame(function() {
    //         moves = ["", "", "", "", "", "", "", ""]
    //         count = 0;
    //         turn = 'X';
    //     });
    // function init(){
    //   var $gameCells = $('.cell');
    //   //console.log($gameCells);
    //   var moves = ["", "", "", "", "", "", "", ""]
    //   var count = 0;
    //   var turn = 'X';
    //  // var champ = null;
    //   var hasWinner = 0;
    // }
    $($gameCells).on('click', function() {

        //console.log('Board Clicked!');
        //console.log(this.id);
        if (switchBoard == 0) {
            $(this).html(turn);
            moves[this.id] = turn;
            turn = (turn == 'X') ? 'O' : 'X';
            count++;
        }



        //if (count % 2 == 0) {
        //turn = 'X';
        //* moves[this.id] = 'X';
        //} else {
        //turn = 'O';
        //*moves[this.id] = 'O';

        var getWinner = function() {
            if (winnerIs('X')) {
              scoreX++;
              $("#scoreX").text(scoreX);
                switchBoard = 1;
                return 'X wins';
            }
            if (winnerIs('O')) {
              scoreO++;
              $("#scoreO").text(scoreO);
                switchBoard = 1;
                return 'O wins';
            } else {
                // switchBoard = 1;
                // alert("It's a tie!");
                return null;
            }
        }
        var winnerIs = function(turn) {
            return winsRow(turn) || winsCol(turn) || winsDiag(turn)
        }
        var winsRow = function(turn) {
            return allThree(turn, moves[0], moves[1], moves[2]) || allThree(turn, moves[3], moves[4], moves[5]) || allThree(turn, moves[6], moves[7], moves[8]);
        }
        var winsCol = function(turn) {
            return allThree(turn, moves[0], moves[3], moves[6]) || allThree(turn, moves[1], moves[4], moves[7]) || allThree(turn, moves[2], moves[5], moves[8]);
        }
        var winsDiag = function(turn) {
            return allThree(turn, moves[0], moves[4], moves[8]) || allThree(turn, moves[2], moves[4], moves[6]);
        }
        var allThree = function(turn, cell1, cell2, cell3) {
                return (cell1 === turn) && (cell2 === turn) && (cell3 === turn);
            }
            //$(this).off(turn);

        champ = getWinner();

        if (champ !== null) {

            //$($gameCells).off('click');
            alert(champ);

        }


        //

        function reset() {
            moves = ["", "", "", "", "", "", "", ""]
            count = 0;
            turn = 'X';
            switchBoard = 0;
            $($gameCells).on('click');
        };


        //
        $('#reset').click(function() {
            $(this).on();
            reset();
            $gameCells.html('');
            // $gameCells();
        });
        // var resetButton = "<button onclick ='reset()> Play Again</button>"
    });

    //moves[this.id]?(count % 2 == 0) ? 'X' : 'O'

    console.log(moves, count, turn);
});

// $('.cell').on('reset',function(){
//         $('.cell').text('');
//         count=0;//maybe this resets the counter to zero
//         $('#newGame').addClass('invisible');
//         $('#winnerIs').text('');
//     });

//
// $gameCells.unbind("Click");

// turn click function off after win
//1 reset the board for new game
//reset all game varibales
//call game function
