import './App.css';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Puestos from './components/AdminSis/Puestos';
import Login from './components/Login';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import MainPageSis from './components/AdminSis/MainPageSis';
import ListaRestaurante from './components/AdminSis/ListaRestaurantes';
import AddRestaurante from './components/AdminSis/AddRestaurante';
import Administracion from './components/AdminSis/Administracion';
import Especiales from './components/AdminSis/Especiales';
import Buffet from './components/AdminSis/Buffet';
import AddBuffet from './components/AdminSis/AddBuffet';
import TiposBebidas from './components/AdminSis/TiposBebidas';
import ListaEspecialidades from './components/AdminSis/ListaEspecialidades';
import AddEspecialidades from './components/AdminSis/AddEspecialidades';
import AddPuestos from './components/AdminSis/AddPuestos';
import Mesas from './components/AdminSis/Mesas';
import AddMesas from './components/AdminSis/AddMesas';

import Proveedores from './components/AdminSis/Proveedores';
import Marcas from './components/AdminSis/Marcas';
import Productos from './components/AdminSis/Productos';
import Comestible from './components/AdminSis/Comestibles';
import AddComestibles from './components/AdminSis/AddComestibles';
import Desechables from './components/AdminSis/Desechables';
import AddDesechables from './components/AdminSis/AddDesechables';
import Limpieza from './components/AdminSis/Limpieza';
import Tecnologia from './components/AdminSis/Tecnologia';
import AddTecnologia from './components/AdminSis/AddTecnologia';
import Utensilios from './components/AdminSis/Utensilios';
import AddUtensilios from './components/AdminSis/AddUtensilios';
import ListaProveedores from './components/AdminSis/ListaProveedores';
import Empleado from './components/AdminSis/Empleado';
import AddEmpleado from './components/AdminSis/AddEmpleado';

import MainPageSeg from './components/AdminSeg/MainPageSeg';
import Seguridad from './components/AdminSeg/Seguridad';
import Usuario from './components/AdminSeg/Usuario';
import Consecutivos from './components/AdminSeg/Consecutivos';
import AddConsecutivos from './components/AdminSeg/AddConsecutivos';
import Paises from './components/AdminSeg/Paises';
import AddPaises from './components/AdminSeg/AddPaises';
import Roles from './components/AdminSeg/Roles';
import AddRoles from './components/AdminSeg/AddRoles';
import Cajas from './components/AdminSeg/Cajas';
import Medidas from './components/AdminSeg/Medidas';
import AddMedidas from './components/AdminSeg/AddMedidas';
import Clientes from './components/AdminSis/Clientes';
import AyudaSistemaSis from './components/AdminSis/AyudaSistemaSis';
import AyudaSeguridadSis from './components/AdminSis/AyudaSeguridadSis';
import AddUsuario from './components/AdminSeg/AddUsuario';
import AddLimpieza from './components/AdminSis/AddLimpieza';
import AyudaSeguridadSeg from './components/AdminSeg/AyudaSeguridadSeg';
import AyudaSistemaSeg from './components/AdminSeg/AyudaSistemaSeg';
import AddMarcas from './components/AdminSis/AddMarcas';
import BebidaCaliente from './components/AdminSis/BebidaCaliente';
import AddBebidaCaliente from './components/AdminSis/AddBebidaCaliente';
import BebidaHelada from './components/AdminSis/BebidaHelada';
import AddBebidaHelada from './components/AdminSis/AddBedidaHelada';
import Vinos from './components/AdminSis/Vinos';
import AddVinos from './components/AdminSis/AddVinos';
import Gaseosa from './components/AdminSis/Gaseosa';
import AddGaseosa from './components/AdminSis/AddGaseosa';
import Licores from './components/AdminSis/Licores';
import AddLicores from './components/AdminSis/AddLicores';


import {Username} from './Helper/Context';
import { useState } from 'react';

