const star = document.querySelector('#stars');
const moon = document.querySelector('#moon');
const behind = document.querySelector('#behind');
const front = document.querySelector('#front');
const text = document.querySelector('#text');
const explore = document.querySelector('#btn');

function handleWindowScroll(){
    let windowScrollY = window.scrollY;
    moon.style.top = windowScrollY * 1 + 'px';
    star.style.left = windowScrollY * 0.25 + 'px';
    text.style.right = windowScrollY * 3.75 + 'px';
    explore.style.marginTop = windowScrollY * 1.5 + 'px';
}

window.addEventListener('scroll', handleWindowScroll)