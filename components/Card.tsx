import styled from 'styled-components'

const Card = styled.div`
  border: 1px solid ${props => props.theme.bg03};
  background-color: ${props => props.theme.bg01};
  border-radius: 3px;
  overflow: hidden;
`

export default Card
