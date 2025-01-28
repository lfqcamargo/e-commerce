import styled from 'styled-components'

export const Container = styled.main`
  background-color: ${(props) => props.theme['black-bg']};
`

export const ContainerMain = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1568px;

  margin: auto;

  background-color: ${(props) => props.theme['white-bg']};
`

export const ContainerBanner = styled.div`
  width: 100%;
  height: 400px;
`

export const ContainerLastChange = styled.div`
  background-color: ${(props) => props.theme['secondary-300']};

  p {
    margin: 0px 32px;
    padding: 14px 0px;

    color: ${(props) => props.theme.white};
  }
`

export const ContainersectionProducts = styled.section`
  display: flex;
  width: 100%;
  height: 568px;

  flex-direction: column;
  align-items: center;
`

export const ContainerCarousel = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 46px 32px 22px 32px;
`

export const CarouselWrapper = styled.div`  
  display: flex;
  align-items: center;

  overflow: hidden;   
`

interface CarouselContentProps {
  itemsCount: number;
}
export const CarouselContent = styled.div<CarouselContentProps>`
  display: flex;
  width: 100%;

  gap: 8px;
  transition: transform 0.5s ease-in-out;
`

export const ArrowButton = styled.button`
  background-color: ${(props) => props.theme['white-bg']};
  border: none;
  color: ${(props) => props.theme['gray-100']};
  font-size: 24px;
  height: 32px;
  padding: 10px;
  cursor: pointer;
  z-index: 10;

  &:nth-child(1) {
    left: 10px;
  }

  &:nth-child(3) {
    right: 10px;
  }
`

export const ContainerViewAll = styled.div`
  display: flex;
  width: 1408px;

  align-items: center;
  justify-content: end; 
  gap: 4px;

  color: ${(props) => props.theme['secondary-500']};
  
  p {    
    font-weight: bold;
    font-size: 14px;
    line-height: 24px;
  }
`
