import React from "react";
import './Footer.css'
import ssl from './assets/ssl.png'
import plus from './assets/18plus.png'
import gamecare from './assets/gamecare.png'
import gt from './assets/gt.png'
function Footer(){
    return(
        <>
        <div class="footer-main">
            <div class="footer-main-div1">
                24X7 Support
            </div>
            <div class="footer-main-div2">
                <span>About</span>
                <span>Terms & Conditions</span>
                <span>Responsible Gaming</span>
            </div>
            <div class="footer-main-div3">
                <div class="footer-main-div3a">
                    <img src={ssl}></img>
                </div>
                <div class="footer-main-div3b">
                    <span>100% SAFE</span><br/><span>Protected connection and encrypted data.</span>
                </div>
                <div class="footer-main-div3c">
                    <img src={plus}></img>
                    <img src={gamecare}></img>
                    <img src={gt}></img>
                </div>

            </div>
            <div class="footer-main-div4">
            © Copyright 2020. All Rights Reserved.
            </div>
        </div>
        </>
    )
}
export default Footer