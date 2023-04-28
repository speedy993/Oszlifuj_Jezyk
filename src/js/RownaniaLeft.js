import React , {useState} from "react";




const RownaniaLeft = ({name, obrazek}) =>{


   


    return(
        <>
            <div class="window left_window">
                <p id="left_title">{name}</p>
                <img style={obrazek == null ? {display: "none"} : {display: "block"}} src={obrazek} width="auto" height="80px" />
                <div id="arrow1" class="arrow arrow_1 fa-solid fa-arrow-up "></div>
            </div>
        </>

    )
}
export default RownaniaLeft;

