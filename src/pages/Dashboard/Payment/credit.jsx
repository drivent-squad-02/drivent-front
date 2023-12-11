import styled from "styled-components"
import PaymentForm from "./paymentForm";

export default function Credit({choice, price}) {
    console.log(choice, price);
    return (
        <> 
            <CreditContainer>
                <Box>
                    <h2>Ingresso escolhido</h2>

                    <Enroll>
                        <p>{choice}</p>
                        <spam>R$ {price}</spam>
                    </Enroll>
                    

                </Box>

                <Box>
                    <h2>Pagamento</h2>
                    <PaymentForm />
                </Box>
            </CreditContainer>

        </> 
    )
}

const Box = styled.div`
 margin-bottom: 10px;
`

const Enroll = styled.div`
    /* Rectangle 6 */
    width: 290px;
    height: 108px;
    left: 330px;
    top: 292px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    background: #FFEED2;
    border-radius: 20px;
    p {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        /* identical to box height */
        text-align: center;

        color: #454545;
    }
    spam {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 16px;
        text-align: center;

        color: #898989;
    }

`

const CreditContainer = styled.div`

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