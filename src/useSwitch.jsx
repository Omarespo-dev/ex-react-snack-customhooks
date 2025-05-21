
// 🏆 Snack 1: useSwitch() – Toggle Booleano

import { useState } from "react";

// Creare un custom hook per alternare un valore booleano tra true e false.

// Cosa deve fare?

//     Inizialmente false.
//     Ritorna il valore attuale e una funzione toggle() per cambiarlo.
//     Quando toggle() viene chiamato, il valore passa da true → false e viceversa.

// Esempio di utilizzo:

function useSwitch(){

    const [isOn,setIsOn] = useState(false)

    function toggle(){
        return setIsOn(curr => !curr)
    }

    return [isOn,toggle]
}


export default useSwitch