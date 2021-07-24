import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import '../../Styles/AyudaSistemaSeg.css';

const AyudaSistemaSeg = () => {


   const interfaz = () => {

      return(

         <body>
   
            <div className="root-container_ayudasistemaseg">
         
               <div className="parent-container_ayudasistemaseg">
         
                  <div className="search-container_ayudasistemaseg">        
                     <div className="search-box_ayudasistemaseg">
                        
                        <h1 className="main-title_ayudasistemaseg">Ayuda para el Módulo de Administración del Sistema</h1>

                        <div className="actividades_ayudasistemaseg">

                        </div>
         
                      
         
                        <div className="search-buttons-container_ayudasistemaseg">
                           <button className="btnback_ayudasistemaseg"><span></span></button>
                           <Link to="/ayudaseguridadseg" className="btnforward_ayudasistemaseg" ><span></span></Link>
                           <Link to="/mainpageseg" className="btnclose_ayudasistemaseg"><span></span></Link>
                           <button className="btnpreview_ayudasistemaseg" ><span></span></button>
                           <button className="btnprint_ayudasistemaseg"><span></span></button>
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

export default AyudaSistemaSeg;