import React from "react";

import { FacebookIcon, TwitterIcon, LinkedinIcon } from "react-share";
import "./footer.css";

const Footer = () => {
    return (
        <div className="cntr-footer">
            <div className="cntr-services">
                <h2>Services</h2>
                <ul>
                    <li>Web design Madrid</li>
                    <li>Graphic design Madrid</li>
                    <li>SEO Madrid</li>
                </ul>
            </div>
            <div className="cntr-contacts">
                <h2>Contact</h2>
                <ul>
                    <li>C/goya nº23 office 2</li>
                    <li>Tfl: 914324363</li>
                    <li>wallaclone@gmail.com</li>
                </ul>
            </div>
            <div className="cntr-social">
                <h2>Social networks</h2>
                <a href="https://www.facebook.com/">
                    <FacebookIcon size={32} round={true} className="icons" />
                </a>
                <a href="https://twitter.com/">
                    <TwitterIcon size={32} round={true} className="icons" />
                </a>
                <a href="https://www.linkedin.com/">
                    <LinkedinIcon size={32} round={true} className="icons" />
                </a>
            </div>
        </div>
    )
}

export default Footer;