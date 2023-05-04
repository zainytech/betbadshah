import React from 'react';
import './Home.css'
import Footer from './Footer'
import { Link } from 'react-router-dom';
import { useState } from 'react';
// swiper slider//////////////
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Keyboard, Scrollbar, Navigation, Pagination} from "swiper";
import SwiperCore, { Autoplay} from "swiper";
import 'swiper/css/autoplay';
import Marquee from "react-fast-marquee";

import logo from './assets/logo.png'
import banner1 from "./assets/banner1.jpg";
import banner2 from "./assets/banner2.JPG";
import banner3 from "./assets/banner3.jpg";
import banner4 from "./assets/banner4.jpg";
import olc1 from './assets/OUR LIVE CASINOS/olc1.jpg';
import olc2 from './assets/OUR LIVE CASINOS/olc2.jpg';
import olc3 from './assets/OUR LIVE CASINOS/olc3.jpg';
import olc4 from './assets/OUR LIVE CASINOS/olc4.jpg';
import olc5 from './assets/OUR LIVE CASINOS/olc5.jpg';
import olc6 from './assets/OUR LIVE CASINOS/olc6.jpg';
import olc7 from './assets/OUR LIVE CASINOS/olc7.jpg';
import olc8 from './assets/OUR LIVE CASINOS/olc8.jpg';
import olc9 from './assets/OUR LIVE CASINOS/olc9.jpg';
import olc10 from './assets/OUR LIVE CASINOS/olc10.jpg';
import olc11 from './assets/OUR LIVE CASINOS/olc11.jpg';
import olc12 from './assets/OUR LIVE CASINOS/olc12.jpg';
import olc13 from './assets/OUR LIVE CASINOS/olc13.jpg';
import olc14 from './assets/OUR LIVE CASINOS/olc14.jpg';
import olc15 from './assets/OUR LIVE CASINOS/olc15.jpg';
import olc16 from './assets/OUR LIVE CASINOS/olc16.jpg';
import olc17 from './assets/OUR LIVE CASINOS/olc17.jpg';
import olc18 from './assets/OUR LIVE CASINOS/olc18.jpg';
import olc19 from './assets/OUR LIVE CASINOS/olc19.jpg';
import olc20 from './assets/OUR LIVE CASINOS/olc20.jpg';
import olc21 from './assets/OUR LIVE CASINOS/olc21.jpg';
import olc22 from './assets/OUR LIVE CASINOS/olc22.jpg';
import olc23 from './assets/OUR LIVE CASINOS/olc23.jpg';

import ovc1 from './assets/OUR VIRTUAL CASINO/ovc1.jpg';
import ovc2 from './assets/OUR VIRTUAL CASINO/ovc2.jpg';
import ovc3 from './assets/OUR VIRTUAL CASINO/ovc3.jpg';
import ovc4 from './assets/OUR VIRTUAL CASINO/ovc4.jpg';
import ovc5 from './assets/OUR VIRTUAL CASINO/ovc5.jpg';
import ovc6 from './assets/OUR VIRTUAL CASINO/ovc6.jpg';
import ovc7 from './assets/OUR VIRTUAL CASINO/ovc7.jpg';
import ovc8 from './assets/OUR VIRTUAL CASINO/ovc8.jpg';
import ovc9 from './assets/OUR VIRTUAL CASINO/ovc9.jpg';

import lc1 from './assets/LIVE CASINO/lc1.jpg'
import lc2 from './assets/LIVE CASINO/lc2.jpg'
import lc3 from './assets/LIVE CASINO/lc3.jpg'
import lc4 from './assets/LIVE CASINO/lc4.jpg'
import lc5 from './assets/LIVE CASINO/lc5.jpg'
import lc6 from './assets/LIVE CASINO/lc6.jpg'
import lc7 from './assets/LIVE CASINO/lc7.jpg'
import lc8 from './assets/LIVE CASINO/lc8.jpg'
import lc9 from './assets/LIVE CASINO/lc9.jpg'
import lc10 from './assets/LIVE CASINO/lc10.jpg'

