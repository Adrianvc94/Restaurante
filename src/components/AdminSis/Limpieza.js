import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import '../../Styles/Limpieza.css';

const Limpieza = () => {

   const [limpiezas, setLimpiezas] = useState([]);
   const [limpieza, setLimpieza] = useState({
      nombre:'',
      cantidad:'',
      restaurante:'',
      restaurante:''
   });

   const [url] = useState('http://localhost:5000/limpieza');

   const traerDatosLimpieza = async () => {
      let datos = await fetch(url)
      .then(response => response.json())
      setLimpiezas(datos);
   }

   const cambiarValor = (e) =>{
      const {name, value} = e.target;
      setLimpieza({
         ...limpieza,
         [name] : value
      })
   }

   const enviarDatos = () =>{
      fetch(url, {
         headers:{
            Accept:"application/json",
            "Content-type": "application/json"
         },
         method:"POST",
         body: JSON.stringify(limpieza)
      })
      .then(res => console.log(res))
      .catch(error => console.log(error))
   }

   useEffect(() => {
      traerDatosLimpieza();
   }, [])

   

   const interfaz = () => {

      return (
         
         <body>

            <div className="root-container_limpieza">

               <div className="parent-container_limpieza">

                  <div className="search-container_limpieza">        
                     <div className="search-buttons-container_limpieza">
                        <button className="btnrefresh_limpieza"><span></span></button>
                        <Link to="/productos" className="btnclose_limpieza"><span></span></Link>
                        <button className="btnclear_limpieza"><span></span></button>
                        <button className="btnsearch_limpieza"><span></span></button>
                     </div>
                     <div className="search-box_limpieza">
                        <h2>Solo busqueda</h2>
                        <form className="form_limpieza" action="">
                           <label for="codigo">
                              <h2>Código del Articulo</h2>
                              <input type="text" id="codigo"/>
                           </label>  
                           <label for="nombre">
                              <h2>Nombre del Articulo</h2>
                              <input type="text" id="nombre"/>
                           </label>         
                        </form>
                        <form className="formDos_limpieza" action="">
                           <label for="nameRestaurante">
                              <h2>Nombre del Restaurante</h2>
                              <input type="text" id="nameRestaurante"/>
                           </label>         
                        </form>
                     </div>
                     <div className="add-delete-buttons_limpieza">
                        <Link to="/addlimpieza" className="btnAdd_limpieza"><span></span></Link>
                        <button className="btnDelete_limpieza"><span></span></button>
                     </div>
                  </div>
            
                  <div className="info-container_limpieza"> 
                     <table>
                        <tr>
                           <th>Codigo</th>
                           <th>Nombre</th>
                           <th>Cantidad</th>
                           <th>Restaurante</th>
                        </tr>

                        <tr>
                           <td></td>
                           <td></td>
                           <td></td>
                           <td></td>
                        </tr>
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

export default Limpieza;