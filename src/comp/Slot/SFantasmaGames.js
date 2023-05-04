import React from "react";
import './SNetEnt.css';
import { useState } from "react";
import Footer from "../Footer";
import olc1 from '../assets/OUR LIVE CASINOS/olc1.jpg';
import olc2 from '../assets/OUR LIVE CASINOS/olc2.jpg';
import olc3 from '../assets/OUR LIVE CASINOS/olc3.jpg';
import olc4 from '../assets/OUR LIVE CASINOS/olc4.jpg';
import olc19 from '../assets/OUR LIVE CASINOS/olc19.jpg';
import olc6 from '../assets/OUR LIVE CASINOS/olc6.jpg';
import olc7 from '../assets/OUR LIVE CASINOS/olc7.jpg';
import olc23 from '../assets/OUR LIVE CASINOS/olc23.jpg';


function LcEzugi (){
    const [ocdallcasino, setocdallcasino] = useState(true);
    const onClickocdallcasino = ()=>{
        setocdallcasino(true);
        setocdroluette(false);  
        setocdteenpati(false);  
        setocdpoker(false); 


    };
    const [ocdroluette, setocdroluette] = useState('');
    const onClickocdroluette = ()=>{
        setocdallcasino(false);
        setocdroluette(true);  
        setocdteenpati(false);  
        setocdpoker(false); 


    };
    const [ocdteenpati, setocdteenpati] = useState('');
    const onClickocdteenpati = ()=>{
        setocdallcasino(false);
        setocdroluette(false);  
        setocdteenpati(true);  
        setocdpoker(false); 


    };
    const [ocdpoker, setocdpoker] = useState('');
    const onClickocdpoker = ()=>{
        setocdallcasino(false);
        setocdroluette(false);  
        setocdteenpati(false);  
        setocdpoker(true); 

 
    };


    
    return(
        <>
        <div class="lcourcasino">
            <div class="lcourcasino-div1">
                <div onClick={onClickocdallcasino} class={ocdallcasino? 'lcourcasino-div1a-onclick' : 'lcourcasino-div1a'}>5 REEL</div>
                <div onClick={onClickocdroluette} class={ocdroluette? 'lcourcasino-div1a-onclick' : 'lcourcasino-div1a'}>6 REEL</div>
                <div onClick={onClickocdteenpati} class={ocdteenpati? 'lcourcasino-div1a-onclick' : 'lcourcasino-div1a'}>7 REEL</div>
                <div onClick={onClickocdpoker} class={ocdpoker? 'lcourcasino-div1a-onclick' : 'lcourcasino-div1a'}>New Slots</div>

            </div>
            <div class="lcourcasino-div2">
                {ocdallcasino? <>
                    <div class="lcourcasino-div2-container">
                        <div class="lcourcasino-div2a">
                            <img src={olc2}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc19}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc19}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc19}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc19}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc19}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc19}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc19}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc19}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc19}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc19}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc19}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc19}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc19}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc19}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc19}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc19}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc19}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc19}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc19}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc19}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc19}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc19}></img>
                        </div>
                    </div>
                </>
                :null 
                }
            {ocdroluette? <>
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
                            <img src={olc19}></img>
                        </div>

                    </div>
                </>
                :null 
                }
                {ocdteenpati? <>
                    <div class="lcourcasino-div2-container">
                        <div class="lcourcasino-div2a">
                            <img src={olc3}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc23}></img>
                        </div>

                    </div>
                </>
                :null 
                }
                {ocdpoker? <>
                    <div class="lcourcasino-div2-container">
                        <div class="lcourcasino-div2a">
                            <img src={olc4}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc4}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc23}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc4}></img>
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
export default LcEzugi