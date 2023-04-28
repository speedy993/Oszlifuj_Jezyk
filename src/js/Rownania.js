
import React, { Component , useContext, useState, useEffect} from "react";
import { AppContext } from "./app";
import RownaniaBtn from "./RownaniaBtn";
import RownaniaLeft from "./RownaniaLeft";
import RownaniaRight from "./RownaniaRight";
import RownaniaResult from "./RownaniaResult";

const Rownania = () =>{

    const { tablica } = useContext(AppContext);

    const [min, setMin] = useState(0);
    const [max, setMax] = useState(4);
    const [tablica2, setTablica2] = useState(tablica.slice(min, max));
    const [firstName, setFirstName] = useState("");
    const [obrazek, setObrazek] = useState(null);
    const [obrazek2, setObrazek2] = useState(null);
    const [obrazek3, setObrazek3] = useState(null);
    const [finderTab, setFinderTab] = useState(tablica.filter(el => el.calyPL != 0));
    const [ind, setInd] = useState(0);
    const [name, setName] = useState("");
    const [name2, setName2] = useState("");
    const [name3, setName3] = useState("");

    const [indf, setIndf] = useState(0);

  useEffect(() => {
    let newTab = tablica.slice(min,max);
    randomTabIndex(newTab);
    
   setTablica2(newTab);
  }, [min]);

  useEffect(() => {
    if(indf > 0 && indf % 2 == 0){
        setMin(prev => prev + 4);
        setMax(prev => prev + 4);
        
    }
  }, [indf]);

  const updateItem = (id, whichvalue, newvalue) => {
    if (id !== -1) {
        let temporaryarray = tablica2.slice();
        temporaryarray[id][whichvalue] = newvalue;
        setTablica2(temporaryarray);
    } else { console.log('no match'); }
}
    
    const foo = (e) =>{
     
        console.count();
        if(firstName.length < 1  && e.currentTarget.getAttribute('name') == tablica[ind].slowko){

            setObrazek(tablica[ind].obrazek);
            setName(tablica[ind].slowko);
            setInd(prev => prev + 1);
            setFirstName(e.currentTarget.getAttribute('find'));
            updateItem(e.currentTarget.id, "color", "green")
        }
        else{
            updateItem(e.currentTarget.id, "color", "red");
            setTimeout(() => {
                 
                setTablica2(tablica2.map(function (item) {
                    item.color = "";
                    return item;
                }))


            }, 1000)

        }
        if (firstName.length > 0){
            if(e.currentTarget.getAttribute('name')== tablica[ind].slowko){
         
                setObrazek2(tablica[ind].obrazek);
                updateItem(e.currentTarget.id, "color", "green")
                setName2(tablica[ind].slowko);
            

                setTimeout(() => {
                   
                    setObrazek3(tablica[ind-1].obrazekCaly);
                    setName3(tablica[ind-1].calyDE);


                }, 500)

                setTimeout(() => {
                    setObrazek(null);
                    setObrazek2(null);
                    setObrazek3(null);
                    setName("");
                    setName2("");
                    setName3("");
                    setIndf(prev => prev + 1);
                    setFirstName("");
                    setInd(prev => prev + 1);

                    setTablica2(tablica2.map(function (item) {
                        item.color = "";
                        return item;
                    }))


                }, 1500)
         
            }
            else{
                updateItem(e.currentTarget.id, "color", "red");

                setTimeout(() => {
                 
                    setTablica2(tablica2.map(function (item) {
                        item.color = "";
                        return item;
                    }))


                }, 1000)
            }
        }
      
    }

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

    return(

        <>
            <div class="game_rownania">

                <div class="pytanie">
                    <p id="pytanie">{finderTab[indf].calyPL}</p>
                </div>

                <div class="windows">
                   
                    <RownaniaLeft obrazek={obrazek} name={name} />

                    <div class="plus">+</div>

                    <RownaniaRight obrazek={obrazek2} name={name2} />
                   
                    <div class="plus equal">=</div>

                    <RownaniaResult obrazek={obrazek3} name={name3} />
                </div>


                <div class="odp_rownania">


                    <div className="buttonsRownania">
                    {console.log("dsaf", tablica2)}
                    <RownaniaBtn color={tablica2[0].color} id={0} find={tablica2[0].find} name={tablica2[0].slowko} obrazek={tablica2[0].obrazek} onClick={foo}  />
                    <RownaniaBtn color={tablica2[1].color} id={1} find={tablica2[1].find} name={tablica2[1].slowko} obrazek={tablica2[1].obrazek} onClick={foo}  />
                    <RownaniaBtn color={tablica2[2].color} id={2} find={tablica2[2].find} name={tablica2[2].slowko} obrazek={tablica2[2].obrazek} onClick={foo}  />
                    <RownaniaBtn color={tablica2[3].color} id={3} find={tablica2[3].find} name={tablica2[3].slowko} obrazek={tablica2[3].obrazek} onClick={foo}  />
                    </div>
                    


                    <div class="arrow_next" id="arrow_next">
                        <i class="fa-solid fa-arrow-right"></i>
                    </div>
                </div>


            </div>
       </>

    )
}

export default Rownania;

