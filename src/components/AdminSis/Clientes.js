import React from 'react';
import { Link } from 'react-router-dom';
import '../../Styles/Clientes.css';

const Clientes = () => {

   const interfaz = () => {

      return(

         <body>

            <div className="root-container_clientes">

               <div className="parent-container_clientes">

                  <div className="search-container_clientes">        
                     <div className="search-buttons-container_clientes">
                        <button className="btnrefresh_clientes"><span></span></button>
                        <Link to="/mainpagesis" className="btnclose_clientes"><span></span></Link>
                        <button className="btnclear_clientes"><span></span></button>
                        <button className="btnsearch_clientes"><span></span></button>
                     </div>
                     <div className="search-box_clientes">
                        <h2>Solo busqueda</h2>
                        <form className="form_clientes" action="">
                           <label for="idVino">
                              <h2>Código del Cliente</h2>
                              <input type="text" id="idVino"/>
                           </label>  
                           <label for="nameVino">
                              <h2>Nombre del Cliente</h2>
                              <input type="text" id="nameVino"/>
                           </label>      
                           <label for="annoVino">
                              <h2>Nombre del Restaurante</h2>
                              <input type="text" id="annoVino"/>
                           </label>  
                           
                              <label for="barra">
                                 <h2>Barra</h2>
                                 <input type="checkbox" id="barra"/>
                              </label>
                              <label className="reservacion_clientes" for="reservacion">
                                 <h2>Reservacion</h2>
                                 <input type="checkbox" id="reservacion"/>
                              </label>       
                        </form>

                        <form className="formDos_clientes" action="">
                           <form className="form_clientes" action="">
                              <h2>Rango de Fechas</h2>
                              <label for="inicioRango">
                                 <h2>Fecha Inicio</h2>
                                 <input type="date" id="inicioRango"/>
                              </label>  
                              <label for="finalRango">
                                 <h2>Fecha Final</h2>
                                 <input type="date" id="finalRango"/>
                              </label> 
                              <h2>Rango de Fechas en Reservacion</h2>
                              <label  for="inicioReservacion">
                                 <h2>Fecha Inicio</h2>
                                 <input type="date" id="inicioReservacion"/>
                              </label>  
                              <label  for="finalReservacion">
                                 <h2>Fecha Final</h2>
                                 <input type="date" id="finalReservacion"/>
                              </label> 

                           </form>
         
                        </form>
                     </div>
                     <div className="add-delete-buttons_clientes">
                        <Link to="/addclientes" className="btnAdd_clientes"><span></span></Link>
                        <button className="btnDelete_clientes"><span></span></button>
                     </div>
                  </div>
         
                  <div className="info-container_clientes"> 
                     <table>
                        <tr>
                           <th>Codigo</th>
                           <th>Nombre</th>
                           <th>Monto Pagado</th>
                           <th>Detalle</th>
                           <th>Fecha</th>
                           <th>Reservacion</th>
                           <th>Barra</th>
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

export default Clientes;