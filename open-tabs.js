tabs = document.querySelectorAll('.side-tab')
clicked = false

function changeTab(tab, title = false) {
    if (clicked) return
        clicked = true
        if (!title) new_title = tab.getElementsByTagName('h2')[0].innerHTML
        else new_title = title
        changer = document.getElementById('title-changer').style
        changer.left = '-100%'
        setTimeout(()=>{
            changer.left = '0%'
            setTimeout(()=>{
                document.getElementById('title').innerHTML = new_title
                changer.left = '100%'
                setTimeout(()=>{
                    changer.left = '200%'
                    setTimeout(()=>{
                        changer.transitionDuration = '0s'
                        changer.left = '-200%'
                        setTimeout(()=>{
                            changer.transitionDuration = '.5s'
                            clicked = false
                        }, 10)
                    }, 500)
                }, 500)
            }, 500)
        }, 500)
}

tabs.forEach(tab => {
    tab.onclick = function (){
        changeTab(tab)
    }
});

document.getElementById('country1').onclick = function(e){
    slider = document.getElementById('slider').style
    slider.setProperty('--before-width', '5%');
    document.getElementById('slider').style.paddingLeft = '17.5%'

    setTimeout(()=>{
        slider.setProperty('--before-width', '15%');
    }, 200)
    
    
}
document.getElementById('country2').onclick = function(e){
    slider = document.getElementById('slider').style
    slider.setProperty('--before-width', '15%');
    document.getElementById('slider').style.paddingLeft = '62.5%'

    setTimeout(()=>{
        slider.setProperty('--before-width', '25%');
    }, 200)
}

document.getElementById('close-button').onclick = function(e){
    changeTab(false, title = 'Welcome!')
}