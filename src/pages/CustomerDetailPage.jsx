import React, {useState, useEffect} from "react";
import {useHistory, Link} from 'react-router-dom';

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
    <div>
      {customerItem ? (
        <div>
          <h1>{customerItem.name}</h1>
          <tr>
            <td>Organisation Nr: </td>
            <td>{customerItem.organisationNr}</td>
          </tr>
          <tr>
            <td>Payment Term: </td>
            <td>{customerItem.paymentTerm}</td>
          </tr>
          <tr>
            <td>Phone Number: </td>
            <td>{customerItem.phoneNumber}</td>
          </tr>
          <tr>
            <td>Reference: </td>
            <td>{customerItem.reference}</td>
          </tr>
          <tr>
            <td>Vat Nr: </td>
            <td>{customerItem.vatNr}</td>
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
            <td>Website: </td>
            <td>{customerItem.website}</td>
          </tr>
          <button onClick={deleteCustomer}>Delete Customer</button>
          <Link to={`/customers/${customerId}/edit`}><button>Edit customer</button></Link>
        </div>
      ) : (
        <span>Loading...</span>
      )}
    </div>
  );
}
