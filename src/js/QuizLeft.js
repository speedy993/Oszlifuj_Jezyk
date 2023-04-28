

import React, { Component } from "react";


const QuizLeft = ({obrazek}) =>{

    return(

       <>
    <img style={obrazek == null ? {display: "none"} : {display: "block"}} src={obrazek} width="auto" height="80px"/>
              
       </>

    )
}

export default QuizLeft;
