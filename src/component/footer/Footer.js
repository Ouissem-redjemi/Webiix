import React from 'react';
import {FiFacebook, FiTwitter,FiInstagram} from 'react-icons/fi';
import {FaTiktok} from "react-icons/fa";
import {FcReddit} from "react-icons/fc";

import './Footer.css';

const socialLinks = [
    <FiFacebook/>,
    <FiInstagram/>,
    <FiTwitter/>,
    <FaTiktok/>,
    <FcReddit/>

]
function Footer(){
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-6 mb-4 text-center">
                        <div className="logo">
                            <h1 className="d-flex gap-2 align-items-center">Webiix</h1>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-4 " style={{ marginRight: "10px" }}>
                        <div className=" d-flex gap-3 align-items-end">
                            {socialLinks.map((link,index) => (
                                <i key={index} className="logoSocial">{link}</i>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="col-lg-12 mt-4 text-center ">
                    <p className="copyright">
                        {' '}
                        Copyrights 2022, Developed by webiix.
                        All Rights Reserved.{" "}
                    </p>
                </div>

            </div>
        </footer>
    )
}
export default Footer;