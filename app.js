//burger

document.querySelector(`.header__menu-burger`).addEventListener('click', function(){
    this.classList.toggle('active');
    document.querySelector(`.header__nav-list`).classList.toggle('open');
})