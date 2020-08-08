import React from 'react'

// hooks react redux
import {useDispatch, useSelector} from 'react-redux'

// importamos la acción
import {obtenerPokemonsAction,siguientePokemonAccion} from '../redux/pokeDucks'

const Pokemones = () => {

    const dispatch = useDispatch()

    const pokemones = useSelector(store => store.pokemones.array)


 

    return (
        <div>
            <h1>Pokemones!</h1>
            <button onClick={() => dispatch(obtenerPokemonsAction())}>Obtener</button>
            <button onClick={() => dispatch(siguientePokemonAccion())}>siguiente</button>


            <ul>
                {
                    pokemones.map(item => (
                        <li key={item.name}>{item.name}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Pokemones