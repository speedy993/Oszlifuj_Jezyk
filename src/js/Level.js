import React, { useState, useContext } from "react";
import Btn from "./Btn";
import Finder from "./Finder";
import { AppContext } from "./app";

const Level = () => {

    const randomTabIndex = (array) => {
        let currentIndex = array.length, randomIndex;
        while (currentIndex != 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
        }
        return array;
    }

    const { tablica } = useContext(AppContext);

    const [renderTab, setRenderTab] = useState(randomTabIndex(tablica));
    const [firstID, setFirstID] = useState(0);
    const [firstName, setFirstName] = useState(0);
    

    const updateItem = (id, whichvalue, newvalue) => {
        if (id !== -1) {
            let temporaryarray = renderTab.slice();
            temporaryarray[id][whichvalue] = newvalue;
            setRenderTab(temporaryarray);
        } else { console.log('no match'); }
    }

    const handleClick = (e) => {

        const newState = renderTab.map(obj => {
            if (obj.id === e.currentTarget.id) {
                return { ...obj, color: 'green' };
            }
            return obj;
        });
        setRenderTab(newState);


        if (firstName == 0) setFirstName(e.currentTarget.getAttribute('find'));
        if (firstID != 0) {
            let tab1 = renderTab.map(e => e.slowko).indexOf(e.currentTarget.getAttribute('name'));
         
            if ((firstName) == e.currentTarget.getAttribute('name')) {

                let tab2 = renderTab.map(e => e.slowko).indexOf(firstID);
                updateItem(tab1, 'color', "green");
                updateItem(tab1, 'anim', true);
                updateItem(tab2, 'anim', true);
                updateItem(tab2, "colorFinder", "green");
            }
            else {
                updateItem(tab1, 'color', "red");
                setTimeout(() => {
                    setRenderTab(renderTab.map(function (item) {
                        item.color = "";
                        return item;
                    }))
                }, 1000)
            }
            setFirstID(0);
            setFirstName(0);
        }
        else {
            setFirstID(e.currentTarget.getAttribute('name'));
        }
    }

    return (
        <>
            <div className="finder">
                Szukane słowa:

                        {renderTab.filter(el => el.calyPL != 0).map((el, ind) =>
                    <Finder key={ind} backgroundColor={el.colorFinder} name={el.calyPL}
                        slowko={el.slowko} slowko2={el.find} slowko3={el.calyDE} />)}
            </div>
            <div className="odp">
                <div className="buttons" >
                    {renderTab.map((el, ind) => <Btn key={ind} anim={renderTab[ind].anim !=0 ? "btn anim_out" : "btn"} color={renderTab[ind].color}
                        id={renderTab[ind].id} find={el.find} onClick={handleClick} name={el.slowko} obrazek={renderTab[ind].obrazek}></Btn>)}
   
                </div>
            </div>
        </>
    )
}
export default Level;