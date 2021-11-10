import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "../login/Login";

export default function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route exact path={["/", "/login"]} component={Login} />

        {/* Ruta de paginas que no existen - Error 404*/}
        <Route
          path={"*"}
          component={() => (
            <h1 style={{ marginTop: 300 }}>
              404
              <br />
              Página no encontrada
            </h1>
          )}
        />


      </Switch>
    </Router>
  );
}
