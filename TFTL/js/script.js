if (document.documentElement.clientWidth < 577){
  const menu = document.querySelector('.menu');
  menu.style.display = 'none';
  const afterMenu = document.querySelector('.afterMenu');
  afterMenu.style.display = 'block';

  
    afterMenu.addEventListener('click', () => {
    menu.style.display === 'block' ? menu.style.display = 'none' : menu.style.display = 'block';
  });
};
    
  
