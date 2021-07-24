import React, {useState} from "react";
import { Link } from "react-router-dom";
import '../../Styles/Especiales.css';

const Especiales = () => {

   const [ruta, setRuta] = useState("");

   const seleccionado = (e) =>{
      setRuta(e.target.value);
   }

   const interfaz = () => {

      return(

         <body>
   
            <div className="root-container_especiales">

               <div className="parent-container_especiales">

                  <div className="search-container_especiales">        
                     <div className="search-box_especiales">
                        
                        <h1 className="main-title_especiales">Opciones</h1>

                        <form className="form_especiales" action="">
                           <label for="buffet">
                              <h2>Buffet</h2>
                              <input type="checkbox" id="buffet" value="buffet" onChange={seleccionado}/>
                           </label>  
                           <label for="tiposbebidas">
                              <h2>Bebidas</h2>
                              <input type="checkbox" id="tiposbebidas" value="tiposbebidas" onChange={seleccionado}/>
                           </label>       
                           <label for="especialidades">
                              <h2>Especialidades</h2>
                              <input type="checkbox" id="especialidades" value="especialidades" onChange={seleccionado}/>
                           </label> 
                        </form>
                        <div className="search-buttons-container_especiales">
                           <Link to={"/" + ruta} className="btnCheck_especiales"><span></span></Link>
                           <Link to="/administracion" className="btnclose_especiales"><span></span></Link>
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

export default Especiales;