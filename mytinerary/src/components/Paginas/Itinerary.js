import React from "react";
import { Link as Linkrouter,} from 'react-router-dom'
import money from '../img/money.png'
import bus from '../img/bus.png'
import tiempo from '../img/tiempo.png'




function Itinerary(props) {

  let itinerary= props.itineraries
console.log(itinerary)

//let itinerary = itineraries.filter( item => item._id === id)



  return (
    <>
    <div className="prueba-itinerario">
      <div className="card-itinerario">
        {itinerary.map((item) => 
          <div className="col-itinerario">
            <div className="card h-50" >
              <img src={process.env.PUBLIC_URL + `/img/${item.image.imagecard}`} alt={item.name} />

              <div className="Mytitle">
              <div className="card-body-itinerario">
                <h5 className="card-title-itinerario">{item.name}</h5>
                <p className="card-text-itinerario">{item.description}</p>
              </div>
              </div>

            
              <ul className="list-group list-group-flush">
                <li className="list-group-item"><img src={money} alt="..." width="50" height="50" />{item.price}</li>
                <li className="list-group-item"><img src={bus} alt="..." width="50" height="50" />{item.hour}</li>
                <li className="list-group-item"><img src={tiempo} alt="..." width="50" height="50" />{item.time}</li>
              </ul>
            

              <div className="card-body">
                 <Linkrouter className="btn btn-success" to={`/itinerary/${itinerary._id}`} >I want it! </Linkrouter> 

              </div>
            </div>
          </div>


        )}
      </div>
      </div>
    </>

  );
}


export default Itinerary
