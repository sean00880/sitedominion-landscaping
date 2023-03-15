import Link from 'next/link';
import React from 'react';
import { checkout } from "./checkout"

const PricingSection = () => {

   const pricingList = [
      {
         id: 1,
         packageIcon: '/assets/img/icon/pricing-icon-1.png',
         packageName: 'basic package',
         packagePrice: '$49.99',
         packageService: 'Website Design',
         packagePlaning: 'Website Development',
         packageParty: 'Website Deployment',
         packageLandscape: 'Blog Creation & Setup',
         packageFence: 'Advanced SEO',
         packageBtn: 'get it now',
         packageActive: 'single-pricing mb-30',
         packageBadge: 'd-none',
         packageListClassA: 'no-inc',
         packageListClassB: 'no-inc',
         packageListClassC: 'no-inc',
         packageListClassD: 'n-inc',
         packageListClassE: 'n-inc',
         symbolA:'/assets/img/icon/check.png',
         symbolB:'/assets/img/icon/check.png',
         symbolC:'/assets/img/icon/check.png',
         symbolD:'/assets/img/icon/cross.png',
         symbolE:'/assets/img/icon/cross.png',
         product:'https://checkout.landscaping.sitedominion.com/c/pay/cs_live_a1BOh5OPjSUOmcqSj5My6qJEw4E8HpbhdUlubWoVaUGjB3z2Sv7yOxxaLa#fidkdWxOYHwnPyd1blppbHNgWjA0SG5RbENHdXdVSmBndXBMTkAwdjM2NFRMVm1zajBQZk9xfzw0akpMSFxiTHZ0dEc0QVM0VGZgXTU2a3xzTEszZl1zQEljMz1DMFV%2FYnNUaHJ8PEdVZDx2NTV9THZcMEdzYycpJ3VpbGtuQH11anZgYUxhJz8nZks3NTVXZG9uYU5%2FMXdGPXJ9J3gl'
      },
      {
         id: 2,
         packageIcon: '/assets/img/icon/pricing-icon-2.png',
         packageName: 'pro package',
         packagePrice: '$69.99',
         packageService: 'Website Design',
         packagePlaning: 'Website Development',
         packageParty: 'Website Deployment',
         packageLandscape: 'Blog Creation & Setup',
         packageFence: 'Advanced SEO',
         packageBtn: 'get it now',
         packageActive: 'single-pricing mb-30',
         packageBadge: 'd-none',
         packageListClassA: 'no-inc',
         packageListClassB: 'no-inc',
         packageListClassC: 'no-inc',
         packageListClassD: 'no-inc',
         packageListClassE: 'n-inc',
         symbolA:'/assets/img/icon/check.png',
         symbolB:'/assets/img/icon/check.png',
         symbolC:'/assets/img/icon/check.png',
         symbolD:'/assets/img/icon/check.png',
         symbolE:'/assets/img/icon/cross.png',
         product:'https://checkout.landscaping.sitedominion.com/c/pay/cs_live_a1DVvPM4WvAmRCSvZsyxlampHxdynq3bXFTFNy58Bep9FapUKKDmsk9KXu#fidkdWxOYHwnPyd1blppbHNgWjA0SG5RbENHdXdVSmBndXBMTkAwdjM2NFRMVm1zajBQZk9xfzw0akpMSFxiTHZ0dEc0QVM0VGZgXTU2a3xzTEszZl1zQEljMz1DMFV%2FYnNUaHJ8PEdVZDx2NTV9THZcMEdzYycpJ3VpbGtuQH11anZgYUxhJz8nZEBQZktBZnd2Z0Z3YDdmZkhKJ3gl'
      },
    
      {
         id: 3,
         packageIcon: '/assets/img/icon/pricing-icon-4.png',
         packageName: 'elite package',
         packagePrice: '$89.99',
         packageService: 'Website Design',
         packagePlaning: 'Website Development',
         packageParty: 'Website Deployment',
         packageLandscape: 'Blog Creation & Setup',
         packageFence: 'Advanced SEO',
         packageBtn: 'get it now',
         packageActive: 'single-pricing mb-30 best-package',
         packageBadge: 'bp-tag',
         packageListClassA: 'no-inc',
         packageListClassB: 'no-inc',
         packageListClassC: 'no-inc',
         packageListClassD: 'no-inc',
         packageListClassE: 'no-inc',
         symbolA:'/assets/img/icon/check.png',
         symbolB:'/assets/img/icon/check.png',
         symbolC:'/assets/img/icon/check.png',
         symbolD:'/assets/img/icon/check.png',
         symbolE:'/assets/img/icon/check.png',
          product:'https://checkout.landscaping.sitedominion.com/c/pay/cs_live_a1hkKVjlQKAD857wjtAZGB5ceXLppxfC0qISaEAIeKIFwv9IStfTL01rdm#fidkdWxOYHwnPyd1blppbHNgWjA0SG5RbENHdXdVSmBndXBMTkAwdjM2NFRMVm1zajBQZk9xfzw0akpMSFxiTHZ0dEc0QVM0VGZgXTU2a3xzTEszZl1zQEljMz1DMFV%2FYnNUaHJ8PEdVZDx2NTV9THZcMEdzYycpJ3VpbGtuQH11anZgYUxhJz8nZEBQNTVXYXNyMGA2MkFKMG5rJ3gl'
      }
   ]
    return (
        <section className="pricing-area pricing-area-bg pt-120 pb-90" id="pricing">
         <div className="container">
            <div className="row justify-content-center wow fadeInUp" data-wow-delay=".3s">
               <div className="col-lg-8">
                  <div className="section-title text-center pricing-section-title">
                     <span className="section-subtitle">pricing</span>
                     <h2 className="section-main-title mb-45">offers & pricing</h2>
                  </div>
               </div>
            </div>
            <div className="pricing-wrapper wow fadeInUp" data-wow-delay=".3s">
               {pricingList &&
                  <div className="row">
                     {pricingList.map((item, num) => (
                        <div className="col-xl-4 col-lg-4 col-md-12" key={num}>
                           <div className={item.packageActive}>
                           <div className={item.packageBadge}>best choice</div>
                              <div className="pricing-content">
                                 <div className="pricing-shape">
                                    <img src={item.packageIcon} alt=""/>
                                 </div>
                                 <span className="package-name">{item.packageName}</span>
                                 <span className="package-price">{item.packagePrice}</span>
                                 <div className="package-list">
                                    <ul>
                                       <li className={item.packageListClassA} style={{"display":"flex","justifyContent":"center"}}><img src={item.symbolA} style={{"width":"20px", "marginRight":"5px"}}/>{item.packageService}</li>
                                       <li className={item.packageListClassB} style={{"display":"flex","justifyContent":"center"}}><img src={item.symbolB} style={{"width":"20px", "marginRight":"5px"}}/>{item.packagePlaning}</li>
                                       <li className={item.packageListClassC} style={{"display":"flex","justifyContent":"center"}}><img src={item.symbolC} style={{"width":"20px", "marginRight":"5px"}}/>{item.packageParty}</li>
                                       <li className={item.packageListClassD} style={{"display":"flex","justifyContent":"center"}}><img src={item.symbolD} style={{"width":"20px", "marginRight":"5px"}}/>{item.packageLandscape}</li>
                                       <li className={item.packageListClassE} style={{"display":"flex","justifyContent":"center"}}><img src={item.symbolE} style={{"width":"20px", "marginRight":"5px"}}/>{item.packageFence}</li>
                                    </ul>
                                 </div>
                              </div>
                              <div className="pricing-btn">
                                 <a href={item.product}><button className="fill-btn"><i className="fas fa-shopping-basket"></i>{item.packageBtn}</button></a>
                              </div>
                           </div>
                        </div>
                     ))}
                  </div>
               }
            </div>
            <img src="/assets/img/logo/logogreen.png"
                                                     className="pricinglogo" alt="logo-img" />
         </div>
      </section>
    );
};

export default PricingSection;