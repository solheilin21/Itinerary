export const initialState = {
    cities: []

}
export const actionType = {
    CITIESDB : "CITIESDB"
}
const reducer=(state,action)=>{
    console.log(action)
    switch(action.type){
        case "CITIESDB": //evalua el valor de action, para retornar estados
        return{
            ...state, //... paso contenido del array, contenido del estado * respeta la posicion
            cities:action.cities
        }
        default: return state
    }
}
export default reducer;
