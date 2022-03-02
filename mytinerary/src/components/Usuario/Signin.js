import React from 'react'
import { Link as Linkrouter } from 'react-router-dom'
import google from '../img/google.png'
import face from '../img/face.png'
import avion from '../img/avion.gif'



function Signin() { //ingresar

    return (
        <>

            <div className="id_contacto">
            


                <div className="form">
               
                <img src={avion} className="d-block w-50" height={400}   alt="..."/> 
                    <div className="caja_contacto">
                   
                        <h3 className="menu_contacto">Sign in</h3>

                        <div className="grupo_contacto">
                            <label for="">Name:</label>
                            <input type="text" className="form-control" id="exampleInputText1" aria-describedby="textlHelp" />
                            <span className="barra_contacto"></span>


                        </div>

                        <div className="grupo_contacto">
                            <label for="">Last name:</label>
                            <input type="text" className="form-control" id="exampleInputText1" aria-describedby="textlHelp" />
                            <span className="barra_contacto"></span>

                        </div>

                        <div className="grupo_contacto">
                            <label for="">ID:</label>
                            <input type="text" className="form-control" id="exampleInputText1" aria-describedby="textlHelp" />  <span
                                className="barra_contacto"></span>

                        </div>

                        <div className="grupo_contacto">
                            <label for="">Email:</label>
                            <input type="text" className="form-control" id="exampleInputText1" aria-describedby="textlHelp" />  <span
                                className="barra_contacto"></span>
                                <br></br>
                            <Linkrouter to='/ciudades' class="btn btn-primary " tabindex="-1" role="button" aria-disabled="true">Sign in</Linkrouter>
                        </div>
                        <br></br>


                        <label for="">¿Do you have an account?</label> <br></br>
                        <label for="">Login with</label>
                      

                       
                        <div className="inicio_sesion">
                       
                      
                            <Linkrouter to='/signin' role="button" id="dropdownMenuLink" data-bs-toggle="dropdownMenuLink" aria-expanded="false" >
                                <img src={google} alt="..." width="40" height="40" />
                            </Linkrouter>
                            <Linkrouter to='/signin' role="button" id="dropdownMenuLink" data-bs-toggle="dropdownMenuLink" aria-expanded="false" >
                                <img src={face} alt="..." width="45" height="40" />
                            </Linkrouter>


                        </div>

                    </div>

                </div>
            </div>








        </>
    );
}

export default Signin
