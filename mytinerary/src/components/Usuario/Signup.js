import React from 'react'
import { Link as Linkrouter } from 'react-router-dom'
import axios from 'axios';
import google from '../img/google.png'
import face from '../img/face.png'
import avion from '../img/avion.gif'


function Signup() {

    async function nuevoUsuario(event) {
        event.preventDefault()
        const nuevoUsuario = {
            name: event.target[0].value,
            lastname: event.target[1].value,
            email: event.target[2].value,
            password: event.target[3].value
        }

       

        console.log(event)

        await axios.post("http://localhost:4000/api/signup",{nuevoUsuario})
        .then(response=>alert(response.data.response))
    }

    return (
        <>

            <div className="id_contacto">
                <form className='form' onSubmit={nuevoUsuario}>
                    <img src={avion} className="d-block w-50" height={400} alt="..." />
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
                            <label for="">Email Address:</label>
                            <input type="email" className="form-control" id="exampleInputText1" aria-describedby="textlHelp" /><span
                                className="barra_contacto"></span>

                        </div>

                        <div className="grupo_contacto">
                            <label for="">Password:</label>
                            <input type="password" className="form-control" id="exampleInputText1" aria-describedby="textlHelp" /><span
                                className="barra_contacto"></span>

                            <button type='submit' class="btn btn-primary ">
                                <Linkrouter to='/signin' tabindex="-1" role="button" aria-disabled="true">Sign in</Linkrouter>
                            </button>
                        </div>



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

                </form>
            </div>
        </>
    );
}

export default Signup