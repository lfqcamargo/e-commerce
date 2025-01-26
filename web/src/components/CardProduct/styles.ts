import styled from 'styled-components'

export const ContainerCard = styled.article`
  display: flex;
  width: 268px;
  height: 474px;

  flex-direction: column;
  justify-content: space-between;

  background-color: ${(props) => props.theme.white};
  box-shadow: 
    0px 0px 1px 0px rgba(40, 41, 61, 0.08),
    0px 0.5px 2px 0px rgba(96, 97, 112, 0.16);

  border-radius: 4px;

  img {
    width: 100%;
    height: 162px;

    margin-bottom: 28px;
  }
`

export const ContainerStars = styled.div`
  display: flex;
  
  justify-content: end;
  margin: 14px 7px 0px 0px;

  p {
    padding-left: 4px;
    font-size: 14px;
    color: ${(props) => props.theme['gray-100']};
  }
`
export const ContainerDescription = styled.div`
  margin: 0px 20px 0px 6px;

  span {
    font-size: 12px;
    line-height: 16px;

    color: ${(props) => props.theme['gray-200']};
  }
`

export const Title = styled.p`
  font-size: 14px;
  line-height: 20px;

  font-weight: 600;
`

export const ContainerPricePix = styled.div`
  display: flex;
  align-items: center;

  gap: 6px;
`

export const PricePix = styled.p`
  font-size: 20px;
  line-height: 30px;

  color: ${(props) => props.theme['secondary-500']};
  font-weight: bold;
`

export const DiscountPix = styled.p`
  background-color: ${(props) => props.theme['secondary-500']};
  color: ${(props) => props.theme.white};
  border-radius: 8px;
  padding: 0px 4px;
  line-height: 16px;
  font-size: 12px;
`
export const ContainerOfferTime = styled.div`
  display: flex;
  width: 252px;
  height: 38px;

  margin: 0px 8px 8px 8px;
  border: 1px solid ${(props) => props.theme['secondary-500']};
  border-radius: 4px;
`

export const ContainerBolt = styled.div`
  display: flex;
  width: 56px;
  height: 100%;

  align-items: center;
  justify-content: center;

  background-color: ${(props) => props.theme['secondary-500']};
`
export const ContainerTime = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 2px;

  p {
    font-size: 14px;
    line-height: 14px;

    color: ${(props) => props.theme['secondary-500']};
  }

  strong {
    font-size: 18px;
    font-weight: bold;
  }
`
