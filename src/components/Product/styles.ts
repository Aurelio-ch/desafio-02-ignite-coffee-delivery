import styled from 'styled-components'

export const ProductBox = styled.div`
  min-width: 16rem;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme['base-cart']};
  padding: 1.5rem;
  justify-content: center;
  align-items: center;
  border-radius: 6px 36px;

  img {
    margin-top: -2.5rem;
    margin-bottom: 0.75rem;
  }

  span {
    display: block;
    margin-bottom: 1rem;
    background-color: ${(props) => props.theme['yellow-light']};
    color: ${(props) => props.theme['yellow-dark']};
    font-weight: 700;
    font-size: 0.6rem;
    padding: 4px 8px;
    border-radius: 999999px;
  }

  h1 {
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
  }
  p {
    font-size: 0.88rem;
    text-align: center;
    color: ${(props) => props.theme['base-label']};
    margin-bottom: 2rem;
  }
`
