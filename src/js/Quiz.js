
import React, { Component , useContext, useState, useEffect} from "react";
import { AppContext } from "./app";
import QuizBtn from "./QuizBtn";
import QuizLeft from "./QuizLeft";
import QuizQuestion from "./QuizQuestion";


const Quiz = () =>{


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

 
    const { tablica, setTablica} = useContext(AppContext);
    const [min, setMin] = useState(0);
    const [max, setMax] = useState(4);
    const [randomTab, setRandomTab] = useState(tablica.slice(min, max));

    const [ind, setInd] = useState(0);
    const [indf, setIndf] = useState(0);


    useEffect(() => {

    let newTab = tablica.slice(min,max);
       randomTabIndex(newTab);
        
       setRandomTab(newTab);
      }, [min]);

      useEffect(() => {
        if(indf > 0 && indf % 2 == 0){
            setMin(prev => prev + 4);
            setMax(prev => prev + 4);
        }
      }, [ind]);


  const updateItem = (id, whichvalue, newvalue) => {
    if (id !== -1) {
        let temporaryarray = tablica.slice();
        temporaryarray[id][whichvalue] = newvalue;
        setTablica(temporaryarray);
    } else { console.log('no match'); }
}
    
    const foo = (e) =>{

        let tab1 = tablica.map(e => e.slowko).indexOf(e.currentTarget.getAttribute('name'));

        const clickedName = e.currentTarget.name;
        if(clickedName == tablica[ind].slowko){
            setTablica(tablica.map(function (item) {
                item.color = "";
                return item;
            }))
           
            setInd(prev => prev + 2);
            setIndf(prev => prev + 1);
        }
        else{
            updateItem(tab1, "color", "red")
        }


     
      
    }

  

    return(

        <>
           <div id="sekcjaGry" className="sekcjaGry">
            <div className="pytanie_quiz">
            </div>
            <div id="div_niemieckaSkladanka" className="niemieckaSkladanka">
                <QuizLeft obrazek={tablica[ind].obrazek}/>
                <p id="plus" className="hidden">+</p>
                <img id="obrazekPrawy" className="hidden" src="" width="auto" height="80px"/>
            </div>
            <div className="odpowiedzi">

                <QuizBtn color={tablica[ind].color} id={ind} onClick={foo} find={randomTab[0].find} name={randomTab[0].slowko}></QuizBtn>
                <QuizBtn color={tablica[ind+1].color} id={ind+1} onClick={foo} find={randomTab[1].find} name={randomTab[1].slowko}></QuizBtn>
                <QuizBtn color={tablica[ind+2].color} id={ind+2} onClick={foo} find={randomTab[2].find} name={randomTab[2].slowko}></QuizBtn>
                <QuizBtn color={tablica[ind+3].color} id={ind+3} onClick={foo} find={randomTab[3].find} name={randomTab[3].slowko}></QuizBtn>
                
            </div>
        </div>


       </>

    )
}

export default Quiz;











// -- phpMyAdmin SQL Dump
// -- version 4.4.14
// -- http://www.phpmyadmin.net
// --
// -- Host: 127.0.0.1
// -- Czas generowania: 30 Lis 2017, 13:24
// -- Wersja serwera: 5.6.26
// -- Wersja PHP: 5.6.12

// SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
// SET time_zone = "+00:00";


// /*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
// /*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
// /*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
// /*!40101 SET NAMES utf8mb4 */;

// --
// -- Baza danych: `newsletter`
// --

// -- --------------------------------------------------------

// --
// -- Struktura tabeli dla tabeli `admins`
// --


// -- --------------------------------------------------------

// --
// -- Struktura tabeli dla tabeli `users`
// --

// CREATE TABLE IF NOT EXISTS `users4` (
//   `id` varchar(255) NOT NULL,
//   `anim` varchar(255) NOT NULL
// ) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4;

// --
// -- Zrzut danych tabeli `users`
// --

// -- INSERT INTO `users3` (`id`, `anim`, `colorFinder`, `find`,`color`, `slowko`, `slowkoPL`, `obrazek`, `obrazekCaly`, `calyPL`, `calyDE`) VALUES
// -- ("1", "false", "", "Die Schuh", "", "Das Hand", "Ręka", "../images/reka2.png", "../images/handshue.png", "Rękawiczki", "Die Handschuh"),
// -- ("2", "false", "",  "0", "", "Die Schuh", "Buty","../images/buty2.png", "0", "0", "0");

// INSERT INTO `users4` (`id`, `anim`) VALUES
// ("1", "false");

// --
// -- Indeksy dla zrzutów tabel
// --


