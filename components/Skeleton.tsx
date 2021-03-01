import styled from 'styled-components'

const Skeleton = styled.div<{ inlineSize?: string; blockSize?: string }>`
  background-color: ${props => props.theme.border01};
  inline-size: ${props => props.inlineSize || 'inherit'};
  block-size: ${props => props.blockSize || 'inherit'};
  overflow: hidden;
  position: relative;

  ::before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    block-size: 100%;
    inline-size: 100%;
    animation: loading 1000ms infinite alternate ease-in-out;

    background: linear-gradient(
      90deg,
      ${props => props.theme.bg02}00 0%,
      ${props => props.theme.bg02} 50%,
      ${props => props.theme.bg02}00 100%
    );
  }

  @keyframes loading {
    0% {
      transform: translateX(-100%);
    }

    100% {
      transform: translateX(100%);
    }
  }
`

export default Skeleton
