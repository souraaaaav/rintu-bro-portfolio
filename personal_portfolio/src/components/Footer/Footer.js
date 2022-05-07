import React from "react";

const Footer = props =>{
    return(
        <footer class="footer">
        <div class="footer__bg">
            <div class="footer__container container grid">
                <div>
                    <h1 class="footer__title">Alexa</h1>
                    <span class="footer__subtitle">Frontend developer</span>
                </div>

                <ul class="footer__links">
                    <li>
                        <a href="#services" class="footer__link">Services</a>
                    </li>
                    <li>
                        <a href="#portfolio" class="footer__link">Portfolio</a>
                    </li>
                    <li>
                        <a href="#contact" class="footer__link">Contact me</a>
                    </li>
                </ul>

                <div class="footer__socials">
                    <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" class="footer__social">
                        <i class="uil uil-facebook-f"></i>
                    </a>
                    <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" class="footer__social">
                        <i class="uil uil-instagram"></i>
                    </a>
                    <a href="https://twitter.com/" target="_blank" rel="noreferrer" class="footer__social">
                        <i class="uil uil-twitter-alt"></i>
                    </a>
                </div>
            </div>
            <p class="footer__copy">&#169; CR3W. All right reserved</p>
        </div>

    </footer>
    
        
        )
}

export default Footer