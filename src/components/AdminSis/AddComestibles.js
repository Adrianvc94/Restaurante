import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import "../../Styles/AddComestibles.css";

const AddComestibles = () => {

   
   const [comestible, setComestible] = useState({
      nombre:'',
      cantidad:'',
      tipo:'',
      restaurante:'',
      marca:'',
      clase:'',
      linea:'',
      medida:''
   });

   const [url] = useState('http://localhost:5000/comestibles');

   const cambiarValor = (e) =>{
      const {name, value} = e.target;
      setComestible({
         ...comestible,
         [name] : value
      })
   }

   const enviarDatos = async () =>{
      let respuesta = await fetch(url, {
         headers:{
            Accept:"application/json",
            "Content-type": "application/json"
         },
         method:"POST",
         body: JSON.stringify(comestible)
      })
      .then(response => console.log(response))
      .catch(error => console.log(error))
   }

   const limpiarInputs = () => {
      document.getElementById("form").reset();
      document.getElementById("form2").reset();
   }

   const interfaz = () => {
      return(

         <body>

            <div className="root-container_addcomestibles">

               <div className="parent-container_addcomestibles">

                  <div className="search-container_addcomestibles">        
                     <div className="search-box_addcomestibles">
                        
                        <h1 className="main-title_addcomestibles">Información del Comestible</h1>

                        <form id="form" className="form_addcomestibles" action=""> 
                           <label for="nombre">
                              <h2>Nombre</h2>
                              <input type="text" onChange={cambiarValor} name="nombre" id="nombre"/>
                           </label>   
                           <label for="cantidad">
                              <h2>Cantidad</h2>
                              <input type="text" onChange={cambiarValor} name="cantidad" id="cantidad"/>
                           </label>     
                           <label for="tipo">
                              <h2>Tipo de Comestible</h2>
                              <input list="tipo" onChange={cambiarValor} name="tipo"/>
                              <datalist id="tipo">
                                 <option value="1. Comestible"></option>
                                 <option value="2. Comestible"></option>
                                 <option value="3. Comestible"></option>
                              </datalist>
                           </label> 
                           <label for="restaurante">
                              <h2>Restaurante</h2>
                              <input list="restaurante" onChange={cambiarValor} name="restaurante"/>
                              <datalist id="restaurante">
                                 <option value="1. Restaurante"></option>
                                 <option value="2. Restaurante"></option>
                                 <option value="3. Restaurante"></option>
                              </datalist>
                           </label>   
                                          
                        </form>

                        <div className="search-buttons-container_addcomestibles">
                           <button onClick={limpiarInputs} className="btnclear_addcomestibles"><span></span></button>
                           <button onClick={enviarDatos} className="btnAdd_addcomestibles"><span></span></button>
                           <Link to="/comestibles" className="btnclose_addcomestibles"><span></span></Link>
                        </div>
                     </div>

                     <div className="rightforms_addcomestibles">
                        <form id="form2" className="formdos_addcomestibles" action="">
                           
                           <label for="marca">
                              <h2>Marca</h2>
                              <input list="marca" onChange={cambiarValor} name="marca"/>
                              <datalist id="marca">
                                 <option value="1. Marca"></option>
                                 <option value="2. Marca"></option>
                                 <option value="3. Marca"></option>
                              </datalist>
                           </label> 
                           <label for="clase">
                              <h2>Clase de Comestible</h2>
                              <input list="clase" onChange={cambiarValor} name="clase"/>
                              <datalist id="clase">
                                 <option value="1. clase"></option>
                                 <option value="2. clase"></option>
                                 <option value="3. clase"></option>
                              </datalist>
                           </label> 
                           <label for="linea">
                              <h2>Linea de Comestible</h2>
                              <input list="linea" onChange={cambiarValor} name="linea"/>
                              <datalist id="linea">
                                 <option value="1. linea"></option>
                                 <option value="2. linea"></option>
                                 <option value="3. linea"></option>
                              </datalist>
                           </label> 
                           <label for="medida">
                              <h2>Unidad de Medida</h2>
                              <input list="medida" onChange={cambiarValor} name="medida"/>
                              <datalist id="medida">
                                 <option value="1. medida"></option>
                                 <option value="2. medida"></option>
                                 <option value="3. medida"></option>
                              </datalist>
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

export default AddComestibles;

