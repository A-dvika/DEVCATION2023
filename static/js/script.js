let main_text = document.getElementById('main_text');
let main_leaf = document.getElementById('main_leaf');
let main_hill1 = document.getElementById('main_hill1');
let main_hill4 = document.getElementById('main_hill4');
let main_hill5 = document.getElementById('main_hill5');

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    if (value >= 0 && value <= document.body.clientHeight - window.innerHeight) {
        main_text.style.marginTop = value * 3.5 + 'px';
        main_leaf.style.top = value * -1.5 + 'px';
        main_leaf.style.left = value * 1.5 + 'px';
        main_hill5.style.left = value * 1.5 + 'px';
        main_hill4.style.left = value * -1.5 + 'px';
        main_hill1.style.top = value * 1 + 'px';
    }
})