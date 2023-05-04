import React from "react";
import './SNetEnt.css';
import { useState } from "react";
import Footer from "../Footer";
import olc1 from '../assets/OUR LIVE CASINOS/olc1.jpg';
import olc2 from '../assets/OUR LIVE CASINOS/olc2.jpg';
import olc3 from '../assets/OUR LIVE CASINOS/olc3.jpg';
import olc4 from '../assets/OUR LIVE CASINOS/olc4.jpg';
import olc17 from '../assets/OUR LIVE CASINOS/olc17.jpg';
import olc6 from '../assets/OUR LIVE CASINOS/olc6.jpg';
import olc7 from '../assets/OUR LIVE CASINOS/olc7.jpg';
import olc23 from '../assets/OUR LIVE CASINOS/olc23.jpg';


function LcTembo (){
    const [ocdallcasino, setocdallcasino] = useState(true);
    const onClickocdallcasino = ()=>{
        setocdallcasino(true);
    };


    
    return(
        <>
        <div class="lcourcasino">
            <div class="lcourcasino-div1">
                <div onClick={onClickocdallcasino} class={ocdallcasino? 'lcourcasino-div1a-onclick' : 'lcourcasino-div1a'}>6 REEL</div>

            </div>
            <div class="lcourcasino-div2">
                {ocdallcasino? <>
                    <div class="lcourcasino-div2-container">
                        <div class="lcourcasino-div2a">
                            <img src={olc6}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc17}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc17}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc17}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc17}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc17}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc17}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc17}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc17}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc17}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc17}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc17}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc17}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc17}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc17}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc17}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc17}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc17}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc17}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc17}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc17}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc17}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc17}></img>
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
export default LcTembo