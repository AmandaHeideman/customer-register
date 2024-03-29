import React, { useState, useEffect, useContext } from "react";
import { Link} from "react-router-dom";
import ButtonStyled from '../components/ButtonStyled';
import DivStyled from '../components/DivStyled';
import {CustomerContext} from '../contexts/CustomerContext';

export default function CustomerListPage() {
  const [customerList, setCustomerList] = useState([]);
  const {customerData, setCustomerData} = useContext(CustomerContext);

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
      .then((data) => setCustomerList(data.results));
  }
  console.log(customerData);

  return (
    <DivStyled>
      <h1>Customers</h1>
      {customerList[0] ? (
        <>
          {customerList.map((item) => {
            return (
              <h3>
                <Link to={`/customers/${item.id}`}>{item.name}</Link>
              </h3>
            );
          })}
          <Link to={`/customers/create`}><ButtonStyled>Create customer</ButtonStyled></Link>
        </>
      ) : (
        <>
          <p>No existing customers</p>
          <Link to={`/customers/create`}><ButtonStyled>Create customer</ButtonStyled></Link>
        </>
      )}
    </DivStyled>
  );
}
