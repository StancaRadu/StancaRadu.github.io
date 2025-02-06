tabs = document.querySelectorAll('.side-tab')
tabs.forEach(tab => {
    tab.onclick = function (e){
        new_title = this.getElementsByTagName('h2')[0].innerHTML
        changer = document.getElementById('title-changer').style
        changer.left = 0
        setTimeout(()=>{
            document.getElementById('title').innerHTML = new_title
            changer.left = '200%'
            setTimeout(()=>{
                changer.transitionDuration = '0s'
                changer.left = '-200%'
                setTimeout(()=>{
                    changer.transitionDuration = '1s'
                }, 10)
            }, 1000)
        }, 1000)
    }
});
