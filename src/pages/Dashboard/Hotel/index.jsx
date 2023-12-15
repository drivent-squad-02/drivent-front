  import styled from "styled-components";
import { DashboardTitle } from "../../../components/Dashboard/DashboardTitle";
import { HotelCard } from "../../../components/Hotel/HotelCard";
import useHotel from "../../../hooks/api/useHotel";

export default function Hotel() {

  const { hotels } = useHotel();
  
  return (
  
  <Container>
  
    <DashboardTitle content='Escolha de hotel e quarto'/>   

    <Box>

      <h2>Primeiro, escolha seu hotel</h2>

      <SlidingContainer>

      {hotels && hotels.map((hotel, index) => {
        return <HotelCard name={hotel.name} image={hotel.image} key={index} />
      })}

      </SlidingContainer>

    </Box> 

  </Container>
  
  )

  
}

const Container = styled.div`
  font-family: Roboto;
`

const Box = styled.div`

  h2 {
    color: #8E8E8E;
    font-size: 20px;
    margin-bottom: 18px;
  }

`

const SlidingContainer = styled.div`

  display: flex;
  gap: 22px;

  overflow-x: scroll;

  &::-webkit-scrollbar {
  display: none;
}
`

