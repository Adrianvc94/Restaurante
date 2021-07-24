import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import '../../Styles/Utensilios.css';

const Utensilios = () => {

   const [utensilios, setUtensilios] = useState([]);
   const [utensilio, setUtensilio] = useState({
      restaurante:'',
      nombre:'',
      marca:'',
      cantidad:'',
      descripcion:'',
   });

   const [url] = useState('http://localhost:5000/utensilios');

   const traerDatosUtensilios = async () => {
      let datos = await fetch(url)
      .then(response => response.json())
      setUtensilios(datos);
   }

   const enviarDatos = () =>{
      fetch(url, {
         headers:{
            Accept:"application/json",
            "Content-type": "application/json"
         },
         method:"POST",
         body: JSON.stringify(utensilio)
      })
      .then(res => console.log(res))
      .catch(error => console.log(error))
   }

   useEffect(() => {
      traerDatosUtensilios();
   }, [])

   

   const interfaz = () => {

      return (
         
         <body>

            <div className="root-container_utensilios">
         
               <div className="parent-container_utensilios">
         
                  <div className="search-container_utensilios">        
                     <div className="search-buttons-container_utensilios">
                        <button className="btnrefresh_utensilios"><span></span></button>
                        <Link to="/productos" className="btnclose_utensilios"><span></span></Link>
                        <button className="btnclear_utensilios"><span></span></button>
                        <button className="btnsearch_utensilios"><span></span></button>
                     </div>
                     <div className="search-box_utensilios">
                        <h2>Solo busqueda</h2>
                        <form className="form_utensilios" action="">
                           <label for="idLicor">
                              <h2>Código del Equipo</h2>
                              <input type="text" id="idLicor"/>
                           </label>  
                           <label for="nameLicor">
                              <h2>Nombre del Equipo</h2>
                              <input type="text" id="nameLicor"/>
                           </label>         
                        </form>
                        <form className="formDos_utensilios" action="">
                           <label for="nameRestaurante">
                              <h2>Nombre del Restaurante</h2>
                              <input type="text" id="nameRestaurante"/>
                           </label>         
                        </form>
                     </div>
                     <div className="add-delete-buttons_utensilios">
                        <Link to="/addutensilios" className="btnAdd_utensilios"><span></span></Link>
                        <button className="btnDelete_utensilios"><span></span></button>
                     </div>
                  </div>
            
                  <div className="info-container_utensilios"> 
                     <table>
                        <tr>
                           <th>Codigo</th>
                           <th>Nombre</th>
                           <th>Cantidad</th>
                           <th>Restaurante</th>
                        </tr>
         
                        {utensilios.map(u => {
                           return <tr>
                           <td>{u._id}</td>
                           <td>{u.nombre}</td>
                           <td>{u.cantidad}</td>
                           <td>{u.restaurante}</td>
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

export default Utensilios;