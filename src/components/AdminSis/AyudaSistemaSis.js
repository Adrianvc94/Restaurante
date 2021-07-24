import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import '../../Styles/AyudaSistemaSis.css';

const AyudaSistemaSis = () => {


   const interfaz = () => {

      return(

         <body>
   
            <div className="root-container_ayudasistemasis">
         
               <div className="parent-container_ayudasistemasis">
         
                  <div className="search-container_ayudasistemasis">        
                     <div className="search-box_ayudasistemasis">
                        
                        <h1 className="main-title_ayudasistemasis">Ayuda para el Módulo de Administración del Sistema</h1>

                        <div className="actividades_ayudasistemasis">

                        </div>
         
                      
         
                        <div className="search-buttons-container_ayudasistemasis">
                           <button className="btnback_ayudasistemasis"><span></span></button>
                           <Link to="/ayudaseguridadsis" className="btnforward_ayudasistemasis" ><span></span></Link>
                           <Link to="/mainpagesis" className="btnclose_ayudasistemasis"><span></span></Link>
                           <button className="btnpreview_ayudasistemasis" ><span></span></button>
                           <button className="btnprint_ayudasistemasis"><span></span></button>
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

export default AyudaSistemaSis;