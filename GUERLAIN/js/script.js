if( window.innerWidth <= 767 ){
  document.querySelector('#player').hidden = true;
} else {
  function second_passed() {
    document.querySelector('#player').hidden = true;
   }
  
  setTimeout(second_passed, 7500);
}

//setTimeout('alert("прошла секунда")', 10000)

// первый аргумент - функция

//  function second_passed() {
//   document.querySelector('#player').hidden = true;
//  }

// setTimeout(second_passed, 7500);



