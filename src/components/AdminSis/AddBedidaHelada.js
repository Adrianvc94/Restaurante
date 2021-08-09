import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import "../../Styles/AddBebidaHelada.css";

const AddBebidaHelada = () => {

   
   const [bebidaHelada, setBebidaHelada] = useState({
      nombre:'',
      marca:'',
      nacionalidad:'',
      precio:'',
      restaurante:''
   });

   const [restaurantes, SetRestaurantes] = useState([]);

   const [url] = useState('http://localhost:5000/bebidahelada');
   const [urlrestaurante] = useState('http://localhost:5000/restaurantes');

   const cambiarValor = (e) =>{
      const {name, value} = e.target;
      setBebidaHelada({
         ...bebidaHelada,
         [name] : value
      })
   }

   const traerNombreRestaurante = async () => {
      let res = await fetch(urlrestaurante)
      .then(response => response.json())
      SetRestaurantes(res);
   }

   const enviarDatos = async () =>{
      await fetch(url, {
         headers:{
            Accept:"application/json",
            "Content-type": "application/json"
         },
         method:"POST",
         body: JSON.stringify(bebidaHelada)
      })
      .then(response => response.json())
      .catch(error => console.log(error))
   }

   const limpiarInputs = () => {
      document.getElementById("form").reset();
   }

   useEffect(() => {
      traerNombreRestaurante();
   },[])

   const interfaz = () => {
      return(

         <body>
   
            <div className="root-container_addBebidaHelada">
         
               <div className="parent-container_addBebidaHelada">
         
                  <div className="search-container_addBebidaHelada">        
                     <div className="search-box_addBebidaHelada">
                        
                        <h1 className="main-title_addBebidaHelada">Información de la Bebida</h1>
         
                        <form id="form" className="form_addBebidaHelada" action="">
                           <label for="nombre">
                              <h2>Nombre</h2>
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

                           <label for="restaurante">
                              <h2>Restaurante</h2>
                              <select name="restaurante" onChange={cambiarValor} name="restaurante" id="restaurante">
                                 <option value="none" selected disabled hidden>
                                    Eliga una opción
                                 </option>
                                 {restaurantes.map(r => {
                                       return <option defaultValue={r.nombre} value={r.nombre}>{r.nombre}</option> 
                                 })}
                              </select>
                           </label>

                           <label for="descripcion">
                              <h2>Descripcion</h2>
                              <input type="text" onChange={cambiarValor} name="descripcion" id="descripcion"/>
                           </label>                          
                        </form>
         
                        <div className="search-buttons-container_addBebidaHelada">
                           <button onClick={limpiarInputs} className="btnclear_addBebidaHelada"><span></span></button>
                           <button onClick={enviarDatos} className="btnAdd_addBebidaHelada"><span></span></button>
                           <Link to="/bebidasheladas" className="btnclose_addBebidaHelada"><span></span></Link>
                        </div>
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

export default AddBebidaHelada;

