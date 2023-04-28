import React, { Component } from "react";
import Title from "./Title";
import { NavLink } from "react-router-dom";

const Levels = () => {

    return (
        <>
            <Title title={"WYBIERZ POZIOM:"}></Title>
            <div class="btns_level">
                <NavLink to={"/level"}>  <div class="btn_level">1</div> </NavLink>

                {/* <div class="btn_level">2</div>
                <div class="btn_level">3</div>
                <div class="btn_level">4</div>
                <div class="btn_level">5</div>
                <div class="btn_level">6</div>
                <div class="btn_level">7</div>
                <div class="btn_level">8</div>
                <div class="btn_level">9</div>
                <div class="btn_level">10</div> */}
            </div>
        </>

    )
}

export default Levels;
