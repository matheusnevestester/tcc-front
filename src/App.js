import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import Admin from "./components/pages/Admin";
import GroupCall from "./components/pages/VideoCallPage";
import BookRenting from "./components/pages/BookRenting";
import BookClub from "./components/pages/BookClub";
import CategoriesList from "./components/CategoriesList";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/products' component={Products} />
          <Route path='/sign-up' component={SignUp} />
          <Route path='/admin' component={Admin} />
          <Route path='/group-call' component={GroupCall} />
          <Route path='/books-list' component={BookRenting} />
          <Route path='/book-club' component={BookClub} />
          <Route path='/categories' component={CategoriesList} />

        </Switch>
      </Router>
    </>
  );
}

export default App;
