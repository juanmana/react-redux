import axios from 'axios'



// Constantes

const dataInicial = {

    array:[],
    offset: 0
}


//types


const GET_POKE_SUCCESS = 'GET_POKE_SUCCESS'
const SUGIENTE_POKE = 'SUGIENTE_POKE'

// Reducer

// reducer
export default function pokesReducer(state = dataInicial, action){
    switch(action.type){
        case GET_POKE_SUCCESS:
            return {...state, array: action.payload}
        
        case SUGIENTE_POKE:
            return {...state,array:action.payload.array, offset:action.payload.offset}
        
            default:
            return state
    }
}





//acciones


// actions
export const obtenerPokemonsAction = () => async (dispatch, getState) => {
    
    
    const offset = getState().pokemones.offset
    
    try {


        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`)
        dispatch({
            type: GET_POKE_SUCCESS,
            payload: res.data.results
        })
    } catch (error) {
        console.log(error)
    }
}


export const siguientePokemonAccion = () => async(dispatch, getState) =>{


    //Primera Alternativa
    const offset = getState().pokemones.offset
    const siguiente = offset + 20
try {

    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${siguiente}&limit=20`)

    dispatch({
        type: SUGIENTE_POKE,
        payload: {
        
            array: res.data.results,
            offset: siguiente
        
        }
    })


    
} catch (error) {
    

    console.log(error)
}




}