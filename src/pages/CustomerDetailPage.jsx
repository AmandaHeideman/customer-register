import React, {useState, useEffect} from "react";
import {useHistory, Link} from 'react-router-dom';
import ButtonStyled from '../components/ButtonStyled';
import DivStyled from '../components/DivStyled';

export default function CustomerDetailPage(props) {
  const customerId = props.match.params.id;
  const [customerItem, setCustomerItem] = useState(null);
  const history = useHistory()

  function getCustomerItem() {
    const url = `https://frebi.willandskill.eu/api/v1/customers/${customerId}/`;
    const token = localStorage.getItem("Amanda");
    fetch(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
    .then(res => res.json())
    .then(data => setCustomerItem(data));
  }

  function deleteCustomer(){
    const url = `https://frebi.willandskill.eu/api/v1/customers/${customerId}/`;
    const token = localStorage.getItem("Amanda");
    fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
    .then(() => history.push('/customers'))
  }

  useEffect(() => {
    getCustomerItem();
  }, []);

  return (
    <DivStyled>
      {customerItem ? (
        <div>
          <h1>{customerItem.name}</h1>
          <tr>
            <td>Organisation Nr: </td>
            <td>{customerItem.organisationNr}</td>
          </tr>
          <tr>
            <td>Vat Nr: </td>
            <td>{customerItem.vatNr}</td>
          </tr>
          <tr>
            <td>Reference: </td>
            <td>{customerItem.reference}</td>
          </tr>
          <tr>
            <td>Payment Term: </td>
            <td>{customerItem.paymentTerm}</td>
          </tr>
          <tr>
            <td>Website: </td>
            <td>{customerItem.website}</td>
          </tr>
          <tr>
            <td>Email: </td>
            <td>
              <a href={`mailto:${customerItem.email}`}>
                {customerItem.email}
              </a>
            </td>
          </tr>
          <tr>
            <td>Phone Number: </td>
            <td>{customerItem.phoneNumber}</td>
          </tr>
          <ButtonStyled onClick={deleteCustomer}>Delete Customer</ButtonStyled>
          <Link to={`/customers/${customerId}/edit`}><ButtonStyled>Edit customer</ButtonStyled></Link>
        </div>
      ) : (
        <span>Loading...</span>
      )}
    </DivStyled>
  );
}
