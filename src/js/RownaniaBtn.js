import React , {useState} from "react";




const RownaniaBtn = ({id, color, find, name, obrazek, onClick}) =>{


   


    return(
       <>
            <div style={{backgroundColor: color}} onClick={onClick} name={name} find={find} class="btn btns_rownania" id={id}>
                <p>{name}</p>
                <img src={obrazek} />
            </div>
       </>

    )
}
export default RownaniaBtn;

