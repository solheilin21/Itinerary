export const initialState = {
    cities: [],
    filterCities:[],
    user:null


}
export const actionType = {
    CITIESDB : "CITIESDB",
    FILTER:"FILTER",
    USER:"USER"
}
const reducer=(state,action)=>{
    console.log(action)
    switch(action.type){

        case "CITIESDB": //evalua el valor de action, para retornar estados
        return{
            ...state, //... paso contenido del array, contenido del estado * respeta la posicion
            cities:action.cities,
            filterCities:action.cities
        }

        case "USER": //evalua el valor de action, para retornar estados
        return{
            ...state, //... paso contenido del array, contenido del estado * respeta la posicion
            user:action.user,
            
        }


        case "FILTER":
        const filterCities=state.cities.filter(city=>city.name.toLowerCase().startsWith(action.value.toLowerCase().trim()))//evalua el valor de action, para retornar estados
        return{
            ...state,
            filterCities:filterCities
        }
        default: return state
    }
}
export default reducer;
