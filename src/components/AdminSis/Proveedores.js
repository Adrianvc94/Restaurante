import React, {useState} from "react";
import { Link } from "react-router-dom";
import '../../Styles/Proveedores.css';

const Proveedores = () => {

   const [ruta, setRuta] = useState("");

   const seleccionado = (e) =>{
      setRuta(e.target.value);
   }

   const interfaz = () => {

      return(

         <body>
   
            <div className="root-container_proveedores">
         
               <div className="parent-container_proveedores">
         
                  <div className="search-container_proveedores">        
                     <div className="search-box_proveedores">
                        
                        <h1 className="main-title_proveedores">Opciones</h1>
         
                        <form className="form_proveedores" action="">
                           <label for="marcas">
                              <h2>Marcas</h2>
                              <input type="checkbox" value="marcas" onChange={seleccionado} id="marcas"/>
                           </label>  
                           <label for="productos">
                              <h2>Productos</h2>
                              <input type="checkbox" value="productos" onChange={seleccionado} id="productos"/>
                           </label>       
                           <label for="proveedores">
                              <h2>Proveedores</h2>
                              <input type="checkbox" value="listaproveedores" onChange={seleccionado} id="proveedores"/>
                           </label> 
                        </form>
                        <div className="search-buttons-container_proveedores">
                           <Link to={"/" + ruta} className="btnCheck_proveedores"><span></span></Link>
                           <Link to="/mainpagesis" className="btnclose_proveedores"><span></span></Link>
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

export default Proveedores;