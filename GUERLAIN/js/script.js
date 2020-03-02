
if( window.innerWidth <= 767 ){
  document.querySelector('#player').hidden = true;
} else {
  function second_passed() {
    document.querySelector('#player').hidden = true;
   }
  
  setTimeout(second_passed, 7500);
}





