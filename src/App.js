import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import { createContext } from 'react';
import { AuthConextProvider } from './Components/Login/LoginManager';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="set-bg">
      <AuthConextProvider>
        <div className="App">
          <Router>
            <Switch>
              <PrivateRoute exact path="/">
                <Home />
              </PrivateRoute>
              <PrivateRoute exact path="/home">
                <Home />
              </PrivateRoute>
              <Route path="/login">
                <Login />
              </Route>

              <Route path="*">
                <Home />
              </Route>
            </Switch>
          </Router>

        </div>
      </AuthConextProvider>
    </div>
  );
}

export default App;
