import React from "react";
import './SNetEnt.css';
import { useState } from "react";
import Footer from "../Footer";
import olc2 from '../assets/OUR LIVE CASINOS/olc2.jpg';


function LcOurCasino (){
    const [ocallcasino, setocallcasino] = useState(true);
    const onClickocallcasino = ()=>{
        setocallcasino(true);
    };

    
    return(
        <>
        <div class="lcourcasino">
            <div class="lcourcasino-div1">
                <div onClick={onClickocallcasino} class={ocallcasino? 'lcourcasino-div1a-onclick' : 'lcourcasino-div1a'}>New Slots</div>
            </div>
            <div class="lcourcasino-div2">
                {ocallcasino? <>
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
                            <img src={olc2}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc2}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc2}></img>
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