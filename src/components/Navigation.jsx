import React from 'react'
import {Link} from 'react-router-dom';

export default function Navigation() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/customers/create">Create customer</Link>
        </li>
        <li>
          <Link to="/customers/:id">Customer detail</Link>
        </li>
        <li>
          <Link to="/customers">Customers</Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
    </div>
  )
}
