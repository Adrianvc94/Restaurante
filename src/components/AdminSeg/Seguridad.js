import '../../Styles/Seguridad.css';
import React, {useState} from "react";
import { Link } from "react-router-dom";


const Seguridad = () => {

   const [ruta, setRuta] = useState("");

   const seleccionado = (e) =>{
      setRuta(e.target.value);
   }

   const interfaz = () => {

      return(

         <body>
   
            <div className="root-container_seguridad">
         
               <div className="parent-container_seguridad">
         
                  <div className="search-container_seguridad">        
                     <div className="search-box_seguridad">
                        
                        <h1 className="main-title_seguridad">Opciones</h1>
         
                        <form className="form_seguridad" action="">
                           <label for="usuarios">
                              <h2>Usuarios</h2>
                              <input type="checkbox" value="usuarios" onChange={seleccionado} id="usuarios"/>
                           </label>  
                           <label for="consecutivos">
                              <h2>Consecutivos</h2>
                              <input type="checkbox" value="consecutivos" onChange={seleccionado} id="consecutivos"/>
                           </label>       
                           <label for="paises">
                              <h2>Paises</h2>
                              <input type="checkbox" value="paises" onChange={seleccionado} id="paises"/>
                           </label> 
                           <label for="cajas">
                              <h2>Cajas</h2>
                              <input type="checkbox" value="cajas" onChange={seleccionado} id="cajas"/>
                           </label>  
                           <label for="roles">
                              <h2>Roles o Eventos</h2>
                              <input type="checkbox" value="roles" onChange={seleccionado} id="roles"/>
                           </label>   
                           <label for="medidas">
                              <h2>Unidades de Medida</h2>
                              <input type="checkbox" value="medidas" onChange={seleccionado} id="medidas"/>
                           </label>  
                        </form>
                        <div className="search-buttons-container_seguridad">
                           <Link to={"/" + ruta} className="btnCheck_seguridad"><span></span></Link>
                           <Link to="/mainpageseg" className="btnclose_seguridad"><span></span></Link>
                        </div>
                     </div>
                  
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

export default Seguridad;