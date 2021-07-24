import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import '../../Styles/AyudaSeguridadSeg.css';

const AyudaSeguridadSeg = () => {


   const interfaz = () => {

      return(

         <body>
   
            <div className="root-container_ayudaseguridadseg">
         
               <div className="parent-container_ayudaseguridadseg">
         
                  <div className="search-container_ayudaseguridadseg">        
                     <div className="search-box_ayudaseguridadseg">
                        
                        <h1 className="main-title_ayudaseguridadseg">Ayuda para el Módulo de Seguridad</h1>

                        <div className="actividades_ayudaseguridadseg">

                        </div>
         
                        <div className="search-buttons-container_ayudaseguridadseg">
                           <Link to="/ayudasistemaseg" className="btnback_ayudaseguridadseg"><span></span></Link>
                           <button className="btnforward_ayudaseguridadseg" ><span></span></button>
                           <Link to="/mainpageseg" className="btnclose_ayudaseguridadseg"><span></span></Link>
                           <button className="btnpreview_ayudaseguridadseg" ><span></span></button>
                           <button className="btnprint_ayudaseguridadseg"><span></span></button>
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

export default AyudaSeguridadSeg;