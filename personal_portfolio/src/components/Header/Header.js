import React, { useState } from "react";
import moon from '../../assets/images/moon.png';
import sun from '../../assets/images/sun.png';

const Header = props => {

    const [navMenu, setNavMenu] = useState({
        navigationMenu: "nav__menu",
    })

    const [darkMode, setDarkMode] = useState({
        theme: 'day',
    })

    const navMenuOpenHandler = () => {
        setNavMenu({
            navigationMenu: "nav__menu show-menu"
        })
    }

    const navMenuCloseHandler = () => {
        setNavMenu({
            navigationMenu: "nav__menu"
        })
    }

    const linkAction = () => {
        setNavMenu({
            navigationMenu: "nav__menu"
        })
    }

    const scrollActive = () => {
        const sections = document.querySelectorAll('section[id]')
        const scrollY = window.pageYOffset

        sections.forEach(current => {
            console.log('hello world')
            const sectionHeight = current.offsetHeight
            const sectionTop = current.offsetTop - 50;
            const sectionId = current.getAttribute('id')

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
            } else {
                document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
            }
        })
    }
    window.addEventListener('scroll', scrollActive)

    function changeHeaderColor() {
        const header = document.getElementById('header');
        const darkHeader = 'colourful__dark__header'
        const lightHeader = 'colourful__light__header'
        // When the scroll is higher than 100 viewport height, add the colourful class to the a tag with the colourful__header class
        if (darkMode.theme === 'night') {
            if (header.classList.contains(lightHeader)) {
                header.classList.remove(lightHeader)
                if (this.scrollY >= 100) header.classList.add(darkHeader); else header.classList.remove(darkHeader)
            }
            else {
                if (this.scrollY >= 100) header.classList.add(darkHeader); else header.classList.remove(darkHeader)
            }
        }
        else {
            if (header.classList.contains(darkHeader)) {
                header.classList.remove(darkHeader)
                if (this.scrollY >= 100) header.classList.add(lightHeader); else header.classList.remove(lightHeader)
            }
            else {
                if (this.scrollY >= 100) header.classList.add(lightHeader); else header.classList.remove(lightHeader)
            }
        }
    }
    window.addEventListener('scroll', changeHeaderColor)

    const darkThemeHandler = () => {

        const header = document.getElementById('header');
        const darkHeader = 'colourful__dark__header'
        const lightHeader = 'colourful__light__header'

        console.log(darkMode.theme)
        if (darkMode.theme === 'night') {
            if (document.body.classList.contains('dark-theme')) {
                console.log('sun clicked')
                document.body.classList.remove('dark-theme')

                if (header.classList.contains(darkHeader)) {
                    header.classList.remove(darkHeader)
                    if (window.scrollY >= 100) header.classList.add(lightHeader); else header.classList.remove(lightHeader)
                }
                else {
                    if (window.scrollY >= 100) header.classList.add(lightHeader); else header.classList.remove(lightHeader)
                }

                setDarkMode({
                    theme: 'day'
                })
            }
        }

        else {
            if (document.body.classList.contains('dark-theme') === false) {
                console.log('moon clicked')
                document.body.classList.add('dark-theme')

                if (header.classList.contains(lightHeader)) {
                    header.classList.remove(lightHeader)
                    if (window.scrollY >= 100) header.classList.add(darkHeader); else header.classList.remove(darkHeader)
                }
                else {
                    if (window.scrollY >= 100) header.classList.add(darkHeader); else header.classList.remove(darkHeader)
                }

                setDarkMode({
                    theme: 'night'
                })
            }
        }


        // })

    }

    return (
        <header class="header" id="header">
            <nav class="nav container">
                <a href="#home" class="nav__logo">Alexa</a>

                <div class={navMenu.navigationMenu} id="nav-menu">

                    <ul class="nav__list grid">
                        {/* <li class="nav__item">
                            <a href="#home" class="nav__link active-link" onClick={linkAction}>
                                <i class="uil uil-estate nav__icon"></i> Home
                            </a>
                        </li> */}
                        <li class="nav__item">
                            <a href="#about" class="nav__link" onClick={linkAction}>
                                <i class="uil uil-user nav__icon"></i> About
                            </a>
                        </li>
                        <li class="nav__item">
                            <a href="#skills" class="nav__link" onClick={linkAction}>
                                <i class="uil uil-file-plus-alt nav__icon"></i> Skills
                            </a>
                        </li>
                        <li class="nav__item">
                            <a href="#qualification" class="nav__link" onClick={linkAction}>
                                <i class="uil uil-graduation-cap nav__icon"></i>Qualification
                            </a>
                        </li>
                        <li class="nav__item">
                            <a href="#services" class="nav__link" onClick={linkAction}>
                                <i class="uil uil-briefcase-alt nav__icon"></i> Services
                            </a>
                        </li>
                        <li class="nav__item">
                            <a href="#portfolio" class="nav__link" onClick={linkAction}>
                                <i class="uil uil-scenery nav__icon"></i> Portfolio
                            </a>
                        </li>
                        <li class="nav__item">
                            <a href="#contact" class="nav__link" onClick={linkAction}>
                                <i class="uil uil-message nav__icon"></i> Contactme
                            </a>
                        </li>
                    </ul>
                    <i class="uil uil-times nav__close" id="nav-close" onClick={navMenuCloseHandler}></i>
                </div>

                <div class="nav__btns">
                    {/* <!-- Theme change button --> */}
                    {/* <i class="uil uil-moon change-theme" id="theme-button" onClick={darkThemeHandler}></i> */}
                    {darkMode.theme === 'night' ? <img src={sun} class="uil uil-moon change-theme" id="theme-button" onClick={darkThemeHandler} alt="alternatetext" />
                        : <img src={moon} class="uil uil-moon change-theme" id="theme-button" onClick={darkThemeHandler} alt="alternatetext" />}

                    <div class="nav__toggle" id="nav-toggle" onClick={navMenuOpenHandler}>
                        <i class="uil uil-apps"></i>
                    </div>

                </div>


            </nav>
        </header>

    )
}

export default Header