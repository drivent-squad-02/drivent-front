import styled from "styled-components";
import React, { useState } from 'react';
import Cards from 'react-credit-cards-2';
import 'react-credit-cards-2/dist/es/styles-compiled.css';


const PaymentForm = () => {
  const [state, setState] = useState({
    number: '',
    expiry: '',
    cvc: '',
    name: '',
    focus: '',
  });

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;
    
    setState((prev) => ({ ...prev, [name]: value }));
  }

  const handleInputFocus = (evt) => {
    setState((prev) => ({ ...prev, focus: evt.target.name }));
  }

  return (
    <PaymentContainer>
      <Cards
        number={state.number}
        expiry={state.expiry}
        cvc={state.cvc}
        name={state.name}
        focused={state.focus}
      />
      <FormContainer>
        <input
          type="number"
          name="number"
          placeholder="Card Number"
          value={state.number}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
        />
        
        <h1>E.g.:49...,51...,36....,37...</h1>
        
        <input type="text"
        name="name"
        placeholder='Name'
        value={state.name}
        onChange={handleInputChange}
        onFocus={handleInputFocus}/>

        <input type="text"
        name="expiry"
        placeholder="Valid Thru"
        value={state.expiry}
        onChange={handleInputChange}
        onFocus={handleInputFocus}/>

        <input type="text"
        name="cvc"
        placeholder="CVC"
        value={state.cvc}
        onChange={handleInputChange}
        onFocus={handleInputFocus}/>
    

      </FormContainer>
    </PaymentContainer>
  );
}

export default PaymentForm;


const PaymentContainer = styled.div`

display: flex;
justify-content: space-between;
align-items: flex-start;

width: 700px;
height: 225px;

`

const FormContainer = styled.form`

display: flex;
flex-direction: column;
width: 400px;
height: 225px;

input {
  height: 30px;

  border-radius: 30px
  border: 3px
  border-color: #8E8E8E;
  
  color: #8E8E8E;
  font-color: #8E8E8E;
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  margin-top: 10px;
}

h1 {
  color: #8E8E8E;
  font-family: Roboto;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

`