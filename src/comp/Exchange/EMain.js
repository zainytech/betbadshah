import React from "react";
import './EMain.css'
import Header from '../Header'
import Footer from '../Footer'
import { useState } from "react";
import { Link } from "react-router-dom";
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

import s1 from '../assets/SPORTS/s1.svg'
import s2 from '../assets/SPORTS/s2.svg'
import s3 from '../assets/SPORTS/s3.svg'
import s4 from '../assets/SPORTS/s4.svg'
import s6 from '../assets/SPORTS/s6.svg'
import s13 from '../assets/SPORTS/s13.svg'
import s14 from '../assets/SPORTS/s14.svg'
import s17 from '../assets/SPORTS/s17.svg'
import s22 from '../assets/SPORTS/s22.svg'
import s23 from '../assets/SPORTS/s23.svg'
import s26 from '../assets/SPORTS/s26.svg'
import s27 from '../assets/SPORTS/s27.svg'
import s33 from '../assets/SPORTS/s33.svg'
import ourcasino1 from './e-assets/OurCasino/1.jpg'
import ourcasino2 from './e-assets/OurCasino/2.jpg'
import ourcasino3 from './e-assets/OurCasino/3.jpg'
import ourcasino4 from './e-assets/OurCasino/4.jpg'
import ourcasino5 from './e-assets/OurCasino/5.jpg'
import ourcasino6 from './e-assets/OurCasino/6.jpg'
import newgames1 from './e-assets/NewGames/1.jpg'
import newgames2 from './e-assets/NewGames/2.jpg'
import newgames3 from './e-assets/NewGames/3.jpg'
import newgames4 from './e-assets/NewGames/4.jpg'

import banner1 from './e-assets/banner1.png'
import banner2 from './e-assets/banner2.jpg'
import banner3 from './e-assets/banner3.jpg'
import banner4 from './e-assets/banner4.png'

