import styled from "styled-components";
import useEnrollment from "../../../hooks/api/useEnrollment";
import { ChooseTicket } from "../../../components/Payment/ChooseTicket";
import { useState } from "react";
import { PaymentTitle } from "../../../components/Payment/PaymentTitle";
import Credit from "./credit";

function ticketReserve (selectedTicket, selectedAccommodation, setNext, setFnally) {
  if (selectedAccommodation != undefined) {
    var choice = `${selectedTicket.name} + ${selectedAccommodation.name}`
    var price = selectedTicket.price + selectedAccommodation.price;
  }
  else {
    var choice = selectedTicket.name
    var price = selectedTicket.price 
  }
  alert("Ticket Escolhido: " +choice+" \n R$"+price);
  setFnally({
    choice,
    price
  })
  setNext(true);

}


export default function Payment() {  
  const { enrollment } = useEnrollment();
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [selectedAccommodation, setSelectedAccommodation] = useState(null);
  const [selectedReserve, setSelectedReserve] = useState(false);
  const [next, setNext] = useState(false);
  const [fnally, setFnally] = useState({});
 
  const handleTicketClick = (index) => {
    setSelectedTicket(index === selectedTicket ? null : index);
    //console.log(typeTickets[selectedTicket]) //visualiza as informações do tipo do ticket selecionado, onde as informações devem ser complementadas aqui antes de fazer o POST à API.
  };

  const handleAccommodationClick = (index) => {
    setSelectedAccommodation(index === selectedAccommodation ? null : index);
    //console.log(typeAccommodation[selectedAccommodation]) //visualiza as informações do tipo de hospedagem selecionado, onde as informações devem ser complementadas aqui antes de fazer o POST à API.
  };

  const handleReserveClick = (index) => {
    setSelectedTicket(index? true : false);
  };

  const typeTickets = [
    { name: 'Presencial', price: 250, isRemote: false },
    { name: 'Online', price: 100, isRemote: true },
  ];

  const typeAccommodation = [
    {name: 'Sem Hotel', includesHotel: false, price: 0},
    {name: 'Com Hotel', includesHotel: true, price: 350}
  ]
  
  
  return (<>

   <PaymentTitle />
  
  {
  
  !enrollment ? 
  <Container>Você precisa completar sua inscrição antes
  de prosseguir pra escolha de ingresso</Container> 

: 
  !next ?
  <TicketContainer>

    <Box>
    <h2>Primeiro, escolha sua modalidade de ingresso</h2>

    <ChooseModality>
    {typeTickets.map((ticket, index) => (
        <ChooseTicket
          key={index}
          name={ticket.name}
          price={ticket.price}
          onClick={() => handleTicketClick(index)}
          selected={index === selectedTicket}
        />
      ))}
    </ChooseModality>
    </Box>
    
    {
    
    typeTickets[selectedTicket] ? 

    !typeTickets[selectedTicket].isRemote ?
    
    <Box>

      <h2>Ótimo! Agora escolha sua modalidade de hospedagem</h2>

      <ChooseModality>
      {typeAccommodation.map((ticket, index) => (
          <ChooseTicket
            key={index}
            name={ticket.name}
            price={ticket.price}
            onClick={() => handleAccommodationClick(index)}
            selected={index === selectedAccommodation}
          />
        ))}
      </ChooseModality>

      { 
      
      typeAccommodation[selectedAccommodation] ? 
      
      <div>
      <h3> Fechado! O total ficou em <b>R$ {typeTickets[selectedTicket].price + typeAccommodation[selectedAccommodation].price }</b>. Agora é só confirmar </h3>
      <ButtonConfirm onClick={() => ticketReserve(typeTickets[selectedTicket], typeAccommodation[selectedAccommodation], setNext, setFnally)}>RESERVAR INGRESSO</ButtonConfirm>
      </div>
      
      : 
      
      <h2></h2>
      
      }
      
    </Box>

    :
    
    <div>
    <h2> Fechado! O total ficou em <b>R$ {typeTickets[selectedTicket].price }</b>. Agora é só confirmar </h2>
    <ButtonConfirm onClick={() => ticketReserve(typeTickets[selectedTicket], typeAccommodation[selectedAccommodation], setNext, setFnally)}>RESERVAR INGRESSO</ButtonConfirm>
    </div>

    :

   <div></div>


    }
  </TicketContainer>
  : 
  <Credit price={fnally.price} choice={fnally.choice}/>
  }
  </>)

}

const Box = styled.div`
 margin-bottom: 10px;
`

const ChooseModality = styled.div`
  display: flex;
  gap: 24px;
`

const TicketContainer = styled.div`

display: flex;
flex-direction: column;
gap: 37px;

h2 {
  color: #8E8E8E;
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  margin-bottom: 17px;
}

h3 {
  color: #8E8E8E;
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 17px;
  margin-bottom: 17px;
}

`

const Container = styled.div`
  height: calc(100% - 40px);

  display: flex;
  align-items: center;
  justify-content: center;  

  color: #8E8E8E;
  text-align: center;
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  padding-inline: 230px;    
`
const ButtonConfirm = styled.button`

display: flex;
align-items: center;
justify-content: center;  

width: 162px;
height: 37px;
border-radius: 4px;
border-color: #E0E0E0;
background: #E0E0E0;


font-color: #00000059;
text-align: center;
font-family: Roboto;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 16.41px;

`