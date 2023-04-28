import React , {useState} from "react";




const RownaniaResult = ({name, obrazek}) =>{


   


    return(
        <>
            <div class="result window">
                <p class="result_title " id="result_title">{name}</p>
                <img style={obrazek == null ? {display: "none"} : {display: "block"}}  src={obrazek} width="auto" height="80px" />
            </div>
        </>

    )
}
export default RownaniaResult;

