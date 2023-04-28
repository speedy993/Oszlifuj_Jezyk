import React from "react";
import Title from "./Title";
import {NavLink, useParams} from "react-router-dom";
import Btns_language from "./Btns_language";
import Btn_language from './Btn_language';

const ChooseLanguage = () =>{

  

    return(
        <>
          <Title title={"OSZLIFUJ JĘZYK"}/>
          <Btns_language>
              <NavLink to={"/chooseGame/de"}><Btn_language language={"Niemiecki"}/></NavLink>
              <NavLink to={"/chooseGame/es"}><Btn_language language={"Hiszpański"}/></NavLink>
          </Btns_language>
          
        </>
    )
}
export default ChooseLanguage;