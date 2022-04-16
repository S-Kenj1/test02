const navbarBtn = document.querySelector('.navbar__btn');
const navbarBtnSpan = document.querySelector('.navbar__btn span');
const navbarMenu = document.querySelector('.navbar__menu');

navbarBtn.addEventListener('click', function(e){
  e.preventDefault();
  if(navbarBtn.classList.contains('active')){
    navbarBtn.classList.remove('active');
    navbarMenu.style = 'left: -280px; transition: left 0.5s'
  }else{
    navbarBtn.classList.add('active');
    navbarMenu.style = 'left: 0; transition: left 0.5s'
  }
})
document.addEventListener('mouseup', function(e){
  if((e.target != navbarBtn && e.target != navbarBtnSpan) || (e.target == navbarBtnSpan && e.target == navbarBtn)){
    navbarBtn.classList.remove('active');
    navbarMenu.style = 'left: -280px; transition: left 0.5s'
  }
})
navbarMenu.addEventListener('mouseup', function(e){
  e.stopPropagation();
})