import fg1 from './assets/FANTASY GAMES/fg1.png'
import fg2 from './assets/FANTASY GAMES/fg2.jpg'
import fg3 from './assets/FANTASY GAMES/fg3.jpg'
import fg4 from './assets/FANTASY GAMES/fg4.jpeg'
import fg5 from './assets/FANTASY GAMES/fg5.jpg'
import fg6 from './assets/FANTASY GAMES/fg6.jpg'
import fg7 from './assets/FANTASY GAMES/fg7.jpg'

import s1 from './assets/SPORTS/s1.svg'
import s2 from './assets/SPORTS/s2.svg'
import s3 from './assets/SPORTS/s3.svg'
import s4 from './assets/SPORTS/s4.svg'
import s5 from './assets/SPORTS/s5.svg'
import s6 from './assets/SPORTS/s6.svg'
import s7 from './assets/SPORTS/s7.svg'
import s8 from './assets/SPORTS/s8.svg'
import s9 from './assets/SPORTS/s9.svg'
import s10 from './assets/SPORTS/s10.svg'
import s11 from './assets/SPORTS/s11.svg'
import s12 from './assets/SPORTS/s12.svg'
import s13 from './assets/SPORTS/s13.svg'
import s14 from './assets/SPORTS/s14.svg'
import s15 from './assets/SPORTS/s15.svg'
import s16 from './assets/SPORTS/s16.svg'
import s17 from './assets/SPORTS/s17.svg'
import s18 from './assets/SPORTS/s18.svg'
import s19 from './assets/SPORTS/s19.svg'
import s20 from './assets/SPORTS/s20.svg'
import s21 from './assets/SPORTS/s21.svg'
import s22 from './assets/SPORTS/s22.svg'
import s23 from './assets/SPORTS/s23.svg'
import s24 from './assets/SPORTS/s24.svg'
import s25 from './assets/SPORTS/s25.svg'
import s26 from './assets/SPORTS/s26.svg'
import s27 from './assets/SPORTS/s27.svg'
import s28 from './assets/SPORTS/s28.svg'
import s29 from './assets/SPORTS/s29.svg'
import s30 from './assets/SPORTS/s30.svg'
import s31 from './assets/SPORTS/s31.svg'
import s32 from './assets/SPORTS/s32.svg'
import s33 from './assets/SPORTS/s33.svg'
import s34 from './assets/SPORTS/s34.svg'
import s35 from './assets/SPORTS/s35.svg'

import usericon from './assets/user-icon.png'
function Home(){
    return(
        <>
        <div class="home-main">
            <div class="home-header">
                <div class="home-header-container">
                    <div class="home-header-logo">
                        <img src={logo}></img>
                    </div>
                    <div class="home-header-btn">
                        <Link to='/emain' style={{textDecoration:'none'}}><button>Login</button></Link>
                    </div>
                </div>
            </div>
            <Marquee gradient={false} speed={50}>
<div class="home-marquee1">
IPL has Started, and All Matches Are Available On Our Exchange With The Best Odds. Live Scorecard Updates and Live Streaming are Available. Play To Win Huge On This IPL Season.
</div>
    </Marquee>      
<div class="home-main-slider">
<Swiper
        slidesPerView={1}
        centeredSlides={false}
        spaceBetween={10}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]} autoplay={true}

        className="mySwiper"
      >
  
        <SwiperSlide><img class="home-main-slider-img" src={banner1}></img></SwiperSlide>
        <SwiperSlide><img class="home-main-slider-img" src={banner2}></img></SwiperSlide>
        <SwiperSlide><img class="home-main-slider-img" src={banner3}></img></SwiperSlide>
        <SwiperSlide><img class="home-main-slider-img" src={banner4}></img></SwiperSlide>
        
      </Swiper>