function EMain(){
    const [exchange, setexchange] = useState(true);
    const onClickexchange = ()=>{
        setexchange(true);
        setliveCasino(false);
        setslot(false);
        setfantasyGames(false);

    };
    const [liveCasino, setliveCasino] = useState('');
    const onClickliveCasino = ()=>{
        setexchange(false);
        setliveCasino(true);
        setslot(false);
        setfantasyGames(false);
    };
    const [slot, setslot] = useState('');
    const onClickslot = ()=>{
        setexchange(false);
        setliveCasino(false);
        setslot(true);
        setfantasyGames(false);
    };
    const [fantasyGames, setfantasyGames] = useState('');
    const onClickfantasyGames = ()=>{
        setexchange(false);
        setliveCasino(false);
        setslot(false);
        setfantasyGames(true);
    };
    const [esports1, setesports1] = useState(true);
    const onClickesports1 = ()=>{
        setesports1(true);
        setesports2(false);
        setesports3(false);
        setesports4(false);
        setesports5(false);

    };
    const [esports2, setesports2] = useState('');
    const onClickesports2 = ()=>{
        setesports1(false);
        setesports2(true);
        setesports3(false);
        setesports4(false);
        setesports5(false);

    };
    const [esports3, setesports3] = useState('');
    const onClickesports3 = ()=>{
        setesports1(false);
        setesports2(false);
        setesports3(true);
        setesports4(false);
        setesports5(false);

    };
    const [esports4, setesports4] = useState('');
    const onClickesports4 = ()=>{
        setesports1(false);
        setesports2(false);
        setesports3(false);
        setesports4(true);
        setesports5(false);

    };
    const [esports5, setesports5] = useState('');
    const onClickesports5 = ()=>{
        setesports1(false);
        setesports2(false);
        setesports3(false);
        setesports4(false);
        setesports5(true);
    };
    return(
        <>
        <div class="emain-main">
        <Header/>
            <div class="emain-main-div1">
                <div class="emain-main-div1a emain-main-div1a-active" style={{width:'25%'}}>Exchange</div>
                <Link to='/lcmain' style={{textDecoration:'none',color:'white',width:'25%'}}><div class="emain-main-div1a">Live Casino</div></Link>
                <Link to='/smain' style={{textDecoration:'none',color:'white',width:'25%'}}><div class="emain-main-div1a">Slot</div></Link>
                <Link to='/fgmain' style={{textDecoration:'none',color:'white',width:'25%'}}><div class="emain-main-div1a">Fantasy Games</div></Link>

            </div>

            <div class="emain-main-div2">
                <div class="emain-main-div2a">
                    <img src={s27}></img>
                    <div class="try">IPL Tournament Winner</div>
                </div>
                <div class="emain-main-div2a">
                    <img src={s27}></img>
                    <div class="try">Punjab King v Royal Chalangers</div>
                </div>
                <div class="emain-main-div2a">
                    <img src={s27}></img>
                    <div class="try">Delhi Capital v Kolkata Night Riders</div>
                </div>
                <div class="emain-main-div2a">
                    <img src={s27}></img>
                    <div class="try">Pakistan v New Zealand</div>
                </div>
                <div class="emain-main-div2a">
                    <img src={s1}></img>
                    <div class="try">Sevilla v Man UTD</div>
                </div>
                <div class="emain-main-div2a">
                    <img src={s1}></img>
                    <div class="try">Union St Gilliose</div>
                </div>
                <div class="emain-main-div2a">
                    <img src={s1}></img>
                    <div class="try">Delhi Capital v Kolkata Night Rider</div>
                </div>
                <div class="emain-main-div2a">
                    <img src={s1}></img>
                    <div class="try">Delhi Capital v Kolkata Night and Chalanger</div>
                </div>
                <div class="emain-main-div2a">
                    <img src={s2}></img>
                    <div class="try">Delhi Capital v Kolkata Night and Chalanger</div>
                </div>
                <div class="emain-main-div2a">
                    <img src={s2}></img>
                    <div class="try">Union St Gilliose</div>
                </div>
                <div class="emain-main-div2a">
                    <img src={s2}></img>
                    <div class="try">Pakistan v New Zealand</div>
                </div>
            </div>
            <div class="emain-main-div3">
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
            </div>
<div class="emain-main-div45">
            <div class="emain-main-div4">
                <div onClick={onClickesports1} className={esports1? 'emain-main-div4a-onclick emain-main-div4a' : 'emain-main-div4a'}>
                    <img src={s13}></img><br/>
                    <span>Politics</span>
                </div>
                <div onClick={onClickesports2} className={esports2? 'emain-main-div4a-onclick emain-main-div4a' : 'emain-main-div4a'}>
                    <img src={s27}></img><br/>
                    <span>Cricket</span>
                </div>
                <div onClick={onClickesports3} className={esports3? 'emain-main-div4a-onclick emain-main-div4a' : 'emain-main-div4a'}>
                    <img src={s4}></img> + <img src={s27}></img><br/>
                    <span>Cricket</span>
                </div>
                <div onClick={onClickesports4} className={esports4? 'emain-main-div4a-onclick emain-main-div4a' : 'emain-main-div4a'}>
                    <img src={s1}></img><br/>
                    <span>Football</span>
                </div>
                <div onClick={onClickesports5} className={esports5? 'emain-main-div4a-onclick emain-main-div4a' : 'emain-main-div4a'}>
                    <img src={s2}></img><br/>
                    <span>Tennis</span>
                </div>
                <div class='emain-main-div4a'>
                    <img src={s33}></img><br/>
                    <span>Horse Racing</span>
                </div>
                <div class='emain-main-div4a'>
                    <img src={s26}></img><br/>
                    <span>Table Tennis</span>
                </div>
                <div class='emain-main-div4a'>
                    <img src={s17}></img><br/>
                    <span>Basketball</span>
                </div>
                <div class='emain-main-div4a'>
                    <img src={s22}></img><br/>
                    <span>Volleyball</span>
                </div>
                <div class='emain-main-div4a'>
                    <img src={s6}></img><br/>
                    <span>Snooker</span>
                </div>
                <div class='emain-main-div4a'>
                    <img src={s23}></img><br/>
                    <span>Ice Hockey</span>
                </div>
                <div class='emain-main-div4a'>
                    <img src={s4}></img><br/>
                    <span>E Games</span>
                </div>
                <div class='emain-main-div4a'>
                    <img src={s14}></img><br/>
                    <span>Handball</span>
                </div>
                <div class='emain-main-div4a'>
                    <img src={s3}></img><br/>
                    <span>Kabaddi</span>
                </div>
            </div>
            {esports1?
            <>
<div class="emain-main-div5">
                <div class="emain-main-div5a">
                    <div class="emain-main-div5a-div1">
                        <div class="emain-main-div5a-div1a clr-green-txt">Live</div>
                        <div class="emain-main-div5a-div1b">
                            <span>Sri Lanka v Ireland<br/>(Test Matches)</span>
                            <span class="emain-main-div5a-div1b-txt">F1 F BM</span>
                        </div>

                    </div>
                    <div class="emain-main-div5a-div2">
                        <div class="emain-main-div5a-div2a"><button class="blue-clr-score">1.31</button></div>
                        <div class="emain-main-div5a-div2a"><button class="pink-clr-score">1.31</button></div>
                        <div class="emain-main-div5a-div2a"><button class="blue-clr-score">1.31</button></div>
                        <div class="emain-main-div5a-div2a"><button class="pink-clr-score">1.31</button></div>
                        <div class="emain-main-div5a-div2a"><button class="blue-clr-score">1.31</button></div>
                        <div class="emain-main-div5a-div2a"><button class="pink-clr-score">1.31</button></div>
                    </div>
                </div>
                <div class="emain-main-div5a">
                    <div class="emain-main-div5a-div1">
                        <div class="emain-main-div5a-div1a clr-green-txt">Live</div>
                        <div class="emain-main-div5a-div1b">
                            <span>Sri Lanka v Ireland<br/>(Test Matches)</span>
                            <span class="emain-main-div5a-div1b-txt">F1 F BM</span>
                        </div>

                    </div>
                    <div class="emain-main-div5a-div2">
                        <div class="emain-main-div5a-div2a"><button class="blue-clr-score">1.31</button></div>
                        <div class="emain-main-div5a-div2a"><button class="pink-clr-score">1.31</button></div>
                        <div class="emain-main-div5a-div2a"><button class="blue-clr-score">1.31</button></div>
                        <div class="emain-main-div5a-div2a"><button class="pink-clr-score">1.31</button></div>
                        <div class="emain-main-div5a-div2a"><button class="blue-clr-score">1.31</button></div>
                        <div class="emain-main-div5a-div2a"><button class="pink-clr-score">1.31</button></div>
                    </div>
                </div>
                <div class="emain-main-div5a">
                    <div class="emain-main-div5a-div1">
                        <div class="emain-main-div5a-div1a">Tommorow<br/>10.00</div>
                        <div class="emain-main-div5a-div1b">
                            <span>Sri Lanka v Ireland<br/>(Test Matches)</span>
                            <span class="emain-main-div5a-div1b-txt">F1 F BM</span>
                        </div>

                    </div>
                    <div class="emain-main-div5a-div2">
                        <div class="emain-main-div5a-div2a"><button class="blue-clr-score">1.31</button></div>
                        <div class="emain-main-div5a-div2a"><button class="pink-clr-score">1.31</button></div>
                        <div class="emain-main-div5a-div2a"><button class="black-clr-score">__</button></div>
                        <div class="emain-main-div5a-div2a"><button class="black-clr-score">__</button></div>
                        <div class="emain-main-div5a-div2a"><button class="blue-clr-score">1.31</button></div>
                        <div class="emain-main-div5a-div2a"><button class="pink-clr-score">1.31</button></div>
                    </div>
                </div>
                <div class="emain-main-div5a">
                    <div class="emain-main-div5a-div1">
                        <div class="emain-main-div5a-div1a">30 Mar<br/>23.30</div>
                        <div class="emain-main-div5a-div1b">
                            <span>Sri Lanka v Ireland<br/>(Test Matches)</span>
                            <span class="emain-main-div5a-div1b-txt">F1 F BM</span>
                        </div>

                    </div>
                    <div class="emain-main-div5a-div2">
                        <div class="emain-main-div5a-div2a"><button class="blue-clr-score" disabled>__</button></div>
                        <div class="emain-main-div5a-div2a"><button class="pink-clr-score" disabled>__</button></div>
                        <div class="emain-main-div5a-div2a"><button class="black-clr-score">__</button></div>
                        <div class="emain-main-div5a-div2a"><button class="black-clr-score">__</button></div>
                        <div class="emain-main-div5a-div2a"><button class="blue-clr-score" disabled>__</button></div>
                        <div class="emain-main-div5a-div2a"><button class="pink-clr-score" disabled>__</button></div>
                    </div>
                </div>
                <div class="emain-main-div5a">
                    <div class="emain-main-div5a-div1">
                        <div class="emain-main-div5a-div1a">Tommorow<br/>10.00</div>
                        <div class="emain-main-div5a-div1b">
                            <span>Sri Lanka v Ireland<br/>(Test Matches)</span>
                            <span class="emain-main-div5a-div1b-txt">F1 F BM</span>
                        </div>

                    </div>
                    <div class="emain-main-div5a-div2">
                        <div class="emain-main-div5a-div2a"><button class="blue-clr-score">1.31</button></div>
                        <div class="emain-main-div5a-div2a"><button class="pink-clr-score">1.31</button></div>
                        <div class="emain-main-div5a-div2a"><button class="black-clr-score">__</button></div>
                        <div class="emain-main-div5a-div2a"><button class="black-clr-score">__</button></div>
                        <div class="emain-main-div5a-div2a"><button class="blue-clr-score">1.31</button></div>
                        <div class="emain-main-div5a-div2a"><button class="pink-clr-score">1.31</button></div>
                    </div>
                </div>
                <div class="emain-main-div5a">
                    <div class="emain-main-div5a-div1">
                        <div class="emain-main-div5a-div1a">Tommorow<br/>10.00</div>
                        <div class="emain-main-div5a-div1b">
                            <span>Sri Lanka v Ireland<br/>(Test Matches)</span>
                            <span class="emain-main-div5a-div1b-txt">F1 F BM</span>
                        </div>

                    </div>
                    <div class="emain-main-div5a-div2">
                        <div class="emain-main-div5a-div2a"><button class="blue-clr-score">1.31</button></div>
                        <div class="emain-main-div5a-div2a"><button class="pink-clr-score">1.31</button></div>
                        <div class="emain-main-div5a-div2a"><button class="black-clr-score">__</button></div>
                        <div class="emain-main-div5a-div2a"><button class="black-clr-score">__</button></div>
                        <div class="emain-main-div5a-div2a"><button class="blue-clr-score">1.31</button></div>
                        <div class="emain-main-div5a-div2a"><button class="pink-clr-score">1.31</button></div>
                    </div>
                </div>
                <div class="emain-main-div5a">
                    <div class="emain-main-div5a-div1">
                        <div class="emain-main-div5a-div1a">Tommorow<br/>10.00</div>
                        <div class="emain-main-div5a-div1b">
                            <span>Sri Lanka v Ireland<br/>(Test Matches)</span>
                            <span class="emain-main-div5a-div1b-txt">F1 F BM</span>
                        </div>

                    </div>
                    <div class="emain-main-div5a-div2">
                        <div class="emain-main-div5a-div2a"><button class="blue-clr-score">1.31</button></div>
                        <div class="emain-main-div5a-div2a"><button class="pink-clr-score">1.31</button></div>
                        <div class="emain-main-div5a-div2a"><button class="black-clr-score">__</button></div>
                        <div class="emain-main-div5a-div2a"><button class="black-clr-score">__</button></div>
                        <div class="emain-main-div5a-div2a"><button class="blue-clr-score">1.31</button></div>
                        <div class="emain-main-div5a-div2a"><button class="pink-clr-score">1.31</button></div>
                    </div>
                </div>
            </div>
            </>
            :null}
            {esports2?
            <>
<div class="emain-main-div5">
                
                <div class="emain-main-div5a">
                    <div class="emain-main-div5a-div1">
                        <div class="emain-main-div5a-div1a">Tommorow<br/>10.00</div>
                        <div class="emain-main-div5a-div1b">
                            <span>Sri Lanka v Ireland<br/>(Test Matches)</span>
                            <span class="emain-main-div5a-div1b-txt">F1 F BM</span>
                        </div>

                    </div>
                    <div class="emain-main-div5a-div2">
                        <div class="emain-main-div5a-div2a"><button class="blue-clr-score">1.31</button></div>
                        <div class="emain-main-div5a-div2a"><button class="pink-clr-score">1.31</button></div>
                        <div class="emain-main-div5a-div2a"><button class="black-clr-score">__</button></div>
                        <div class="emain-main-div5a-div2a"><button class="black-clr-score">__</button></div>
                        <div class="emain-main-div5a-div2a"><button class="blue-clr-score">1.31</button></div>
                        <div class="emain-main-div5a-div2a"><button class="pink-clr-score">1.31</button></div>
                    </div>
                </div>
                <div class="emain-main-div5a">
                    <div class="emain-main-div5a-div1">
                        <div class="emain-main-div5a-div1a">30 Mar<br/>23.30</div>
                        <div class="emain-main-div5a-div1b">
                            <span>Sri Lanka v Ireland<br/>(Test Matches)</span>
                            <span class="emain-main-div5a-div1b-txt">F1 F BM</span>
                        </div>

                    </div>
                    <div class="emain-main-div5a-div2">
                        <div class="emain-main-div5a-div2a"><button class="blue-clr-score" disabled>__</button></div>
                        <div class="emain-main-div5a-div2a"><button class="pink-clr-score" disabled>__</button></div>
                        <div class="emain-main-div5a-div2a"><button class="black-clr-score">__</button></div>
                        <div class="emain-main-div5a-div2a"><button class="black-clr-score">__</button></div>
                        <div class="emain-main-div5a-div2a"><button class="blue-clr-score" disabled>__</button></div>
                        <div class="emain-main-div5a-div2a"><button class="pink-clr-score" disabled>__</button></div>
                    </div>
                </div>
                <div class="emain-main-div5a">
                    <div class="emain-main-div5a-div1">
                        <div class="emain-main-div5a-div1a">Tommorow<br/>10.00</div>
                        <div class="emain-main-div5a-div1b">
                            <span>Sri Lanka v Ireland<br/>(Test Matches)</span>
                            <span class="emain-main-div5a-div1b-txt">F1 F BM</span>
                        </div>

                    </div>
                    <div class="emain-main-div5a-div2">
                        <div class="emain-main-div5a-div2a"><button class="blue-clr-score">1.31</button></div>
                        <div class="emain-main-div5a-div2a"><button class="pink-clr-score">1.31</button></div>
                        <div class="emain-main-div5a-div2a"><button class="black-clr-score">__</button></div>
                        <div class="emain-main-div5a-div2a"><button class="black-clr-score">__</button></div>
                        <div class="emain-main-div5a-div2a"><button class="blue-clr-score">1.31</button></div>
                        <div class="emain-main-div5a-div2a"><button class="pink-clr-score">1.31</button></div>
                    </div>
                </div>
                <div class="emain-main-div5a">
                    <div class="emain-main-div5a-div1">
                        <div class="emain-main-div5a-div1a">Tommorow<br/>10.00</div>
                        <div class="emain-main-div5a-div1b">
                            <span>Sri Lanka v Ireland<br/>(Test Matches)</span>
                            <span class="emain-main-div5a-div1b-txt">F1 F BM</span>
                        </div>

                    </div>
                    <div class="emain-main-div5a-div2">
                        <div class="emain-main-div5a-div2a"><button class="blue-clr-score">1.31</button></div>
                        <div class="emain-main-div5a-div2a"><button class="pink-clr-score">1.31</button></div>
                        <div class="emain-main-div5a-div2a"><button class="black-clr-score">__</button></div>
                        <div class="emain-main-div5a-div2a"><button class="black-clr-score">__</button></div>
                        <div class="emain-main-div5a-div2a"><button class="blue-clr-score">1.31</button></div>
                        <div class="emain-main-div5a-div2a"><button class="pink-clr-score">1.31</button></div>
                    </div>
                </div>
                <div class="emain-main-div5a">
                    <div class="emain-main-div5a-div1">
                        <div class="emain-main-div5a-div1a">Tommorow<br/>10.00</div>
                        <div class="emain-main-div5a-div1b">
                            <span>Sri Lanka v Ireland<br/>(Test Matches)</span>
                            <span class="emain-main-div5a-div1b-txt">F1 F BM</span>
                        </div>

                    </div>
                    <div class="emain-main-div5a-div2">
                        <div class="emain-main-div5a-div2a"><button class="blue-clr-score">1.31</button></div>
                        <div class="emain-main-div5a-div2a"><button class="pink-clr-score">1.31</button></div>
                        <div class="emain-main-div5a-div2a"><button class="black-clr-score">__</button></div>
                        <div class="emain-main-div5a-div2a"><button class="black-clr-score">__</button></div>
                        <div class="emain-main-div5a-div2a"><button class="blue-clr-score">1.31</button></div>
                        <div class="emain-main-div5a-div2a"><button class="pink-clr-score">1.31</button></div>
                    </div>
                </div>
            </div>
            </>
            :null}
            {esports3?
            <>
<div class="emain-main-div5">
                <div class="emain-main-div5a">
                    <div class="emain-main-div5a-div1">
                        <div class="emain-main-div5a-div1a">30 Mar<br/>23.30</div>
                        <div class="emain-main-div5a-div1b">
                            <span>Sri Lanka v Ireland<br/>(Test Matches)</span>
                            <span class="emain-main-div5a-div1b-txt">F1 F BM</span>
                        </div>

                    </div>
                    <div class="emain-main-div5a-div2">
                        <div class="emain-main-div5a-div2a"><button class="blue-clr-score" disabled>__</button></div>
                        <div class="emain-main-div5a-div2a"><button class="pink-clr-score" disabled>__</button></div>
                        <div class="emain-main-div5a-div2a"><button class="black-clr-score">__</button></div>
                        <div class="emain-main-div5a-div2a"><button class="black-clr-score">__</button></div>
                        <div class="emain-main-div5a-div2a"><button class="blue-clr-score" disabled>__</button></div>
                        <div class="emain-main-div5a-div2a"><button class="pink-clr-score" disabled>__</button></div>
                    </div>
                </div>
                <div class="emain-main-div5a">
                    <div class="emain-main-div5a-div1">
                        <div class="emain-main-div5a-div1a clr-green-txt">Live</div>
                        <div class="emain-main-div5a-div1b">
                            <span>Sri Lanka v Ireland<br/>(Test Matches)</span>
                            <span class="emain-main-div5a-div1b-txt">F1 F BM</span>
                        </div>

                    </div>
                    <div class="emain-main-div5a-div2">
                        <div class="emain-main-div5a-div2a"><button class="blue-clr-score">1.31</button></div>
                        <div class="emain-main-div5a-div2a"><button class="pink-clr-score">1.31</button></div>
                        <div class="emain-main-div5a-div2a"><button class="blue-clr-score">1.31</button></div>
                        <div class="emain-main-div5a-div2a"><button class="pink-clr-score">1.31</button></div>
                        <div class="emain-main-div5a-div2a"><button class="blue-clr-score">1.31</button></div>
                        <div class="emain-main-div5a-div2a"><button class="pink-clr-score">1.31</button></div>
                    </div>
                </div>
                <div class="emain-main-div5a">
                    <div class="emain-main-div5a-div1">
                        <div class="emain-main-div5a-div1a">Tommorow<br/>10.00</div>
                        <div class="emain-main-div5a-div1b">
                            <span>Sri Lanka v Ireland<br/>(Test Matches)</span>
                            <span class="emain-main-div5a-div1b-txt">F1 F BM</span>
                        </div>

                    </div>
                    <div class="emain-main-div5a-div2">
                        <div class="emain-main-div5a-div2a"><button class="blue-clr-score">1.31</button></div>
                        <div class="emain-main-div5a-div2a"><button class="pink-clr-score">1.31</button></div>
                        <div class="emain-main-div5a-div2a"><button class="black-clr-score">__</button></div>
                        <div class="emain-main-div5a-div2a"><button class="black-clr-score">__</button></div>
                        <div class="emain-main-div5a-div2a"><button class="blue-clr-score">1.31</button></div>
                        <div class="emain-main-div5a-div2a"><button class="pink-clr-score">1.31</button></div>
                    </div>
                </div>
                
                <div class="emain-main-div5a">
                    <div class="emain-main-div5a-div1">
                        <div class="emain-main-div5a-div1a">Tommorow<br/>10.00</div>
                        <div class="emain-main-div5a-div1b">
                            <span>Sri Lanka v Ireland<br/>(Test Matches)</span>
                            <span class="emain-main-div5a-div1b-txt">F1 F BM</span>
                        </div>

                    </div>
                    <div class="emain-main-div5a-div2">
                        <div class="emain-main-div5a-div2a"><button class="blue-clr-score">1.31</button></div>
                        <div class="emain-main-div5a-div2a"><button class="pink-clr-score">1.31</button></div>
                        <div class="emain-main-div5a-div2a"><button class="black-clr-score">__</button></div>
                        <div class="emain-main-div5a-div2a"><button class="black-clr-score">__</button></div>
                        <div class="emain-main-div5a-div2a"><button class="blue-clr-score">1.31</button></div>
                        <div class="emain-main-div5a-div2a"><button class="pink-clr-score">1.31</button></div>
                    </div>
                </div>
                <div class="emain-main-div5a">
                    <div class="emain-main-div5a-div1">
                        <div class="emain-main-div5a-div1a">Tommorow<br/>10.00</div>
                        <div class="emain-main-div5a-div1b">
                            <span>Sri Lanka v Ireland<br/>(Test Matches)</span>
                            <span class="emain-main-div5a-div1b-txt">F1 F BM</span>
                        </div>

                    </div>
                    <div class="emain-main-div5a-div2">
                        <div class="emain-main-div5a-div2a"><button class="blue-clr-score">1.31</button></div>
                        <div class="emain-main-div5a-div2a"><button class="pink-clr-score">1.31</button></div>
                        <div class="emain-main-div5a-div2a"><button class="black-clr-score">__</button></div>
                        <div class="emain-main-div5a-div2a"><button class="black-clr-score">__</button></div>
                        <div class="emain-main-div5a-div2a"><button class="blue-clr-score">1.31</button></div>
                        <div class="emain-main-div5a-div2a"><button class="pink-clr-score">1.31</button></div>
                    </div>
                </div>
                <div class="emain-main-div5a">
                    <div class="emain-main-div5a-div1">
                        <div class="emain-main-div5a-div1a">Tommorow<br/>10.00</div>
                        <div class="emain-main-div5a-div1b">
                            <span>Sri Lanka v Ireland<br/>(Test Matches)</span>
                            <span class="emain-main-div5a-div1b-txt">F1 F BM</span>
                        </div>

                    </div>
                    <div class="emain-main-div5a-div2">
                        <div class="emain-main-div5a-div2a"><button class="blue-clr-score">1.31</button></div>
                        <div class="emain-main-div5a-div2a"><button class="pink-clr-score">1.31</button></div>
                        <div class="emain-main-div5a-div2a"><button class="black-clr-score">__</button></div>
                        <div class="emain-main-div5a-div2a"><button class="black-clr-score">__</button></div>
                        <div class="emain-main-div5a-div2a"><button class="blue-clr-score">1.31</button></div>
                        <div class="emain-main-div5a-div2a"><button class="pink-clr-score">1.31</button></div>
                    </div>
                </div>
            </div>
            </>
            :null}
            {esports4?
            <>
<div class="emain-main-div5">
                <div class="emain-main-div5a">
                    <div class="emain-main-div5a-div1">
                        <div class="emain-main-div5a-div1a">30 Mar<br/>23.30</div>
                        <div class="emain-main-div5a-div1b">
                            <span>Sri Lanka v Ireland<br/>(Test Matches)</span>
                            <span class="emain-main-div5a-div1b-txt">F1 F BM</span>
                        </div>

                    </div>
                    <div class="emain-main-div5a-div2">
                        <div class="emain-main-div5a-div2a"><button class="blue-clr-score" disabled>__</button></div>
                        <div class="emain-main-div5a-div2a"><button class="pink-clr-score" disabled>__</button></div>
                        <div class="emain-main-div5a-div2a"><button class="black-clr-score">__</button></div>
                        <div class="emain-main-div5a-div2a"><button class="black-clr-score">__</button></div>
                        <div class="emain-main-div5a-div2a"><button class="blue-clr-score" disabled>__</button></div>
                        <div class="emain-main-div5a-div2a"><button class="pink-clr-score" disabled>__</button></div>
                    </div>
                </div>
                <div class="emain-main-div5a">
                    <div class="emain-main-div5a-div1">
                        <div class="emain-main-div5a-div1a">Tommorow<br/>10.00</div>
                        <div class="emain-main-div5a-div1b">
                            <span>Sri Lanka v Ireland<br/>(Test Matches)</span>
                            <span class="emain-main-div5a-div1b-txt">F1 F BM</span>
                        </div>

                    </div>
                    <div class="emain-main-div5a-div2">
                        <div class="emain-main-div5a-div2a"><button class="blue-clr-score">1.31</button></div>
                        <div class="emain-main-div5a-div2a"><button class="pink-clr-score">1.31</button></div>
                        <div class="emain-main-div5a-div2a"><button class="black-clr-score">__</button></div>
                        <div class="emain-main-div5a-div2a"><button class="black-clr-score">__</button></div>
                        <div class="emain-main-div5a-div2a"><button class="blue-clr-score">1.31</button></div>
                        <div class="emain-main-div5a-div2a"><button class="pink-clr-score">1.31</button></div>
                    </div>
                </div>
            </div>
            </>
            :null}
            {esports5?
            <>
<div class="emain-main-div5">
                <div class="emain-main-div5a">
                    <div class="emain-main-div5a-div1">
                        <div class="emain-main-div5a-div1a">Tommorow<br/>10.00</div>
                        <div class="emain-main-div5a-div1b">
                            <span>Sri Lanka v Ireland<br/>(Test Matches)</span>
                            <span class="emain-main-div5a-div1b-txt">F1 F BM</span>
                        </div>

                    </div>
                    <div class="emain-main-div5a-div2">
                        <div class="emain-main-div5a-div2a"><button class="blue-clr-score">1.31</button></div>
                        <div class="emain-main-div5a-div2a"><button class="pink-clr-score">1.31</button></div>
                        <div class="emain-main-div5a-div2a"><button class="black-clr-score">__</button></div>
                        <div class="emain-main-div5a-div2a"><button class="black-clr-score">__</button></div>
                        <div class="emain-main-div5a-div2a"><button class="blue-clr-score">1.31</button></div>
                        <div class="emain-main-div5a-div2a"><button class="pink-clr-score">1.31</button></div>
                    </div>
                </div>
                
                <div class="emain-main-div5a">
                    <div class="emain-main-div5a-div1">
                        <div class="emain-main-div5a-div1a">Tommorow<br/>10.00</div>
                        <div class="emain-main-div5a-div1b">
                            <span>Sri Lanka v Ireland<br/>(Test Matches)</span>
                            <span class="emain-main-div5a-div1b-txt">F1 F BM</span>
                        </div>

                    </div>
                    <div class="emain-main-div5a-div2">
                        <div class="emain-main-div5a-div2a"><button class="blue-clr-score">1.31</button></div>
                        <div class="emain-main-div5a-div2a"><button class="pink-clr-score">1.31</button></div>
                        <div class="emain-main-div5a-div2a"><button class="black-clr-score">__</button></div>
                        <div class="emain-main-div5a-div2a"><button class="black-clr-score">__</button></div>
                        <div class="emain-main-div5a-div2a"><button class="blue-clr-score">1.31</button></div>
                        <div class="emain-main-div5a-div2a"><button class="pink-clr-score">1.31</button></div>
                    </div>
                </div>
                <div class="emain-main-div5a">
                    <div class="emain-main-div5a-div1">
                        <div class="emain-main-div5a-div1a">Tommorow<br/>10.00</div>
                        <div class="emain-main-div5a-div1b">
                            <span>Sri Lanka v Ireland<br/>(Test Matches)</span>
                            <span class="emain-main-div5a-div1b-txt">F1 F BM</span>
                        </div>

                    </div>
                    <div class="emain-main-div5a-div2">
                        <div class="emain-main-div5a-div2a"><button class="blue-clr-score">1.31</button></div>
                        <div class="emain-main-div5a-div2a"><button class="pink-clr-score">1.31</button></div>
                        <div class="emain-main-div5a-div2a"><button class="black-clr-score">__</button></div>
                        <div class="emain-main-div5a-div2a"><button class="black-clr-score">__</button></div>
                        <div class="emain-main-div5a-div2a"><button class="blue-clr-score">1.31</button></div>
                        <div class="emain-main-div5a-div2a"><button class="pink-clr-score">1.31</button></div>
                    </div>
                </div>
                <div class="emain-main-div5a">
                    <div class="emain-main-div5a-div1">
                        <div class="emain-main-div5a-div1a">Tommorow<br/>10.00</div>
                        <div class="emain-main-div5a-div1b">
                            <span>Sri Lanka v Ireland<br/>(Test Matches)</span>
                            <span class="emain-main-div5a-div1b-txt">F1 F BM</span>
                        </div>

                    </div>
                    <div class="emain-main-div5a-div2">
                        <div class="emain-main-div5a-div2a"><button class="blue-clr-score">1.31</button></div>
                        <div class="emain-main-div5a-div2a"><button class="pink-clr-score">1.31</button></div>
                        <div class="emain-main-div5a-div2a"><button class="black-clr-score">__</button></div>
                        <div class="emain-main-div5a-div2a"><button class="black-clr-score">__</button></div>
                        <div class="emain-main-div5a-div2a"><button class="blue-clr-score">1.31</button></div>
                        <div class="emain-main-div5a-div2a"><button class="pink-clr-score">1.31</button></div>
                    </div>
                </div>
            </div>
            </>
            :null}
</div>
            <div class="emain-main-div6">
                <div class="emain-main-div6a">Our Casino</div>
                <div class="emain-main-div6b">
                <div class="home-main-slider">
<Swiper
        slidesPerView={2}
        centeredSlides={false}
        spaceBetween={10}
        grabCursor={true}
        breakpoints={{
            500: {
              slidesPerView: 3
            },
          }}
        pagination={false}
        loop={true}
        modules={[Pagination, Autoplay]} autoplay={true}

        className="mySwiper"
      >
  
        <SwiperSlide><img class="home-main-slider-img" src={ourcasino1}></img></SwiperSlide>
        <SwiperSlide><img class="home-main-slider-img" src={ourcasino2}></img></SwiperSlide>
        <SwiperSlide><img class="home-main-slider-img" src={ourcasino3}></img></SwiperSlide>
        <SwiperSlide><img class="home-main-slider-img" src={ourcasino4}></img></SwiperSlide>
        <SwiperSlide><img class="home-main-slider-img" src={ourcasino5}></img></SwiperSlide>
        <SwiperSlide><img class="home-main-slider-img" src={ourcasino6}></img></SwiperSlide>
        
      </Swiper>

</div>
                </div>
            </div>
            <div class="emain-main-div6">
                <div class="emain-main-div6a">New Games</div>
                <div class="emain-main-div6b">
                <div class="home-main-slider">
<Swiper
        slidesPerView={2}
        centeredSlides={false}
        spaceBetween={10}
        grabCursor={true}
        breakpoints={{
            500: {
              slidesPerView: 3
              
            },
          }}
        pagination={false}
        loop={true}
        modules={[Pagination, Autoplay]} autoplay={true}
        
        className="mySwiper"
      >
  
        <SwiperSlide><img class="home-main-slider-img" src={newgames1}></img></SwiperSlide>
        <SwiperSlide><img class="home-main-slider-img" src={newgames2}></img></SwiperSlide>
        <SwiperSlide><img class="home-main-slider-img" src={newgames3}></img></SwiperSlide>
        <SwiperSlide><img class="home-main-slider-img" src={newgames4}></img></SwiperSlide>
        <SwiperSlide><img class="home-main-slider-img" src={newgames2}></img></SwiperSlide>
        <SwiperSlide><img class="home-main-slider-img" src={newgames3}></img></SwiperSlide>
        
      </Swiper>

</div>
                </div>
            </div>
            <div class="ending-padding"></div>
            <Footer/>
        </div>
        </>
    )
}
export default EMain