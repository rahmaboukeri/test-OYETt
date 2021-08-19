import { Switch,Route } from "react-router-dom";

import './App.css';
import Home from './Components/Home/Home';
import ListeTitre from './Components/liste/ListeTitre';
import Navbas from './Components/Navbar/navbas';
function App() {
  return (
    <div className="App">

          <Navbas />
          <Home />

            <Switch>
        
          <Route exact path="/" component={ListeTitre} />
          {/* <Route path="/(addcontact|editcontact)" component={AddEditContact} /> */}
        </Switch>
    </div>
  );
}

export default App;
