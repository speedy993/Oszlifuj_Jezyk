import React from "react";

const Btn = ({name, onClick, id, find, obrazek, color, anim}) =>{

    return(
       <>
              <div name={name} className={anim} style={{marginTop: 10, backgroundColor: color}} id={id} find={find} onClick={onClick}>
                    <p>{name}</p>
                    <img src={obrazek}/>
               </div>
       </>

    )
}
export default Btn;

