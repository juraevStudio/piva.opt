document.querySelector('.header__burger').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.header').classList.toggle('active');
});