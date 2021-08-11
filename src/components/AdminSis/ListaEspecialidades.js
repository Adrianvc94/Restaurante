import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import '../../Styles/ListaEspecialidades.css';

const ListaEspecialidades = () => {

   const [especialidades, setEspecialidades] = useState([]);
   const [especialidad, setEspecialidad] = useState({
      nombre:'',
      ingredientes:'',
      precio:'',
      detalle:''
   });
   const[consecutivo, setConsecutivo] = useState();

   const [url] = useState('http://localhost:5000/especialidades');
   const [urlconsecutivo] = useState('http://localhost:5000/consecutivos');

   const traerDatosEspecialidades = async () => {
      let datos = await fetch(url)
      .then(response => response.json())
      setEspecialidades(datos);
   }

   const traerDatosConsecutivo = async () => {
      let cons = await fetch(urlconsecutivo)
      .then(response => response.json())

      cons.map(c => {
         if (c.prefijo == "ESP" ) 
            return setConsecutivo(c.prefijo);
      })
   }

   const enviarDatos = () =>{
      fetch(url, {
         headers:{
            Accept:"application/json",
            "Content-type": "application/json"
         },
         method:"POST",
         body: JSON.stringify(especialidad)
      })
      .then(res => console.log(res))
      .catch(error => console.log(error))
   }

   useEffect(() => {
      traerDatosEspecialidades();
      traerDatosConsecutivo();
   }, [])

   const refreshPage = ()=>{
      window.location.reload();
   }


   const interfaz = () => {
      return(

         <body>
   
            <div className="root-container_especialidades">

               <div className="parent-container_especialidades">

                  <div className="search-container_especialidades">        
                     <div className="search-buttons-container_especialidades">
                        <button onClick={refreshPage} className="btnrefresh_especialidades"><span></span></button>
                        <Link to="/especiales" className="btnclose_especialidades"><span></span></Link>
                        <button className="btnclear_especialidades"><span></span></button>
                        <button className="btnsearch_especialidades"><span></span></button>
                     </div>
                     <div className="search-box_especialidades">
                        <h2>Solo busqueda</h2>
                        <form className="form_especialidades" action="">
                           <label for="idespecialidades">
                              <h2>Código de las Especialidades</h2>
                              <input type="text" id="idespecialidades"/>
                           </label>  
                           <label for="nameEspecialidades">
                              <h2>Nombre de las Especialidades</h2>
                              <input type="text" id="nameEspecialidades"/>
                           </label>         
                        </form>
                     </div>
                     <div className="add-delete-buttons_especialidades">
                        <Link to="/addespecialidades" className="btnAdd_especialidades"><span></span></Link>
                        <button className="btnDelete_especialidades"><span></span></button>
                     </div>
                  </div>
            
                  <div className="info-container_especialidades"> 
                     <table>
                        <tr>
                           <th>Codigo</th>
                           <th>Nombre del Platillo</th>
                           <th>Ingredientes</th>
                           <th>Precio</th>
                           <th>Detalle</th>
                        </tr>

                        {especialidades.map(e => {
                           return <tr>
                           <td>{consecutivo}</td>
                           <td>{e.nombre}</td>
                           <td>{e.ingredientes}</td>
                           <td>{e.precio}</td>
                           <td>{e.detalle}</td>
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

export default ListaEspecialidades;
