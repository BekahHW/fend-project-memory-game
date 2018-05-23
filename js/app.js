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


// star functions
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

function addStar(){

  $('.one').addClass('fa fa-star');
  $('.two').addClass('fa fa-star');
  $('.three').addClass('fa fa-star');
}

// moves functions
function increaseMoves() {
  moves++;
  moveCounter.innerText = moves;
}

function resetMoves(){
  moves = 0;
  moveCounter.innerText = moves;
}

// timer
let second = 0, minute = 0; hour = 0;
let timer = document.querySelector(".timer");
let interval;

function myTimer(){
    interval = setInterval(function(){
        timer.innerHTML = minute+'mins'+second+'secs';
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

function resetTimer() {
   second = 0;
   minute = 0;
   var timer = document.querySelector(".timer");
   timer.innerHTML = "0 mins 0 secs";
  clearInterval(interval);
}

// playing functions
function activateCards() {
  let card1, card2

  $('.card').click(function() {
    increaseMoves();
    removeStar(moves);

    if (moves === 1) {
      myTimer()
    }

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

// Shuffle function from http://stackoverflow.com/a/2450976
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

 function displayCards(cards) {
   $( '.restart' ).on( 'click', function () {
     closeModal()
     resetTimer();
     resetMoves();
     startNewGame(cards);
   }
)};

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
   addStar();

  }

let modal
function initModal() {
  modal = $('#myModal')
  // When the user clicks anywhere outside of the modal, close it
  $('.modal').click(function() {
    if ($(this).class() !== 'modal-content') {
        closeModal()
    }

  })
   let starScore = $('.fa-star').length;
   let timeScore= $('.timer').html();
   closeModal()
}

// can change modal.show() to modal.addclass(show) and create the css for show
function openModal() {
  modal.show()
  let starScore = $('.fa-star').length;
  let timeScore = $('.timer').html();
  console.log(starScore)

  $('#printStars').html(starScore)
  $('#timeScore').html(timeScore)
}

function closeModal() {
  modal.hide()
}


function win()
 {
     if ($('.card.match').length > 0) {
   // Get the <span> element that closes the modal
   openModal()
   resetTimer()

}}

$(document).ready(function(){
  initModal();
  displayCards(cards);
  activateCards();
  startNewGame(cards);
});
