import React from 'react';

const BlogAbout = () => {
    return (
        <div className="sidebar-widget sidebar-about mb-50">
            <h4 className="sidebar-widget-title">About Us</h4>
            <div className="sidebar-about-content">
                <div className="profile-thumb">
                    <img src="/assets/img/team/team-9.jpg" alt="" />
                </div>
                <h4 className="member-name">Site Dominion</h4>
            
                <p>Site Dominion provides visually appealing and useful websites to promote your landscaping company. The team at Site Dominion builds unique websites with a user experience in mind that draw in and keep consumers. With landscape web design services from Site Dominion, stand out from the crowd and improve your online visibility.</p>
                <div className="social-links">
                    <ul>
                        <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                        <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fab fa-behance"></i></a></li>
                        <li><a href="#"><i className="fab fa-youtube"></i></a></li>
                        <li><a href="#"><i className="fab fa-linkedin"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default BlogAbout;