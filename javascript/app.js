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
// //
// var champ = null;
// var getWinner = function () {
//   if (winnerIs('X')) {
//     return 'X';
//   }
//   if (winnerIs('O')) {
//     return 'O';
//   } else {
//     return null;
//   }
// }
// var winnerIs = function (turn) {
//   return winsRow (turn) || winsCol (turn) || winsDiag (turn);
// }
// var winsRow = function (turn) {
//   return allThree (turn, moves[0], moves[1], moves[2]) || allThree (turn, moves[3], moves[4], moves[5]) || allThree (turn, moves[6], moves[7], moves[8]);
// }
// var winsCol = function (turn) {
//   return allThree (turn, moves[0], moves[3], moves[6]) || allThree (turn, moves[1], moves[4], moves[7]) || allThree (turn, moves[2], moves[5], moves[8]);
// }
// var winsDiag = function (turn) {
//   return allThree (turn, moves[0], moves[4], moves[8]) || allThree (turn, moves[2], moves[4], moves[6]);
// }
// var allThree = function (turn, cell1, cell2, cell3) {
//   return (cell1 === turn) && (cell2 === turn) && (cell3 === turn);
// }
// champ = getWinner();

//
// var checkResult = function(){
//     $("table tr").each(function(i, val){
//         $(this).find('td').each(function(j, val2){
//             arr[i][j] = parseInt($(this).attr("data-points"));
//         });
//     });

//     for(var i = 0; i<3;i++){
//         var rowSum = 0;
//         for(var j = 0; j<3;j++){
//             rowSum += arr[i][j];
//         }
//         if(rowSum === 3)
//             alert("Circle WIN!");
//         else if(rowSum === -3)
//             alert("Cross WIN!");
//     }

//     for(var i = 0; i<3;i++){
//         var colSum = 0;
//         for(var j = 0; j<3;j++){
//             colSum += arr[j][i];
//         }
//         if(colSum === 3)
//             alert("Circle WIN!");
//         else if(colSum === -3)
//             alert("Cross WIN!");
//     }

//     if(arr[0][0] + arr[1][1] + arr[2][2] === 3)
//         alert("Circle WIN!");
//     else if(arr[0][0] + arr[1][1] + arr[2][2] === -3)
//         alert("Cross WIN!");

//     if(arr[2][0] + arr[1][1] + arr[0][2] === 3)
//         alert("Circle WIN!");
//     else if(arr[2][0] + arr[1][1] + arr[0][2] === -3)
//         alert("Cross WIN!");
// };

//
/* This function will loop over each column, row, and diagonal
 * to see if they are the same state. For example, if all the
 * spaces in column 1 are X, then those indexes are passed back.
 * If no win was found an empty array is returned.
 */
// checkWin : function() {
//   if(this.playerState === ttt.Space.State.empty) {
//     return false;
//   }

//   //Board size represented the number of rows/columns, IE 3x3 = 3
//   var n = this.gameCells;
//   var winIndexes = [];

//   //Check the columns
//   var i;
//   for(var column = 1; column <= n; column++) {
//     i = 1;
//     winIndexes = [];
//     for(var c = column; c <= (n * n); c += n) {
//       //If the space is not the correct state, break out
//       if(this.states[c - 1] !== this.playerState) {
//         break;
//       }

//       winIndexes.push(c - 1);

//       //If we reached the last space, we have a win
//       if(i === n) {
//         return winIndexes;
//       }

//       i++;
//     }
//   }

//   //Check the rows, repeating the column logic
//   for(var row = 1; row <= n; row++) {
//     winIndexes = [];
//     for(var r = 1 + (n * (row - 1)); r <= (n * row); r++) {
//       if(this.states[r - 1] !== this.playerState) {
//         break;
//       }

//       winIndexes.push(r - 1);

//       if(r === (n * row)) {
//         return winIndexes;
//       }
//     }
//   }

// //   //Check left-to-right diagonal
// //   winIndexes = [];
// //   for(var lrd = 1; lrd <= (n * n); lrd += (n + 1)) {
// //     if(this.states[lrd - 1] !== this.playerState) {
// //       break;
// //     }

// //     winIndexes.push(lrd - 1);

// //     if(lrd === (n * n)) {
// //       return winIndexes;
// //     }
// //   }

// //   //Check right-to-left diagonal
// //   winIndexes = [];
// //   for(var rld = n; rld <= (n * n) - (n - 1); rld += (n - 1)) {
// //     if(this.states[rld - 1] !== this.playerState) {
// //       break;
// //     }

// //     winIndexes.push(rld - 1);

// //     if(rld === (n * n) - (n - 1)) {
// //       return winIndexes;
// //     }
// //   }

// //   return [];
// // }
// checkTie : function() {
//   for(var i = 0; i < this.states.length; i++) {
//     if(this.states[i] === ttt.Space.State.empty) {
//       return false;
//     }
//   }

//   return true;
// }

