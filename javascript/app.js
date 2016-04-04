$(document).ready(function() {
    console.log('loading');

    var $gameCells = $('.cell');
    //console.log($gameCells);
    var moves = ["", "", "", "", "", "", "", ""]
    var count = 0;
    var turn = 'X';

    $($gameCells).one('click', function() {
            //console.log('Board Clicked!');
            //console.log(this.id);
            $(this).html(turn);
            moves[this.id] = turn;

            count++;
            turn = (turn == 'X') ? 'O' : 'X';
            //if (count % 2 == 0) {
            //turn = 'X';
            //* moves[this.id] = 'X';
            //} else {
            //turn = 'O';
            //*moves[this.id] = 'O';
        });
        //moves[this.id]?(count % 2 == 0) ? 'X' : 'O'


        console.log(moves, count);
});
//
