import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import "../../Styles/AddVinos.css";

const AddVinos = () => {

   
   const [vino, setVino] = useState({
      nombre:'',
      marca:'',
      nacionalidad:'',
      precio_unitario:'',
      precio_botella:'',
      anno_cosecha:'',
      restaurante:'',
      cantidada:'',
      descripcion:''
   });

   const [restaurantes, SetRestaurantes] = useState([]);
   const [paises, SetPaises] = useState([]);
   const [marcas, SetMarcas] = useState([]);

   const [url] = useState('http://localhost:5000/vino');
   const [urlrestaurante] = useState('http://localhost:5000/restaurantes');
   const [urlpaises] = useState('http://localhost:5000/paises');
   const [urlmarcas] = useState('http://localhost:5000/marcas');

   // Hacer la parte de los inputs y validar lo de paises y marcas

   const cambiarValor = (e) =>{
      const {name, value} = e.target;
      setVino({
         ...vino,
         [name] : value
      })
   }

   const traerNombreRestaurante = async () => {
      let res = await fetch(urlrestaurante)
      .then(response => response.json())
      SetRestaurantes(res);
   }

   const traerPais = async () => {
      let pais = await fetch(urlpaises)
      .then(response => response.json())
      SetPaises(pais);
   }

   const traerMarca = async () => {
      let marca = await fetch(urlmarcas)
      .then(response => response.json())
      SetMarcas(marca);
   }

   const enviarDatos = async () =>{
      await fetch(url, {
         headers:{
            Accept:"application/json",
            "Content-type": "application/json"
         },
         method:"POST",
         body: JSON.stringify(vino)
      })
      .then(response => response.json())
      .catch(error => console.log(error))
   }

   const limpiarInputs = () => {
      document.getElementById("form").reset();
   }

   useEffect(() => {
      traerNombreRestaurante();
      traerPais();
      traerMarca();
   },[])

   const interfaz = () => {
      return(

         <body>

            <div className="root-container_addVino">

               <div className="parent-container_addVino">

                  <div className="search-container_addVino">        
                     <div className="search-box_addVino">
                        
                        <h1 className="main-title_addVino">Información del Vino</h1>

                        <form id="form" className="form_addVino" action="">
                           <label for="nameVino">
                              <h2>Nombre</h2>
                              <input type="text" onChange={cambiarValor} name="nombre" id="nameVino"/>
                           </label>       
                           <label for="marca">
                              <h2>Marca</h2>
                              <select name="marca" onChange={cambiarValor} name="marca" id="marca">
                                 <option value="none" selected disabled hidden>
                                    Eliga una opción
                                 </option>
                                 {marcas.map(m => {
                                       return <option defaultValue={m.nombre} value={m.nombre}>{m.nombre}</option> 
                                 })}
                              </select>
                           </label>
                           <label for="nacionalidad">
                              <h2>Nacionalidad</h2>
                              <select name="nacionalidad" onChange={cambiarValor} name="nacionalidad" id="nacionalidad">
                                 <option value="none" selected disabled hidden>
                                    Eliga una opción
                                 </option>
                                 {paises.map(p => {
                                       return <option defaultValue={p.nombre} value={p.nombre}>{p.nombre}</option> 
                                 })}
                              </select>
                           </label>
                           <label for="precio_unitario">
                              <h2>Precio Unitario</h2>
                              <input type="text" onChange={cambiarValor} name="precio_unitario" id="precio_unitario"/>
                           </label>   
                           <label for="precio_botella">
                              <h2>Precio Botella</h2>
                              <input type="text" onChange={cambiarValor} name="precio_botella" id="precio_botella"/>
                           </label>   
                         
                                          
                        </form>

                        <div className="search-buttons-container_addVino">
                           <button onClick={limpiarInputs} className="btnclear_addVino"><span></span></button>
                           <button onClick={enviarDatos} className="btnAdd_addVino"><span></span></button>
                           <Link to="/vinos" className="btnclose_addVino"><span></span></Link>
                        </div>
                     </div>

                     <div className="container-form2_addVino">
                        <form id="form2" className="form_addVino" action="">
                           <label for="anno_cosecha">
                              <h2>Año de la Cosecha</h2>
                              <input type="text" onChange={cambiarValor} name="anno_cosecha" id="anno_cosecha"/>
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
                           <label for="cantidad">
                              <h2>Cantidad</h2>
                              <input type="text" onChange={cambiarValor} name="cantidad" id="cantidad"/>
                           </label>   
                           <label for="descripcion">
                              <h2>Descripción</h2>
                              <input type="text" onChange={cambiarValor} name="descripcion" id="descripcion"/>
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

export default AddVinos;

