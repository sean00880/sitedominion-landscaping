import Link from 'next/link';
import React from 'react';
import BlogAbout from '../blog/blog-about';
import BlogCategories from '../blog/blog-categories';
import BlogSearch from '../blog/blog-search';
import BlogTag from '../blog/blog-tag';
import SidebarBlogs from '../blog/sidebar-blogs';
import SponsorAdd from '../blog/sponsor-add';
import Breadcrumb from '../common/breadcrumb';
import BlogActions from './blog-actions';
import BlogComment from './blog-comment';
import BlogForm from './blog-form';
import BlogNav from './blog-nav';
import BlogWritter from './blog-writter';


const BlogDetailsArea = ({ item }) => {
   return (
      <>
         <Breadcrumb style={{"backgroundImage":`url(${item.img})`}} breadTitle={item.title} breadSubtitle={'Blog Post'} breadHome={'Home'} breadMenu={'blog details'} />

         <section className="blog-area pt-120 pb-60">
            <div className="container">
               <div className="row wow fadeInUp" data-wow-delay=".3s">
                  <div className="col-xl-9 col-lg-8 col-md-12">
                     <div className="blog-details-wrapper mb-60">
                        <div className="blog-single-details">
                           <div className="blog-meta-list">
                              <div className="blog-meta-single">
                                 <div className="blog-meta-icon">
                                    <i className="fas fa-eye"></i>
                                 </div>
                                 <div className="blog-meta-text">
                                    {item.blogView}
                                 </div>
                              </div>
                              <div className="blog-meta-single">
                                 <div className="blog-meta-icon">
                                    <i className="fas fa-comments"></i>
                                 </div>
                                 <div className="blog-meta-text">
                                    <Link href="/blog-details"><a>{item.blogComment}</a></Link>
                                 </div>
                              </div>
                              <div className="blog-meta-single">
                                 <div className="blog-meta-icon">
                                    <i className="fas fa-calendar-alt"></i>
                                 </div>
                                 <div className="blog-meta-text">
                                    {item.date}
                                 </div>
                              </div>
                           </div>
                           <h2>{item.title}</h2>
                           <p className="mb-55">{item.intro}</p>
                           <div className="blog-thumb">
                              <img src={item.img} alt="" />
                           </div>
                           
                           <p className="pb-50">{item.para1}</p>
                           <div className="hr-1"></div>
                           <h3>{item.heading1}</h3>
                           
                              <p>{item.para2}</p>
                         
                           <h3>{item.heading2}</h3>
                           <div className="blockquote-d-wrapper mb-50">
                              <div className="blockquote-d-content">
                                 <div className="blockquote-d-icon">
                                    <img src="/assets/img/icon/quote-icon-white-small.png" alt="" />
                                 </div>
                                 <p>Choices to take a holiday and travelling
                                    out inthis pandemic situation are limited. Why not take a stay action on quality.</p>
                                 <h4 className="author-name">Rosalina D. William</h4>
                                 <span className="author-designation">Founder</span>
                              </div>
                           </div>
                           <p className="mb-45">{item.para3}</p>
                           <h3>{item.heading3}</h3>
                           <div className="img-details mb-50">
                              <img src={item.img2} alt="" />
                           <p className="pb-50">{item.para4}</p>
                           </div>
                           <h3>{item.heading4}</h3>
                           <p className="pb-50">{item.para5}</p>
                           <h3>{item.heading5}</h3>
                           <div className="img-details mb-50">
                           <p className="pb-50">{item.para4}</p>
                              <img src={item.img3} alt="" />
                          
                           </div>
                           <p className="pb-50">{item.para7}</p>
                           <BlogActions />
                           <BlogWritter />
                           <BlogComment />
                           <div className="hr-1"></div>
                           <BlogForm />
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-8">
                     <div className="blog-sidebar_wrapper mb-60">
                        <BlogAbout />
                        <BlogSearch />
                        <SidebarBlogs />
                        <BlogCategories />
                        <BlogTag />
                        <SponsorAdd />
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default BlogDetailsArea;