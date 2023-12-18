import { css } from "styled-components"
import styled from "styled-components"
import { FaUser, FaRegUser } from "react-icons/fa6";

export function RoomCard({ name, capacity, bookingCount, onClick, selected }) {

  return (
    <Container selected={selected} onClick={onClick} $total={capacity - bookingCount}>
      <h6>{name}</h6>
      <div>
        {Array.from({ length: capacity }, (_, iconIndex) => (
          (iconIndex < bookingCount) ? (
            <FaUser key={iconIndex} />
          ) : (
            <FaRegUser key={iconIndex} />
          )
        ))}
      </div>
    </Container>)


}

const Container = styled.div`
 
  width: 190px;
  height: 45px;
  flex-shrink: 0;

  border-radius: 10px;
  border: 1px solid #CECECE;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding-inline: 16px;
  margin-bottom: 8px;

  cursor: pointer;

  ${({ selected }) => selected && css`
    background: #FFEED2;
  `}

  ${({ $total }) => {
    return $total === 0 ? css` 
      opacity: 0.5;
      cursor: default;
      pointer-events: none;`
      : css``
  }}
`