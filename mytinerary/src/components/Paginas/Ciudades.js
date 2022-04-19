import React from 'react'
import { useStateValue } from '../../StateProvider';
import { Link as Linkrouter } from 'react-router-dom'
import Search from '../Search/Search'
//  import City from './City'



const Ciudades = () => {
  const [{ filterCities}, dispatch] = useStateValue()

  return (
    <>
      <Search />


   <div className="prueba">
      {filterCities?.map((item) => {
            return (
              <div className="cardcontainer" >

        <div className="col">
         
              <div className="card h-50" >
                <img src={process.env.PUBLIC_URL + `/img/${item.image.imagecard}`} alt={item.name} />
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">{item.country + ", " + item.continent}</p>
                  <Linkrouter className="btn btn-primary" to={`/city/${item._id}`} > Ver mas </Linkrouter>
                </div>
              </div>

          
              </div>
        </div>
          );
        })}
        </div>
     
    


    </>

  );
}


export default Ciudades;





