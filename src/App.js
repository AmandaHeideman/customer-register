import React, {useState, useEffect} from 'react';
import {Route, Switch} from 'react-router-dom';
import Navigation from './components/Navigation';
import UserData from './components/UserData';
import CustomerCreatePage from './pages/CustomerCreatePage';
import CustomerDetailPage from './pages/CustomerDetailPage';
import CustomersListPage from './pages/CustomersListPage';
import CustomerEditPage from './pages/CustomerEditPage';
import { CustomerContext } from './contexts/CustomerContext';

import HomePage from './pages/HomePage';

function App() {
  const [customerData, setCustomerData] = useState([]);

  useEffect(() => {
    getCustomerList();
  }, []);

  function getCustomerList() {
    const url = "https://frebi.willandskill.eu/api/v1/customers/";
    const token = localStorage.getItem("Amanda");
    fetch(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setCustomerData(data.results));
  }


  return (
    <div>
      <CustomerContext.Provider value={{customerData, setCustomerData}} />
      <Navigation />

      {localStorage.getItem("Amanda")? <UserData /> : <> </>}

      <Switch>

        <Route 
          path="/customers/create"
          component={CustomerCreatePage}
        />

        <Route 
          path="/customers/:id/edit"
          component={CustomerEditPage}
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
