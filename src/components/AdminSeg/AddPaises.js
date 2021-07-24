import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import '../../Styles/AddPaises.css';

const AddPaises = () => {

   const [pais, setPais] = useState({
      nombre:''
   });

   const [url] = useState('http://localhost:5000/paises');

   const cambiarValor = (e) =>{
      const {name, value} = e.target;
      setPais({
         ...pais,
         [name] : value
      })
   }

   const enviarDatos = async () =>{
      await fetch(url, {
         headers:{
            Accept:"application/json",
            "Content-type": "application/json"
         },
         method:"POST",
         body: JSON.stringify(pais)
      })
      .then(response => response.json())
      .catch(error => console.log(error))
   }

   const limpiarInputs = () => {
      document.getElementById("form").reset();
   }

   const interfaz = () => {

      return(

         <body>
   
            <div className="root-container_addpaises">

               <div className="parent-container_addpaises">

                  <div className="search-container_addpaises">        
                     <div className="search-box_addpaises">
                        
                        <h1 className="main-title_addpaises">Información de los Paises</h1>

                        <form id="form" className="form_addpaises" action="">
                           <label for="nombre">
                              <h2>Nombre</h2>
                              <input type="text" onChange={cambiarValor} name="nombre" id="nombre"/>
                           </label> 
                        </form>

                        <div className="paisImage_addpaises">
                           <h2>Bandera del Pais</h2>
                           <picture>
                              <img src="https://www.banderas-mundo.es/data/flags/w1600/cr.png" alt=""/>
                           </picture>
                        </div>

                        <div className="search-buttons-container_addpaises">
                           <button onClick={limpiarInputs} className="btnclear_addpaises"><span></span></button>
                           <button onClick={enviarDatos} className="btnAdd_addpaises"><span></span></button>
                           <Link to="/paises" className="btnclose_addpaises"><span></span></Link>
                           <button className="btnImage_addpaises"><span></span></button>
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

export default AddPaises;