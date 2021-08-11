import React, {useState} from "react";
import { Link } from "react-router-dom";
import '../../Styles/ReportesSeg.css';

const ReportesSeg = () => {

   const [ruta, setRuta] = useState("");

   const seleccionado = (e) =>{
      setRuta(e.target.value);
   }

   const interfaz = () => {

      return(

         <body>
   
            <div className="root-container_reportesSeg">

               <div className="parent-container_reportesSeg">

                  <div className="search-container_reportesSeg">        
                     <div className="search-box_reportesSeg">
                        
                        <h1 className="main-title_reportesSeg">Opciones</h1>

                        <form className="form_reportesSeg" action="">
                           <label for="bitacora">
                              <h2>Bitacora</h2>
                              <input value="bitacora" onChange={seleccionado} type="checkbox" id="bitacora"/>
                           </label>  
                        </form>
                        <div className="search-buttons-container_reportesSeg">
                           <Link to={"/" + ruta} className="btnCheck_reportesSeg"><span></span></Link>
                           <Link to="/mainpageseg" className="btnclose_reportesSeg"><span></span></Link>
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

export default ReportesSeg;