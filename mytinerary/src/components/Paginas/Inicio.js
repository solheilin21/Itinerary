import React from 'react'
import {Link as Linkrouter} from 'react-router-dom'
import SantiagoCuadrada from '../img/SantiagoCuadrada.jpg'
import ColoradoCuadrada from '../img/ColoradoCuadrada.jpg'
import MontrealCuadrada from '../img/MontrealCuadrada.jpg'
import BaCuadrada2 from '../img/BaCuadrada2.jpg'
import takeabreak from '../img/takeabreak.jpg'
import pasaporte from '../img/pasaporte.png'
// import fondo from '../img/fondo.webp'
 import covid from '../img/covid.png'
  import apoyotecnico from '../img/apoyotecnico.png'
 import mochila from '../img/mochila.png'
 

function Inicio(){
    return(
        <>
        <div className="banner">
       <img src={takeabreak} className="d-block w-100" height={400} alt="..."/>
     
       </div>

       
       
       <div className="carrusel"> 
       
      
       <div className="row row-cols-3 row-cols-md-2 g-4">
      
        
       <img src={pasaporte} className="d-block w-50" height={380}   alt="..."/> 
       <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
    
  <div className="carousel-indicators">
 
  
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
   
    
  </div>
  

 
  <div className="carousel-inner">

      
    <div className="carousel-item active">
      <img src={SantiagoCuadrada} className="d-block w-100" height={500} alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <strong><h5>Santiago de Chile</h5></strong>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src ={ColoradoCuadrada} className="d-block w-100"  height={500} alt="..."/>
      <div className="carousel-caption d-none d-md-block">
      <strong><h5>Colorado , USA</h5></strong>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={MontrealCuadrada}className="d-block w-100"  height={500} alt="..."/>
      <div className="carousel-caption d-none d-md-block">
      <strong><h5>Montreal , Canada</h5></strong>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>

    <div className="carousel-item">
      <img src={BaCuadrada2}className="d-block w-100"   height={500}alt="..."/>
      <div className="carousel-caption d-none d-md-block">
      <strong><h5>Buenos Aires,Argentina</h5></strong>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
    
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
    </button>
  </div>
</div>
</div>

<div className="card-container-padre">
<div className="row row-cols-1 row-cols-md-4 g-4">


<div className="card-container">
<div className='col'>

  <img src= {covid} className="card-img-top" alt="..."/>
  <div className="Mytitle">
  <strong><h5>Covid-19</h5></strong>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <Linkrouter to="inicio" className="btn btn-primary">Informacion</Linkrouter>
  </div>
  </div>
</div>
<div className="card-container">
<div className='col'>
  <img src= {apoyotecnico}className="card-img-top"alt="..."/>
  <div className="Mytitle">
  <strong><h5>Recomendaciones</h5></strong>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <Linkrouter to="inicio" className="btn btn-primary">Informacion</Linkrouter>
  </div>
 </div>
</div>

<div className="card-container">
<div className='col'>
  <img src= {mochila}className="card-img-top"  alt="..."/>
  <div className="Mytitle">
  <strong><h5>Armar la maleta</h5></strong>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <Linkrouter to="inicio" className="btn btn-primary">Informacion</Linkrouter>

    </div>
 
  </div>
</div>
</div>
</div>


</>
  );
}



export default Inicio;



           
