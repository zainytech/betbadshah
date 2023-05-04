import React from "react";
import './LcOurVirtual.css';
import { useState } from "react";
import Footer from "../Footer";
import olc1 from '../assets/OUR LIVE CASINOS/olc1.jpg';
import olc2 from '../assets/OUR LIVE CASINOS/olc2.jpg';
import olc3 from '../assets/OUR LIVE CASINOS/olc3.jpg';
import olc4 from '../assets/OUR LIVE CASINOS/olc4.jpg';
import olc18 from '../assets/OUR LIVE CASINOS/olc18.jpg';
import olc6 from '../assets/OUR LIVE CASINOS/olc6.jpg';
import olc7 from '../assets/OUR LIVE CASINOS/olc7.jpg';
import olc23 from '../assets/OUR LIVE CASINOS/olc23.jpg';


function LcVivoGaming (){
    const [ovgallcasino, setovgallcasino] = useState(true);
    const onClickovgallcasino = ()=>{
        setovgallcasino(true);
        setovgroluette(false);  
        setovgteenpati(false);  
        setovgpoker(false); 

    };
    const [ovgroluette, setovgroluette] = useState('');
    const onClickovgroluette = ()=>{
        setovgallcasino(false);
        setovgroluette(true);  
        setovgteenpati(false);  
        setovgpoker(false); 

    };
    const [ovgteenpati, setovgteenpati] = useState('');
    const onClickovgteenpati = ()=>{
        setovgallcasino(false);
        setovgroluette(false);  
        setovgteenpati(true);  
        setovgpoker(false); 

    };
    const [ovgpoker, setovgpoker] = useState('');
    const onClickovgpoker = ()=>{
        setovgallcasino(false);
        setovgroluette(false);  
        setovgteenpati(false);  
        setovgpoker(true); 

    };


    
    return(
        <>
        <div class="lcourcasino">
            <div class="lcourcasino-div1">
                <div onClick={onClickovgallcasino} class={ovgallcasino? 'lcourcasino-div1a-onclick' : 'lcourcasino-div1a'}>Roulette</div>
                <div onClick={onClickovgroluette} class={ovgroluette? 'lcourcasino-div1a-onclick' : 'lcourcasino-div1a'}>Baccarat</div>
                <div onClick={onClickovgteenpati} class={ovgteenpati? 'lcourcasino-div1a-onclick' : 'lcourcasino-div1a'}>casinoHoldem</div>
                <div onClick={onClickovgpoker} class={ovgpoker? 'lcourcasino-div1a-onclick' : 'lcourcasino-div1a'}>DragonTiger</div>

            </div>
            <div class="lcourcasino-div2">
                {ovgallcasino? <>
                    <div class="lcourcasino-div2-container">
                        <div class="lcourcasino-div2a">
                            <img src={olc2}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc18}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc18}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc18}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc18}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc18}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc18}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc18}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc18}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc18}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc18}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc18}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc18}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc18}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc18}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc18}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc18}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc18}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc18}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc18}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc18}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc18}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc18}></img>
                        </div>
                    </div>
                </>
                :null 
                }
            {ovgroluette? <>
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
                            <img src={olc18}></img>
                        </div>

                    </div>
                </>
                :null 
                }
                {ovgteenpati? <>
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
                {ovgpoker? <>
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
export default LcVivoGaming