import React, {useEffect, useContext} from "react";
import { NavLink, useParams } from "react-router-dom";
import { AppContext } from "./app";
import z1 from "../images/pary2.png";
import z2 from "../images/mat.png";
import z3 from "../images/rebus.png";

const ChooseGame = () => {
    const { id } = useParams();
    const { tablica, setTablica} = useContext(AppContext);

    const fetchDE = () =>{
        fetch("../rest-api/server/api/de.php")
        .then(response => response.json())
        .then(data => {
            console.log("dat", data);
            const de = data.map(({ id, anim, colorFinder, find, color, slowko, slowkoPL, obrazek, obrazekCaly, calyPL, calyDE }) => ({ id, anim, colorFinder, find, color, slowko, slowkoPL, obrazek, obrazekCaly, calyPL, calyDE }));
            setTablica(de);
        })

    }

    const fetchES = () =>{
        fetch("../rest-api/server/api/es.php")
        .then(response => response.json())
        .then(data => {
            console.log("dates",data);
            const es = data.map(({ id, anim, colorFinder, find, color, slowko, slowkoPL, obrazek, obrazekCaly, calyPL, calyDE }) => ({ id, anim, colorFinder, find, color, slowko, slowkoPL, obrazek, obrazekCaly, calyPL, calyDE }));
            setTablica(es);
        })


    }

    useEffect(() => {

    id == "de" ? fetchDE() : fetchES(); 

    }, []);


    return (
        <>
            <div className="btns_language btns_2">
                <NavLink to={"/levels"}><div className="btn_language pary"><span>Łączenie<br />par</span><img src={z1} /></div></NavLink>
                <NavLink to={"/rownania"}><div className="btn_language rownania"><span>Równania<br />językowe</span><img src={z2} /></div></NavLink>
                <NavLink to={"/quiz"}>
                <div className="btn_language pary quiz"><span>Quiz<br />obrazkowy</span><img src={z3} /></div>
                </NavLink>
                {}
            </div>
        </>
    )
}
export default ChooseGame;