import styled, { css } from "styled-components"

export function ChooseTicket({ name, price, onClick, selected }) {
  return (
    <Container selected={selected} onClick={onClick}>
      <h5>{name}</h5>
      <span>R$ {price}</span>
    </Container>
  )
}

const Container = styled.div`
  width: 145px;
  height: 145px;
  border-radius: 20px;
  border: 1px solid #CECECE;  

  ${({ selected }) => selected && css`
    background-color: #FFEED2;
  `}

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3px;

  h5 {
    color: #454545;
    text-align: center;
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  span {
    color: #898989;
    text-align: center;
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }`