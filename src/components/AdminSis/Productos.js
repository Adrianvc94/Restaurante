import React, {useState} from "react";
import { Link } from "react-router-dom";
import '../../Styles/Productos.css';

const Productos = () => {

   const [ruta, setRuta] = useState("");

   const seleccionado = (e) =>{
      setRuta(e.target.value);
   }

   const interfaz = () => {

      return(

         <body>
   
            <div className="root-container_productos">

               <div className="parent-container_productos">

                  <div className="search-container_productos">        
                     <div className="search-box_productos">
                        
                        <h1 className="main-title_productos">Opciones</h1>

                        <form className="form_productos" action="">
                           <label for="comestibles">
                              <h2>Comestibles</h2>
                              <input type="checkbox" value="comestibles" onChange={seleccionado} id="comestibles"/>
                           </label>  
                           <label for="desechables">
                              <h2>Desechables y Empaques</h2>
                              <input type="checkbox" value="desechables" onChange={seleccionado} id="desechables"/>
                           </label>       
                           <label for="limpieza">
                              <h2>Limpieza e Higiene</h2>
                              <input type="checkbox" value="limpieza" onChange={seleccionado} id="limpieza"/>
                           </label> 
                           <label for="tecnologia">
                              <h2>Tecnologia</h2>
                              <input type="checkbox" value="tecnologia" onChange={seleccionado} id="tecnologia"/>
                           </label>  
                           <label for="utensilios">
                              <h2>Equipos y Utensilios</h2>
                              <input type="checkbox" value="utensilios" onChange={seleccionado} id="utensilios"/>
                           </label>    
                        </form>
                        <div className="search-buttons-container_productos">
                           <Link to={"/" + ruta} className="btnCheck_productos"><span></span></Link>
                           <Link to="/proveedores" className="btnclose_productos"><span></span></Link>
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

export default Productos;