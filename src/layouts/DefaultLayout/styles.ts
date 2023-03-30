import styled from 'styled-components'

export const LayoutContainer = styled.div`
  max-width: 70rem;
  margin: 0 auto;
  padding: 0 0.5rem;
  background: ${(props) => props.theme.background};
  display: flex;
  flex-direction: column;
`
