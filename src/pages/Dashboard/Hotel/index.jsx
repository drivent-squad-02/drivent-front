import styled from "styled-components";

export default function Hotel() {
  const ticket = {
    ticketType: {
      isRemote: false,
      includesHotel: true
    },
    status: "RESERVED"
  };

  return (
    <PageContainer>
      {ticket.ticketType.isRemote ? 
          <Description>
            <h1>Sua modalidade de ingresso não inclui hospedagem</h1>
            <h1>Prossiga para a escolha de atividades</h1>
          </Description>
      : ticket.ticketType.includesHotel && ticket.status !== "PAID" ?
          <Description>
            <h1>Você precisa ter confirmado pagamento</h1>
            <h1>antes de fazer a escolha de hospedagem</h1>
          </Description>
      : "ESCOLHER HOTEL"
      }    
    </PageContainer>
  );
}

const PageContainer = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Description = styled.div`
  h1 {
    font-family: Roboto;
    font-size: 20px;
    font-weight: 400;
    line-height: 23px;
    letter-spacing: 0em;
    text-align: center;
    color: #8E8E8E;
  };
`;