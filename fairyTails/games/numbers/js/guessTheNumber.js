let allPages; // количество всех страниц в игре

const getData = async function(url) { // функция, которая делает запрос на сервер. async - делает ее асинхронной
  const response = await fetch(url); // получили данные в ответ на запрос
  if  (!response.ok) { // проверка, был ли запрос удачным
    throw new Error(`Ошибка по адресу ${url}, статус ошибки ${response.status}!`); // ошибка - сбрасывает выполнение ф-ции и выводит указанное сообщение
  }
  return await response.json();
} ; 

const numbers = document.querySelector('.numbers'); // все варианты чисел

function createVarios(varios) { // ф-ция создания карточек с числами

  const {
    page,
    number,
    answer1,
    answer2,
    answer3,
    answer4,
    whatNumber
  } = varios; // проводим деструктуризацию 


  const inVarios = `
          <div class="varius">
            <div class="row">
              <div class="col-6">
                <div class="numder">
                  <img src="${number}" alt="">
                </div>
              </div>
              <div class="col-6 all">
              <div class="row">
                <div class="answer1 col-6" >
                  <img id="answer1" src="${answer1}" alt="" >
                </div>
                <div class="answer2 col-6" >
                  <img id="answer2" src="${answer2}" alt="" >
                </div>
              </div>
              <div class="row">
                <div class="answer3 col-6" >
                  <img id="answer3" src="${answer3}" alt="" >
                </div>
                <div class="answer4 col-6" >
                 <img id="answer4" src="${answer4}" alt="" >
                </div>
              </div>
                
                
                
              </div>
            </div>
          </div> 
  `;

  numbers.insertAdjacentHTML('beforeend', inVarios); // метод для вставки элементов на страницу
  

  const varius = document.querySelectorAll('.varius');
  
  for(let i = 1; i < varius.length; i++){
    varius[i].style.display = 'none';
  };
  varius[0].style.display = 'block';
  
  function pageNumbers(){ // индекс страницы
    let divForPagesNumbers = document.querySelector('.pageNumbers');
    const pageNumber = `
    <div class="page" style="margin-bottom: 2rem; margin-right: 10px; border-width: 1px; border-style: solid; border-color: green; width: 10px; height: 10px; background-color: aquamarine; border-radius: 50%;">
    </div> 
  `;
    divForPagesNumbers.insertAdjacentHTML('beforeend', pageNumber); // метод для вставки элементов на страницу
  };

  pageNumbers();
  
};
// ======================= листание страниц ==============================
function prewNext(){ 
  const arrowNext = document.querySelector('#nav-next'); //  стрелки вправо-влево
  const arrowPrew = document.querySelector('#nav-prew'); // стрелки вправо-влево
  

  arrowNext.addEventListener('click', () => {
    let numbers = document.querySelector('.numbers');
    let varius = numbers.querySelectorAll('.varius');
    
    let pages = document.querySelectorAll('.page');
    let i;
  varius.forEach((element,index)=>{
    if(element.style.display === 'block'){
      element.style.display = 'none';
      i = index;
      arrowPrew.style.display = 'block';
    }
  });
  
  varius[i+1].style.display = 'block'; // показываем следующую страницу
  pages[i+1].style.backgroundColor = 'red'; // указатель страницы сверху делаем красным
  pages[i+1].style.borderColor = 'rgba(0,0,0,0.3)'; 
  pages[i].style.backgroundColor = '';
  if (i === varius.length-2){
    arrowNext.style.display = 'none';
  };
  
});

arrowPrew.addEventListener('click', () => {
  let numbers = document.querySelector('.numbers');
  let varius = numbers.querySelectorAll('.varius');
  let pages = document.querySelectorAll('.page');
  let i; 
  varius.forEach((element, index) =>{
    if (element.style.display === 'block') {
      
        element.style.display = 'none';
        i = index;
        if (index === 1) {
          arrowPrew.style.display = 'none';
        };
        
        if (index === varius.length - 1) {
          arrowNext.style.display = 'block';
        };
        return i;
    }; 
  });
  const visiblePrewPage = () => {
    varius[i-1].style.display = 'block'; 
  };
  visiblePrewPage();
  
  pages[i-1].style.backgroundColor = 'red';
  pages[i-1].style.borderColor = 'rgba(0,0,0,0.3)';
  pages[i].style.backgroundColor = '';
});
};


function init() {
  getData('./db/guessTheNumber.json').then(function(data){ // ф-ция получения данных по запросу. then вызывает ф-цию после получения данных. data - полученные данные (массив)
  data.forEach(createVarios); // сработает столько раз, сколько элементов у полученного массива data 
  }); 
  
  
  prewNext();
  
};
 
init();