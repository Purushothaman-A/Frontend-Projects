let icon = document.getElementById('icon')


// Dark Mode
icon.addEventListener('click',()=>{
    document.body.classList.toggle('dark-theme')

    if(document.body.classList.contains('dark-theme')){
        icon.src = "assets/moon.png"
    }
    else{
        icon.src="assets/sun.png"
    }

})


// Preloader

let loader = document.getElementById('preloader')

window.addEventListener('load',()=>{
    loader.style.display='none'
})
