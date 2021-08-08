import React, {useState} from "react";
import { Link } from "react-router-dom";
import '../../Styles/TiposBebidas.css';

const TiposBebidas = () => {

   const [ruta, setRuta] = useState("");

   const seleccionado = (e) =>{
      setRuta(e.target.value);
   }

   const interfaz = () => {

      return(

         <body>
   
            <div class="root-container_tiposBebidas">

               <div class="parent-container_tiposBebidas">

                  <div class="search-container_tiposBebidas">        
                     <div class="search-box_tiposBebidas">
                        
                        <h1 class="main-title_tiposBebidas">Opciones de Bebidas</h1>

                        <form class="form_tiposBebidas" action="">
                           <label for="calientes">
                              <h2>Calientes</h2>
                              <input type="checkbox" value="bebidascalientes" onChange={seleccionado} id="calientes"/>
                           </label>  
                           <label for="heladas">
                              <h2>Heladas</h2>
                              <input type="checkbox" value="bebidasheladas" onChange={seleccionado} id="heladas"/>
                           </label>       
                           <label for="vinos">
                              <h2>Vinos</h2>
                              <input type="checkbox" value="vinos" onChange={seleccionado} id="vinos"/>
                           </label> 
                           <label for="gaseosas">
                              <h2>Gaseosas</h2>
                              <input type="checkbox" value="gaseosas" onChange={seleccionado} id="gaseosas"/>
                           </label> 
                           <label for="licores">
                              <h2>Licores</h2>
                              <input type="checkbox" value="licores" onChange={seleccionado} id="licores"/>
                           </label> 
                        </form>
                        <div class="search-buttons-container_tiposBebidas">
                           <Link to={"/" + ruta} class="btnCheck_tiposBebidas"><span></span></Link>
                           <Link to="/especiales" class="btnclose_tiposBebidas"><span></span></Link>
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

export default TiposBebidas;