const loaderContainer = document.querySelector('.loader-container');
const section = document.querySelector('section')

document.addEventListener('DOMContentLoaded',() => {
    setTimeout(() => {
        loaderContainer.style.display = 'none'
    }, 3000)

    // if(loaderContainer.style.display === 'none'){
        // }
        setTimeout(() => {
            section.classList.add('active')
        }, 3100)
    })