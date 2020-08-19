import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

const renderRoutes = (routes: any, auth: boolean, extraProps = {}, switchProps = {}) => routes ? (
  <Switch {...switchProps} >
    {
      routes.map((route: any, i: number) => (
        <Route
          key={route.key || i}
          path={route.path}
          exact={route.exact}
          strict={route.strict}
          render={(props) => {
            if (route.auth || auth || route.path === '/login') {
              return <route.component {...props} {...extraProps} route={route} />
            }
            return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
          }}
        />
      ))}
  </Switch>
) : null

export default renderRoutes;
