import React from "react";
import './About.css'
import about from '../../../assets/images/about.jpg'
import CV from '../../../assets/pdf/Alexa-Cv.pdf'

const About = () =>{
    return(
        <section class="about section" id="about">
        <h2 class="section__title">About me</h2>
        <span class="section__subtitle">My introduction</span>

        <div class="about__container container grid">
            <img src={about} alt="" class="about__img" />


            <div class="about__data">
                <p class="about__description">web developing is my passion</p>

                <div class="about__info">
                    <div>
                        <span class="about__info-title">08+</span>
                        <span class="about__info-name">Years <br /> experience</span>
                    </div>

                    <div>
                        <span class="about__info-title">20+</span>
                        <span class="about__info-name">Completed <br /> project</span>
                    </div>

                    <div>
                        <span class="about__info-title">05+</span>
                        <span class="about__info-name">Companies <br /> worked</span>
                    </div>
                </div>

                <div class="about__buttons">
                    <a download="" href={CV} class="button button--flex">
                        Download CV <i class="uil uil-download-alt button__icon"></i>
                    </a>
                </div>
            </div>
        </div>

    </section>
    )
}

export default About