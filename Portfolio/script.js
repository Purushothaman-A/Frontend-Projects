let icon = document.getElementById('icon')

// Dark Mode
icon.addEventListener('click',()=>{
    document.body.classList.toggle('dark-theme')

    if(document.body.classList.contains('dark-theme')){
        icon.src = "moon.png"
    }
    else{
        icon.src="sun.png"
    }

})

// Preloader

let loader = document.getElementById('preloader')

window.addEventListener('load',()=>{
    loader.style.display='none'
})
