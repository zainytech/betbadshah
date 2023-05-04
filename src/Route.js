import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './comp/Home';
import LcMain from './comp/live-casino/Main'
import EMain from './comp/Exchange/EMain'
import FgMain from './comp/Fantasy-games/FgMain'
import SMain from './comp/Slot/MSlot'

function RouteConfig() {
 
  return <>
	<div>
      <BrowserRouter>

        <Routes>
      
        <Route path="/" element={<Home />} />
        <Route  path="/lcmain" element={<LcMain/>} />
        <Route  path="/emain" element={<EMain/>} />
        <Route  path="/fgmain" element={<FgMain/>} />
        <Route  path="/smain" element={<SMain/>} />


        </Routes>
            
    </BrowserRouter>
        
	</div>
  </>
  }
  
  export default RouteConfig;
