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
    <li class="card">
        <i class="fa ${card.icon}"></i>
    </li>
    `)
))}
)};
$(document).ready(function(){

displayCards(cards);

// countMoves();
$('.card').click(function() {
    $('.moves').html(function(i, val) { return val*1+1 });
});

});

function displaySymbol() {
  $('card').click(function(){
  // the icon needs to be activated
})};
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
