import React from 'react'
import {Link as Linkrouter} from 'react-router-dom'
import asistenciasocial from '../img/asistencia-social.gif'
import mundial from '../img/mundial.gif'

function navbar (){
    return( 
     <> 
 
   <nav className ="navbar navbar-expand-lg navbar-light bg-white"> 
   <div className="container">
   
     <div className="Mytitle">
     <img src={mundial} alt="..." width="50" height="50"/>
    
    
      <strong><h3>Mytinerary</h3></strong> 
     </div>

   <div className ="container-fluid">
     
     <button className ="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
       <span className ="navbar-toggler-icon"></span>
     </button>

    
  </div>
     
     <div className ="collapse navbar-collapse" id="navbarNavAltMarkup">
       <div className ="navbar-nav">
         <Linkrouter className ="nav-link active" to='/inicio' > <strong className="Mytitle">Home</strong> </Linkrouter>
       
          <Linkrouter className ="nav-link active" to='/ciudades'><strong className="Mytitle">Cities</strong></Linkrouter> 
         
       </div>
      
     </div> 
     <Linkrouter  to='/signin' role="button" id="dropdownMenuLink"  data-bs-toggle="dropdownMenuLink" aria-expanded="false" >
  <img src={asistenciasocial} alt="..." width="60" height="60" />
  </Linkrouter>
   </div>
   </nav>

  
    
  
 
 
</> 
);
}
   
    
export default navbar;


