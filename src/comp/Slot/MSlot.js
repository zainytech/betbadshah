import React from "react";
import './MSlot.css'
import { useState } from "react";

import SNetEnt from './SNetEnt'
import SRedTiger from './SRedTiger'
import S1x2Gaming from './S1x2Gaming'
import SBBGames from './SBBGames'
import SBluePrintGaming from './SBluePrintGaming'
import SDragonSoft from './SDragonSoft'
import SEIKStudios from './SEIKStudios'
import SEvoplay from './SEvoplay'
import SFantasmaGames from "./SFantasmaGames";
import SGamefishGlobal from "./SGamefishGlobal";
import SIronDogStudio from "./SIronDogStudio";

import Header from '../Header'


function MSlot(){
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
                <span>NetEnt</span>
            </div>
            <div onClick={onClickov} className="lcmain2-div1a" class={ov? 'lcmain2-div1a-yellow-onclick lcmain2-div1a' : 'lcmain2-div1a-grey lcmain2-div1a'}>
                <span>Red Tiger</span>
            </div>
            <div onClick={onClickt} className="lcmain2-div1a" class={t? 'lcmain2-div1a-yellow-onclick lcmain2-div1a' : 'lcmain2-div1a-grey lcmain2-div1a'}>
                <span>1x2 Gaming</span>
            </div>
            <div onClick={onClickcd} className="lcmain2-div1a" class={cd? 'lcmain2-div1a-yellow-onclick lcmain2-div1a' : 'lcmain2-div1a-grey lcmain2-div1a'}>
                <span>BB Games</span>
            </div>
            <div onClick={onClickbota} className="lcmain2-div1a" class={bota? 'lcmain2-div1a-yellow-onclick lcmain2-div1a' : 'lcmain2-div1a-grey lcmain2-div1a'}>
                <span>Blueprint Gaming</span>
            </div>
            <div onClick={onClickvg} className="lcmain2-div1a" class={vg? 'lcmain2-div1a-yellow-onclick lcmain2-div1a' : 'lcmain2-div1a-grey lcmain2-div1a'}>
                <span>Dragon Soft</span>
            </div>
            <div onClick={onClickls} className="lcmain2-div1a" class={ls? 'lcmain2-div1a-yellow-onclick lcmain2-div1a' : 'lcmain2-div1a-grey lcmain2-div1a'}>
                <span>EIK Studios</span>
            </div>
            <div onClick={onClickev} className="lcmain2-div1a" class={ev? 'lcmain2-div1a-yellow-onclick lcmain2-div1a' : 'lcmain2-div1a-grey lcmain2-div1a'}>
                <span>Evoplay</span>
            </div>
            <div onClick={onClickez} className="lcmain2-div1a" class={ez? 'lcmain2-div1a-yellow-onclick lcmain2-div1a' : 'lcmain2-div1a-grey lcmain2-div1a'}>
                <span>Fantasma Games</span>
            </div>
            <div onClick={onClickcf} className="lcmain2-div1a" class={cf? 'lcmain2-div1a-yellow-onclick lcmain2-div1a' : 'lcmain2-div1a-grey lcmain2-div1a'}>
                <span>Gamefish Global</span>
            </div>
            <div onClick={onClickss} className="lcmain2-div1a" class={ss? 'lcmain2-div1a-yellow-onclick lcmain2-div1a' : 'lcmain2-div1a-grey lcmain2-div1a'}>
                <span>Iron Dog Studio</span>
            </div>
            <div class='lcmain2-div1a lcmain2-div1a-grey'>
                <span>Lady Luck</span>
            </div>
        </div>
        <div class="lcmain2-div2">
            {oc ? <> <SNetEnt/> </> : null}
            {ov ? <> <SRedTiger/> </> : null}
            {t ? <> <S1x2Gaming/> </> : null}
            {cd ? <> <SBBGames/> </> : null}
            {bota ? <> <SBluePrintGaming/> </> : null}
            {vg ? <> <SDragonSoft/> </> : null}
            {ls ? <> <SEIKStudios/> </> : null}
            {ev ? <> <SEvoplay/> </> : null}
            {ez ? <> <SFantasmaGames/> </> : null}
            {cf ? <> <SGamefishGlobal/> </> : null}
            {ss ? <> <SIronDogStudio/> </> : null}

        </div>
    </div>
            </div>
        </>
    )
}
export default MSlot