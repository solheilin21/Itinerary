import React, { useState } from 'react'
import { Link as Linkrouter, useParams } from 'react-router-dom'
import dinero from '../img/dinero.png'
import idioma from '../img/idioma.png'
import pais from '../img/pais.png'
import mujer from '../img/mujer.png'
import { useStateValue } from '../../StateProvider'
import axios from 'axios';
import { useEffect } from 'react'
import Itinerary from './Itinerary'

function City() {

  const [itineraries, setItineraries] = useState([])
   const [{ cities }, dispatch] = useStateValue()
  const { id } = useParams()
  let city = cities.filter(city => city._id === id)


  useEffect(() => {
    city.map(city =>
      axios.get(`http://localhost:4000/api/itinerary/${city.city}`)
        .then(response => setItineraries(response.data.response.itinerary)

        )

    );
    console.log(itineraries)
  }, [])

console.log(itineraries)
  return (
    <>
      <div className="card-container-hijo">
        <div className="row row-cols-1 row-cols-md-4 g-4">
          <div className="card-container">
            <div className='col'>

              <img src={dinero} className="card-img-top" alt="..." />
              <div className="Mytitle2">
                <strong><h5>Money</h5></strong>
                <p className="card-text"><strong><h5>{city[0].currency}</h5></strong></p>

              </div>
            </div>
          </div>
          <div className="card-container">
            <div className='col'>
              <img src={idioma} className="card-img-top" alt="..." />
              <div className="Mytitle2">
                <strong><h5>Lenguage</h5></strong>
                <p className="card-text"><strong><h5>{city[0].language}</h5></strong></p>

              </div>
            </div>
          </div>

          <div className="card-container">
            <div className='col'>
              <img src={pais} className="card-img-top" alt="..." />
              <div className="Mytitle2">
                <strong><h5>Country</h5></strong>
                <p className="card-text"><strong><h5>{city[0].country}</h5></strong></p>
              </div>

            </div>
          </div>
        </div>
      </div>

      <div className='tarjeta-city'>
      <div className="card mb-3" >
        <div className="row g-0">
          <div className="col-md-4">
            <img src={process.env.PUBLIC_URL + `/img/${city[0].image.imagebandera}`} style={{ width: "32vw", height: "42vw" }} alt={city[0].name} />


          </div>
          <div className="col-md-8">
            <div className="card-body-city">

              <h5 className="card-title">{city[0].name}</h5>
              <p className="card-text">{city[0].country + ", " + city[0].continent}</p>
              <strong><h5>A city to visit</h5></strong>
              <p className="card-text">{city[0].descripction}</p>

              <div className="comment">
                <div className="form-floating">

                  <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2"></textarea>
                  <label for="floatingTextarea2">Comments</label>
                  <Linkrouter to="" className="btn btn-primary">Enviar</Linkrouter>
                 
                 <div className="comentarios">
                  <figure>
                    <blockquote class="blockquote">
                    <img src={mujer}  alt="..." height={45} width={45} />
                      <p>I love this City</p>
                    </blockquote>
                    <figcaption class="blockquote-footer">
                      Mara<cite title="Source Title">Silva</cite> <br></br>
                      From<cite title="Source Title">Brazil</cite>
                    </figcaption>
                  </figure>
                  </div>
                </div>

             

              </div>



            </div>
          </div>
        </div>

      </div>
      </div>
       <Itinerary itineraries={itineraries}/> 




      {/* <div className="card-itinerario">
<img src={mardel} className="card-img-top" alt="..." />
<div className="card-body-itinerario">
  <h5 className="card-title-itinerario">Mar del plata</h5>
  <p className="card-text-itinerario">Mar del Plata is an resort on the Atlantic coast. Its long strip of beaches includes the wide Punta Mogotes and Playa Grande.</p>
</div>
<ul className="list-group list-group-flush">
  <li className="list-group-item"><img src={money} alt="..." width="50" height="50"/> 15$-25$</li>
  <li className="list-group-item"><img src={bus} alt="..." width="50" height="50"/>6 hours</li>
  <li className="list-group-item"><img src={tiempo} alt="..." width="50" height="50"/>5 days-4 nights</li>
</ul>
<div className="card-body">
<Linkrouter className="btn btn-success" to='/itinerario' > I want it! </Linkrouter>
</div>
</div>  */}

    </>
  );
}

export default City