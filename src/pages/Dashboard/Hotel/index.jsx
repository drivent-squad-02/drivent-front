import styled from 'styled-components';
import { DashboardTitle } from "../../../components/Dashboard/DashboardTitle";
import { HotelCard } from "../../../components/Hotel/HotelCard";
import useHotel from "../../../hooks/api/useHotel";
import { useState } from "react";
import { RoomCard } from "../../../components/Hotel/RoomCard";
import useSaveBooking from "../../../hooks/api/useSaveBooking";

export default function Hotel() {

  const { hotels } = useHotel();
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const selectedHotelRooms = selectedHotel !== null ? hotels[selectedHotel].rooms : [];
  const [roomId, setRoomId] = useState({});

  const { saveBooking } = useSaveBooking();
  const [bookingId, setBookingId] = useState(null);

  const handleHotelClick = (index) => {
    setSelectedHotel(index === selectedHotel ? null : index);
    setSelectedRoom(null);
    setRoomId({});
  };

  const handleRoomClick = (index) => {
    setSelectedRoom(index === selectedRoom ? null : index);
    setRoomId({ roomId: selectedHotelRooms[index].roomId })
  };

  const handleSubmitBooking = async () => {
    try {
      setBookingId(await saveBooking(roomId));
    } catch (error) {
      console.log(error.response.data)
    }
  }
  return (

    // verifica payment ? (verifica o ticket ? mostra 1 tela : GERALDO <p> texto aqui </p>) : mostra 2 tela.

    <Container>

      <DashboardTitle content='Escolha de hotel e quarto' />

      <Box>

        <h2>Primeiro, escolha seu hotel</h2>

        <SlidingContainer>

          {hotels && hotels.map((hotel, index) => {
            return <HotelCard
              name={hotel.hotelName}
              image={hotel.hotelImage}
              availableBooking={hotel.totalCapacity - hotel.totalRoomBooking}
              onClick={() => handleHotelClick(index)}
              selected={index === selectedHotel}
              key={index} />
          })}


        </SlidingContainer>

      </Box>

      {selectedHotel !== null && (
        <Box>
          <h2 className="roomTitle">Ótima pedida! Agora escolha o seu quarto:</h2>

          <RoomList>
            {selectedHotelRooms.map((room, index) => (
              <RoomCard
                key={index}
                name={room.roomName}
                capacity={room.roomCapacity}
                bookingCount={room.roomBookingCount}
                onClick={() => handleRoomClick(index)}
                selected={index === selectedRoom}
              />
            ))}
          </RoomList>
        </Box>
      )}

      {selectedRoom !== null && (
        <ButtonSave onClick={handleSubmitBooking}>RESERVAR QUARTO</ButtonSave>
      )}

    </Container>

  )
}

const ButtonSave = styled.button`

width: 182px;
height: 37px;
flex-shrink: 0;

border-radius: 4px;
border: none;
background: #E0E0E0;
box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.25);

color: #000;
text-align: center;

font-size: 14px;

margin-top: 18px;
`

const RoomList = styled.div`
  display: flex;
  flex-wrap: wrap;

  align-items: center;
  justify-content: space-between;
  margin-right: 90px;
  
`

const Container = styled.div`
  font-family: Roboto;
`

const Box = styled.div`

  h2 {
    color: #8E8E8E;
    font-size: 20px;
    margin-bottom: 18px;
  }

  .roomTitle {
    color: #8E8E8E;
    font-size: 20px;
    margin-block: 18px;
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