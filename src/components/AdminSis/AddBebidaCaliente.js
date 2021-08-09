import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import "../../Styles/AddBebidaCaliente.css";

const AddBebidaCaliente = () => {

   
   const [bebidaCaliente, setBebidaCaliente] = useState({
      nombre:'',
      marca:'',
      nacionalidad:'',
      precio:'',
      restaurante:''
   });

   const [url] = useState('http://localhost:5000/bebidacaliente');

   const cambiarValor = (e) =>{
      const {name, value} = e.target;
      setBebidaCaliente({
         ...bebidaCaliente,
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
         body: JSON.stringify(bebidaCaliente)
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

   
         <div className="root-container_addBebidaCaliente">
      
            <div className="parent-container_addBebidaCaliente">
      
               <div className="search-container_addBebidaCaliente">        
                  <div className="search-box_addBebidaCaliente">
                     
                     <h1 className="main-title_addBebidaCaliente">Información de la Bebida</h1>
      
                     <form className="form_addBebidaCaliente" action="">
                        <label for="nameBebidaCa">
                           <h2>Nombre</h2>
                           <input type="text" id="nameBebidaCa"/>
                        </label>       
                        <label for="ingredientesBeCa">
                           <h2>Ingredientes</h2>
                           <input type="text" id="ingredientesBeCa"/>
                        </label> 
                        <label for="precioBeCa">
                           <h2>Precio</h2>
                           <input type="text" id="precioBeCa"/>
                        </label> 
                        <label for="restauranteBeCa">
                           <h2>Restaurante</h2>
                           <input type="text" id="restauranteBeCa"/>
                        </label>   
                        <label for="descripcionBeCa">
                           <h2>Descripcion</h2>
                           <input type="text" id="descripcionBeCa"/>
                        </label>                 
                     </form>
      
                     <div className="search-buttons-container_addBebidaCaliente">
                        <button className="btnclear_addBebidaCaliente"><span></span></button>
                        <button className="btnAdd_addBebidaCaliente"><span></span></button>
                        <button className="btnclose_addBebidaCaliente"><span></span></button>
                        <button className="btnImage_addBebidaCaliente"><span></span></button>
                     </div>
                  </div>
      
                  <div className="image_addBebidaCaliente">
                     <h2>Foto de la Bebida</h2>
                     <picture>
                        <img src="https://foodandtravel.mx/wp-content/uploads/2017/12/atoleFT.jpg" alt=""/>
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

export default AddBebidaCaliente;