function App() {

  const [username, setUsername] = useState({});

  return (
 
    <Router>

      {/* <Switch>
        <Username.Provider value={{username, setUsername}}>
        
          <Route path="/" component={Login} exact></Route>

          <Route path="/login" component={Login} exact></Route>
          
          <Route path="/mainpagesis" component={MainPageSis} exact></Route>     

        </Username.Provider>
      
      </Switch> */}

      <Switch>
        <Route path="/" exact>   
          <Username.Provider value={{username, setUsername}}>
            <Login/>
          </Username.Provider> 
        </Route>

        <Route path="/login" exact>    
          <Username.Provider value={{username, setUsername}}>
            <Login/>
          </Username.Provider> 
        </Route>

        
        {/* Admin Sistemas */}
        <Route path="/mainpagesis" exact>   
            <Username.Provider value={{username, setUsername}}>
            <MainPageSis/>
          </Username.Provider> 
        </Route>

        <Route path="/listarestaurante" exact>
          <Username.Provider value={{username, setUsername}}>
            <ListaRestaurante/>
          </Username.Provider> 
        </Route>

        <Route path="/addrestaurante" exact>
          <Username.Provider value={{username, setUsername}}>
            <AddRestaurante/>
          </Username.Provider> 
        </Route>

        <Route path="/administracion" exact>
          <Username.Provider value={{username, setUsername}}>
            <Administracion/>
          </Username.Provider> 
        </Route>

        <Route path="/especiales" exact>
          <Username.Provider value={{username, setUsername}}>
            <Especiales/>
          </Username.Provider> 
        </Route>

        <Route path="/buffet" exact>
          <Username.Provider value={{username, setUsername}}>
            <Buffet/>
          </Username.Provider> 
        </Route>

        <Route path="/addbuffet" exact>
          <Username.Provider value={{username, setUsername}}>
            <AddBuffet/>
          </Username.Provider> 
        </Route>

        <Route path="/tiposbebidas" exact>
          <Username.Provider value={{username, setUsername}}>
            <TiposBebidas/>
          </Username.Provider> 
        </Route>

        <Route path="/bebidascalientes" exact>
          <Username.Provider value={{username, setUsername}}>
            <BebidaCaliente/>
          </Username.Provider> 
        </Route>

        <Route path="/addbebidascalientes" exact>
          <Username.Provider value={{username, setUsername}}>
            <AddBebidaCaliente/>
          </Username.Provider> 
        </Route>

        <Route path="/bebidasheladas" exact>
          <Username.Provider value={{username, setUsername}}>
            <BebidaHelada/>
          </Username.Provider> 
        </Route>

        <Route path="/addbebidasheladas" exact>
          <Username.Provider value={{username, setUsername}}>
            <AddBebidaHelada/>
          </Username.Provider> 
        </Route>

        <Route path="/vinos" exact>
          <Username.Provider value={{username, setUsername}}>
            <Vinos/>
          </Username.Provider> 
        </Route>

        <Route path="/addvinos" exact>
          <Username.Provider value={{username, setUsername}}>
            <AddVinos/>
          </Username.Provider> 
        </Route>

        
        <Route path="/gaseosa" exact>
          <Username.Provider value={{username, setUsername}}>
            <Gaseosa/>
          </Username.Provider> 
        </Route>

        <Route path="/addgaseosa" exact>
          <Username.Provider value={{username, setUsername}}>
            <AddGaseosa/>
          </Username.Provider> 
        </Route>

        <Route path="/licores" exact>
          <Username.Provider value={{username, setUsername}}>
            <Licores/>
          </Username.Provider> 
        </Route>

        <Route path="/addlicores" exact>
          <Username.Provider value={{username, setUsername}}>
            <AddLicores/>
          </Username.Provider> 
        </Route>






        <Route path="/especialidades" exact>
          <Username.Provider value={{username, setUsername}}>
            <ListaEspecialidades/>
          </Username.Provider> 
        </Route>

        <Route path="/addespecialidades" exact>
          <Username.Provider value={{username, setUsername}}>
            <AddEspecialidades/>
          </Username.Provider> 
        </Route>

        <Route path="/puestos" exact>
          <Username.Provider value={{username, setUsername}}>
            <Puestos/>
          </Username.Provider> 
        </Route>

        <Route path="/addpuestos" exact>
          <Username.Provider value={{username, setUsername}}>
            <AddPuestos/>
          </Username.Provider> 
        </Route>

        <Route path="/mesas" exact>
          <Username.Provider value={{username, setUsername}}>
            <Mesas/>
          </Username.Provider> 
        </Route>

        <Route path="/addmesas" exact>
          <Username.Provider value={{username, setUsername}}>
            <AddMesas/>
          </Username.Provider> 
        </Route>

        <Route path="/empleados" exact>
          <Username.Provider value={{username, setUsername}}>
            <Empleado/>
          </Username.Provider> 
        </Route>

        <Route path="/addempleados" exact>
          <Username.Provider value={{username, setUsername}}>
            <AddEmpleado/>
          </Username.Provider> 
        </Route>

        <Route path="/proveedores" exact>
          <Username.Provider value={{username, setUsername}}>
            <Proveedores/>
          </Username.Provider> 
        </Route>

        <Route path="/marcas" exact>
          <Username.Provider value={{username, setUsername}}>
            <Marcas/>
          </Username.Provider> 
        </Route>

        <Route path="/productos" exact>
          <Username.Provider value={{username, setUsername}}>
            <Productos/>
          </Username.Provider> 
        </Route>

        <Route path="/comestibles" exact>
          <Username.Provider value={{username, setUsername}}>
            <Comestible/>
          </Username.Provider> 
        </Route>

        <Route path="/addcomestibles" exact>
          <Username.Provider value={{username, setUsername}}>
            <AddComestibles/>
          </Username.Provider> 
        </Route>

        <Route path="/desechables" exact>
          <Username.Provider value={{username, setUsername}}>
            <Desechables/>
          </Username.Provider> 
        </Route>

        <Route path="/adddesechables" exact>
          <Username.Provider value={{username, setUsername}}>
            <AddDesechables/>
          </Username.Provider> 
        </Route>

        <Route path="/limpieza" exact>
          <Username.Provider value={{username, setUsername}}>
            <Limpieza/>
          </Username.Provider> 
        </Route>

        <Route path="/tecnologia" exact>
          <Username.Provider value={{username, setUsername}}>
            <Tecnologia/>
          </Username.Provider> 
        </Route>

        <Route path="/addtecnologia" exact>
          <Username.Provider value={{username, setUsername}}>
            <AddTecnologia/>
          </Username.Provider> 
        </Route>

        <Route path="/utensilios" exact>
          <Username.Provider value={{username, setUsername}}>
            <Utensilios/>
          </Username.Provider> 
        </Route>

        <Route path="/addutensilios" exact>
          <Username.Provider value={{username, setUsername}}>
            <AddUtensilios/>
          </Username.Provider> 
        </Route>

        <Route path="/listaproveedores" exact>
          <Username.Provider value={{username, setUsername}}>
            <ListaProveedores/>
          </Username.Provider> 
        </Route>

        <Route path="/clientes" exact>
          <Username.Provider value={{username, setUsername}}>
            <Clientes/>
          </Username.Provider> 
        </Route>

        <Route path="/ayudasistemasis" exact>
          <Username.Provider value={{username, setUsername}}>
            <AyudaSistemaSis/>
          </Username.Provider> 
        </Route>

        <Route path="/ayudaseguridadsis" exact>
          <Username.Provider value={{username, setUsername}}>
            <AyudaSeguridadSis/>
          </Username.Provider> 
        </Route>

        <Route path="/addlimpieza" exact>
          <Username.Provider value={{username, setUsername}}>
            <AddLimpieza/>
          </Username.Provider> 
        </Route>








        {/* Admin Seguridad */}

        <Route path="/mainpageseg" exact>
          <Username.Provider value={{username, setUsername}}>
            <MainPageSeg/>
          </Username.Provider> 
        </Route>

        <Route path="/seguridad" exact>
          <Username.Provider value={{username, setUsername}}>
            <Seguridad/>
          </Username.Provider> 
        </Route>

        <Route path="/usuarios" exact>
          <Username.Provider value={{username, setUsername}}>
            <Usuario/>
          </Username.Provider> 
        </Route>

        <Route path="/consecutivos" exact>
          <Username.Provider value={{username, setUsername}}>
            <Consecutivos/>
          </Username.Provider> 
        </Route>

        <Route path="/addconsecutivos" exact>
          <Username.Provider value={{username, setUsername}}>
            <AddConsecutivos/>
          </Username.Provider> 
        </Route>

        <Route path="/paises" exact>
          <Username.Provider value={{username, setUsername}}>
            <Paises/>
          </Username.Provider> 
        </Route>

        <Route path="/addpaises" exact>
          <Username.Provider value={{username, setUsername}}>
            <AddPaises/>
          </Username.Provider> 
        </Route>

        <Route path="/roles" exact>
          <Username.Provider value={{username, setUsername}}>
            <Roles/>
          </Username.Provider> 
        </Route>

        <Route path="/addroles" exact>
          <Username.Provider value={{username, setUsername}}>
            <AddRoles/>
          </Username.Provider> 
        </Route>

        <Route path="/cajas" exact>
          <Username.Provider value={{username, setUsername}}>
            <Cajas/>
          </Username.Provider> 
        </Route>

        <Route path="/medidas" exact>
          <Username.Provider value={{username, setUsername}}>
            <Medidas/>
          </Username.Provider> 
        </Route>

        <Route path="/addmedidas" exact>
          <Username.Provider value={{username, setUsername}}>
            <AddMedidas/>
          </Username.Provider> 
        </Route>

        <Route path="/addusuarios" exact>
          <Username.Provider value={{username, setUsername}}>
            <AddUsuario/>
          </Username.Provider> 
        </Route>

        <Route path="/ayudaseguridadseg" exact>
          <Username.Provider value={{username, setUsername}}>
            <AyudaSeguridadSeg/>
          </Username.Provider> 
        </Route>

        <Route path="/ayudasistemaseg" exact>
          <Username.Provider value={{username, setUsername}}>
            <AyudaSistemaSeg/>
          </Username.Provider> 
        </Route>

        <Route path="/addmarcas" exact>
          <Username.Provider value={{username, setUsername}}>
            <AddMarcas/>
          </Username.Provider> 
        </Route>



        {/* Admin Restaurante */}

        {/* Admin Cuentas */}

      </Switch>


    </Router>


  );
}

export default App;
