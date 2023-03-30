import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  width: 100%;
  max-width: 1120px;
  margin: 2rem auto;
  align-items: center;
  justify-content: space-between;
`

export const HeaderInfo = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  gap: 0.75rem;

  div {
    background-color: ${(props) => props.theme['purple-light']};
    display: flex;
    font-size: 0.87rem;
    flex-direction: row;
    align-items: center;
    color: ${(props) => props.theme.purple};
    padding: 0.63rem;
    border-radius: 6px;
    gap: 0.4rem;

    p {
      color: ${(props) => props.theme['purple-dark']};
      font-weight: 400;
      font-size: 14px;
    }
  }

  button {
    align-items: center;
    border: none;
    padding: 0.5rem;
    border-radius: 6px;
    background-color: ${(props) => props.theme['yellow-light']};
    color: ${(props) => props.theme['yellow-dark']};
  }
`
