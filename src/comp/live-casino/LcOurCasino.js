import React from "react";
import './LcOurCasino.css';
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


function LcOurCasino (){
    const [ocallcasino, setocallcasino] = useState(true);
    const onClickocallcasino = ()=>{
        setocallcasino(true);
        setocroluette(false);  
        setocteenpati(false);  
        setocpoker(false); 
        setocbaccarat(false);
        setocdragontiger(false);
        setoccards(false); 
    };
    const [ocroluette, setocroluette] = useState('');
    const onClickocroluette = ()=>{
        setocallcasino(false);
        setocroluette(true);  
        setocteenpati(false);  
        setocpoker(false); 
        setocbaccarat(false);
        setocdragontiger(false);
        setoccards(false); 
    };
    const [octeenpati, setocteenpati] = useState('');
    const onClickocteenpati = ()=>{
        setocallcasino(false);
        setocroluette(false);  
        setocteenpati(true);  
        setocpoker(false); 
        setocbaccarat(false);
        setocdragontiger(false);
        setoccards(false);  
    };
    const [ocpoker, setocpoker] = useState('');
    const onClickocpoker = ()=>{
        setocallcasino(false);
        setocroluette(false);  
        setocteenpati(false);  
        setocpoker(true); 
        setocbaccarat(false);
        setocdragontiger(false);
        setoccards(false);  
    };
    const [ocbaccarat, setocbaccarat] = useState('');
    const onClickocbaccarat = ()=>{
        setocallcasino(false);
        setocroluette(false);  
        setocteenpati(false);  
        setocpoker(false); 
        setocbaccarat(true);
        setocdragontiger(false);
        setoccards(false);  
    };
    const [ocdragontiger, setocdragontiger] = useState('');
    const onClickocdragontiger = ()=>{
        setocallcasino(false);
        setocroluette(false);  
        setocteenpati(false);  
        setocpoker(false); 
        setocbaccarat(false);
        setocdragontiger(true);
        setoccards(false);  
    };
    const [occards, setoccards] = useState('');
    const onClickoccards = ()=>{
        setocallcasino(false);
        setocroluette(false);  
        setocteenpati(false);  
        setocpoker(false); 
        setocbaccarat(false);
        setocdragontiger(false);
        setoccards(true);
    };
    
    return(
        <>
        <div class="lcourcasino">
            <div class="lcourcasino-div1">
                <div onClick={onClickocallcasino} class={ocallcasino? 'lcourcasino-div1a-onclick' : 'lcourcasino-div1a'}>All Casino</div>
                <div onClick={onClickocroluette} class={ocroluette? 'lcourcasino-div1a-onclick' : 'lcourcasino-div1a'}>Roluette</div>
                <div onClick={onClickocteenpati} class={octeenpati? 'lcourcasino-div1a-onclick' : 'lcourcasino-div1a'}>Teenpati</div>
                <div onClick={onClickocpoker} class={ocpoker? 'lcourcasino-div1a-onclick' : 'lcourcasino-div1a'}>Poker</div>
                <div onClick={onClickocbaccarat} class={ocbaccarat? 'lcourcasino-div1a-onclick' : 'lcourcasino-div1a'}>Baccarat</div>
                <div onClick={onClickocdragontiger} class={ocdragontiger? 'lcourcasino-div1a-onclick' : 'lcourcasino-div1a'}>Dragon Tiger</div>
                <div onClick={onClickoccards} class={occards? 'lcourcasino-div1a-onclick' : 'lcourcasino-div1a'}>32 Cards</div>
                <div class='lcourcasino-div1a'>Andar Bahar</div>
                <div class='lcourcasino-div1a'>Lucky 7</div>
                <div class='lcourcasino-div1a'>3 Card Judgement</div>
                <div class='lcourcasino-div1a'>Casino War</div>
                <div class='lcourcasino-div1a'>Worli</div>
                <div class='lcourcasino-div1a'>Sports</div>
                <div class='lcourcasino-div1a'>Bollywood</div>
                <div class='lcourcasino-div1a'>Lottery</div>
                <div class='lcourcasino-div1a'>Queen</div>
                <div class='lcourcasino-div1a'>Race</div>
            </div>
            <div class="lcourcasino-div2">
                {ocallcasino? <>
                    <div class="lcourcasino-div2-container">
                        <div class="lcourcasino-div2a">
                            <img src={olc1}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc1}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc1}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc1}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc1}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc1}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc1}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc1}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc1}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc1}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc1}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc1}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc1}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc1}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc1}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc1}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc1}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc1}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc1}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc1}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc1}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc1}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc1}></img>
                        </div>
                    </div>
                </>
                :null 
                }
            {ocroluette? <>
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
                            <img src={olc1}></img>
                        </div>

                    </div>
                </>
                :null 
                }
                {octeenpati? <>
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
                {ocpoker? <>
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
                {ocbaccarat? <>
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
                {ocdragontiger? <>
                    <div class="lcourcasino-div2-container">
                        <div class="lcourcasino-div2a">
                            <img src={olc6}></img>
                        </div>
                        
                    </div>
                </>
                :null 
                }
                {occards? <>
                    <div class="lcourcasino-div2-container">
                        <div class="lcourcasino-div2a">
                            <img src={olc7}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc7}></img>
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
export default LcOurCasino