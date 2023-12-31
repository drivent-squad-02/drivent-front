import { css } from "styled-components"
import styled from "styled-components"

export function HotelCard({ name, image, availableBooking, onClick, selected }) {

  return (

    <Container $total={availableBooking} selected={selected} onClick={onClick}>

      <div>

        <HotelImage $url={image} />

        <h3>{name}</h3>

        <span>
          <h4>Tipos de acomodação:</h4>
          <p>Single, double e triple</p>
        </span>

        <span>
          <h4>Vagas disponíveis:</h4>
          <p>{availableBooking}</p>
        </span>

      </div>

    </Container>

  )
}

const Container = styled.div`

  width: 196px;
  height: 264px;

  border-radius: 10px;
  background: #EBEBEB;

  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  
  justify-content: center;
  align-items: center;

  ${({ $total }) => {
    return $total === 0 ? css`
      opacity: 0.5;
      cursor: default;
      pointer-events: none;
    ` : css`
      
    `
  }}

${({ selected }) => selected && css`
    background: #FFEED2;
  `}
  
  div {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  h3 {
    font-size: 20px;
    color: #343434;
  }

  span {
    color: #3C3C3C;
    font-size: 12px;
    font-style: normal;
    line-height: 16px;
    
    h4 {
      font-weight: 700;
    }
    p {
      font-weight: 400;
    }
  }

`

const HotelImage = styled.img`
  width: 168px;
  height: 109px;

  border-radius: 5px;
  
  background: url(${({ $url }) => $url});
  background-position: center;
  background-size: contain;

`