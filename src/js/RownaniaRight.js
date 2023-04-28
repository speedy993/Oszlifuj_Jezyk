import React , {useState} from "react";




const RownaniaRight = ({name, obrazek}) =>{


   


    return(
        <>
            <div class="window right_window">
                <p id="right_title">{name}</p>
                <img style={obrazek == null ? {display: "none"} : {display: "block"}} src={obrazek} width="auto" height="80px" />
                <div id="arrow2" class="arrow_2 fa-solid fa-arrow-up "></div>
            </div>
        </>

    )
}
export default RownaniaRight;

