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




// function stars(){
// if (moves > 8 && moves < 20) {
//   $('.stars').removeClass('fa fa-star')
// } else if (moves>20) {
//   $('.stars').removeClass('fa fa-star')
// } else {
//   $('.stars').removeClass('fa fa-star')
// }
// }
// let moves = 0
// //
// function increaseMoves() {
//   moves++;
//   moveCounter.innerText = moves;
//   stars();
// }



let timer = setInterval(function(){ myTimer() }, 1000);

function myTimer() {
  // if (win()) {
  //   let timer = clearInterval(function(){ myTimer() }, 1000);
  // } else {
    document.querySelector('.timer').innerHTML = ('Timer: ' + timer++);
  // }
}
function stopTimer() {
  clearInterval(timer);
}

function activateCards() {
// change css based on match
  let card1, card2

  $('.card').click(function() {
    myTimer();
    moves = $('.moves').html(function(i, val) { return val*1+1 });

     console.log('moves:' + moves);
    $(this).addClass('open show');

if (moves.text() % 2 != 0) {
  card1 = $(this);
}

else if (moves.text()%2 === 0) {
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

})
win();
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
   $( '.restart' ).on( 'click',
   // Shuffle function from http://stackoverflow.com/a/2450976
   function () {
     $('.deck').html('')
     const shuffledCards = shuffle(cards)

     shuffledCards.map(card => (
      $('.deck').append(`
        <li class="card" name="${card.name}">
            <i class="fa ${card.icon}"></i>
        </li>
        `)
      ))
      activateCards()
    }
)};


// When a user wins the game, a modal appears to congratulate the player and ask
// if they want to play again. It should also tell the user how much time it took
//  to win the game, and what the star rating was.
function win()
 {
  if ($('.card.match').length === 4) {
  alert ('Congratulations! It took you seconds. You earned. Would you like to play again?');
  console.log('amherst');
   stopTimer();
}

}

$(document).ready(function(){
  displayCards(cards);
  activateCards();
  // stars();
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
