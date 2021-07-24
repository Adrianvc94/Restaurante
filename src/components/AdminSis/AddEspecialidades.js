import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import "../../Styles/AddEspecialidades.css";

const AddEspecialidades = () => {

   const [especialidad, setEspecialidad] = useState({
      nombre:'',
      ingredientes:'',
      precio:'',
      detalle:''
   });

   const [url] = useState('http://localhost:5000/especialidades');

   const cambiarValor = (e) =>{
      const {name, value} = e.target;
      setEspecialidad({
         ...especialidad,
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
         body: JSON.stringify(especialidad)
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

            <div className="root-container_addespecialidad">

               <div className="parent-container_addespecialidad">

                  <div className="search-container_addespecialidad">        
                     <div className="search-box_addespecialidad">
                        
                        <h1 className="main-title_addespecialidad">Información de la Especialidad</h1>

                        <form id="form" className="form_addespecialidad" action="">
                           <label for="nombre">
                              <h2>Nombre del Platillo</h2>
                              <input type="text" onChange={cambiarValor} name="nombre" id="nombre"/>
                           </label>       
                           <label for="ingredientes">
                              <h2>Ingredientes</h2>
                              <input type="text" onChange={cambiarValor} name="ingredientes" id="ingredientes"/>
                           </label> 
                           <label for="precio">
                              <h2>Precio</h2>
                              <input type="text" onChange={cambiarValor} name="precio" id="precio"/>
                           </label> 
                           <label for="detalle">
                              <h2>Detalle</h2>
                              <input type="text" onChange={cambiarValor} name="detalle" id="detalle"/>
                           </label>                 
                        </form>

                        <div className="search-buttons-container_addespecialidad">
                           <button className="btnclear_addespecialidad" onClick={limpiarInputs}><span></span></button>
                           <button className="btnAdd_addespecialidad" onClick={enviarDatos}><span></span></button>
                           <Link to="/especialidades" className="btnclose_addespecialidad"><span></span></Link>
                           <button className="btnImage_addespecialidad"><span></span></button>
                        </div>
                     </div>

                     <div className="buffetImage_addespecialidad">
                        <h2>Foto del Especial</h2>
                        <picture>
                           <img src="https://cdn.shopify.com/s/files/1/0899/2262/articles/restaurantes-de-mariscos-y-otras-opciones-para-comer-en-cuaresma.jpg?v=1552671997" alt=""/>
                        </picture>
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

export default AddEspecialidades;

