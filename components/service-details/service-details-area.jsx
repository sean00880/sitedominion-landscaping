import Link from 'next/link';
import React from 'react';
import WorkSection from '../home/work-section';

const ServiceDetailsArea = ({ item }) => {
    return (
        <>
            <section className="page-title-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="page-title-wrapper">
                                <p>Provides hassle-free backyard transformation</p>
                                <h1 className="page-title mb-10">{item.serviceTitle}</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="breadcrumb-wrapper">
                    <div className="container">
                        <div className="breadcrumb-menu">
                            <nav aria-label="Breadcrumbs" className="breadcrumb-trail breadcrumbs">
                                <ul className="trail-items">
                                    <li className="trail-item trail-begin"><Link href="/"><a><span>Home</span></a></Link></li>
                                    <li className="trail-item trail-end"><span>Service Details</span></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>

            <section className="service-details pt-120 pb-60">
                <div className="container">
                    <div className="row wow fadeInUp" data-wow-delay=".3s">
                        <div className="col-lg-9 col-md-12">
                            <div className="service-details-main mb-60">
                                <div className="service-image" style={{display:"flex",justifyContent:"center"}}>
                                    <img src={item.img1} alt="" style={{width:"350px"}} />
                                </div>
                                <h3 className="mb-15">{item.serviceTitle}</h3>
                                <p className="mb-55">{item.para1}</p>
                             <WorkSection/>
                             <p className="mt-15">
                                <Link href="/#service"><a href="" style={{textDecoration:"underline",fontStyle:"italic",textAlign:"center"}}>Back to Service Steps</a></Link></p>
                                <div className="service-sub-image">
                                    <img src={item.img2} alt="" />
                                    <img src={item.img3} alt="" />
                                </div>
                                <div className="service-features mb-60">
                                    <h4>Core Features</h4>
                                    <div className="service-feature-list">
                                        <span>Prioritization On Conversions</span>
                                        <span>Advanced Functionality</span>
                                        <span>Impactful Design</span>
                                        <span>Luxurious User Experience</span>
                                        <span>Best Programming Practices</span>
                                        <span>Flexible Support</span>
                                        <span>Responsive On All Devices</span>
                                        <span>Affordable</span>
                                        <span>Flexible Payment Plans</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-8">
                            <div className="service-sidebar-wrapper mb-60">
                                <div className="sidebar-widget sidebar-service mb-50">
                                    <h4 className="sidebar-widget-title">All Steps</h4>
                                    <div className="sidebar-service-list">
                                        <ul>
                                            <li><Link href="/service-details/website-design-and-development"><a>STEP 1: WEBSITE DESIGN & DEVELOPMENT</a></Link></li>
                                            <li><Link href="/service-details/website-deployment"><a>STEP 2: WEBSITE DEPLOYMENT</a></Link></li>
                                            <li><Link href="/service-details/blog-development-seo"><a>STEP 3: BLOG DEVELOPMENT + SEO</a></Link></li>
                                        </ul>
                                    </div>
                                </div>
                        
                                <div className="sidebar-widget sidebar-adv mb-50">
                                    <img src="/assets/img/service/service-sidebar-adv.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ServiceDetailsArea;