import Link from 'next/link';
import React from 'react';

const AboutUsSection = () => {
    return (
        <section className="about-area pt-120 pb-90" id="about">
            <div className="container">
                <div className="row align-items-center wow fadeInUp" data-wow-delay=".3s">
                    <div className="col-lg-6">
                        <div className="about-thumb mb-30">
                            <img src="/assets/img/about/sitedominion.png" alt=""/>
                            <div className="about-thumb-meta">
                                <p>Lauunched in March, 2023</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about-content mb-30">
                            <div className="section-title">
                                <span className="section-subtitle">about us</span>
                                <h2 className="section-main-title mb-20">One-stop-shop for Landscaping Websites</h2>
                            </div>
                            <p className="mb-30">Welcome to our website, where we specialize in offering top-notch websites and online services to landscaping businesses. Our staff is committed to assisting companies in the landscaping sector to flourish by developing successful internet presences.
 </p>
                            <p className="mb-45">We are dedicated to providing outstanding customer service and going above and beyond for our clients at our web design company. To achieve optimum visibility and traffic, we think every website should be user-friendly, aesthetically pleasing, and search engine optimized.</p>
                            <div className="about-btn">
                                <Link href="/#pricing"><a className="fill-btn">Pricing<i className="fal fa-angle-right"></i></a></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUsSection;