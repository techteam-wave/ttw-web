import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

function Main() {
  return (
    <Router>
      <Route exact path="/">
        <Redirect to="https://techteam-wave.github.io/ttw-web" />
      </Route>
      <App />
    </Router>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);