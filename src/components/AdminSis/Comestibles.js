import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import '../../Styles/Comestibles.css';

const Comestible = () => {

   const [comestibles, setComestibles] = useState([]);
   const [comestible, setComestible] = useState({
      nombre:'',
      cantidad:'',
      tipo:'',
      restaurante:'',
      marca:'',
      clase:'',
      linea:'',
      medida:''
   });

   const [url] = useState('http://localhost:5000/comestibles');

   const traerDatosComestible = async () => {
      let datos = await fetch(url)
      .then(response => response.json())
      setComestibles(datos);
   }

   const enviarDatos = () =>{
      fetch(url, {
         headers:{
            Accept:"application/json",
            "Content-type": "application/json"
         },
         method:"POST",
         body: JSON.stringify(comestible)
      })
      .then(res => console.log(res))
      .catch(error => console.log(error))
   }

   useEffect(() => {
      traerDatosComestible();
   }, [])


   const interfaz = () => {

      return (
         
         <body>

            <div className="root-container_comestibles">

               <div className="parent-container_comestibles">

                  <div className="search-container_comestibles">        
                     <div className="search-buttons-container_comestibles">
                        <button className="btnrefresh_comestibles"><span></span></button>
                        <Link to="/productos" className="btnclose_comestibles"><span></span></Link>
                        <button className="btnclear_comestibles"><span></span></button>
                        <button className="btnsearch_comestibles"><span></span></button>
                     </div>
                     <div className="search-box_comestibles">
                        <h2>Solo busqueda</h2>
                        <form className="form_comestibles" action="">
                           <label for="codigo">
                              <h2>Código del Comestible</h2>
                              <input type="text" id="codigo"/>
                           </label>  
                           <label for="nombre">
                              <h2>Nombre del Comestible</h2>
                              <input type="text" id="nombre"/>
                           </label>         
                        </form>
                        <form className="formDos_comestibles" action="">
                           <label for="nombreRestaurante">
                              <h2>Nombre del Restaurante</h2>
                              <input type="text" id="nombreRestaurante"/>
                           </label>         
                        </form>
                     </div>
                     <div className="add-delete-buttons_comestibles">
                        <Link to="/addcomestibles" className="btnAdd_comestibles"><span></span></Link>
                        <button className="btnDelete_comestibles"><span></span></button>
                     </div>
                  </div>
            
                  <div className="info-container_comestibles"> 
                     <table>
                        <tr>
                           <th>Codigo</th>
                           <th>Nombre</th>
                           <th>Cantidad</th>
                           <th>Restaurante</th>
                        </tr>

                        {comestibles.map(c => {
                           return <tr>
                           <td>{c._id}</td>
                           <td>{c.nombre}</td>
                           <td>{c.cantidad}</td>
                           <td>{c.restaurante}</td>
                        </tr>
                        })}
                     </table>
                  </div>
            
               </div>
            
            </div>

            
         </body>

      )
   }

   return(
      <div>
         {interfaz()}
      </div>
   )
}

export default Comestible;