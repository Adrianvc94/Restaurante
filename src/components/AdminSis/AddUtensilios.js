import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import "../../Styles/AddUtensilios.css";

const AddUtensilios = () => {

   
   const [utensilio, setUtensilio] = useState({
      restaurante:'',
      nombre:'',
      marca:'',
      cantidad:'',
      descripcion:'',
   });

   const [url] = useState('http://localhost:5000/utensilios');

   const cambiarValor = (e) =>{
      const {name, value} = e.target;
      setUtensilio({
         ...utensilio,
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
         body: JSON.stringify(utensilio)
      })
      .then(response => response.json())
      .catch(error => console.log(error))
   }

   const limpiarInputs = () => {
      document.getElementById("form").reset();
      document.getElementById("form2").reset();
   }


   const interfaz = () => {
      return(

         <body>

            <div className="root-container_addutensilio">

               <div className="parent-container_addutensilio">

                  <div className="search-container_addutensilio">        
                     <div className="search-box_addutensilio">
                        
                        <h1 className="main-title_addutensilio">Información de los Equipos</h1>

                        <form id="form" className="form_addutensilio" action="">
                           <label for="restaurante">
                              <h2>Restaurante</h2>
                              <input list="restaurante" onChange={cambiarValor} name="restaurante"/>
                              <datalist id="restaurante">
                                 <option value="1. Restaurante"></option>
                                 <option value="2. Restaurante"></option>
                                 <option value="3. Restaurante"></option>
                              </datalist>
                           </label>  
                           <label for="nombre">
                              <h2>Nombre</h2>
                              <input type="text" id="nombre" onChange={cambiarValor} name="nombre"/>
                           </label> 
                           <label for="marca">
                              <h2>Marca</h2>
                              <input list="marca" onChange={cambiarValor} name="marca"/>
                              <datalist id="marca">
                                 <option value="1. Marca"></option>
                                 <option value="2. Marca"></option>
                                 <option value="3. Marca"></option>
                              </datalist>
                           </label>   
                           <label for="cantidad">
                              <h2>Cantidad</h2>
                              <input type="text" id="cantidad" onChange={cambiarValor} name="cantidad"/>
                           </label>        
                        </form>

                        <div className="search-buttons-container_addutensilio">
                           <button onClick={limpiarInputs} className="btnclear_addutensilio"><span></span></button>
                           <button onClick={enviarDatos} className="btnAdd_addutensilio"><span></span></button>
                           <Link to="/utensilios" className="btnclose_addutensilio"><span></span></Link>
                        </div>
                     </div>

                     <div className="utensilioImage_addutensilio">
                        <form id="form2" className="form_addutensilio" action="">
                           
                           <label for="descripcion">
                              <h2>Descripcion</h2>
                              <input type="text" id="descripcion" onChange={cambiarValor} name="descripcion"/>
                           </label>               
                        </form>
               
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

export default AddUtensilios;

