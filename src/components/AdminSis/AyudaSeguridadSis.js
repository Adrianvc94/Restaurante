import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import '../../Styles/AyudaSeguridadSis.css';

const AyudaSeguridadSis = () => {


   const interfaz = () => {

      return(

         <body>
   
            <div className="root-container_ayudaseguridadsis">
         
               <div className="parent-container_ayudaseguridadsis">
         
                  <div className="search-container_ayudaseguridadsis">        
                     <div className="search-box_ayudaseguridadsis">
                        
                        <h1 className="main-title_ayudaseguridadsis">Ayuda para el Módulo de Seguridad</h1>

                        <div className="actividades_ayudaseguridadsis">

                        </div>
         
                        <div className="search-buttons-container_ayudaseguridadsis">
                           <Link to="/ayudasistemasis" className="btnback_ayudaseguridadsis"><span></span></Link>
                           <button className="btnforward_ayudaseguridadsis" ><span></span></button>
                           <Link to="/mainpagesis" className="btnclose_ayudaseguridadsis"><span></span></Link>
                           <button className="btnpreview_ayudaseguridadsis" ><span></span></button>
                           <button className="btnprint_ayudaseguridadsis"><span></span></button>
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

export default AyudaSeguridadSis;