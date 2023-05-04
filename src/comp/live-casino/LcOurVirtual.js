import React from "react";
import './LcOurVirtual.css';
import { useState } from "react";
import Footer from "../Footer";
import olc1 from '../assets/OUR LIVE CASINOS/olc1.jpg';
import olc2 from '../assets/OUR LIVE CASINOS/olc2.jpg';
import olc3 from '../assets/OUR LIVE CASINOS/olc3.jpg';
import olc4 from '../assets/OUR LIVE CASINOS/olc4.jpg';
import olc5 from '../assets/OUR LIVE CASINOS/olc5.jpg';
import olc6 from '../assets/OUR LIVE CASINOS/olc6.jpg';
import olc7 from '../assets/OUR LIVE CASINOS/olc7.jpg';
import olc23 from '../assets/OUR LIVE CASINOS/olc23.jpg';


function LcOurVirtual (){
    const [ovallcasino, setovallcasino] = useState(true);
    const onClickovallcasino = ()=>{
        setovallcasino(true);
        setovroluette(false);  
        setovteenpati(false);  
        setovpoker(false); 
        setovbaccarat(false);
        setovdragontiger(false); 
    };
    const [ovroluette, setovroluette] = useState('');
    const onClickovroluette = ()=>{
        setovallcasino(false);
        setovroluette(true);  
        setovteenpati(false);  
        setovpoker(false); 
        setovbaccarat(false);
        setovdragontiger(false); 
    };
    const [ovteenpati, setovteenpati] = useState('');
    const onClickovteenpati = ()=>{
        setovallcasino(false);
        setovroluette(false);  
        setovteenpati(true);  
        setovpoker(false); 
        setovbaccarat(false);
        setovdragontiger(false);
    };
    const [ovpoker, setovpoker] = useState('');
    const onClickovpoker = ()=>{
        setovallcasino(false);
        setovroluette(false);  
        setovteenpati(false);  
        setovpoker(true); 
        setovbaccarat(false);
        setovdragontiger(false); 
    };
    const [ovbaccarat, setovbaccarat] = useState('');
    const onClickovbaccarat = ()=>{
        setovallcasino(false);
        setovroluette(false);  
        setovteenpati(false);  
        setovpoker(false); 
        setovbaccarat(true);
        setovdragontiger(false);
    };
    const [ovdragontiger, setovdragontiger] = useState('');
    const onClickovdragontiger = ()=>{
        setovallcasino(false);
        setovroluette(false);  
        setovteenpati(false);  
        setovpoker(false); 
        setovbaccarat(false);
        setovdragontiger(true);
    };

    
    return(
        <>
        <div class="lcourcasino">
            <div class="lcourcasino-div1">
                <div onClick={onClickovallcasino} class={ovallcasino? 'lcourcasino-div1a-onclick' : 'lcourcasino-div1a'}>All Casino</div>
                <div onClick={onClickovroluette} class={ovroluette? 'lcourcasino-div1a-onclick' : 'lcourcasino-div1a'}>Teenpatti</div>
                <div onClick={onClickovteenpati} class={ovteenpati? 'lcourcasino-div1a-onclick' : 'lcourcasino-div1a'}>Dragon Tiger</div>
                <div onClick={onClickovpoker} class={ovpoker? 'lcourcasino-div1a-onclick' : 'lcourcasino-div1a'}>Lucky 7</div>
                <div onClick={onClickovbaccarat} class={ovbaccarat? 'lcourcasino-div1a-onclick' : 'lcourcasino-div1a'}>Bollywood</div>
                <div onClick={onClickovdragontiger} class={ovdragontiger? 'lcourcasino-div1a-onclick' : 'lcourcasino-div1a'}>Others</div>

            </div>
            <div class="lcourcasino-div2">
                {ovallcasino? <>
                    <div class="lcourcasino-div2-container">
                        <div class="lcourcasino-div2a">
                            <img src={olc3}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc5}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc5}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc5}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc5}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc5}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc5}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc5}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc5}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc5}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc5}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc5}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc5}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc5}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc5}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc5}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc5}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc5}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc5}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc5}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc5}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc5}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc5}></img>
                        </div>
                    </div>
                </>
                :null 
                }
            {ovroluette? <>
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
                            <img src={olc5}></img>
                        </div>

                    </div>
                </>
                :null 
                }
                {ovteenpati? <>
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
                {ovpoker? <>
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
                {ovbaccarat? <>
                    <div class="lcourcasino-div2-container">
                        <div class="lcourcasino-div2a">
                            <img src={olc5}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc5}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc5}></img>
                        </div>
                        
                    </div>
                </>
                :null 
                }
                {ovdragontiger? <>
                    <div class="lcourcasino-div2-container">
                        <div class="lcourcasino-div2a">
                            <img src={olc6}></img>
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
export default LcOurVirtual