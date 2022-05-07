import React from "react";
import { useState } from "react";
import './Services.css'

const Services = () => {

   const [modalState,setModalState]=useState({
       uiModal:"services__modal",
       frontModal:"services__modal",
       brandModal:"services__modal",
   })

   const uiModalHandler=()=>{
       setModalState({
        uiModal:"services__modal active-modal",
        frontModal:"services__modal",
        brandModal:"services__modal",
       })
   }
   const frontModalHandler=()=>{
    setModalState({
        uiModal:"services__modal",
        frontModal:"services__modal active-modal",
        brandModal:"services__modal",
       })
   }
   const brandModalHandler=()=>{
    setModalState({
        uiModal:"services__modal active-modal",
        frontModal:"services__modal",
        brandModal:"services__modal active-modal",
       })
   }
   const closeModal=()=>{
       setModalState({
        uiModal:"services__modal",
        frontModal:"services__modal",
        brandModal:"services__modal",
       })
   }

    return(
        <section class="services section" id="services">
        <h2 class="section__title">Services</h2>
        <span class="section__subtitle">What i offer</span>

        <div class="services__container container grid">
            {/* <!--==================== SERVICES  1====================--> */}
            <div class="services__content">
                <div>
                    <i class="uil uil-window-grid services__icon"></i>
                    <h3 class="services__title">Ui/Ux <br /> Designer</h3>
                </div>
                <span class="button button--flex button--small button--link services__button" onClick={uiModalHandler}>
                    View More
                    <i class="uil uil-arrow-right button__icon"></i>
                </span>

                <div class={modalState.uiModal}>
                    <div class="services__modal-content">
                        <h4 class="services__modal-title">Ui/Ux <br /> Designer</h4>
                        <i class="uil uil-times services__modal-close" onClick={closeModal}></i>

                        <ul class="services__modal-services grid">
                            <li class="services__modal-service">
                                <i class="uil uil-check-circle services__modal-icon"></i>
                                <p>I develop the user interface.</p>
                            </li>
                            <li class="services__modal-service">
                                <i class="uil uil-check-circle services__modal-icon"></i>
                                <p>Web page development.</p>
                            </li>
                            <li class="services__modal-service">
                                <i class="uil uil-check-circle services__modal-icon"></i>
                                <p>I create ux element interactions.</p>
                            </li>
                            <li class="services__modal-service">
                                <i class="uil uil-check-circle services__modal-icon"></i>
                                <p>I position your company brand.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* <!--==================== SERVICES  2====================--> */}
            <div class="services__content">
                <div>
                    <i class="uil uil-arrow services__icon"></i>
                    <h3 class="services__title">Frontend <br /> Developer</h3>
                </div>
                <span class="button button--flex button--small button--link services__button" onClick={frontModalHandler}>
                    View More
                    <i class="uil uil-arrow-right button__icon"></i>
                </span>

                <div class={modalState.frontModal}>
                    <div class="services__modal-content">
                        <h4 class="services__modal-title">Frontend <br /> Developer</h4>
                        <i class="uil uil-times services__modal-close" onClick={closeModal}></i>

                        <ul class="services__modal-services grid">
                            <li class="services__modal-service">
                                <i class="uil uil-check-circle services__modal-icon"></i>
                                <p>I develop the user interface.</p>
                            </li>
                            <li class="services__modal-service">
                                <i class="uil uil-check-circle services__modal-icon"></i>
                                <p>Web page development.</p>
                            </li>
                            <li class="services__modal-service">
                                <i class="uil uil-check-circle services__modal-icon"></i>
                                <p>I create ux element interactions.</p>
                            </li>
                            <li class="services__modal-service">
                                <i class="uil uil-check-circle services__modal-icon"></i>
                                <p>I position your company brand.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* <!--==================== SERVICES  3====================--> */}
            <div class="services__content">
                <div>
                    <i class="uil uil-pen services__icon"></i>
                    <h3 class="services__title">Branding <br /> Designer</h3>
                </div>
                <span class="button button--flex button--small button--link services__button" onClick={brandModalHandler}>
                    View More
                    <i class="uil uil-arrow-right button__icon"></i>
                </span>

                <div class={modalState.brandModal}>
                    <div class="services__modal-content">
                        <h4 class="services__modal-title">Branding <br /> Designer</h4>
                        <i class="uil uil-times services__modal-close" onClick={closeModal}></i>

                        <ul class="services__modal-services grid">
                            <li class="services__modal-service">
                                <i class="uil uil-check-circle services__modal-icon"></i>
                                <p>I develop the user interface.</p>
                            </li>
                            <li class="services__modal-service">
                                <i class="uil uil-check-circle services__modal-icon"></i>
                                <p>Web page development.</p>
                            </li>
                            <li class="services__modal-service">
                                <i class="uil uil-check-circle services__modal-icon"></i>
                                <p>I create ux element interactions.</p>
                            </li>
                            <li class="services__modal-service">
                                <i class="uil uil-check-circle services__modal-icon"></i>
                                <p>I position your company brand.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Services