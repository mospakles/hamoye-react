import Dashboard from './pages/dashboard';
import Login from './pages/login';
import logo from './logo.svg';
import Register from './pages/register';
import {
  Route,
  BrowserRouter,
  Routes,
} from "react-router-dom";
import {loggedIn, firebaseObserver} from "./firebase";
import { useEffect, useState } from 'react';


function App() {
  const [authenticated, setAuthenticated] = useState(loggedIn());
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    firebaseObserver.subscribe('authStateChanged', data => {
      setAuthenticated(data);
      setIsLoading(false);
    });
    return () => { firebaseObserver.unsubscribe('authStateChanged'); }
  }, []);

  return isLoading ? <div/> :
    <BrowserRouter>
      <Routes>
          <Route path="/" exact element= {<Login />} >
          </Route>
          <Route path="/dashboard" exact element={<Dashboard />} />
          <Route path="/login" exact element={<Login />} />
        <Route path="/register" element={<Register />} />
        </Routes>
    </BrowserRouter>
}

export default App;
 