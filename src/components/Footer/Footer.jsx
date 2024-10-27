import React from "react";
import './Footer.css'
import {FOOTER_company, FOOTER_customerCare, FOOTER_account, FOOTER_socials, FOOTER_payment} from '../../const.js';

export default function Footer() {
    return (
        <div className="footer">

            <div className='copyright-and-stuff'>
                <div>© Hustle Club. All Rights Reserved.</div>
            </div>

            
            <div className='socials-container'>
                {FOOTER_socials.map((socialIcons) => {
                    return (
                        <div className='socialIcons'>
                            <a href={socialIcons.link}>
                                <img className='social_icons' src={socialIcons.src} alt='' />
                            </a>
                        </div>
                    );
                })}
            </div>
        


        </div>
    );
}
