import React from "react";
import './SNetEnt.css';
import { useState } from "react";
import Footer from "../Footer";
import olc1 from '../assets/OUR LIVE CASINOS/olc1.jpg';
import olc2 from '../assets/OUR LIVE CASINOS/olc2.jpg';
import olc3 from '../assets/OUR LIVE CASINOS/olc3.jpg';
import olc4 from '../assets/OUR LIVE CASINOS/olc4.jpg';
import olc13 from '../assets/OUR LIVE CASINOS/olc13.jpg';
import olc6 from '../assets/OUR LIVE CASINOS/olc6.jpg';
import olc7 from '../assets/OUR LIVE CASINOS/olc7.jpg';
import olc23 from '../assets/OUR LIVE CASINOS/olc23.jpg';


function LcTembo (){
    const [otallcasino, setotallcasino] = useState(true);
    const onClickotallcasino = ()=>{
        setotallcasino(true);
        setotroluette(false);   
 
    };
    const [otroluette, setotroluette] = useState('');
    const onClickotroluette = ()=>{
        setotallcasino(false);
        setotroluette(true);  
 
    };



    
    return(
        <>
        <div class="lcourcasino">
            <div class="lcourcasino-div1">
                <div onClick={onClickotallcasino} class={otallcasino? 'lcourcasino-div1a-onclick' : 'lcourcasino-div1a'}>3 REEL</div>
                <div onClick={onClickotroluette} class={otroluette? 'lcourcasino-div1a-onclick' : 'lcourcasino-div1a'}>5REEL</div>

            </div>
            <div class="lcourcasino-div2">
                {otallcasino? <>
                    <div class="lcourcasino-div2-container">
                        <div class="lcourcasino-div2a">
                            <img src={olc1}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc13}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc13}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc13}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc13}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc13}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc13}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc13}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc13}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc13}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc13}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc13}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc13}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc13}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc13}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc13}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc13}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc13}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc13}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc13}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc13}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc13}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc13}></img>
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