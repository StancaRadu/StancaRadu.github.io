tabs = document.querySelectorAll('.side-tab')
clicked = false

// CHANGE VIEWING PAGE
function changeTab(tab, title = false) {
    if (clicked) return
        clicked = true
        if (!title) new_title = tab.getElementsByTagName('h2')[0].innerHTML
        else new_title = title
        new_page_id = tab.getAttribute('name');
        changer = document.getElementById('title-changer').style
        load_icon = document.getElementById('loading-icon').style
        splah = document.getElementById('splash-screen').style
        splah.transformOrigin = 'left'
        splah.transform = 'translateX(0)'
        changer.left = '-100%'
        setTimeout(()=>{
            // 25% nothing is visible
            changer.left = '0%'
            hideCurrentTab()
            document.getElementById(new_page_id).classList.remove('hidden')
            document.getElementById('content-area').scrollTo(0,0)
            load_icon.transform = 'rotateZ(720deg)'
            setTimeout(()=>{
                // 75% right side fully visible
                document.getElementById('title').innerHTML = new_title
                changer.left = '100%'
                setTimeout(()=>{
                    // 100% nothing is visible
                    splah.transform = 'translateX(100%)'
                    changer.left = '200%'
                    setTimeout(()=>{
                        // 0% RESET
                        changer.transitionDuration = '0s'
                        splah.transitionDuration = '0s'
                        load_icon.transitionDuration = '0s'
                        splah.transform = 'translateX(-100%)'
                        changer.left = '-200%'
                        setTimeout(()=>{
                            changer.transitionDuration = '.3s'
                            splah.transitionDuration = '.3s'
                            load_icon.transitionDuration = '.6s'
                            clicked = false
                            load_icon.transform = 'none'
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

function hideCurrentTab(){
    tabs = document.querySelectorAll('.content-div')
    toReturn = 'no tabs'
    tabs.forEach(tab => {
        if(!tab.classList.contains('hidden'))
            tab.classList.add('hidden')
            toReturn = tab
    });

    return toReturn
}

// CHANGE CONTANCT AND ADDRESS
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

// GO BACK TO THE START PAGE
document.getElementById('close-button').onclick = function(e){
    changeTab(this, title = 'Welcome!')
}

// HIDE PHOTO TO GAIN SAPCE
document.getElementById('hide-photo').onclick = function(e){
    photo = document.getElementById('side-photo').style
    photo.height = 0
    photo.padding = 0
    photo.border = 'none'
}