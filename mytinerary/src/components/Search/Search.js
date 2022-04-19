import React from "react";
import vacaciones from '../img/vacaciones.png'
import { actionType } from "../../reducer";
import { useStateValue } from "../../StateProvider";



    function Search (){
    const [{cities},dispatch]=useStateValue()
    const inputSearch=(event)=>{
        dispatch({
            type:actionType.FILTER,
            value:event.target.value
        })
    }
return(
    <>
     <div className="row row-cols-2 row-cols-md-1 g-2">
     <div className='banner'>
     <img src={vacaciones} className="d-block " width={550} height={480}  alt="..."  />
     <div className='container-search'>
    <input type="text" className="form-control" onChange={inputSearch} id="exampleInputText1" aria-describedby="textlHelp" placeholder="¿A donde vamos?" /> 
     </div>
     </div>
     </div>
    </>
);

}


export  default Search;