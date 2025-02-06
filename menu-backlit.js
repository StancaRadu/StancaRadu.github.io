let menu = document.getElementById('side-titles')
tabs = document.querySelectorAll('.side-tab')
clicked = false
tabs.forEach(tab => {
    tab.onmousemove = function (e){
        let x = e.pageX - menu.offsetLeft;
    let y = e.pageY - menu.offsetTop;

    menu.style.setProperty('--y', `${y}px`)
    menu.style.setProperty('--x', `${x}px`)
    }
});