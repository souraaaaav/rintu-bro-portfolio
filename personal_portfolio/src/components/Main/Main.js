import React from 'react'
import About from './About/About'
import { ContactMe } from './ContactMe/ContactMe'
import ImageSlider from './ImageSlider/ImageSlider'
import { SliderData } from './ImageSlider/SliderData'
import './Main.css'
import Portfolio from './Portfolio/Portfolio'
import Qualification from './Qualification/Qualification'
import Skills from './Skills/Skills'

const Main = props => {

    return (
        <main class="main">

            {/* <Home /> */}
            <h1 style={{ marginTop: '75px', textAlign: 'center', marginBottom: '15px' }}>Recent Projects</h1>
            <ImageSlider slides={SliderData} />

            <About />

            <Skills />

            <Qualification />



            <Portfolio />

            {/* <ProjectInMind /> */}

            {/* <Testimonial /> */}

            <ContactMe />

        </main>
    )
}

export default Main