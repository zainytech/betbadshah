import React from "react";
import './LcOurVirtual.css';
import { useState } from "react";
import Footer from "../Footer";
import olc1 from '../assets/OUR LIVE CASINOS/olc1.jpg';
import olc2 from '../assets/OUR LIVE CASINOS/olc2.jpg';
import olc3 from '../assets/OUR LIVE CASINOS/olc3.jpg';
import olc4 from '../assets/OUR LIVE CASINOS/olc4.jpg';
import olc22 from '../assets/OUR LIVE CASINOS/olc22.jpg';
import olc6 from '../assets/OUR LIVE CASINOS/olc6.jpg';
import olc7 from '../assets/OUR LIVE CASINOS/olc7.jpg';
import olc23 from '../assets/OUR LIVE CASINOS/olc23.jpg';


function LcEvolution (){
    const [ocdallcasino, setocdallcasino] = useState(true);
    const onClickocdallcasino = ()=>{
        setocdallcasino(true);
        setocdroluette(false);  
        setocdteenpati(false);  
        setocdpoker(false); 
        setocdbaccarat(false);

    };
    const [ocdroluette, setocdroluette] = useState('');
    const onClickocdroluette = ()=>{
        setocdallcasino(false);
        setocdroluette(true);  
        setocdteenpati(false);  
        setocdpoker(false); 
        setocdbaccarat(false);

    };
    const [ocdteenpati, setocdteenpati] = useState('');
    const onClickocdteenpati = ()=>{
        setocdallcasino(false);
        setocdroluette(false);  
        setocdteenpati(true);  
        setocdpoker(false); 
        setocdbaccarat(false);

    };
    const [ocdpoker, setocdpoker] = useState('');
    const onClickocdpoker = ()=>{
        setocdallcasino(false);
        setocdroluette(false);  
        setocdteenpati(false);  
        setocdpoker(true); 
        setocdbaccarat(false);
 
    };
    const [ocdbaccarat, setocdbaccarat] = useState('');
    const onClickocdbaccarat = ()=>{
        setocdallcasino(false);
        setocdroluette(false);  
        setocdteenpati(false);  
        setocdpoker(false); 
        setocdbaccarat(true);

    };

    
    return(
        <>
        <div class="lcourcasino">
            <div class="lcourcasino-div1">
                <div onClick={onClickocdallcasino} class={ocdallcasino? 'lcourcasino-div1a-onclick' : 'lcourcasino-div1a'}>Blackjack</div>
                <div onClick={onClickocdroluette} class={ocdroluette? 'lcourcasino-div1a-onclick' : 'lcourcasino-div1a'}>Roulette</div>
                <div onClick={onClickocdteenpati} class={ocdteenpati? 'lcourcasino-div1a-onclick' : 'lcourcasino-div1a'}>Baccarat</div>
                <div onClick={onClickocdpoker} class={ocdpoker? 'lcourcasino-div1a-onclick' : 'lcourcasino-div1a'}>Game Show</div>
                <div onClick={onClickocdbaccarat} class={ocdbaccarat? 'lcourcasino-div1a-onclick' : 'lcourcasino-div1a'}>Others</div>

            </div>
            <div class="lcourcasino-div2">
                {ocdallcasino? <>
                    <div class="lcourcasino-div2-container">
                        <div class="lcourcasino-div2a">
                            <img src={olc3}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc22}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc22}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc22}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc22}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc22}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc22}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc22}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc22}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc22}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc22}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc22}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc22}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc22}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc22}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc22}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc22}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc22}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc22}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc22}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc22}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc22}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc22}></img>
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
                            <img src={olc22}></img>
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
                {ocdbaccarat? <>
                    <div class="lcourcasino-div2-container">
                        <div class="lcourcasino-div2a">
                            <img src={olc22}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc22}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc22}></img>
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
export default LcEvolution