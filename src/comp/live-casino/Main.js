import React from "react";
import './Main.css'
import { useState } from "react";

import icon1 from './lc-assets/icon1.png'
import icon2 from './lc-assets/icon2.png'
import icon3 from './lc-assets/icon3.png'
import icon4 from './lc-assets/icon4.png'
import icon5 from './lc-assets/icon5.png'
import icon6 from './lc-assets/icon6.png'
import icon7 from './lc-assets/icon7.png'
import icon8 from './lc-assets/icon8.png'
import icon9 from './lc-assets/icon9.png'
import icon10 from './lc-assets/icon10.png'
import icon11 from './lc-assets/icon11.png'
import LcOurCasino from './LcOurCasino'
import LcOurVirtual from './LcOurVirtual'
import LcTembo from './LcTembo'
import LcCreedRoomz from './LcCreedRoomz'
import LcBoota from './LcBota'
import LcVivoGaming from './LcVivoGaming'
import LcLuckyStreak from './LcLuckyStreak'
import LcEvolution from './LcEvolution'
import LcEzugi from "./LcEzugi";
import LcCockFight from "./LcCockFight";
import LcSuperSpade from "./LcSuperSpade";

import Header from '../Header'


function Main(){
    const [oc, setoc] = useState(true);
    const onClickoc = ()=>{
        setoc(true);
        setov(false);
        sett(false);
        setcd(false);
        setbota(false);
        setvg(false);
        setls(false);
        setev(false);
        setez(false);
        setcf(false);
        setss(false);
    };
    const [ov, setov] = useState('');
    const onClickov = ()=>{
        setoc(false);
        setov(true);
        sett(false);
        setcd(false);
        setbota(false);
        setvg(false);
        setls(false);
        setev(false);
        setez(false);
        setcf(false);
        setss(false);
    };
    const [t, sett] = useState('');
    const onClickt = ()=>{
        setoc(false);
        setov(false);
        sett(true);
        setcd(false);
        setbota(false);
        setvg(false);
        setls(false);
        setev(false);
        setez(false);
        setcf(false);
        setss(false);
    };
    const [cd, setcd] = useState('');
    const onClickcd = ()=>{
        setoc(false);
        setov(false);
        sett(false);
        setcd(true);
        setbota(false);
        setvg(false);
        setls(false);
        setev(false);
        setez(false);
        setcf(false);
        setss(false);
    };
    const [bota, setbota] = useState('');
    const onClickbota = ()=>{
        setoc(false);
        setov(false);
        sett(false);
        setcd(false);
        setbota(true);
        setvg(false);
        setls(false);
        setev(false);
        setez(false);
        setcf(false);
        setss(false);
    };
    const [vg, setvg] = useState('');
    const onClickvg = ()=>{
        setoc(false);
        setov(false);
        sett(false);
        setcd(false);
        setbota(false);
        setvg(true);
        setls(false);
        setev(false);
        setez(false);
        setcf(false);
        setss(false);
    };
    const [ls, setls] = useState('');
    const onClickls = ()=>{
        setoc(false);
        setov(false);
        sett(false);
        setcd(false);
        setbota(false);
        setvg(false);
        setls(true);
        setev(false);
        setez(false);
        setcf(false);
        setss(false);
    };
    const [ev, setev] = useState('');
    const onClickev = ()=>{
        setoc(false);
        setov(false);
        sett(false);
        setcd(false);
        setbota(false);
        setvg(false);
        setls(false);
        setev(true);
        setez(false);
        setcf(false);
        setss(false);
    };
    const [ez, setez] = useState('');
    const onClickez = ()=>{
        setoc(false);
        setov(false);
        sett(false);
        setcd(false);
        setbota(false);
        setvg(false);
        setls(false);
        setev(false);
        setez(true);
        setcf(false);
        setss(false);
    };
    const [cf, setcf] = useState('');
    const onClickcf = ()=>{
        setoc(false);
        setov(false);
        sett(false);
        setcd(false);
        setbota(false);
        setvg(false);
        setls(false);
        setev(false);
        setez(false);
        setcf(true);
        setss(false);
    };
    const [ss, setss] = useState('');
    const onClickss = ()=>{
        setoc(false);
        setov(false);
        sett(false);
        setcd(false);
        setbota(false);
        setvg(false);
        setls(false);
        setev(false);
        setez(false);
        setcf(false);
        setss(true);
    };
    return(
        <>
            <div class="lcmain">
<Header/>  

    <div class="lcmain2">
        <div class="lcmain2-div1">
            <div onClick={onClickoc} className="lcmain2-div1a" class={oc? 'lcmain2-div1a-yellow-onclick lcmain2-div1a' : 'lcmain2-div1a-grey lcmain2-div1a'}>
                <img src={icon1}></img><span>Our Casino</span>
            </div>
            <div onClick={onClickov} className="lcmain2-div1a" class={ov? 'lcmain2-div1a-yellow-onclick lcmain2-div1a' : 'lcmain2-div1a-grey lcmain2-div1a'}>
                <img src={icon2}></img><span>Our Virtual</span>
            </div>
            <div onClick={onClickt} className="lcmain2-div1a" class={t? 'lcmain2-div1a-yellow-onclick lcmain2-div1a' : 'lcmain2-div1a-grey lcmain2-div1a'}>
                <img src={icon3}></img><span>Tembo</span>
            </div>
            <div onClick={onClickcd} className="lcmain2-div1a" class={cd? 'lcmain2-div1a-yellow-onclick lcmain2-div1a' : 'lcmain2-div1a-grey lcmain2-div1a'}>
                <img src={icon4}></img><span>Creedroomz</span>
            </div>
            <div onClick={onClickbota} className="lcmain2-div1a" class={bota? 'lcmain2-div1a-yellow-onclick lcmain2-div1a' : 'lcmain2-div1a-grey lcmain2-div1a'}>
                <img src={icon5}></img><span>BOTA</span>
            </div>
            <div onClick={onClickvg} className="lcmain2-div1a" class={vg? 'lcmain2-div1a-yellow-onclick lcmain2-div1a' : 'lcmain2-div1a-grey lcmain2-div1a'}>
                <img src={icon6}></img><span>Vivo Gaming</span>
            </div>
            <div onClick={onClickls} className="lcmain2-div1a" class={ls? 'lcmain2-div1a-yellow-onclick lcmain2-div1a' : 'lcmain2-div1a-grey lcmain2-div1a'}>
                <img src={icon7}></img><span>Lucky Streak</span>
            </div>
            <div onClick={onClickev} className="lcmain2-div1a" class={ev? 'lcmain2-div1a-yellow-onclick lcmain2-div1a' : 'lcmain2-div1a-grey lcmain2-div1a'}>
                <img src={icon8}></img><span>Evolution</span>
            </div>
            <div onClick={onClickez} className="lcmain2-div1a" class={ez? 'lcmain2-div1a-yellow-onclick lcmain2-div1a' : 'lcmain2-div1a-grey lcmain2-div1a'}>
                <img src={icon9}></img><span>EZUGI</span>
            </div>
            <div onClick={onClickcf} className="lcmain2-div1a" class={cf? 'lcmain2-div1a-yellow-onclick lcmain2-div1a' : 'lcmain2-div1a-grey lcmain2-div1a'}>
                <img src={icon10}></img><span>CockFight</span>
            </div>
            <div onClick={onClickss} className="lcmain2-div1a" class={ss? 'lcmain2-div1a-yellow-onclick lcmain2-div1a' : 'lcmain2-div1a-grey lcmain2-div1a'}>
                <img src={icon11}></img><span>Super Spade</span>
            </div>
        </div>
        <div class="lcmain2-div2">
            {oc ? <> <LcOurCasino/> </> : null}
            {ov ? <> <LcOurVirtual/> </> : null}
            {t ? <> <LcTembo/> </> : null}
            {cd ? <> <LcCreedRoomz/> </> : null}
            {bota ? <> <LcBoota/> </> : null}
            {vg ? <> <LcVivoGaming/> </> : null}
            {ls ? <> <LcLuckyStreak/> </> : null}
            {ev ? <> <LcEvolution/> </> : null}
            {ez ? <> <LcEzugi/> </> : null}
            {cf ? <> <LcCockFight/> </> : null}
            {ss ? <> <LcSuperSpade/> </> : null}

        </div>
    </div>
            </div>
        </>
    )
}
export default Main