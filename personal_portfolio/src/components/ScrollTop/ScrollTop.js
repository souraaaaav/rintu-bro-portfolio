import React from 'react'
import './Scrollfile.css'

const ScrollTop = props =>{
    function scrollUp() {
        const scrollUp = document.getElementById('scroll-up');
        // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
        if (this.scrollY >= 500) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
    }
    window.addEventListener('scroll', scrollUp)
    return(
        <a href="#home" class="scrollup" id="scroll-up">
        <i class="uil uil-arrow-up scrollup__icon"></i>
    </a>
    )
}

export default ScrollTop