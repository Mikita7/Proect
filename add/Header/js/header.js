

document.querySelector('.burger-menu').onclick = function () {
    document.querySelector('.menu').classList.toggle('menu-show');
}

document.querySelector('#close-btn').onclick = function () {
    document.querySelector('.menu ').classList.remove('menu-show');
}