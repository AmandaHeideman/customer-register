import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import ButtonStyled from '../components/ButtonStyled';
import DivStyled from '../components/DivStyled';

export default function CustomerCreatePage() {
  const [formData, setFormData] = useState({})
  const history = useHistory()

  function handleOnChange(e) {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  function renderInput(name, label, type) {
    return (
      <div>
        <label>{label}</label>
        <input 
          type={type || "text"} 
          name={name} 
          onChange={handleOnChange}
        />
      </div>
    )
  }

  function handleOnSubmit(e){
    e.preventDefault()
    const url = "https://frebi.willandskill.eu/api/v1/customers/"
    const token = localStorage.getItem("Amanda")
    fetch(url, {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
    })
    .then(res => res.json())
    .then(data => {
      history.push('/customers')
    })
  }

  return (
    <DivStyled>
      <h1>Create Customer</h1>
      <form onSubmit={handleOnSubmit}>
        {renderInput("name", "Customer Name")}
        {renderInput("organisationNr", "Organisation Number")}
        {renderInput("vatNr", "Vat Number")}
        {renderInput("reference", "Reference")}
        {renderInput("paymentTerm", "Payment Term", "number")}
        {renderInput("website", "Website", "url")}
        {renderInput("email", "Customer Email", "email")}
        {renderInput("phoneNumber", "Phone Number", "tel")}
        <ButtonStyled type="submit">Create Customer</ButtonStyled>
      </form>
    </DivStyled>
  )
}