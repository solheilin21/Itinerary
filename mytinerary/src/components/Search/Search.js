import React from "react";
import vacaciones from '../img/vacaciones.png'
import {Link as Linkrouter} from 'react-router-dom'
function Search (){
return(
    <>
     <div className="row row-cols-2 row-cols-md-1 g-2">
     <div className='banner'>
     <img src={vacaciones} className="d-block " width={550} height={480}  alt="..."  />
     <div className='container-search'>
    <input type="text" className="form-control" id="exampleInputText1" aria-describedby="textlHelp" placeholder="¿A donde vamos?" /> 
     <Linkrouter to="inicio" className="btn btn-primary">Search</Linkrouter>
     </div>
     </div>
     </div>
    </>
);
}
export  default Search