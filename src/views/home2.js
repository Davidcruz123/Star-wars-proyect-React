import React, { useEffect } from 'react';
import { Datoscontext } from '../store/flux'

import { Tarjeta2 } from '../component/card2'


export const Home2 = () => {
    const { store, actions } = React.useContext(Datoscontext);

    useEffect(
        () => {

            actions.getplanets()


        }, [])

 
     if (store.planetaloading == false ) {  //store.peopleloading==false&&
             console.log("planetas",store.planetaloading)
            //  console.log("people",store.peopleloading)
            console.log(store,"store-planeta")

    return (

        <>

        <h1>Planetas</h1>
        {store.planetas.map(planeta=><Tarjeta2 
        name={planeta.name}
        population={planeta.population}
        terrain={planeta.terrain}

        />        )}


        </>

            )}
    
    else {
        console.log("fail", store.peopleloading, store.planetaloading)
        console.log(store.peopleloading == false && store.planetaloading == false)
        console.log(store)
        // actions.getpeople()
        // actions.getplanets()

        return <h1>Loading</h1>
    }

}
