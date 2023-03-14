import Link from 'next/link';
import React from 'react';

const FoundationSection = () => {
    return (
        <section className="foundation-area foundation-area-bg pt-120 pb-60">
            <div className="foundation-bg-shape">
                <img src="/assets/img/shape/pattern.png" alt=""/>
            </div>
            <div className="container">
                <div className="row align-items-center wow fadeInUp" data-wow-delay=".3s">
                    <div className="col-lg-6">
                        <div className="foundation-img mb-60">
                            <img src="/assets/img/about/sitedominion.png" alt="img"/>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="foundation-content mb-60">
                            <div className="section-title">
                                <span className="section-subtitle">About Us</span>
                                <h2 className="section-main-title mb-20">One-stop-shop for Landscaping Websites</h2>
                            </div>
                            <p>Welcome to our website, where we specialize in offering top-notch websites and online services to landscaping businesses. Our staff is committed to assisting companies in the landscaping sector to flourish by developing successful internet presences.
 </p><p>We are dedicated to providing outstanding customer service and going above and beyond for our clients at our web design company. To achieve optimum visibility and traffic, we think every website should be user-friendly, aesthetically pleasing, and search engine optimized.</p>
                            <div className="founder-meta mt-45">
                                <div className="founder-info-meta">
                                    <div className="founder-img">
                                        <img src="/assets/img/sean.jpg" alt=""/>
                                    </div>
                                    <div className="founder-desciption">
                                        <span className="designation">Founder</span>
                                        <h4 className="founder-name">Sean Dwivedi</h4>
                                    </div>
                                </div>
                                <Link href="/contact"><a className="fill-btn-rounded">get in touch<i className="fal fa-angle-right"></i></a></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FoundationSection;