import styled from "styled-components"

export function DashboardTitle({ content }) {

  return (<Container><h1>{content}</h1></Container>)
}

const Container = styled.div`
  
  h1 {
    color: #000;
    font-family: Roboto;
    font-size: 34px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    padding-bottom: 37px;
  }
`