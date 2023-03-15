import React from 'react';

const HeaderTop = () => {
    return (
        <div className="header-top-area d-none d-lg-block">
            <div className="container container-big">
                <div className="header-top-inner">
                    <div className="header-top-left">
                        <div className="meta-items">
                            <div className="meta-item">
                                <div className="meta-item-icon">
                                    <i className="fas fa-phone"></i>
                                </div>
                                <div className="meta-item-text">
                                    <p><a href="tel:78989700098">+1(571)599-4889</a></p>
                                </div>
                            </div>
                            <div className="meta-item">
                                <div className="meta-item-icon">
                                    <i className="fas fa-envelope-open"></i>
                                </div>
                                <div className="meta-item-text">
                                    <p><a href="mailto:info@gardomia.com">official@sitedominion.xyz</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="header-top-right">
                        <div className="meta-items">
                            <div className="meta-item">
                                <div className="meta-item-icon">
                                    <i className="fas fa-clock"></i>
                                </div>
                                <div className="meta-item-text">
                                    <p>Mon - Sat: 9:00 - 22:00<span className="d-none d-xl-inline-block">/ Closed on 
                                        <strong> Sunday</strong></span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="header-top-social">
                            <div className="social-links">
                                <ul>
                                    <li><a href="https://www.instagram.com/sitedominionofficial/"><i className="fab fa-instagram"></i></a></li>
                                    <li><a href="https://www.twitter.com/sitedominion/"><i className="fab fa-twitter"></i></a></li>
                                    <li><a href="https://www.facebook.com/sitedominion"><i className="fab fa-facebook-f"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderTop;