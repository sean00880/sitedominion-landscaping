import Link from 'next/link';
import React from 'react';
import ServicesList from '../../data/services-data';

const ServiceSection = () => {
    return (
        <section className="services-area services-area-2 pb-90">
         <div className="container">
           
            <div className="services-wrapper services-wrapper-2" >
            <h2 style={{"padding":"2vh"}}>Featured Landscaping Website Services</h2>
            {ServicesList &&
                <div className="services-inner services-inner-2 wow fadeInUp" data-wow-delay=".3s">
                    <div className="row g-0">

                    <div className="col-12" >
                            <div className="single-service style-2">
                            <div className="service-img">
                                <img src='/assets/img/service/service1.png' alt="service-img"/>
                            </div>
                            <div className="single-service-content">
                                <div className="service-icon">
                                    <img src='/assets/img/icon/serviceicon8.png' className="icon" alt="service-img"/>
                                </div>
                                <h4 className="service-title"><Link href={`/service-details/5`}><a>Landscaping Multi-Service Website Development</a></Link></h4>
                                <p>Get expert advice on how to design a garden.</p>
                            </div>
                            </div>
                        </div>
                    {ServicesList.slice(0, 4).map ((item, num) => (
                        <div className="col-lg-6 col-md-6 col-sm-12" key={num}>
                            <div className="single-service style-2">
                            <div className="service-img">
                                <img src={item.serviceImg} alt="service-img"/>
                            </div>
                            <div className="single-service-content">
                                <div className="service-icon">
                                    <img src={item.serviceIcon} className="icon" alt="service-img"/>
                                </div>
                                <h4 className="service-title"><Link href={`/service-details/${item.id}`}><a>{item.serviceTitle}</a></Link></h4>
                                <p>{item.serviceDesc}</p>
                            </div>
                            </div>
                        </div>
                    ))}
                    </div>
                </div>
            }
               <div className="services-action-wrapper wow fadeInUp" data-wow-delay=".3s">
                  <div className="service-action-bg-shape">
                     <img src="/assets/img/shape/pattern-1270.png" alt="shape-img"/>
                  </div>
                  <h3>Website Solutions for All Landscapnig Business Models</h3>
                    <Link href="/#pricing"><a className="fill-btn-rounded"><i className="fal fa-farm"></i><span>View Pricing</span></a></Link>
               </div>
            </div>
         </div>
      </section>
    );
};

export default ServiceSection;