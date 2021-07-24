import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import "../../Styles/AddTecnologia.css";

const AddTecnologia = () => {

   
   const [tecnologia, setTecnologia] = useState({
      restaurante:'',
      nombre:'',
      marca:'',
      cantidad:'',
      descripcion:''
   });

   const [url] = useState('http://localhost:5000/tecnologia');

   const cambiarValor = (e) =>{
      const {name, value} = e.target;
      setTecnologia({
         ...tecnologia,
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
         body: JSON.stringify(tecnologia)
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

            <div className="root-container_addtecnologia">

               <div className="parent-container_addtecnologia">

                  <div className="search-container_addtecnologia">        
                     <div className="search-box_addtecnologia">
                        
                        <h1 className="main-title_addtecnologia">Información de los Articulos</h1>

                        <form id="form" className="form_addtecnologia" action="">
                          
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

                        <div className="search-buttons-container_addtecnologia">
                           <button onClick={limpiarInputs} className="btnclear_addtecnologia"><span></span></button>
                           <button onClick={enviarDatos} className="btnAdd_addtecnologia"><span></span></button>
                           <Link to="/tecnologia" className="btnclose_addtecnologia"><span></span></Link>
                        </div>
                     </div>

                     <div className="tecnologiaImage_addtecnologia">
                        <form className="form_addtecnologia" action="">
                           
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

export default AddTecnologia;

