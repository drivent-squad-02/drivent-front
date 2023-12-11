import styled from "styled-components";
import useEnrollment from "../../../hooks/api/useEnrollment";
import { ChooseTicket } from "../../../components/Payment/ChooseTicket";
import { useState } from "react";
import { PaymentTitle } from "../../../components/Payment/PaymentTitle";

export default function Payment() {  
  const { enrollment } = useEnrollment();
  const [selectedTicket, setSelectedTicket] = useState(null);

  const handleTicketClick = (index) => {
    setSelectedTicket(index === selectedTicket ? null : index);
    //console.log(typeTickets[selectedTicket]) //visualiza as informações do tipo do ticket selecionado, onde as informações devem ser complementadas aqui antes de fazer o POST à API.
  };

  const typeTickets = [
    { name: 'Presencial', price: 250, isRemote: false },
    { name: 'Online', price: 100, isRemote: true },
  ];
  
  return (<>

  <PaymentTitle />
        
  {
  
  !enrollment ? 
  <Container>Você precisa completar sua inscrição antes
  de prosseguir pra escolha de ingresso</Container> 

: 

  <TicketContainer>
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
    
    {/* {typeTickets[selectedTicket] && <div>segunda parte aqui</div>} */}

  </TicketContainer>
  
  }

  </>)

}

const ChooseModality = styled.div`
  display: flex;
  gap: 24px;
`

const TicketContainer = styled.div`
h2 {
  padding-top: 37px;
  color: #8E8E8E;
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

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
