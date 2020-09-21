function showFun() {
  if(document.getElementById('myShowBlock' ).style.display == 'none') {
      document.getElementById('myShowBlock' ).style.display = 'block';
  } else {
      document.getElementById('myShowBlock' ).style.display = 'none';
  }
  // =============== range =================


let range = document.querySelector('#range'); 
//получим наш div
let forRange = document.querySelector('#forRange');

range.addEventListener('mousemove',function(){ 
  document.querySelector('#rangeResult').innerHTML = range.value;
});

range.addEventListener('click',function(){
  // дальше меняем стили нашему div
  forRange.style.color = '#'+ Math.round(Math.random()*10) + Math.round(Math.random()*10) + Math.round(Math.random()*10) + Math.round(Math.random()*10) + range.value; 
  forRange.style.borderColor = '#'+ Math.round(Math.random()*10) + Math.round(Math.random()*10) + Math.round(Math.random()*10) + Math.round(Math.random()*10) + range.value; 
});
};

function showFun2() {
if(document.getElementById('myShowBlock2' ).style.display == 'none') {
    document.getElementById('myShowBlock2' ).style.display = 'block';
} else {
    document.getElementById('myShowBlock2' ).style.display = 'none';
}
// ================ contact form ============= 



// Создаем объект, куда будем вносить все данные пользователя
let data = {
  name : 'name',
  addres : 'addres', 
  age : 0, 
  timing : 'timing', 
  message : 'message'
};

// получаем имя и остальные поля
let lesson7_Name = document.querySelector('#lesson7_Name'), 
    lesson7_Email = document.querySelector('#lesson7_Email'), 
    lesson7_Age = document.querySelector('#lesson7_Age'),
    lesson7_Timing = document.querySelector('#lesson7_Timing'),
    lesson7_Message = document.querySelector('#lesson7_Message'),
// получаем кнопку
lesson7_send = document.querySelector('#lesson7_send'),
// получаем "результат" 
lesson7_result = document.querySelector('#lesson7_result');

// создадим массив, куда будем записывать наших пользователей 
let people = [];

// ставим слушатель на кнопку, по клику запускаем ф-цию
lesson7_send.addEventListener('click', function(){
  
  // обнуляем наше поле "результат"
  lesson7_result.innerHTML = ' ';
  // записываем данные с полей ввода в объект
   data.name = lesson7_Name.value;
   data.addres = lesson7_Email.value;
   data.age = lesson7_Age.value; 
   data.timing = lesson7_Timing.value; 
   data.message = lesson7_Message.value; 
  // перебираем все ключи объекта 
   for (let key in data) {
    // и записываем их в паре со значениями в "резульат" 
    lesson7_result.innerHTML += '<br>' + key + ' - ' + data[key];
   }
});
};

function showFun3() {
if(document.getElementById('myShowBlock3' ).style.display == 'none') {
    document.getElementById('myShowBlock3' ).style.display = 'block';
} else {
    document.getElementById('myShowBlock3' ).style.display = 'none';
}
// ============== добавить новый элемент на страницу ======= 
let key = 0;
let lesson8Add = document.querySelector('#lesson8_add');
lesson8Add.addEventListener('click', function(){
  key = key + 1;
  let animal = document.querySelector('.animal');
  let cloneAnimal = animal.cloneNode(true);
  let animalParent = document.querySelector('.animalParent');
  animalParent.appendChild(cloneAnimal);
  if (key === 4) {
    lesson8Add.style.display = 'none';
  }
});


let lesson8Result = document.querySelector('#lesson8_result');
// создадим массив, куда будем записывать данные с input
let allAnimals = [];
// получаем кнопку отправить 
let lesson8Send = document.querySelector('#lesson8_send');
// при клике на кнопку... 
lesson8Send.addEventListener('click', function(){
  // получим все блоки с input в виде массива, где каждый элемент можно получить через all[0] и т.д.)
  let all = document. querySelectorAll('.animal');

  for (let i=0; i < all.length; i++) {
    //записываем в массив данные с all
    allAnimals[i] = 'who - ' + all[i].childNodes[1].querySelector('#lesson8_type').value + 
                    '; name - ' + all[i].childNodes[3].querySelector('#lesson8_name').value + 
                    '; age - ' + all[i].childNodes[5].querySelector('#lesson8_age').value;
    lesson8Result.innerHTML += '<br>' + '<br>' + 'Ваш питомец № ' + i + ' - это : ' + allAnimals[i];
  }

});
};

function showFun4() {
if(document.getElementById('myShowBlock4' ).style.display == 'none') {
    document.getElementById('myShowBlock4' ).style.display = 'block';
} else {
    document.getElementById('myShowBlock4' ).style.display = 'none';
}
// ================ выпадающее меню ==================

//получаем коллекцию всех элементов с классом menu-item
let element = document.getElementsByClassName('menu-item');
// с помощью цикла перебираем все элементы нашей коллекции
for (let i=0; i < element.length; i++){
  // для каждого элемента ставим два слушателя: 
  // mouseenter - наведение мыши (и запуск ф-ции showSub)
  element[i].addEventListener('mouseenter', showSub, false);
  // mouseleave - уход мыши (и запуск ф-ции hideSub)
  element[i].addEventListener('mouseleave', hideSub, false);
}; 
// наша функция showSub
function showSub() {
  // если у элемента на который мы навели мышку (this) 
  //количество детей больше 1, то
  if (this.children.length > 1) {
    // меняем стили так, чтобы эти элементы было видно
    this.children[1].style.height = 'auto';
    this.children[1].style.opacity = '1';
    this.children[1].style.overflow = 'visible'; 
    // если количество детей меньше 1
  } else {
    // возвращаем false
    return false;
  }
};
// наша функция showSub
function hideSub() {
  // если у элемента на который мы навели мышку (this) 
  //количество детей больше 1, то
  if (this.children.length > 1) {
    // меняем стили так, чтобы эти элементы видно не было
    this.children[1].style.height = '0';
    this.children[1].style.opacity = '0';
    this.children[1].style.overflow = 'hidden'; 
    // если количество детей меньше 1
  } else {
    // возвращаем false
    return false;
  }
};
};

function showFun5() {
if(document.getElementById('myShowBlock5' ).style.display == 'none') {
    document.getElementById('myShowBlock5' ).style.display = 'block';
} else {
    document.getElementById('myShowBlock5' ).style.display = 'none';
}



};











