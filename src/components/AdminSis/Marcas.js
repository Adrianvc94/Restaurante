import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import '../../Styles/Marcas.css';

const Marcas = () => {

   const [marcas, setMarcas] = useState([]);
   const [marca, setMarca] = useState({
      nombre:'',
      nacionalidad:'',
      descripcion:'',
      foto_marca:'',
      cedula_juridica:'',
      nombre_empresa:'',
      detalle_empresa:'',
      telefono:'',
      foto_empresa:''
   });
   const[consecutivo, setConsecutivo] = useState();

   const [url] = useState('http://localhost:5000/marcas');
   const [urlconsecutivo] = useState('http://localhost:5000/consecutivos');

   const traerDatosMarcas = async () => {
      let datos = await fetch(url)
      .then(response => response.json())
      setMarcas(datos);
   }

   const traerDatosConsecutivo = async () => {
      let cons = await fetch(urlconsecutivo)
      .then(response => response.json())

      cons.map(c => {
         if (c.prefijo == "M" ) 
            return setConsecutivo(c.prefijo);
      })
   }

   // const cambiarValor = (e) =>{
   //    const {name, value} = e.target;
   //    setMarca({
   //       ...marca,
   //       [name] : value
   //    })
   // }

   const enviarDatos = () =>{
      fetch(url, {
         headers:{
            Accept:"application/json",
            "Content-type": "application/json"
         },
         method:"POST",
         body: JSON.stringify(marca)
      })
      .then(res => console.log(res))
      .catch(error => console.log(error))
   }

   useEffect(() => {
      traerDatosMarcas();
      traerDatosConsecutivo();
   }, [])

   const refreshPage = ()=>{
      window.location.reload();
   }


   const interfaz = () => {

      return (
       
         <body>

            <div class="root-container_marcas">

               <div class="parent-container_marcas">

                  <div class="search-container_marcas">        
                     <div class="search-buttons-container_marcas">
                        <button onClick={refreshPage} class="btnrefresh_marcas"><span></span></button>
                        <Link to="/proveedores" class="btnclose_marcas"><span></span></Link>
                        <button class="btnclear_marcas"><span></span></button>
                        <button class="btnsearch_marcas"><span></span></button>
                     </div>
                     <div class="search-box_marcas">
                        <h2>Solo busqueda</h2>
                        <form id="form" class="form_marcas" action="">
                           <label for="codigo">
                              <h2>Código de la Marca</h2>
                              <input type="text" id="codigo"/>
                           </label>  
                           <label for="nombre">
                              <h2>Nombre de la Marca</h2>
                              <input type="text" id="nombre"/>
                           </label>         
                        </form>
                        <form class="form_marcas" action="">
                           <label for="empresa">
                              <h2>Empresa</h2>
                              <input type="text" id="empresa"/>
                           </label>  
                           <label for="nacionalidad">
                              <h2>Nacionalidad</h2>
                              <input type="text" id="nacionalidad"/>
                           </label>         
                        </form>
                     </div>
                     <div class="add-delete-buttons_marcas">
                        <Link to="/addmarcas" class="btnAdd_marcas"><span></span></Link>
                        <button class="btnDelete_marcas"><span></span></button>
                     </div>
                  </div>
            
                  <div class="info-container_marcas"> 
                     <table>
                        <tr>
                           <th>Codigo</th>
                           <th>Nombre</th>
                           <th>Descripcion</th>
                           <th>Nacionalidad</th>
                           <th>Empresa</th>
                           <th>Telefono</th>
                        </tr>

                        {marcas.map(m => {
                           return <tr>
                           <td>{consecutivo}</td>
                           <td>{m.nombre}</td>
                           <td>{m.descripcion}</td>
                           <td>{m.nacionalidad}</td>
                           <td>{m.empresa}</td>
                           <td>{m.telefono}</td>
                        </tr>
                        })}
                     </table>
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

export default Marcas;