import React from 'react'

import bus from '../img/bus.png'
import axios from 'axios'
import { actionType } from "../../reducer";
import { useStateValue } from "../../StateProvider";



function Signin() {
 
    const [{user},dispatch]=useStateValue()
    async function loginUser(event) {
        event.preventDefault()
        const userData = {
            email: event.target[0].value,
            password: event.target[1].value
        }


        await axios.post("http://localhost:4000/api/signin", { userData })
            .then(response =>  //alert(response.data.response))
                displayMessages(response.data),

                

            )

        function displayMessages(data) {
            if (!data.success){
            console.log(alert(data.error))
            }
            else{console.log(data.response)}

            dispatch({
                type:actionType.USER,
                user: data.response
            })


        }

        console.log(user)
    }


    return (
        <>
            <div className="id_contacto">
                <form className='form' onSubmit={loginUser} >
                    <img src={bus} className="d-block w-50" height={400} alt="..." />
                    <div className="caja_contacto">
                        <h3 className="menu_contacto">Sign ip</h3>


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
                                Sign in
                            </button>
                        </div>



                        <label for="">¿Do you have an account?</label> <br></br>
                        <label for="">Login with</label>





                    </div>

                </form>
            </div>

        </>
    );
}

export default Signin