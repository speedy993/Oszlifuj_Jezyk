import Levels from "./Levels";
import Level from "./Level";
import ChooseGame from "./ChooseGame";
import React from "react";
import {createContext, useState, useEffect} from "react";
import { createRoot } from "react-dom/client";
import {HashRouter, Route, Routes} from "react-router-dom";
import ChooseLanguage from "./ChooseLanguage";
import Rownania from "./Rownania";
import Quiz from "./Quiz";
import "./main.scss";

export const AppContext = createContext(null);

const App = () => {

    // const [tabES, setTabES] = useState([]);
    const [tablica, setTablica] = useState([]);
   

    // useEffect(() => {
    //     fetch("../rest-api/server/api/de.php")
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //         const de = data.map(({ id, anim, colorFinder, find, color, slowko, slowkoPL, obrazek, obrazekCaly, calyPL, calyDE }) => ({ id, anim, colorFinder, find, color, slowko, slowkoPL, obrazek, obrazekCaly, calyPL, calyDE }));
    //         setTablica(de);
    //     })


    //     fetch("../rest-api/server/api/es.php")
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log(data);
    //             const es = data.map(({ id, anim, colorFinder, find, color, slowko, slowkoPL, obrazek, obrazekCaly, calyPL, calyDE }) => ({ id, anim, colorFinder, find, color, slowko, slowkoPL, obrazek, obrazekCaly, calyPL, calyDE }));
    //             setTabES(es);
    //         })

    // }, []);


 
    return(
        <AppContext.Provider value={{tablica, setTablica}}>
            <HashRouter>
                <Routes>
                    <Route path={"/"} element={<ChooseLanguage />} />
                    <Route path={"chooseGame/:id"} element={<ChooseGame />} /> 
                    <Route path={"levels"} element={<Levels />} />
                    <Route path={"level"} element={<Level />} />
                    <Route path={"rownania"} element={<Rownania />} />
                    <Route path={"quiz"} element={<Quiz />} />
                </Routes>
            </HashRouter>
        </AppContext.Provider>
    )
}

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);