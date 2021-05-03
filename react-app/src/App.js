import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginPage from './components/LoginPage'
import NavBar from "./components/NavBar";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import QuizCreator from "./components/QuizCreator";
import FlashCardQuiz from "./components/FlashCardQuiz";
import ProfilePage from "./components/ProfilePage";
import Footer from "./components/Footer";
import { restoreUser } from "./store/session";
import {useDispatch} from 'react-redux'

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
      <Switch>
        <Route path="/login" exact={true}>
          <LoginPage
            authenticated={authenticated}
            setAuthenticated={setAuthenticated}
          />
        </Route>
        <ProtectedRoute path="/" exact={true} authenticated={authenticated}>
        <NavBar setAuthenticated={setAuthenticated} />

          <MainPage />
        </ProtectedRoute>
        <ProtectedRoute path="/create/:id"  authenticated={authenticated}>
            <NavBar setAuthenticated={setAuthenticated} />
          <QuizCreator />
        </ProtectedRoute>

        <ProtectedRoute path="/profile/:id"  authenticated={authenticated}>
          <NavBar setAuthenticated={setAuthenticated} />
          <ProfilePage />
        </ProtectedRoute>        
        <ProtectedRoute path="/practice/:repoId"  authenticated={authenticated}>
            <NavBar setAuthenticated={setAuthenticated} />
          <FlashCardQuiz />
        </ProtectedRoute>
        <Footer/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
