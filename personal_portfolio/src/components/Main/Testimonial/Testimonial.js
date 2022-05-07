import React from "react";
import './Testimonial.css'

import testimonial1 from '../../../assets/images/testimonial1.jpg'
import testimonial2 from '../../../assets/images/testimonial2.jpg'
import testimonial3 from '../../../assets/images/testimonial3.jpg'

import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/swiper-bundle.css'


import SwiperCore, {
    Navigation, Pagination
} from 'swiper';
SwiperCore.use([Navigation, Pagination]);


const Testimonial = () =>{
    return(
        <section class="testimonial section">
        <h2 class="section__title">Testimonial</h2>
        <span class="section__subtitle">My client saying</span>
        <div class="testimonial__container container swiper-container">
            <Swiper spaceBetween={30} pagination={{
                "clickable": true
            }} className="mySwiper">
                {/* <!--==================== TESTIMONIAL 1 ====================--> */}
                <SwiperSlide class="testimonial__content swiper-slide">
                    <div class="testimonial__data">
                        <div class="testimonial__header">
                            <img src={testimonial1} alt="" class="testimonial__img" />

                            <div>
                                <h3 class="testimonial__name">Sara Smith</h3>
                                <span class="testimonial__client">Client</span>
                            </div>
                        </div>

                        <div>
                            <i class="uil uil-star testimonial__icon-star"></i>
                            <i class="uil uil-star testimonial__icon-star"></i>
                            <i class="uil uil-star testimonial__icon-star"></i>
                            <i class="uil uil-star testimonial__icon-star"></i>
                            <i class="uil uil-star testimonial__icon-star"></i>
                        </div>
                    </div>
                    <p class="testimonial__description">I get a good impression, I carry out my project with all the possible quality</p>
                </SwiperSlide>

                {/* <!--==================== TESTIMONIAL 2 ====================--> */}
                <SwiperSlide class="testimonial__content swiper-slide">
                    <div class="testimonial__data">
                        <div class="testimonial__header">
                            <img src={testimonial2} alt="" class="testimonial__img" />

                            <div>
                                <h3 class="testimonial__name">Matt Robinson</h3>
                                <span class="testimonial__client">Client</span>
                            </div>
                        </div>

                        <div>
                            <i class="uil uil-star testimonial__icon-star"></i>
                            <i class="uil uil-star testimonial__icon-star"></i>
                            <i class="uil uil-star testimonial__icon-star"></i>
                            <i class="uil uil-star testimonial__icon-star"></i>
                            <i class="uil uil-star testimonial__icon-star"></i>
                        </div>
                    </div>
                    <p class="testimonial__description">I get a good impression, I carry out my project with all the possible quality</p>
                </SwiperSlide>

                {/* <!--==================== TESTIMONIAL 3 ====================--> */}
                <SwiperSlide class="testimonial__content swiper-slide">
                    <div class="testimonial__data">
                        <div class="testimonial__header">
                            <img src={testimonial3} alt="" class="testimonial__img" />

                            <div>
                                <h3 class="testimonial__name">Raul Harris</h3>
                                <span class="testimonial__client">Client</span>
                            </div>
                        </div>

                        <div>
                            <i class="uil uil-star testimonial__icon-star"></i>
                            <i class="uil uil-star testimonial__icon-star"></i>
                            <i class="uil uil-star testimonial__icon-star"></i>
                            <i class="uil uil-star testimonial__icon-star"></i>
                            <i class="uil uil-star testimonial__icon-star"></i>
                        </div>
                    </div>
                    <p class="testimonial__description">I get a good impression, I carry out my project with all the possible quality</p>
                </SwiperSlide>
            </Swiper>
     
        </div>
    </section>
    )
}

export default Testimonial