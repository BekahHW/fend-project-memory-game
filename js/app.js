/*
 * Create a list that holds all of your cards
 */
const cards= [
  {
    name: 'diamond',
    icon: 'fa fa-diamond'
  },
  {
    name: 'plane',
    icon: 'fa fa-paper-plane-o'
  },
  {
    name: 'bolt',
    icon: 'fa fa-bolt'
  },
  {
    name: 'cube',
    icon: 'fa fa-cube'
  },
  {
    name: 'anchor',
    icon: 'fa fa-anchor'
  },
  {
    name: 'leaf',
    icon: 'fa fa-leaf'
  },
  {
    name: 'bicycle',
    icon: 'fa fa-bicycle'
  },
  {
    name: 'bomb',
    icon: 'fa fa-bomb'
  },
  {
    name: 'diamond',
    icon: 'fa fa-diamond'
  },
  {
    name: 'plane',
    icon: 'fa fa-paper-plane-o'
  },
  {
    name: 'bolt',
    icon: 'fa fa-bolt'
  },
  {
    name: 'cube',
    icon: 'fa fa-cube'
  },
  {
    name: 'anchor',
    icon: 'fa fa-anchor'
  },
  {
    name: 'leaf',
    icon: 'fa fa-leaf'
  },
  {
    name: 'bicycle',
    icon: 'fa fa-bicycle'
  },
  {
    name: 'bomb',
    icon: 'fa fa-bomb'
  }
]

const moveCounter = document.querySelector('.moves');
let starRating =document.querySelector('.stars');
let moves = 0
const starOne = $('starOne');
const starTwo = $('starTwo');
const starThree = $('starThree');




function removeStar(moves){

if (moves > 16 && moves < 20) {
  console.log('eyes')
  $('.one').removeClass('fa fa-star')
} else if (moves>20 && moves <50) {
  $('.two').removeClass('fa fa-star')
} else if(moves > 50) {
  $('.three').removeClass('fa fa-star')
}
}


function increaseMoves() {

  moves++;
  moveCounter.innerText = moves;
}

let second = 0, minute = 0; hour = 0;
let timer = document.querySelector(".timer");
let interval;

function myTimer(){
    interval = setInterval(function(){
        timer.innerHTML = minute+"mins "+second+"secs";
        second++;
        if(second == 60){
            minute++;
            second=0;
        }
        if(minute == 60){
            hour++;
            minute = 0;
        }
    },1000);
}

// let timer = setInterval(function(){ myTimer() }, 1000);
//
// function myTimer() {
//
//     document.querySelector('.timer').innerHTML = ('Timer: ' + timer++);
// }

function resetTimer() {
    // document.querySelector('.timer').innerHTML = ('Timer: ' + timer++);
   second = 0;
   minute = 0;
   var timer = document.querySelector(".timer");
   timer.innerHTML = "0 mins 0 secs";
  clearInterval(interval);
}

function activateCards() {
// change css based on match
  let card1, card2

  $('.card').click(function() {
    increaseMoves();
    removeStar(moves);

    if (moves === 1) {
      myTimer()
    }

    // moves = $('.moves').html(function(i, val) { return val*1+1 });

    $(this).addClass('open show');

  if (moves % 2 != 0) {
    card1 = $(this);
  }

  else if (moves%2 === 0) {
    card2 = $(this);
    if (card1.attr('name') === $(this).attr('name')) {
    $(this).removeClass('open show');
    $(this).addClass('match');
    card1.addClass('match');
    card1.removeClass('open show')

  }

  else {
    setTimeout(function() {
      card2.removeClass('open show');
      card1.removeClass('open show');
  }, 800);
    }

}
win();
})

};

function shuffle(array) {
   var currentIndex = array.length, temporaryValue, randomIndex;

   while (currentIndex !== 0) {
       randomIndex = Math.floor(Math.random() * currentIndex);
       currentIndex -= 1;
       temporaryValue = array[currentIndex];
       array[currentIndex] = array[randomIndex];
       array[randomIndex] = temporaryValue;
   }
   return array;
}


/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */
 function displayCards(cards) {
   $( '.restart' ).on( 'click', function () {
     resetTimer();
     moves = 0;
     moves.innerHTML = moves;
     startNewGame(cards);


     console.log('frank')
   }

)};

// Shuffle function from http://stackoverflow.com/a/2450976
function startNewGame(cards) {
  $('.deck').html('')
  const shuffledCards = shuffle(cards)

  shuffledCards.map(card => (
   $('.deck').append(`
     <li class="card" name="${card.name}">
         <i class="fa ${card.icon}"></i>
     </li>
     `)
   ))
   activateCards();

   // reset moves


  }


// When a user wins the game, a modal appears to congratulate the player and ask
// if they want to play again. It should also tell the user how much time it took
//  to win the game, and what the star rating was.
function win()
 {
  if ($('.card.match').length === 16) {
    stopTimer();
  alert (`Congratulations! It took you ${timer.innerHTML} seconds. You earned ${$('.fa-star').length} stars. Would you like to play again?`);
  startNewGame(cards)
}

}

$(document).ready(function(){
  displayCards(cards);
  activateCards();
  // startNewGame(cards);
});



/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
