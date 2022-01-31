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
import Categories from "./components/pages/Categories";
import Conferences from "./components/pages/Conferences";
import BookDetailPage from "./components/Book/BookDetailPage";
import BookDetails from "./components/pages/BookDetailPage";
import ConferecenDetails from "./components/pages/ConfereceDetailPage";
import StudentBoardPage from "./components/pages/StudentBoardPage";
import ConferenceDetails from "./components/pages/ConfereceDetailPage";
import BookGroupDetails from "./components/pages/BookGroupDetailsPage";
import AdminBoard from "./components/AdminBoard/AdminBoard";
import AdminBooks from "./components/pages/AdminBooks";
import AdminUsers from "./components/pages/AdminUsers";
import AdminUpdateBook from "./components/pages/AdminUpdateBook";
import AdminUpdateCategory from "./components/pages/AdminUpdateCategory";
import AdminUpdateStudent from "./components/pages/AdminUpdateStudent";
import StudentUpdateInformationPage from "./components/pages/StudentUpdateInformationPage";
import PrivateRoute from "./utils/privateRoute";
import getAuthToken from "./utils/getToken";
import AdminConferences from "./components/pages/AdminConferences";
import ServicesStudent from "./components/pages/ServicesStudent";
import StudentBooks from "./components/Student/StudentBooks";
import AdminLendings from "./components/AdminBoard/Lendings/AdminLendings";


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <PrivateRoute authed={getAuthToken()} path='/services' component={Services} />
          <PrivateRoute authed={getAuthToken()} path='/services-student' component={ServicesStudent} />
          <PrivateRoute authed={getAuthToken()}  path='/products' component={Products} />
          <Route path='/sign-up' component={SignUp} />
          <PrivateRoute authed={getAuthToken()} path='/admin' component={AdminBoard} />
          <PrivateRoute authed={getAuthToken()} path='/call' component={GroupCall} />
          <PrivateRoute authed={getAuthToken()} path='/books-list' component={BookRenting} />
          <PrivateRoute authed={getAuthToken()} path='/book-club' component={BookClub} />
          <PrivateRoute authed={getAuthToken()} path='/categories' component={Categories} />
          <PrivateRoute authed={getAuthToken()} path='/conferences' component={Conferences} />
          <PrivateRoute authed={getAuthToken()} path='/book' component={BookDetails} />
          <PrivateRoute authed={getAuthToken()} path='/conference' component={ConferenceDetails} />
          <PrivateRoute authed={getAuthToken()} path='/group' component={BookGroupDetails} />
          <PrivateRoute authed={getAuthToken()} path='/student-board' component={StudentBoardPage} />
          <PrivateRoute authed={getAuthToken()} path='/admin-books' component={AdminBooks} />
          <PrivateRoute authed={getAuthToken()} path='/admin-users' component={AdminUsers} />
          <PrivateRoute authed={getAuthToken()} path='/admin-books-edit' component={AdminUpdateBook} />
          <PrivateRoute authed={getAuthToken()} path='/admin-categories-edit' component={AdminUpdateCategory} />
          <PrivateRoute authed={getAuthToken()} path='/admin-students-edit' component={AdminUpdateStudent} />
          <PrivateRoute authed={getAuthToken()} path='/student-edit-profile' component={StudentUpdateInformationPage} />
          <PrivateRoute authed={getAuthToken()} path='/admin-conferences' component={AdminConferences} />StudentBooks
          <PrivateRoute authed={getAuthToken()} path='/student-books' component={StudentBooks} />
          <PrivateRoute authed={getAuthToken()} path='/admin-lendings' component={AdminLendings} />StudentBooks

        </Switch>
      </Router>
    </>
  );
}

export default App;
