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

// Esto se tiene que cambiar para que sean empleados
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

function App() {
  return (
    <Router>

      <Switch>
      <Route path="/" exact>    
          <Login/>
        </Route>

        <Route path="/login" exact>    
          <Login/>
        </Route>

        

       

        {/* Admin Sistemas */}
        <Route path="/mainpagesis" exact>
          <MainPageSis/>
        </Route>

        <Route path="/listarestaurante" exact>
          <ListaRestaurante/>
        </Route>

        <Route path="/addrestaurante" exact>
          <AddRestaurante/>
        </Route>

        <Route path="/administracion" exact>
          <Administracion/>
        </Route>

        <Route path="/especiales" exact>
          <Especiales/>
        </Route>

        <Route path="/buffet" exact>
          <Buffet/>
        </Route>

        <Route path="/addbuffet" exact>
          <AddBuffet/>
        </Route>

        <Route path="/tiposbebidas" exact>
          <TiposBebidas/>
        </Route>

        <Route path="/bebidascalientes" exact>
          <BebidaCaliente/>
        </Route>




        <Route path="/especialidades" exact>
          <ListaEspecialidades/>
        </Route>

        <Route path="/addespecialidades" exact>
          <AddEspecialidades/>
        </Route>

        <Route path="/puestos" exact>
          <Puestos/>
        </Route>

        <Route path="/addpuestos" exact>
          <AddPuestos/>
        </Route>

        <Route path="/mesas" exact>
          <Mesas/>
        </Route>

        <Route path="/addmesas" exact>
          <AddMesas/>
        </Route>

        <Route path="/empleados" exact>
          <Empleado/>
        </Route>

        <Route path="/addempleados" exact>
          <AddEmpleado/>
        </Route>

        <Route path="/proveedores" exact>
          <Proveedores/>
        </Route>

        <Route path="/marcas" exact>
          <Marcas/>
        </Route>

        <Route path="/productos" exact>
          <Productos/>
        </Route>

        <Route path="/comestibles" exact>
          <Comestible/>
        </Route>

        <Route path="/addcomestibles" exact>
          <AddComestibles/>
        </Route>

        <Route path="/desechables" exact>
          <Desechables/>
        </Route>

        <Route path="/adddesechables" exact>
          <AddDesechables/>
        </Route>

        <Route path="/limpieza" exact>
          <Limpieza/>
        </Route>

        <Route path="/tecnologia" exact>
          <Tecnologia/>
        </Route>

        <Route path="/addtecnologia" exact>
          <AddTecnologia/>
        </Route>

        <Route path="/utensilios" exact>
          <Utensilios/>
        </Route>

        <Route path="/addutensilios" exact>
          <AddUtensilios/>
        </Route>

        <Route path="/listaproveedores" exact>
          <ListaProveedores/>
        </Route>

        <Route path="/clientes" exact>
          <Clientes/>
        </Route>

        <Route path="/ayudasistemasis" exact>
          <AyudaSistemaSis/>
        </Route>

        <Route path="/ayudaseguridadsis" exact>
          <AyudaSeguridadSis/>
        </Route>

        <Route path="/addlimpieza" exact>
          <AddLimpieza/>
        </Route>








        {/* Admin Seguridad */}

        <Route path="/mainpageseg" exact>
          <MainPageSeg/>
        </Route>

        <Route path="/seguridad" exact>
          <Seguridad/>
        </Route>

        <Route path="/usuarios" exact>
          <Usuario/>
        </Route>

        <Route path="/consecutivos" exact>
          <Consecutivos/>
        </Route>

        <Route path="/addconsecutivos" exact>
          <AddConsecutivos/>
        </Route>

        <Route path="/paises" exact>
          <Paises/>
        </Route>

        <Route path="/addpaises" exact>
          <AddPaises/>
        </Route>

        <Route path="/roles" exact>
          <Roles/>
        </Route>

        <Route path="/addroles" exact>
          <AddRoles/>
        </Route>

        <Route path="/cajas" exact>
          <Cajas/>
        </Route>

        <Route path="/medidas" exact>
          <Medidas/>
        </Route>

        <Route path="/addmedidas" exact>
          <AddMedidas/>
        </Route>

        <Route path="/addusuarios" exact>
          <AddUsuario/>
        </Route>

        <Route path="/ayudaseguridadseg" exact>
          <AyudaSeguridadSeg/>
        </Route>

        <Route path="/ayudasistemaseg" exact>
          <AyudaSistemaSeg/>
        </Route>

        <Route path="/addmarcas" exact>
          <AddMarcas/>
        </Route>



        {/* Admin Restaurante */}

        {/* Admin Cuentas */}

      </Switch>

    </Router>
  );
}

export default App;
