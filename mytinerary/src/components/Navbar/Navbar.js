import React from 'react'
import { Link as Linkrouter } from 'react-router-dom'
import asistenciasocial from '../img/asistencia-social.gif'
import mundial from '../img/mundial.gif'
import { useStateValue } from "../../StateProvider";
import axios from 'axios'



function Navbar() {

  const [{user},dispatch]=useStateValue()

  async function cerrarCesion() { //{(user.datosUser.email)
    const email=user.response.datosUser.email
    await axios.post("http://localhost:4000/api/signOut", {email})
    .then(response => 
      console.log(response)
    //alert(response.data.response))


    

)
  
  
  }
  return (
    <>

      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <div className="container">

          <div className="Mytitle">
            <img src={mundial} alt="..." width="50" height="50" />


            <strong><h3>Mytinerary</h3></strong>
          </div>

          <div className="container-fluid">

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>

          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Linkrouter className="nav-link active" to='/inicio' > <strong className="Mytitle">Home</strong> </Linkrouter>

              <Linkrouter className="nav-link active" to='/ciudades'><strong className="Mytitle">Cities</strong></Linkrouter>

            </div>

          </div>
                           <div className="dropdown">
                            <button className="btn btn bg-transparent" aria-haspopup="true" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src={asistenciasocial} alt="asistenciasocial" width="40" height="40" /></button>

                            <div className="dropdown-menu dropdown-menu-right"> 
                            { !user?
                            <Linkrouter  className="dropdown-item" to="/signin">SIGN IN</Linkrouter>
                          : <div className="dropdown-item" onClick={cerrarCesion}>SIGN OUT</div>
                          }
                       
                           <Linkrouter className="dropdown-item" to="/signup">SIGN UP</Linkrouter>
                           </div>  
                           
                         
                    
                         
        </div> 
        

      
         </div> 
                           
      </nav>
    </>
  );
}


export default Navbar;


