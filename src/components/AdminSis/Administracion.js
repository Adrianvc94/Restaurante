import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import '../../Styles/Administracion.css';

const Administracion = () => {

   const [ruta, setRuta] = useState("");

   const seleccionado = (e) =>{
      setRuta(e.target.value);
   }


   const interfaz = () => {

      return(

         <body>

            <div className="root-container_administracion">

               <div className="parent-container_administracion">

                  <div className="search-container_administracion">        
                     <div className="search-box_administracion">
                        
                        <h1 className="main-title_administracion">Opciones</h1>

                        <form className="form_administracion" action="">
                           <label for="especiales">
                              <h2>Especiales</h2>
                              <input type="checkbox" value="especiales" onChange={seleccionado} id="especiales"/>
                           </label>  
                           <label for="empleados">
                              <h2>Empleados</h2>
                              <input type="checkbox" value="empleados" onChange={seleccionado} id="empleados"/>
                           </label>       
                           <label for="mesas">
                              <h2>Mesas</h2>
                              <input type="checkbox" value="mesas" onChange={seleccionado} id="mesas"/>
                           </label> 
                           <label for="puestos">
                              <h2>Puesto</h2>
                              <input type="checkbox" value="puestos" onChange={seleccionado} id="puestos"/>
                           </label> 
                        </form>
                        <div className="search-buttons-container_administracion">
                           <Link to={"/"+ruta} className="btnCheck_administracion"><span></span></Link>
                           <Link to="/mainpagesis" className="btnclose_administracion"><span></span></Link>
                        </div>
                     </div>             
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

export default Administracion;