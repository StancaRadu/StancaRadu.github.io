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
                            changer.transitionDuration = '.3s'
                            clicked = false
                        }, 50)
                    }, 300)
                }, 300)
            }, 300)
        }, 300)
}

tabs.forEach(tab => {
    tab.onclick = function (){
        changeTab(tab)
    }
});

document.getElementById('country1').onclick = function(e){
    slider = document.getElementById('slider').style
    phone = document.getElementById('uk-phone').style
    home = document.getElementById('uk-address').style

    if (slider.paddingLeft !== '62.5%') return
    slider.setProperty('--before-width', '35%');
    slider.paddingLeft = '17.5%'
    phone.marginLeft = '0'
    home.marginLeft = '0'

    setTimeout(()=>{
        slider.setProperty('--before-width', '15%');
    }, 200)
    
    
}
document.getElementById('country2').onclick = function(e){
    slider = document.getElementById('slider').style
    phone = document.getElementById('uk-phone').style
    home = document.getElementById('uk-address').style

    if (slider.paddingLeft == '62.5%') return
    slider.setProperty('--before-width', '5%');
    slider.paddingLeft = '62.5%'
    phone.marginLeft = '100%'
    home.marginLeft = '100%'

    setTimeout(()=>{
        slider.setProperty('--before-width', '25%');
    }, 200)
}

document.getElementById('close-button').onclick = function(e){
    changeTab(false, title = 'Welcome!')
}