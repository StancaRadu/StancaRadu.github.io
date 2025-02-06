tabs = document.querySelectorAll('.side-tab')
clicked = false
tabs.forEach(tab => {
    tab.onclick = function (e){
        if (clicked) return
        clicked = true
        new_title = this.getElementsByTagName('h2')[0].innerHTML
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
});

document.getElementById('country1').onclick = function(e){
    document.getElementById('slider').style.paddingLeft = '12.5%'
}
document.getElementById('country2').onclick = function(e){
    document.getElementById('slider').style.paddingLeft = '62.5%'
}