import styled from 'styled-components'

export const BannerContainer = styled.div`
  display: flex;
  margin: 5.75rem 0;
  align-items: flex-start;
  gap: 3.5rem;

  h1 {
    font-weight: 800;
    font-size: 48px;
    line-height: 130%;
    margin-bottom: 1rem;
  }

  p {
    font-size: 20px;
    line-height: 130%;
  }
`

export const BannerInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 4.13rem;
  gap: 1.25rem;

  p {
    font-size: 16px;
    line-height: 130%;
    display: flex;
    align-items: center;
    gap: 0.75rem;
    text-align: left;
    min-width: 14.4375rem;
  }

  svg {
    background-color: ${(props) => props.theme['yellow-dark']};
    padding: 8px;
    border-radius: 9999999px;
  }
`

export const BoxInfo = styled.div`
  display: flex;
  gap: 2.5rem;
`
