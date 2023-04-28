
import React from "react";


const Finder = ({ backgroundColor, name, slowko, slowko2, slowko3}) =>{

    return(
       <>
            <div className="task">
                <div style={{ backgroundColor: backgroundColor }} className="word word1 abstract">
                    {name}
                </div>
                <div className="details">
                    <div className="details_inner">
                        <p>&nbsp;&nbsp;&nbsp;<span>{slowko}</span><br />+ <span>{slowko2}</span><br />= <span>{slowko3}</span></p>
                    </div>
                </div>
            </div>
       </>

    )
}

export default Finder;
