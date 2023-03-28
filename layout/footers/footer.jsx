import Link from 'next/link';
import React from 'react';

const FooterOne = () => {
    return (
        <footer className="footer1-bg">
            <section className="footer-area footer-area1 footer-area1-bg pt-95 pb-55">
                <div className="footer-bg-shape">
                    <img src="/assets/img/shape/pattern.png" alt="" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="footer-widget footer1-widget footer1-widget1 mb-40">
                                <div className="footer-widget-title">
                                    <h4>about us</h4>
                                </div>
                                <p className="mb-35">Welcome to our website, where we specialize in offering top-notch websites and online services to landscaping businesses. Our staff is committed to assisting companies in the landscaping sector to flourish by developing successful internet presences.</p>
                                <div className="footer-support">
                                    <div className="irc-item support-meta">
                                        <div className="irc-item-icon">
                                            <i className="fas fa-phone-alt"></i>
                                        </div>
                                        <div className="irc-item-content">
                                            <p>Text Us</p>
                                            <div className="support-number"><a href="tel:98965963168">+1(571)599-4889</a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="footer-widget footer1-widget footer1-widget2 mb-40">
                                <div className="footer-widget-title">
                                    <h4>Main Pages</h4>
                                </div>
                                <ul>
                                    <li><Link href="/"><a>Home</a></Link></li>
                                    <li><Link href="/#about"><a>about</a></Link></li>
                                    <li><Link href="/#services"><a>services</a></Link></li>
                                    <li><Link href="/#blog"><a>news</a></Link></li>
                                    <li><Link href="/#testimonials"><a>Testimonials</a></Link></li>
                                    <li><Link href="/#pricing"><a>pricing</a></Link></li>
                                </ul>
                                
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="footer-widget footer1-widget footer1-widget3 mb-40 ">
                                <div className="footer-widget-title">
                                    <h4>Contact Us</h4>
                                </div>
                                <ul>
                                 
                                    <li><Link href="/contact"><a>Get in touch</a></Link></li>
                                    
                                
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="footer-widget footer1-widget footer1-widget4 mb-40 ">
                                <div className="footer-widget-title">
                                    <h4>get in touch</h4>
                                </div>
                                <div className="footer-contact">
                                    <ul>
                                        <li>
                                            <div className="single-contact">
                                                <div className="contact-icon">
                                                    <i className="fas fa-phone"></i>
                                                </div>
                                                <p><a href="tel:1-800-700-600">Text Us +1(571)-599-4889</a></p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="single-contact">
                                                <div className="contact-icon">
                                                    <i className="fas fa-envelope-open"></i>
                                                </div>
                                                <p><a href="mailto:official@sitedominion.xyz">official@sitedominion.xyz</a></p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="single-contact">
                                                <div className="contact-icon">
                                                    <i className="fas fa-map-marked-alt"></i>
                                                </div>
                                                <p><a href="#">Ashburn, VA-20147</a></p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="footer-social">
                                    <span>Connect:</span>
                                    <div className="social-links">
                                        <ul>
                                            <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                            <li><a href="#"><i className="fab fa-behance"></i></a></li>
                                            <li><a href="#"><i className="fab fa-youtube"></i></a></li>
                                            <li><a href="#"><i className="fab fa-linkedin"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="copyright-area copyright1-area">
                <div className="container">
                    <div className="copyright1-inner">
                        <div className="row align-items-center">
                            <div className="col-lg-3 col-md-4">
                                <div className="footer-logo">
                                    <Link href="/"><a><img src="/assets/img/logo/logo-w.png" alt="" /></a></Link>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="copyright-text copyright1-text">
                                    Copyright & Design By <a href="https://themeforest.net/user/bdevs/portfolio">Site Dominion</a> - 2023
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-2">
                                <div className="go-top-btn">
                                    <a className="go-top" href="#"><i className="fal fa-long-arrow-up"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default FooterOne;