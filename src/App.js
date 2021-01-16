import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Navigation from './components/Navigation';
import UserData from './components/UserData';
import CustomerCreatePage from './pages/CustomerCreatePage';
import CustomerDetailPage from './pages/CustomerDetailPage';
import CustomersListPage from './pages/CustomersListPage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div>
      <Navigation />

      {localStorage.getItem("Amanda")? <UserData /> : <> </>}

      <Switch>

        <Route 
          path="/customers/create"
          component={CustomerCreatePage}
        />

        <Route 
          path="/customers/:id" 
          component={CustomerDetailPage} 
        />

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
