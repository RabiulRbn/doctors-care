
import './App.css';
import Home from './Pages/Home/Home/Home';

import { BrowserRouter as Router, Switch, Route,} from 'react-router-dom';

import NotFound from './Pages/Home/NotFound/NotFound';


import Bookings from './Pages/Bookings/Bookings/Bookings';
import Login from './Pages/Login/Login/Login';
import Header from './Pages/Shared/Header/Header';
import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './Pages/Login/Login/PrivateRoute/PrivateRoute';
import Register from './Pages/Login/Login/Register/Register';
import Doctors from './Pages/Home/Doctors/Doctors';
import Payment from './Pages/Payment/Payment';
import Footer from './Pages/Shared/Footer/Footer';


function App() {
  return (
    <div className="App">
      {/* Routing option  */}
     <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <PrivateRoute path="/doctors">
              <Doctors></Doctors>
            </PrivateRoute>
            <PrivateRoute path="/payment">
              <Payment></Payment>
            </PrivateRoute>
            <PrivateRoute path="/bookings/:serviceId">
              <Bookings></Bookings>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
     </AuthProvider>
      
    </div>
  );
}

export default App;
