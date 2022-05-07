import React from "react";
import './Qualification.css'
import { useState } from "react";

const Qualification = () =>{

    const [qualState, setQualState] = useState({
        eduTab:"qualification__button button--flex qualification__active",
        workTab:"qualification__button button--flex",
        eduTabContent:"qualification__content qualification__active",
        workTabContent:"qualification__content",
    })

    const eduQualificationTabHandler = () =>{
        if(qualState.eduTab==="qualification__button button--flex"){
            setQualState({
                eduTab:"qualification__button button--flex qualification__active",
                workTab:"qualification__button button--flex",
                eduTabContent:"qualification__content qualification__active",
                workTabContent:"qualification__content",
            })
        }
    }

    const workQualificationTabHandler = () =>{
        if(qualState.workTab==="qualification__button button--flex"){
            setQualState({
                eduTab:"qualification__button button--flex",
                workTab:"qualification__button button--flex  qualification__active",
                eduTabContent:"qualification__content",
                workTabContent:"qualification__content qualification__active",
            })
        }
    }

    return(
        <section class="qualification section" id="qualification">
        <h2 class="section__title">Qualification</h2>
        <span class="section__subtitle">My personal journey</span>

        <div class="qualification__container container">
            <div class="qualification__tabs">
                <div class={qualState.eduTab} data-target='#education' onClick={eduQualificationTabHandler}>
                    <i class="uil uil-graduation-cap qualification__icon"></i> Education
                </div>

                <div class={qualState.workTab} data-target='#work' onClick={workQualificationTabHandler}>
                    <i class="uil uil-briefcase-alt qualification__icon"></i> Work
                </div>
            </div>

            <div class="qualification__sections">
                {/* <!--==================== QUALIFICATION  CONTENT 1====================--> */}
                <div class={qualState.eduTabContent} data-content id="education">
                    {/* <!--==================== QUALIFICATION  1====================--> */}
                    <div class="qualification__data">
                        <div>
                            <h3 class="qualification__title">Computer Engineer</h3>
                            <span class="qualification__subtitle">Peru - University</span>
                            <div class="qualification__calendar">
                                <i class="uil uil-calendar-alt"></i> 2009 - 2014
                            </div>
                        </div>

                        <div>
                            <span class="qualification__rounder"></span>
                            <span class="qualification__line"></span>
                        </div>
                    </div>

                    {/* <!--==================== QUALIFICATION  2====================--> */}
                    <div class="qualification__data">
                        <div></div>

                        <div>
                            <span class="qualification__rounder"></span>
                            <span class="qualification__line"></span>
                        </div>

                        <div>
                            <h3 class="qualification__title">Web Design</h3>
                            <span class="qualification__subtitle">Spain - Institute</span>
                            <div class="qualification__calendar">
                                <i class="uil uil-calendar-alt"></i> 2014 - 2017
                            </div>
                        </div>

                    </div>
                    {/* <!--==================== QUALIFICATION  3====================--> */}
                    <div class="qualification__data">
                        <div>
                            <h3 class="qualification__title">Web Development</h3>
                            <span class="qualification__subtitle">Peru - Institute</span>
                            <div class="qualification__calendar">
                                <i class="uil uil-calendar-alt"></i> 2017 - 2019
                            </div>
                        </div>

                        <div>
                            <span class="qualification__rounder"></span>
                            <span class="qualification__line"></span>
                        </div>
                    </div>
                    {/* <!--==================== QUALIFICATION  4====================--> */}
                    <div class="qualification__data">
                        <div></div>

                        <div>
                            <span class="qualification__rounder"></span>
                            {/* <!-- <span class="qualification__line"></span> --> */}
                        </div>

                        <div>
                            <h3 class="qualification__title">Master in Ui/Ux</h3>
                            <span class="qualification__subtitle">Peru - Institute</span>
                            <div class="qualification__calendar">
                                <i class="uil uil-calendar-alt"></i> 2019 - 2021
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!--==================== QUALIFICATION  CONTENT 2====================--> */}
                <div class={qualState.workTabContent} data-content id="work">
                    {/* <!--==================== QUALIFICATION  1====================--> */}
                    <div class="qualification__data">
                        <div>
                            <h3 class="qualification__title">Software Engineer</h3>
                            <span class="qualification__subtitle">Microsfot - Peru</span>
                            <div class="qualification__calendar">
                                <i class="uil uil-calendar-alt"></i> 2016-2019
                            </div>
                        </div>

                        <div>
                            <span class="qualification__rounder"></span>
                            <span class="qualification__line"></span>
                        </div>
                    </div>

                    {/* <!--==================== QUALIFICATION  2====================--> */}
                    <div class="qualification__data">
                        <div></div>

                        <div>
                            <span class="qualification__rounder"></span>
                            <span class="qualification__line"></span>
                        </div>

                        <div>
                            <h3 class="qualification__title">Frontend Developer</h3>
                            <span class="qualification__subtitle">Apple Inc - Spain</span>
                            <div class="qualification__calendar">
                                <i class="uil uil-calendar-alt"></i> 2018-2020
                            </div>
                        </div>

                    </div>
                    {/* <!--==================== QUALIFICATION  3====================--> */}
                    <div class="qualification__data">
                        <div>
                            <h3 class="qualification__title">Ui Designer</h3>
                            <span class="qualification__subtitle">Figma - Spain</span>
                            <div class="qualification__calendar">
                                <i class="uil uil-calendar-alt"></i> 2017 - 2019
                            </div>
                        </div>

                        <div>
                            <span class="qualification__rounder"></span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
    )
}

export default Qualification