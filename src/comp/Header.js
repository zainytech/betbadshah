import React from "react";
import './Header.css'
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import logo from './assets/logo.png'
import {AiFillHome} from 'react-icons/ai'
import {HiUserCircle} from 'react-icons/hi'
import {AiFillCaretDown} from 'react-icons/ai'

function Header(){
    return(
        <>
        <div class="header-main">
        <div class="home-header">
                <div class="header-container">
                <Link to="/emain"><AiFillHome class="lcmain-icon-home"/></Link>
                    <div class="header-logo">
                        <img src={logo}></img>
                    </div>
                    <div class="home-header-login-detail">
                        <span>pts: 0.86 | 0 </span><br/>
                        <div class="home-header-login-detail-div2"><HiUserCircle class="lcmain-user-icon"/><span>BBPREM2237</span><AiFillCaretDown class="lcmain-drop-icon"/></div>
                    </div>
                </div>
            </div>
            <Marquee gradient={false} speed={50}>
<div class="home-marquee1">
IPL has Started, and All Matches Are Available On Our Exchange With The Best Odds. Live Scorecard Updates and Live Streaming are Available. Play To Win Huge On This IPL Season.
</div>
    </Marquee>  
        </div>
        </>
    )
}
export default Header