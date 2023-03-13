import Link from 'next/link';
import React from 'react';
import { EffectFade, Pagination, Scrollbar, A11y, Autoplay, } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css/bundle';

const HeroSlider = () => {

    const SliderItem = [
        {
            id: 1,
            sliderBg: '/assets/img/banner/banner3.png',
            sliderSubtitle: 'We specialize in creating stunning and effective websites for landscaping businesses. We understand that your business relies heavily on its online presence, which is why we are committed to providing you with customized web design solutions that will help you stand out from the competition.',
            sliderTitle: 'Custom Landscaping Business Web Design',
            sliderbtn: 'request an estimate',
            sliderbtn2: 'About Us',
        },
        {
            id: 2,
            sliderBg: '/assets/img/banner/banner2.png',
            sliderSubtitle: 'We specialize in creating stunning and effective websites for landscaping businesses. We understand that your business relies heavily on its online presence, which is why we are committed to providing you with customized web design solutions that will help you stand out from the competition.',
            sliderTitle: 'Get More Leads and Customers',
            sliderbtn: 'request an estimate',
            sliderbtn2: 'About Us',
        },
        {
            id: 3,
            sliderBg: '/assets/img/banner/banner1.png',
            sliderSubtitle: 'We specialize in creating stunning and effective websites for landscaping businesses. We understand that your business relies heavily on its online presence, which is why we are committed to providing you with customized web design solutions that will help you stand out from the competition.',
            sliderTitle: 'Experience the Best in Web Design',
            sliderbtn: 'request an estimate',
            sliderbtn2: 'About Us',
        }
    ];

    return (
        <div className="banner-area banner-area1 pos-rel">
            <div className="banner-meta-link">
                <h4>Make A Order</h4>
                <p><Link href="/about"><a>Let’s Talk About Product</a></Link></p>
            </div>
            <div className="swiper-container slider__active">
                {SliderItem &&
                    <div className="swiper-wrapper">
                        <Swiper
                            modules={[ EffectFade, Pagination, Scrollbar, A11y, Autoplay]}
                            spaceBetween={30}
                            effect={"fade"}
                            slidesPerView={1}
                            autoplaydisableoninteraction={"false"}
                            loop={true}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: true
                            }}
                            pagination={{
                                clickable: true,
                                el: '.slider-pagination',
                            }}
                            breakpoints={{
                                320: {
                                    slidesPerView: 1
                                },
                                500: {
                                    slidesPerView: 1
                                },
                                768: {
                                    slidesPerView: 1
                                },
                                992: {
                                    slidesPerView: 1
                                },
                                1200: {
                                    slidesPerView: 1
                                }
                            }}
                            
                        >
                            {SliderItem.map((item, num) => (
                                <SwiperSlide key={num}>
                                    <div className="swiper-slidess">
                                        <div className="single-banner single-banner-1 banner-850 d-flex align-items-center pos-rel">
                                            <div className="banner-bg banner-bg1 banner-bg1-1" style={{ backgroundImage: `url(${item.sliderBg})`}}>
                                            </div>
                                            <div className="container pos-rel" style={{"background":"rgb(0 0 0 / 80%)", "maxWidth":"1200px", "borderRadius":"2vh"}}>
                                                <div className="row align-items-center">
                                                    <div className="col-12">
                                                        <div className="banner-content banner-content1 banner-content1-1 pt-0">
                                                            <h1 className="banner-title" style={{ textAlign: "center"}} data-animation="fadeInUp" data-delay=".5s">{item.sliderTitle}</h1>
                                                            <div className="banner-meta-text" data-animation="fadeInUp" data-delay=".3s">
                                                                <span>{item.sliderSubtitle}</span>
                                                            </div>
                                                            <div className="banner-btn" data-animation="fadeInUp" data-delay=".7s">
                                                                <Link href="/contact"><a className="fill-btn-rounded">{item.sliderbtn}</a></Link>
                                                                <Link href="/about"><a className="border-btn-rounded">{item.sliderbtn2}</a></Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4 col-md-2"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                }
            </div>
            <div className="slider-pagination slider1-pagination"></div>
        </div>
    );
};

export default HeroSlider;