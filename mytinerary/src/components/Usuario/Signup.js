import React from 'react'


import avion from '../img/avion.gif'
import axios from 'axios';



function Signup() {

    async function nuevoUsuario(event) {
        event.preventDefault()
        const nuevoUsuario = {
            name: event.target[0].value,
            lastName: event.target[1].value,
            email: event.target[2].value,
            password: event.target[3].value
        }
        console.log(nuevoUsuario)
        console.log(event)

        await axios.post("http://localhost:4000/api/signup", { nuevoUsuario })
            .then(response =>  //alert(response.data.response))
                displayMessages(response.data)

            )

            function displayMessages(data){
                if (data.success==="falseVAL") {
                    // console.log (data.response.error.details)
                    data.response.error.details.map(error=>(error.message))
                }
             else if(data.success==="false"){
                 console.log(data.response)
             
              } else if(data.success==="falseUE"){
                  console.log(data.response)
              }else if (data.success==="trueUE"){
                  console.log(data.response)
              }
          }
    }

    return (
        <>

            <div className="id_contacto">
                <form className='form' onSubmit={nuevoUsuario}>
                    <img src={avion} className="d-block w-50" height={400} alt="..." />
                    <div className="caja_contacto">
                        <h3 className="menu_contacto">Sign up</h3>
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

                       

                        <div className="grupo_contacto">
                            <label for="">Password:</label>
                            <input type="password" className="form-control" id="exampleInputText1" aria-describedby="textlHelp" /><span
                                className="barra_contacto"></span>

                            <button type='submit' class="btn btn-primary " >Registrarse
                         
                            </button>
                        </div>
                        </div>


                    



                     

                    </div>

                </form>
            </div>
        </>
    );
}

export default Signup
