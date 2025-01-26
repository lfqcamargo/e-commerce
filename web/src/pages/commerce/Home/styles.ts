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

export const ContainerProducts = styled.div`
  display: flex;
  width: 1408px;
  flex-direction: row;
  margin: auto;

  gap: 8px;
`
