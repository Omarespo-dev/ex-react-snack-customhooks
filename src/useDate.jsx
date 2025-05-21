// 🏆 Snack 2: useDate() – Ottenere la Data Attuale

import { useEffect, useState } from "react";

// Creare un custom hook che restituisca la data e l'ora correnti, aggiornandosi automaticamente ogni secondo.

// Cosa deve fare?

//     Restituisce un oggetto con data e ora formattata.
//     Si aggiorna automaticamente ogni secondo.
//     Usa useEffect() per gestire l’aggiornamento.

// Esempio di utilizzo:

function useDate(){

    const [data, setData] = useState(new Date());

    useEffect(() => {
        
        
        const set = setInterval(() => {
            setData(new Date())
        }, 1000);


    },[])   

    return data
}


export default useDate