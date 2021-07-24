import React from 'react';
import { Link } from 'react-router-dom';
import '../../Styles/Cajas.css';

const Cajas = () => {

   const interfaz = () => {

      return(

         <body>

            <div className="root-container_cajas">

               <div className="parent-container_cajas">

                  <div className="search-container_cajas">        
                     <div className="search-buttons-container_cajas">
                        <button className="btnrefresh_cajas"><span></span></button>
                        <Link to="/seguridad" className="btnclose_cajas"><span></span></Link>
                        <button className="btnclear_cajas"><span></span></button>
                        <button className="btnsearch_cajas"><span></span></button>
                     </div>
                     <div className="search-box_cajas">
                        <h2>Solo busqueda</h2>
                        <form className="form_cajas" action="">
                           <label for="codigo">
                              <h2>Código del Registro</h2>
                              <input type="text" id="codigo"/>
                           </label>  
                           <label for="registro">
                              <h2>Nombre Fecha del Registro</h2>
                              <input type="date" id="registro"/>
                           </label>      
                           <label for="restaurante">
                              <h2>Nombre del Restaurante</h2>
                              <input type="text" id="restaurante"/>
                           </label>   
                        </form>
                        <form className="formDos_cajas" action="">
                           <label for="apertura">
                              <h2>Apertura de Caja</h2>
                              <input type="checkbox" id="apertura"/>
                           </label>  
                           <label for="cierre">
                              <h2>Cierre de Caja</h2>
                              <input type="checkbox" id="cierre"/>
                           </label>         
                        </form>
                     </div>
                     {/* <div className="add-delete-buttons_cajas">
                        <Link to="/addcajas" className="btnAdd_cajas"><span></span></Link>
                        <button className="btnDelete_cajas"><span></span></button>
                     </div> */}
                  </div>
            
                  <div className="info-container_cajas"> 
                     <table>
                        <tr>
                           <th>Codigo</th>
                           <th>Fecha de Registro</th>
                           <th>Descripcion</th>
                           <th>Entrada de Dinero</th>
                           <th>Apertura de Caja</th>
                           <th>Cierre de Caja</th>
                           <th>Restaurante</th>
                        </tr>

                        <tr>
                           <td></td>
                           <td></td>
                           <td></td>
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

   return (
      <div>
         {interfaz()}
      </div>
   )
}

export default Cajas;