import React from 'react';
import {Route, Switch} from 'react-router-dom';
import CustomerCreatePage from './pages/CustomerCreatePage';
import CustomerDetailPage from './pages/CustomerDetailPage';
import CustomersListPage from './pages/CustomersListPage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div>
      <Switch>

        <Route path="/customers/create">
          <CustomerCreatePage />
        </Route>

        <Route path="/customers/:id">
          <CustomerDetailPage />
        </Route>

        <Route path="/customers">
          <CustomersListPage />
        </Route>

        <Route path="/">
          <HomePage />
        </Route>

      </Switch>
    </div>
  );
}

export default App;
