import React from "react";
import './FgMain.css'
import Header from '../Header'
import Footer from '../Footer'
import { useState } from "react";

import fg1 from './fg-assets/1.jpg'
import fg2 from './fg-assets/2.jpg'
import fg3 from './fg-assets/3.jpg'
import fg4 from './fg-assets/4.png'
import fg5 from './fg-assets/5.jpg'
import fg6 from './fg-assets/6.jpg'
import fg7 from './fg-assets/7.jpg'
import fg8 from './fg-assets/8.jpg'
import fg9 from './fg-assets/9.jpeg'
import fg10 from './fg-assets/10.jpg'
import fg11 from './fg-assets/11.jpg'
import fg12 from './fg-assets/12.jpg'
import fg13 from './fg-assets/13.jpg'
import fg14 from './fg-assets/14.jpg'
import fg15 from './fg-assets/15.jpg'

function FgMain(){
    const [fgame1, setfgame1] = useState(true);
    const onClickfgame1 = ()=>{
        setfgame1(true);
        setfgame2(false);
        setfgame3(false);
        setfgame4(false);
        setfgame5(false);
        setfgame6(false);
    };
    const [fgame2, setfgame2] = useState('');
    const onClickfgame2 = ()=>{
        setfgame1(false);
        setfgame2(true);
        setfgame3(false);
        setfgame4(false);
        setfgame5(false);
        setfgame6(false);
    };
    const [fgame3, setfgame3] = useState('');
    const onClickfgame3 = ()=>{
        setfgame1(false);
        setfgame2(false);
        setfgame3(true);
        setfgame4(false);
        setfgame5(false);
        setfgame6(false);
    };
    const [fgame4, setfgame4] = useState('');
    const onClickfgame4 = ()=>{
        setfgame1(false);
        setfgame2(false);
        setfgame3(false);
        setfgame4(true);
        setfgame5(false);
        setfgame6(false);
    };
    const [fgame5, setfgame5] = useState('');
    const onClickfgame5 = ()=>{
        setfgame1(false);
        setfgame2(false);
        setfgame3(false);
        setfgame4(false);
        setfgame5(true);
        setfgame6(false);
    };
    const [fgame6, setfgame6] = useState('');
    const onClickfgame6 = ()=>{
        setfgame1(false);
        setfgame2(false);
        setfgame3(false);
        setfgame4(false);
        setfgame5(false);
        setfgame6(true);
    };
    return(
        <>
            <div class="fgmain">
                <Header/>
                <div class="fgmain-main">
                    <div class="fgmain-main-div1">
                    <div class="fgmain-div1">
                        <div onClick={onClickfgame1} class="fgmain-div1a">
                            <img src={fg1}></img>
                        </div>
                        <div onClick={onClickfgame2} class="fgmain-div1a">
                            <img src={fg2}></img>
                        </div>
                        <div onClick={onClickfgame3} class="fgmain-div1a">
                            <img src={fg3}></img>
                        </div>
                        <div onClick={onClickfgame4} class="fgmain-div1a">
                            <img src={fg4}></img>
                        </div>
                        <div onClick={onClickfgame5} class="fgmain-div1a">
                            <img src={fg5}></img>
                        </div>
                        <div onClick={onClickfgame6} class="fgmain-div1a">
                            <img src={fg6}></img>
                        </div>
                        <div class="fgmain-div1a">
                            <img src={fg7}></img>
                        </div>
                        <div class="fgmain-div1a">
                            <img src={fg8}></img>
                        </div>
                        <div class="fgmain-div1a">
                            <img src={fg9}></img>
                        </div>
                        <div class="fgmain-div1a">
                            <img src={fg10}></img>
                        </div>
                        <div class="fgmain-div1a">
                            <img src={fg11}></img>
                        </div>
                        <div class="fgmain-div1a">
                            <img src={fg12}></img>
                        </div>
                        <div class="fgmain-div1a">
                            <img src={fg13}></img>
                        </div>
                        <div class="fgmain-div1a">
                            <img src={fg14}></img>
                        </div>
                        <div class="fgmain-div1a">
                            <img src={fg15}></img>
                        </div>
                    </div>
                    </div>
                    <div class="fgmain-main-div2">
                        {fgame1?
                        <h1>Cappadocio</h1>
                        :null}
                        {fgame2?
                        <h1>French Keno</h1>
                        :null}
                        {fgame3?
                        <h1>Cricket X</h1>
                        :null}
                        {fgame4?
                        <h1>Diam 11</h1>
                        :null}
                        {fgame5?
                        <h1>JETX</h1>
                        :null}
                        {fgame6?
                        <h1>JETXS</h1>
                        :null}
                        
                        <div class="fgmain-div2a"><button>Play Game</button></div>
                        <div class="fgmain-div2b">Discription</div>
                        <div class="fgmain-div2c">
                            {fgame1? 
                            <>
                            <p>1. Any participant in Diam-11 can form a team on his own, however the team must have 11 players of which a maximum of 7 players can be selected from the same team of the actual teams. For example, one can select a maximum of 7 players from India in an IND vs AUS match.</p>
                            <p>2. The team can be formed in any different combination without exceeding the 100 credit, additionally the same team must have the following combination in order to get qualified.</p>
                            <p>3. Captain and Vice-captain has to be assigned once the team is selected.</p>
                            <p>4. Substitutes will not be awarded any points for their contribution.</p>
                            <p>5. If a player gets replaced by substitute, but later comes back on field, he will get points for his contributions. However, if a player, who was not a part of the announced lineups, comes to the field as a substitute, he will not get points for any of his contributions.</p>
                            <p>6. Super over is not included in our point system. Therefore, no points will be awarded for any contribution in super over.</p>
                            <p>7. The points awarded in live are subjected to changes based on the changes in live, for example a wicket given, and the decision has been reversed based on DRS or any other fact.</p>
                            <p>8. Winners will be declared post completion of the match.</p>
                            <p>9. These rules doesn’t apply to any other Fancy or Fancy-1 markets.</p>
                            <p>10. Winning of any mentioned pots will be decided based on the number of participants joined. For example, the winning of a 100 participant pot will be different if the entire 100 participants has joined and if only 60 participants has joined.</p>
                            </>:null}
                            {fgame2? 
                            <>
                            <p>1. Winning of any mentioned pots will be decided based on the number of participants joined. For example, the winning of a 100 participant pot will be different if the entire 100 participants has joined and if only 60 participants has joined.</p>
                            <p>2. The team can be formed in any different combination without exceeding the 100 credit, additionally the same team must have the following combination in order to get qualified.</p>
                            <p>3. Captain and Vice-captain has to be assigned once the team is selected.</p>
                            <p>4. Winners will be declared post completion of the match. Substitutes will not be awarded any points for their contribution.</p>
                            <p>5. If a player gets replaced by substitute, but later comes back on field, he will get points for his contributions. However, if a player, who was not a part of the announced lineups, comes to the field as a substitute, he will not get points for any of his contributions.</p>
                            <p>6. Super over is not included in our point system. Therefore, no points will be awarded for any contribution in super over.</p>
                            <p>7. The points awarded in live are subjected to changes based on the changes in live, for example a wicket given, and the decision has been reversed based on DRS or any other fact.</p>
                            <p>8. Winners will be declared post completion of the match.</p>
                            <p>9. These rules doesn’t apply to any other Fancy or Fancy-1 markets.</p>
                            <p>10. Any participant in Diam-11 can form a team on his own, however the team must have 11 players of which a maximum of 7 players can be selected from the same team of the actual teams. For example, one can select a maximum of 7 players from India in an IND vs AUS match.</p>
                            </>:null}
                            {fgame3? 
                            <>
                            <p>1. If a player gets replaced by substitute, but later comes back on field, he will get points for his contributions. However, if a player, who was not a part of the announced lineups, comes to the field as a substitute, he will not get points for any of his contributions.</p>
                            <p>2. Winning of any mentioned pots will be decided based on the number of participants joined. For example, the winning of a 100 participant pot will be different if the entire 100 participants has joined and if only 60 participants has joined.</p>
                            <p>3. The team can be formed in any different combination without exceeding the 100 credit, additionally the same team must have the following combination in order to get qualified.</p>
                            <p>4. Captain and Vice-captain has to be assigned once the team is selected.</p>
                            <p>5. Winners will If a player gets replaced by substitute, be declared post completion of the match. Substitutes will not be awarded any points for their contribution.</p>
                            <p>6. Super over is not included in our point system. Therefore, no points will be awarded for any contribution in super over.</p>
                            <p>7. The points awarded in live are subjected to changes based on the changes in live, for example a wicket given, and the decision has been reversed based on DRS or any other fact.</p>
                            <p>8. Winners will be declared post completion of the match.</p>
                            <p>9. These rules doesn’t apply to any other Fancy or Fancy-1 markets.</p>
                            <p>10. Any participant in Diam-11 can form a team on his own, however the team must have 11 players of which a maximum of 7 players can be selected from the same team of the actual teams. For example, one can select a maximum of 7 players from India in an IND vs AUS match.</p>
                            </>:null}
                            {fgame4? 
                            <>
                            <p>1. Super over is not included in our point system. Therefore, no points will be awarded for any contribution in super over.</p>
                            <p>2. Winning of any mentioned pots will be decided based on the number of participants joined. For example, the winning of a 100 participant pot will be different if the entire 100 participants has joined and if only 60 participants has joined.</p>
                            <p>3. The team can be If a player gets replaced by substitute, formed in any different combination without exceeding the 100 credit, additionally the same team must have the following combination in order to get qualified.</p>
                            <p>4. Captain and Vice-captain has to be assigned once the team is selected.</p>
                            <p>5. Winners will be declared post completion of the match. Substitutes will not be awarded any points for their contribution.</p>
                            <p>6. If a player gets If a player gets replaced by substitute, replaced by substitute, but later comes back on field, he will get points for his contributions. However, if a player, who was not a part of the announced lineups, comes to the field as a substitute, he will not get points for any of his contributions.</p>
                            <p>7. The points awarded in live are subjected to changes based on the changes in live, for example a wicket given, and the decision has been reversed based on DRS or any other fact.</p>
                            <p>8. Winners will be declared post completion of the match.</p>
                            <p>9. These rules doesn’t apply to any other Fancy or Fancy-1 markets.</p>
                            <p>10. Any participant in Diam-11 can form a team on his own, however the team must have 11 players of which a maximum of 7 players can be selected from the same team of the actual teams. For example, one can select a maximum of 7 players from India in an IND vs AUS match.</p>
                            </>:null}
                            {fgame5? 
                            <>
                            <p>1. Winning of any mentioned pots will be decided based on the number of participants joined. For example, the winning of a 100 participant pot will be different if the entire 100 participants has joined and if only 60 participants has joined.</p>
                            <p>2. The team can be formed in any different combination without exceeding the 100 credit, additionally the same team must have the following combination in order to get qualified.</p>
                            <p>3. Captain and Vice-captain has to be assigned once the team is selected.</p>
                            <p>4. Winners will be declared post completion of the match. Substitutes will not be awarded any points for their contribution.</p>
                            <p>5. If a player gets replaced by substitute, but later comes back on field, he will get points for his contributions. However, if a player, who was not a part of the announced lineups, comes to the field as a substitute, he will not get points for any of his contributions.</p>
                            <p>6. Super over is not included in our point system. Therefore, no points will be awarded for any contribution in super over.</p>
                            <p>7. The points awarded in live are subjected to changes based on the changes in live, for example a wicket given, and the decision has been reversed based on DRS or any other fact.</p>
                            <p>8. Winners will be declared post completion of the match.</p>
                            <p>9. These rules doesn’t apply to any other Fancy or Fancy-1 markets.</p>
                            <p>10. Any participant in Diam-11 can form a team on his own, however the team must have 11 players of which a maximum of 7 players can be selected from the same team of the actual teams. For example, one can select a maximum of 7 players from India in an IND vs AUS match.</p>
                            </>:null}
                            {fgame6? 
                            <>
                            <p>1. If a player gets replaced by substitute, Winning of any mentioned pots will be decided based on the number of participants joined. For example, the winning of a 100 participant pot will be different if the entire 100 participants has joined and if only 60 participants has joined.</p>
                            <p>2. The team can be formed in any different good work combination without exceeding the 100 credit, additionally the same team must have the following combination in order to get qualified.</p>
                            <p>3. Captain and Vice-captain has to be assigned once the team is selected.</p>
                            <p>4. Winners will be declared post completion of the match. Substitutes will not be awarded any points for their contribution.</p>
                            <p>5. If a player gets replaced by substitute, but later comes back on field, he will get points for his contributions. However, if a player, who was not a part of the announced lineups, comes to the field as a substitute, he will not get points for any of his contributions.</p>
                            <p>6. Super collect over is not included in our point system. Therefore, no points will be awarded for any contribution in super over.</p>
                            <p>7. The points awarded in live are subjected to changes based on the changes in live, for example a wicket given, and the decision has been reversed based on DRS or any other fact.</p>
                            <p>8. Winners will be declared post completion of the match.</p>
                            <p>9. These rules doesn’t apply to any other Fancy or Fancy-1 markets.</p>
                            <p>10. Any participant in Diam-11 can form a team on his own, however the team must have 11 players of which a maximum of 7 players can be selected from the same team of the actual teams. For example, one can select a maximum of 7 players from India in an IND vs AUS match.</p>
                            </>:null}
                            </div>
                    </div>
                </div>
                <Footer/>
            </div>
        </>
    )
}
export default FgMain