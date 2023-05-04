import React from "react";
import './LcOurVirtual.css';
import { useState } from "react";
import Footer from "../Footer";
import olc1 from '../assets/OUR LIVE CASINOS/olc1.jpg';
import olc2 from '../assets/OUR LIVE CASINOS/olc2.jpg';
import olc3 from '../assets/OUR LIVE CASINOS/olc3.jpg';
import olc4 from '../assets/OUR LIVE CASINOS/olc4.jpg';
import olc11 from '../assets/OUR LIVE CASINOS/olc11.jpg';
import olc6 from '../assets/OUR LIVE CASINOS/olc6.jpg';
import olc7 from '../assets/OUR LIVE CASINOS/olc7.jpg';
import olc23 from '../assets/OUR LIVE CASINOS/olc23.jpg';


function LcBota (){
    const [oobotaallcasino, setoobotaallcasino] = useState(true);
    const onClickoobotaallcasino = ()=>{
        setoobotaallcasino(true);
 

    };

    
    return(
        <>
        <div class="lcourcasino">
            <div class="lcourcasino-div1">
                <div onClick={onClickoobotaallcasino} class={oobotaallcasino? 'lcourcasino-div1a-onclick' : 'lcourcasino-div1a'}>Baccarat</div>

            </div>
            <div class="lcourcasino-div2">
                {oobotaallcasino? <>
                    <div class="lcourcasino-div2-container">
                        <div class="lcourcasino-div2a">
                            <img src={olc23}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc11}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc11}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc11}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc11}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc11}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc11}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc11}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc11}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc11}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc11}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc11}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc11}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc11}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc11}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc11}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc11}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc11}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc11}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc11}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc11}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc11}></img>
                        </div>
                        <div class="lcourcasino-div2a">
                            <img src={olc11}></img>
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
export default LcBota