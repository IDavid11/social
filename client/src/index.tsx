import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import { webUrls } from "services/webUrls";
import "static/css/main.css";

import App from "./App";
import Navbar from "components/Global/Navbar/Navbar";
import BooksList from "components/Books/BooksList";
import Book from "components/Books/Book";
import BookForm from "components/Profile/LibraryF/Stock/Components/BookForm";
import LibrariesPage from "components/Libraries/LibrariesPage";
import UserRegister from "components/Auth/UserRegister";
import LibraryRegister from "components/Auth/LibraryRegister";
import Login from "components/Auth/Login";
import Profile from "components/Profile/ProfileMenu";
import PersonalInfo from "components/Profile/User/PersonalInfo/PersonalInfo";
import Stock from "components/Profile/LibraryF/Stock/Stock";
import UserStats from "components/Profile/User/Stats/UserStats";

const Router = () => {
  return (
    <React.StrictMode>
      <Navbar />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path={webUrls.urlUserRegister} component={UserRegister} />
          <Route exact path={webUrls.urlLibraryRegister} component={LibraryRegister} />
          <Route exact path={webUrls.urlLogin} component={Login} />
          <Route exact path={webUrls.urlBooks} component={BooksList} />
          <Route exact path={webUrls.urlBookForm} component={BookForm} />
          <Route path={webUrls.urlBook} component={Book} />
          <Route exact path={webUrls.urlLibraries} component={LibrariesPage} />

          <Route exact path={webUrls.urlUser} component={Profile} />
          <Route exact path={webUrls.urlPersonalInfo} component={PersonalInfo} />
          <Route exact path={webUrls.urlProfile} component={UserStats} />

          <Route exact path={webUrls.urlStock} component={Stock} />
        </Switch>
      </BrowserRouter>
    </React.StrictMode>
  );
};

ReactDOM.render(<Router />, document.getElementById("root"));
