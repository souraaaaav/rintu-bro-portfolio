import React from "react";
import './Skills.css'
import { useState } from "react";

const Skills = () => {
    const [skillsClassState, setSkillsClassState] = useState({
        skills1: "skills__content skills__open",
        skills2: "skills__content skills__close",
        skills3: "skills__content skills__close",
    })

    const skillsToggleHandler1 = () => {
        let itemClass = skillsClassState.skills1
        console.log(itemClass)

        if (itemClass === 'skills__content skills__close') {
            setSkillsClassState(prevState => ({
                ...prevState,
                skills1: "skills__content skills__open"
            })
            )
        }
        else if (itemClass === 'skills__content skills__open') {
            setSkillsClassState(prevState => ({
                ...prevState,
                skills1: "skills__content skills__close"
            })
            )
        }
    }
    const skillsToggleHandler2 = () => {
        let itemClass = skillsClassState.skills2
        console.log(itemClass)

        if (itemClass === 'skills__content skills__close') {
            setSkillsClassState(prevState => ({
                ...prevState,
                skills2: "skills__content skills__open"
            })
            )
        }
        else if (itemClass === 'skills__content skills__open') {
            setSkillsClassState(prevState => ({
                ...prevState,
                skills2: "skills__content skills__close"
            })
            )
        }
    }
    const skillsToggleHandler3 = () => {
        console.log('clicked 3')
        let itemClass = skillsClassState.skills3
        console.log(itemClass)

        if (itemClass === 'skills__content skills__close') {
            setSkillsClassState(prevState => ({
                ...prevState,
                skills3: "skills__content skills__open"
            })
            )
        }
        else if (itemClass === 'skills__content skills__open') {
            setSkillsClassState(prevState => ({
                ...prevState,
                skills3: "skills__content skills__close"
            })
            )
        }
    }

    return(
        <section class="skills section" id="skills">
        <h2 class="section__title">Skills</h2>
        <span class="section__subtitle">My technical level</span>

        <div class="skills__container container grid">
            {/* <!-- SKILLS 1 --> */}

            <div class={skillsClassState.skills1}>
                <div class="skills__header" onClick={skillsToggleHandler1} >
                    <i class="uil uil-brackets-curly skills__icon"></i>

                    <div>
                        <h1 class="skills__titles">Frontend developer</h1>
                        <span class="skills__subtitle">More than 4 years</span>
                    </div>

                    <i class="uil uil-angle-down skills__arrow"></i>
                </div>

                <div class="skills__list grid">
                    <div class="skills__data">
                        <div class="skills__titles">
                            <h3 class="skills__name">HTML</h3>
                            <span class="skills__number">90%</span>
                        </div>
                        <div class="skills__bar">
                            <span class="skills__percentage skills__html"></span>
                        </div>
                    </div>

                    <div class="skills__data">
                        <div class="skills__titles">
                            <h3 class="skills__name">CSS</h3>
                            <span class="skills__number">80%</span>
                        </div>
                        <div class="skills__bar">
                            <span class="skills__percentage skills__css"></span>
                        </div>
                    </div>
                    <div class="skills__data">
                        <div class="skills__titles">
                            <h3 class="skills__name">JavaScript</h3>
                            <span class="skills__number">60%</span>
                        </div>
                        <div class="skills__bar">
                            <span class="skills__percentage skills__js"></span>
                        </div>
                    </div>
                    <div class="skills__data">
                        <div class="skills__titles">
                            <h3 class="skills__name">React</h3>
                            <span class="skills__number">85%</span>
                        </div>
                        <div class="skills__bar">
                            <span class="skills__percentage skills__react"></span>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- SKILLS 2 --> */}

            <div class={skillsClassState.skills2}>
                <div class="skills__header" onClick={skillsToggleHandler2}  >
                    <i class="uil uil-server skills__icon"></i>

                    <div>
                        <h1 class="skills__titles">Backend developer</h1>
                        <span class="skills__subtitle">More than 2 years</span>
                    </div>

                    <i class="uil uil-angle-down skills__arrow"></i>
                </div>

                <div class="skills__list grid">
                    <div class="skills__data">
                        <div class="skills__titles">
                            <h3 class="skills__name">PHP</h3>
                            <span class="skills__number">80%</span>
                        </div>
                        <div class="skills__bar">
                            <span class="skills__percentage skills__php"></span>
                        </div>
                    </div>

                    <div class="skills__data">
                        <div class="skills__titles">
                            <h3 class="skills__name">Node Js</h3>
                            <span class="skills__number">70%</span>
                        </div>
                        <div class="skills__bar">
                            <span class="skills__percentage skills__node"></span>
                        </div>
                    </div>
                    <div class="skills__data">
                        <div class="skills__titles">
                            <h3 class="skills__name">Firebase</h3>
                            <span class="skills__number">90%</span>
                        </div>
                        <div class="skills__bar">
                            <span class="skills__percentage skills__firebase"></span>
                        </div>
                    </div>
                    <div class="skills__data">
                        <div class="skills__titles">
                            <h3 class="skills__name">Python</h3>
                            <span class="skills__number">55%</span>
                        </div>
                        <div class="skills__bar">
                            <span class="skills__percentage skills__python"></span>
                        </div>
                    </div>
                </div>
            </div>



            {/* <!-- SKILLS 3 --> */}
            <div class={skillsClassState.skills3}>
                <div class="skills__header" onClick={skillsToggleHandler3} >
                    <i class="uil uil-swatchbook skills__icon"></i>

                    <div>
                        <h1 class="skills__titles">Designer</h1>
                        <span class="skills__subtitle">More than 5 years</span>
                    </div>

                    <i class="uil uil-angle-down skills__arrow"></i>
                </div>

                <div class="skills__list grid">
                    <div class="skills__data">
                        <div class="skills__titles">
                            <h3 class="skills__name">Figma</h3>
                            <span class="skills__number">90%</span>
                        </div>
                        <div class="skills__bar">
                            <span class="skills__percentage skills__figma"></span>
                        </div>
                    </div>

                    <div class="skills__data">
                        <div class="skills__titles">
                            <h3 class="skills__name">Sketch</h3>
                            <span class="skills__number">85%</span>
                        </div>
                        <div class="skills__bar">
                            <span class="skills__percentage skills__sketch"></span>
                        </div>
                    </div>
                    <div class="skills__data">
                        <div class="skills__titles">
                            <h3 class="skills__name">Photoshop</h3>
                            <span class="skills__number">85%</span>
                        </div>
                        <div class="skills__bar">
                            <span class="skills__percentage skills__photoshop"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section>
    )
}

export default Skills