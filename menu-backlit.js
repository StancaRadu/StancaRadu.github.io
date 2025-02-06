let menu = document.getElementById('side-titles')
menu.onmousemove = function (e) {
    let x = e.pageX - menu.offsetLeft;
    let y = e.pageY - menu.offsetTop;

    menu.style.setProperty('--y', `${y}px`)
    menu.style.setProperty('--x', `${x}px`)
}