</div>
<div class="home-main2">
    <div class="home-main2-container">
        <div class="home-main2a">
            <h1>OUR LIVE CASINOS</h1>
            <div class="home-main2a-div1">
                <div class="home-main2a-div1a">
                    <img src={olc1}></img>
                </div>
                <div class="home-main2a-div1a">
                    <img src={olc2}></img>
                </div>
                <div class="home-main2a-div1a">
                    <img src={olc3}></img>
                </div>
                <div class="home-main2a-div1a">
                    <img src={olc4}></img>
                </div>
                <div class="home-main2a-div1a">
                    <img src={olc5}></img>
                </div>
                <div class="home-main2a-div1a">
                    <img src={olc6}></img>
                </div>
                <div class="home-main2a-div1a">
                    <img src={olc7}></img>
                </div>
                <div class="home-main2a-div1a">
                    <img src={olc8}></img>
                </div>
                <div class="home-main2a-div1a">
                    <img src={olc9}></img>
                </div>
                <div class="home-main2a-div1a">
                    <img src={olc10}></img>
                </div>
                <div class="home-main2a-div1a">
                    <img src={olc11}></img>
                </div>
                <div class="home-main2a-div1a">
                    <img src={olc12}></img>
                </div>
                <div class="home-main2a-div1a">
                    <img src={olc13}></img>
                </div>
                <div class="home-main2a-div1a">
                    <img src={olc14}></img>
                </div>
                <div class="home-main2a-div1a">
                    <img src={olc15}></img>
                </div>
                <div class="home-main2a-div1a">
                    <img src={olc16}></img>
                </div>
                <div class="home-main2a-div1a">
                    <img src={olc17}></img>
                </div>
                <div class="home-main2a-div1a">
                    <img src={olc18}></img>
                </div>
                <div class="home-main2a-div1a">
                    <img src={olc19}></img>
                </div>
                <div class="home-main2a-div1a">
                    <img src={olc20}></img>
                </div>
                <div class="home-main2a-div1a">
                    <img src={olc21}></img>
                </div>
                <div class="home-main2a-div1a">
                    <img src={olc22}></img>
                </div>
                <div class="home-main2a-div1a">
                    <img src={olc23}></img>
                </div>
                
            </div>
        </div>
        <div class="home-main2a">
            <h1>OUR VIRTUAL CASINOS</h1>
            <div class="home-main2a-div1">
                <div class="home-main2a-div1a">
                    <img src={ovc1}></img>
                </div>
                <div class="home-main2a-div1a">
                    <img src={ovc2}></img>
                </div>
                <div class="home-main2a-div1a">
                    <img src={ovc3}></img>
                </div>
                <div class="home-main2a-div1a">
                    <img src={ovc4}></img>
                </div>
                <div class="home-main2a-div1a">
                    <img src={ovc5}></img>
                </div>
                <div class="home-main2a-div1a">
                    <img src={ovc6}></img>
                </div>
                <div class="home-main2a-div1a">
                    <img src={ovc7}></img>
                </div>
                <div class="home-main2a-div1a">
                    <img src={ovc8}></img>
                </div>
                <div class="home-main2a-div1a">
                    <img src={ovc9}></img>
                </div>
                
            </div>
        </div>
        <div class="home-main2b">
        <div class="home-main2a home-main2b-sec1">
            <h1>LIVE CASINO</h1>
            <div class="home-main2a-div1">
                <div class="home-main2a-div1a">
                    <img src={lc1}></img>
                </div>
                <div class="home-main2a-div1a">
                    <img src={lc2}></img>
                </div>
                <div class="home-main2a-div1a">
                    <img src={lc3}></img>
                </div>
                <div class="home-main2a-div1a">
                    <img src={lc4}></img>
                </div>
                <div class="home-main2a-div1a">
                    <img src={lc5}></img>
                </div>
                <div class="home-main2a-div1a">
                    <img src={lc6}></img>
                </div>
                <div class="home-main2a-div1a">
                    <img src={lc7}></img>
                </div>
                <div class="home-main2a-div1a">
                    <img src={lc8}></img>
                </div>
                <div class="home-main2a-div1a">
                    <img src={lc9}></img>
                </div>
                <div class="home-main2a-div1a">
                    <img src={lc10}></img>
                </div>

            </div>
        </div>
        <div class="home-main2a home-main2b-sec1">
            <h1>FANTASY GAMES</h1>
            <div class="home-main2a-div1">
                <div class="home-main2a-div1a">
                    <img src={fg1}></img>
                </div>
                <div class="home-main2a-div1a">
                    <img src={fg2}></img>
                </div>
                <div class="home-main2a-div1a">
                    <img src={fg3}></img>
                </div>
                <div class="home-main2a-div1a">
                    <img src={fg4}></img>
                </div>
                <div class="home-main2a-div1a">
                    <img src={fg5}></img>
                </div>
                <div class="home-main2a-div1a">
                    <img src={fg6}></img>
                </div>
                <div class="home-main2a-div1a">
                    <img src={fg7}></img>
                </div>
                
            </div>
        </div>
        </div>
        <div class="home-main2a">
            <h1>SPORTS</h1>
            <div class="home-main2a-div1-sports">
                <div class="home-main2a-div1a-sports">
                    <img src={s1}></img>
                    Politics
                </div>
                <div class="home-main2a-div1a-sports">
                    <img src={s2}></img>
                    Politics
                </div><div class="home-main2a-div1a-sports">
                    <img src={s3}></img>
                    Politics
                </div><div class="home-main2a-div1a-sports">
                    <img src={s4}></img>
                    Politics
                </div><div class="home-main2a-div1a-sports">
                    <img src={s5}></img>
                    Politics
                </div><div class="home-main2a-div1a-sports">
                    <img src={s6}></img>
                    Politics
                </div><div class="home-main2a-div1a-sports">
                    <img src={s7}></img>
                    Politics
                </div><div class="home-main2a-div1a-sports">
                    <img src={s8}></img>
                    Politics
                </div><div class="home-main2a-div1a-sports">
                    <img src={s9}></img>
                    Politics
                </div><div class="home-main2a-div1a-sports">
                    <img src={s10}></img>
                    Politics
                </div><div class="home-main2a-div1a-sports">
                    <img src={s11}></img>
                    Politics
                </div><div class="home-main2a-div1a-sports">
                    <img src={s12}></img>
                    Politics
                </div><div class="home-main2a-div1a-sports">
                    <img src={s13}></img>
                    Politics
                </div><div class="home-main2a-div1a-sports">
                    <img src={s14}></img>
                    Politics
                </div><div class="home-main2a-div1a-sports">
                    <img src={s15}></img>
                    Politics
                </div><div class="home-main2a-div1a-sports">
                    <img src={s16}></img>
                    Politics
                </div><div class="home-main2a-div1a-sports">
                    <img src={s17}></img>
                    Politics
                </div><div class="home-main2a-div1a-sports">
                    <img src={s18}></img>
                    Politics
                </div>
                <div class="home-main2a-div1a-sports">
                    <img src={s19}></img>
                    Politics
                </div>
                <div class="home-main2a-div1a-sports">
                    <img src={s20}></img>
                    Politics
                </div>
                <div class="home-main2a-div1a-sports">
                    <img src={s21}></img>
                    Politics
                </div>
                <div class="home-main2a-div1a-sports">
                    <img src={s22}></img>
                    Politics
                </div>
                <div class="home-main2a-div1a-sports">
                    <img src={s23}></img>
                    Politics
                </div>
                <div class="home-main2a-div1a-sports">
                    <img src={s24}></img>
                    Politics
                </div>
                <div class="home-main2a-div1a-sports">
                    <img src={s25}></img>
                    Politics
                </div>
                <div class="home-main2a-div1a-sports">
                    <img src={s26}></img>
                    Politics
                </div>
                <div class="home-main2a-div1a-sports">
                    <img src={s27}></img>
                    Politics
                </div>
                <div class="home-main2a-div1a-sports">
                    <img src={s28}></img>
                    Politics
                </div>
                <div class="home-main2a-div1a-sports">
                    <img src={s29}></img>
                    Politics
                </div>
                <div class="home-main2a-div1a-sports">
                    <img src={s30}></img>
                    Politics
                </div>
                <div class="home-main2a-div1a-sports">
                    <img src={s31}></img>
                    Politics
                </div>
                <div class="home-main2a-div1a-sports">
                    <img src={s32}></img>
                    Politics
                </div>
                <div class="home-main2a-div1a-sports">
                    <img src={s33}></img>
                    Politics
                </div>
                <div class="home-main2a-div1a-sports">
                    <img src={s34}></img>
                    Politics
                </div>
                <div class="home-main2a-div1a-sports">
                    <img src={s35}></img>
                    Politics
                </div>
            </div>
        </div>

