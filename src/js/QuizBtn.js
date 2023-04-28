import React, { Component } from "react";


const QuizBtn = ({name, onClick, color, id}) =>{

    return(

       <>
                  <button id={id} style={{backgroundColor: color}} name={name} onClick={onClick} className="btn btn_quiz" id="111">{name}</button>
       </>

    )
}

export default QuizBtn;

