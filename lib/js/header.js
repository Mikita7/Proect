

document.querySelector('.burger-menu').onclick = function () {
    document.querySelector('.menu').classList.toggle('menu-show');
}

document.querySelector('#close-btn').onclick = function () {
    document.querySelector('.menu ').classList.remove('menu-show');
}

// footer

document.querySelector('#plus').onclick = function () {
    document.querySelector('#res').classList.toggle('show');
}