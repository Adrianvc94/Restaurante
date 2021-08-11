import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import '../../Styles/Empleado.css';

const Empleado = () => {

   const [empleados, setEmpleados] = useState([]);
   const [empleado, setEmpleado] = useState({
      cedula:'',
      nombre:'',
      primer_apellido:'',
      segundo_apellido:'',
      telefono_uno:'',
      telefono_dos:'',
      puesto:'',
      nacionalidad:'',
      restaurante:''
   });
   const[consecutivo, setConsecutivo] = useState();

   const [url] = useState('http://localhost:5000/empleados');
   const [urlconsecutivo] = useState('http://localhost:5000/consecutivos');

   const traerDatosEmpleado = async () => {
      let datos = await fetch(url)
      .then(response => response.json())
      setEmpleados(datos);
   }
   
   const traerDatosConsecutivo = async () => {
      let cons = await fetch(urlconsecutivo)
      .then(response => response.json())

      cons.map(c => {
         if (c.prefijo == "EMP" ) 
            return setConsecutivo(c.prefijo);
      })
   }

   const cambiarValor = (e) =>{
      const {name, value} = e.target;
      setEmpleado({
         ...empleado,
         [name] : value
      })
   }

   const enviarDatos = () =>{
      fetch(url, {
         headers:{
            Accept:"application/json",
            "Content-type": "application/json"
         },
         method:"POST",
         body: JSON.stringify(empleado)
      })
      .then(res => console.log(res))
      .catch(error => console.log(error))
   }

   useEffect(() => {
      traerDatosEmpleado();
      traerDatosConsecutivo();
   }, [])

   const refreshPage = ()=>{
      window.location.reload();
   }
   

   const interfaz = () => {

      return (
         
         <body>
   
            <div class="root-container_usuario">

               <div class="parent-container_usuario">

                  <div class="search-container_usuario">        
                     <div class="search-buttons-container_usuario">
                        <button onClick={refreshPage} class="btnrefresh_usuario"><span></span></button>
                        <Link to="/administracion" class="btnclose_usuario"><span></span></Link>
                        <button class="btnclear_usuario"><span></span></button>
                        <button class="btnsearch_usuario"><span></span></button>
                     </div>
                     <div class="search-box_usuario">
                        <h2>Solo busqueda</h2>
                        <form class="form_usuario" action="">
                           <label for="idrestaurante">
                              <h2>Código del Empleado</h2>
                              <input type="text" id="idrestaurante"/>
                           </label>  
                           <label for="nameRestaurante">
                              <h2>Nombre del Empleado</h2>
                              <input type="text" id="nameRestaurante"/>
                           </label>         
                        </form>
                     </div>
                     <div class="add-delete-buttons_usuario">
                        <Link to="/addempleados" class="btnAdd_usuario"><span></span></Link>
                        <button class="btnDelete_usuario"><span></span></button>
                     </div>
                  </div>
            
                  <div class="info-container_usuario"> 
                     <table>
                        <tr>
                           <th>Codigo</th>
                           <th>Cedula</th>
                           <th>Nombre</th>
                           <th>Primer Apellido</th>
                           <th>Segundo Apellido</th>
                        </tr>

                        {empleados.map(e => {
                           return <tr>
                           <td>{consecutivo}</td>
                           <td>{e.cedula}</td>
                           <td>{e.nombre}</td>
                           <td>{e.primer_apellido}</td>
                           <td>{e.segundo_apellido}</td>
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

export default Empleado;