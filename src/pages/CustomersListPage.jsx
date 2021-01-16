import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";

export default function CustomerListPage() {
  const [customerList, setCustomerList] = useState([]);
  const history = useHistory();

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

  function handleOnSubmit(e) {
    e.preventDefault();
    history.push("/customers/create");
  }
  return (
    <div>
      {customerList[0] ? (
        customerList.map((item) => {
          return (
            <h3>
              <Link to={`/customers/${item.id}`}>{item.name}</Link>
            </h3>
          );
        })
      ) : (
        <form onSubmit={handleOnSubmit}>
          <p>No existing customers</p>
          <button type="submit">Create customer</button>
        </form>
      )}
    </div>
  );
}