<div class="home-main2a">
            <h1>TOP WINNERS</h1>
            <div class="home-main2a-div1">
<Marquee gradient={false} speed={50}>
<div class="home-marquee">
    <div class="home-marquee-box1">
        <div class="home-marquee-box1-img"><img src={usericon}></img></div>
        <div class="home-marquee--box1-txt">
            <span>Player</span><span class="home-marquee-box1-txt2">JA****</span><br/>
            <span>Time</span><span class="home-marquee-box1-txt2">17/04/23 20:22</span><br/>
            <span>Win Amount</span><span class="home-marquee-box1-txt2">1,23,41,300</span><br/>
        </div>
    </div>
    <div class="home-marquee-box1">
        <div class="home-marquee-box1-img"><img src={usericon}></img></div>
        <div class="home-marquee--box1-txt">
            <span>Player</span><span class="home-marquee-box1-txt2">JA****</span><br/>
            <span>Time</span><span class="home-marquee-box1-txt2">17/04/23 20:22</span><br/>
            <span>Win Amount</span><span class="home-marquee-box1-txt2">1,23,41,300</span><br/>
        </div>
    </div>
    <div class="home-marquee-box1">
        <div class="home-marquee-box1-img"><img src={usericon}></img></div>
        <div class="home-marquee--box1-txt">
            <span>Player</span><span class="home-marquee-box1-txt2">JA****</span><br/>
            <span>Time</span><span class="home-marquee-box1-txt2">17/04/23 20:22</span><br/>
            <span>Win Amount</span><span class="home-marquee-box1-txt2">1,23,41,300</span><br/>
        </div>
    </div>
    <div class="home-marquee-box1">
        <div class="home-marquee-box1-img"><img src={usericon}></img></div>
        <div class="home-marquee--box1-txt">
            <span>Player</span><span class="home-marquee-box1-txt2">JA****</span><br/>
            <span>Time</span><span class="home-marquee-box1-txt2">17/04/23 20:22</span><br/>
            <span>Win Amount</span><span class="home-marquee-box1-txt2">1,23,41,300</span><br/>
        </div>
    </div>
    <div class="home-marquee-box1">
        <div class="home-marquee-box1-img"><img src={usericon}></img></div>
        <div class="home-marquee--box1-txt">
            <span>Player</span><span class="home-marquee-box1-txt2">JA****</span><br/>
            <span>Time</span><span class="home-marquee-box1-txt2">17/04/23 20:22</span><br/>
            <span>Win Amount</span><span class="home-marquee-box1-txt2">1,23,41,300</span><br/>
        </div>
    </div>
    <div class="home-marquee-box1">
        <div class="home-marquee-box1-img"><img src={usericon}></img></div>
        <div class="home-marquee--box1-txt">
            <span>Player</span><span class="home-marquee-box1-txt2">JA****</span><br/>
            <span>Time</span><span class="home-marquee-box1-txt2">17/04/23 20:22</span><br/>
            <span>Win Amount</span><span class="home-marquee-box1-txt2">1,23,41,300</span><br/>
        </div>
    </div>
</div>
    </Marquee>
    </div>
    </div>
</div>
</div>
<Footer/>
        </div>
        </>
    )
}
export default Home;