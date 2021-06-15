import styled from 'styled-components/macro'

export const Main = styled.div`
  display: flex;
  justify-content: center;
  min-height: 100vh;
  padding: 35px;
  box-sizing: border-box;
`

export const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 10% 1fr;
  box-sizing: border-box;
  height: fit-content;

  @media (max-width: 500px) {
    display: flex;
    flex-direction: column-reverse;
  }
`

export const ContainerSelect = styled.div`
  position: absolute;
  top: 8px;
  left: 8px;
  width: 100px;

  svg {
    width: 30px;
  }
`

export const ContainerSeparator2 = styled.div`
  display: flex;
  align-items: center;

  svg {
    transform: rotate(90deg) scale(2);
    width: 116px;
    height: 100px;

    @media (min-width: 500px) {
      transform: rotate(90deg) scale(2);
    }

    @media (max-width: 500px) {
      transform: scale(2);
    }
  }

  @media (max-width: 500px) {
    justify-content: center;
  }
`

export const Left = styled.div`
  display: flex;
  flex-direction: column;

  h3 {
    margin: 0.67em 0 0;
    line-height: 2em;
  }

  ul {
    padding-inline-start: 25px;
    margin: 0;
  }
`

export const Right = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-family: 'Parisienne', cursive;
    font-weight: 500;
    letter-spacing: 0.01em;
    margin-bottom: 0;
  }

  svg {
    width: 35px;
  }

  img {
    margin-top: 10px;
    width: 100%;
  }
`

export const NamesContent = styled.div`
  font-family: 'Open Sans', sans-serif;
  font-weight: 300;
  letter-spacing: 0.35em;
  font-size: 0.9em;
  margin: 5px;
`

export const DateContent = styled.div`
  font-family: 'Open Sans', sans-serif;
  font-weight: 400;
  letter-spacing: 0.35em;
  font-size: 0.75em;
  color: #e0b650;
`
