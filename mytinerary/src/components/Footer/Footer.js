import React from "react"
import {Link as Linkrouter} from 'react-router-dom'
import facebook from '../img/facebook.png'
import instagram from '../img/instagram.png'
 import twitter from '../img/twitter.png'
 import mundial from '../img/mundial.gif'


function Footer(){
return( 
<>

<footer className="footer">
        <div className="footer_top">
            <div className="container">
                <div className="row">
                    <div className="col-xl-3 col-md-3 col-lg-4">
                        <div className="footer_widget">
                            <div className="footer_logo">
                                <Linkrouter className="footer_logo_index" to="/inicio">
                                    <img src={mundial} alt="..."  width="50" height="50" />
                                    <div className="Mytitle">
                                  
                                       <strong><h3>Mytinerary</h3></strong> 
                                             </div>
                                </Linkrouter>
                               
                            </div>

                           
                        </div>
                    </div>
                    
                     <div className="col-xl-3 col-md-6 col-lg-3">
                        <div className="footer_widget">
                            <ul className="links">
                            <Linkrouter className ="nav-link active" to='/inicio' > <strong>Home</strong> </Linkrouter>
                            <Linkrouter className ="nav-link active" to='/ciudades'><strong>Cities</strong></Linkrouter> 
                            </ul>
                        </div>
                    </div> 
                    <div className="col-xl-3 col-md-6 col-lg-3">
                        <div className="footer_widget">
                            <ul className="links">
                            <div className="social_links">
                                <ul className="d-flex mx-3">
                                    <li className="mx-4">
                                    <img src={twitter} alt="..."  width="30" height="30" />
                                   
                                        <Linkrouter to="https://es-la.facebook.com/" >
                                            <i className="fab fa-facebook"></i>
                                          
                                        </Linkrouter>
                                    </li>

                                    <li className="mx-4">
                                    <img src={instagram} alt="..."  width="30" height="30" />
                                   
                                        <Linkrouter to="https://www.instagram.com/" >
                                            <i className="fab fa-instagram"></i>
                                          
                                        </Linkrouter>
                                    </li>
                                    <li className="mx-4">
                                    <img src={facebook} alt="..."  width="30" height="30" />
                                   
                                        <Linkrouter to="https://api.whatsapp.com/send?phone=+54-9111234567" >
                                            <i className="fab fa-whatsapp"></i>
                                         
                                        </Linkrouter>
                                    </li>
                                  
                          
                          
                                </ul>
                            </div>
                       

                           
                            </ul> 
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    </footer>
</>


);
}
export default Footer