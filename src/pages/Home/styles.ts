import styled from 'styled-components'

export const ProductContainer = styled.div``

export const ProductTitles = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 3.9rem;
  margin-top: 2.6rem;
  align-items: center;

  div {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    gap: 0.5rem;

    button {
      font-size: 0.66rem;
      font-weight: 700;
      color: ${(props) => props.theme['yellow-dark']};
      background-color: transparent;
      transition: 0.5s;

      padding: 0.24rem 0.75rem;

      border: 1px solid ${(props) => props.theme['yellow-light']};
      border-radius: 100px;

      &:hover {
        transition: 0.5s;
        color: ${(props) => props.theme.white};
        background-color: ${(props) => props.theme['yellow-dark']};
        border: 1px solid ${(props) => props.theme['yellow-dark']};
      }
    }
  }
`

export const ProductContent = styled.div`
  display: grid;
  grid-template-columns: repeat(4, auto);
  grid-column-gap: 2rem;
  grid-row-gap: 2.5rem;
  margin-bottom: 6rem;
`
