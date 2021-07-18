// import logo from './logo.svg';
import './App.css';
import Puestos from './components/Puestos';
import Login from './components/Login';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import MainPage from './components/MainPage';


function App() {
  return (
    // <div className="">
    //   {/* <Puestos/> */}
      // <Login/>
    // </div>
    <Router>
      {/* <Route path="/" exact render={(props) => <Login/>} />
      <Route path="/puestos" exact render={(props) => <Puestos/>} /> */}

      <Switch>
      <Route path="/" exact>    
          <Login/>
        </Route>

        <Route path="/login" exact>    
          <Login/>
        </Route>

        <Route path="/puestos" exact>
          <Puestos/>
        </Route>

        <Route path="/mainpage" exact>
          <MainPage/>
        </Route>

      </Switch>

    </Router>
  );
}

export default App;
