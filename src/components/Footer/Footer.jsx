import React from "react";
import './Footer.css'
import { FOOTER_socials } from '../../const.js';

export default function Footer() {
    return (
        <div className="footer">

            <div className='socials-container'>
                {FOOTER_socials.map((socialLinks) => {
                    return (
                        <div className='socialLinks' key={socialLinks.name}>
                            <a href={socialLinks.link}>{socialLinks.name}</a>
                        </div>
                    );
                })}
            </div>

            <div className='copyright-and-stuff'>
                <div>© Hustle Club Inc. All Rights Reserved. Website created by <a className="website-link" href="https://github.com/waxhsu">Max Hsu</a>.</div>
            </div>

        </div>
    );
}



    