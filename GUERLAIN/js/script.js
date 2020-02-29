//setTimeout('alert("прошла секунда")', 10000)

// первый аргумент - функция
 function second_passed() {
  document.querySelector('#player').hidden = true;
 }

setTimeout(second_passed, 7500);

