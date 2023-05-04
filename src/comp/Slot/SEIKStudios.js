import React from "react";
import './SNetEnt.css';
import { useState } from "react";
import Footer from "../Footer";
import olc1 from '../assets/OUR LIVE CASINOS/olc1.jpg';
import olc2 from '../assets/OUR LIVE CASINOS/olc2.jpg';
import olc3 from '../assets/OUR LIVE CASINOS/olc3.jpg';
import olc4 from '../assets/OUR LIVE CASINOS/olc4.jpg';
import olc21 from '../assets/OUR LIVE CASINOS/olc21.jpg';
import olc6 from '../assets/OUR LIVE CASINOS/olc6.jpg';
import olc7 from '../assets/OUR LIVE CASINOS/olc7.jpg';
import olc23 from '../assets/OUR LIVE CASINOS/olc23.jpg';


function LcLuckyStreak (){
    const [olsallcasino, setolsallcasino] = useState(true);
    const onClickolsallcasino = ()=>{
        setolsallcasino(true);
        setolsroluette(false);  


    };
    const [olsroluette, setolsroluette] = useState('');
    const onClickolsroluette = ()=>{
        setolsallcasino(false);
        setolsroluette(true);  


    };



    
    return(
        <>
        <div class="lcourcasino">
            <div class="lcourcasino-div1">
                <div onClick={onClickolsallcasino} class={olsallcasino? 'lcourcasino-div1a-onclick' : 'lcourcasino-div1a'}>New Slot</div>
                <div onClick={onClickolsroluette} class={olsroluette? 'lcourcasino-div1a-onclick' : 'lcourcasino-div1a'}>3 REEL</div>


            </div>
            <div class="lcourcasino-div2">
                {olsallcasino? <>
                    <div class="lcourcasino-div2-container">
                        <div class="lcourcasino-div2a">
                            <img src={olc23}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc21}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc21}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc21}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc21}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc21}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc21}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc21}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc21}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc21}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc21}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc21}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc21}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc21}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc21}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc21}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc21}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc21}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc21}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc21}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc21}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc21}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc21}></img>
                        </div>
                    </div>
                </>
                :null 
                }
            {olsroluette? <>
                    <div class="lcourcasino-div2-container">
                        <div class="lcourcasino-div2a">
                            <img src={olc2}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc2}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc2}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc2}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc2}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc2}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc2}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc2}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc2}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc2}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc21}></img>
                        </div>

                    </div>
                </>
                :null 
                }


                
            </div>
            <Footer/>
        </div>
        </>
    )
}
export default LcLuckyStreak