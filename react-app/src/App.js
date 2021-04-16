import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginPage from './components/LoginPage'
import NavBar from "./components/NavBar";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import UsersList from "./components/UsersList";
import QuizCreator from "./components/QuizCreator";
import FlashCardQuiz from "./components/FlashCardQuiz";
import ProfilePage from "./components/ProfilePage";
import Footer from "./components/Footer";
import { restoreUser } from "./store/session";
import {useDispatch} from 'react-redux'

import User from "./components/User";
import { authenticate } from "./services/auth";
import MainPage from "./components/MainPage";

function App() {
  const dispatch = useDispatch()
  const [authenticated, setAuthenticated] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    (async() => {
      const user = await authenticate();
      if (!user.errors) {
        console.log(user)
        dispatch(restoreUser())
        setAuthenticated(true);
      }
      setLoaded(true);
    })();
  }, []);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      {/* <NavBar setAuthenticated={setAuthenticated} /> */}
      <Switch>
        <Route path="/login" exact={true}>
          <LoginPage
            authenticated={authenticated}
            setAuthenticated={setAuthenticated}
          />
        </Route>
        {/* Main Page */}
        <ProtectedRoute path="/" exact={true} authenticated={authenticated}>
        <NavBar setAuthenticated={setAuthenticated} />

          <MainPage />
          <Footer />
        </ProtectedRoute>
        {/* User Profile */}

        {/* <ProtectedRoute path="/users/:userId" exact={true} authenticated={authenticated}>
          <User />
        </ProtectedRoute>
         */}
        

        <ProtectedRoute path="/create/:id"  authenticated={authenticated}>
            <NavBar setAuthenticated={setAuthenticated} />
          <QuizCreator />
          <Footer />
        </ProtectedRoute>

        <ProtectedRoute path="/profile/:id"  authenticated={authenticated}>
          <NavBar setAuthenticated={setAuthenticated} />
          <Footer />
 
          <ProfilePage />
        </ProtectedRoute>
        
        
        <ProtectedRoute path="/practice/:repoId"  authenticated={authenticated}>
            <NavBar setAuthenticated={setAuthenticated} />
          <FlashCardQuiz />
          {/* <Footer /> */}
        </ProtectedRoute>
        

{/* <Route path="/" exact={true} authenticated={authenticated}>
          
          <h1>My Home Page</h1>
        </Route>  */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
