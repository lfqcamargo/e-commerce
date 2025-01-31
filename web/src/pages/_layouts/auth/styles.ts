import styled from 'styled-components'

export const ContainerHeader = styled.header`
  display: flex;
`

export const ContainerPrimary = styled.div`
  width: 100%;
  height: 104px;

  background-color: ${(props) => props.theme['primary-500']};
`

export const ContainerContent = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  max-width: 1520px;

  margin: auto;
  align-items: center;
  justify-content: space-between;

  background-color: transparent;
`

export const ContainerOptions = styled.div`
  display: flex;
  align-items: center;

  gap: 32px;

  button {
    all: unset;
    cursor: pointer;
  }
`

export const Logo = styled.img`
  width: 158px;
  height: 88px;
`

export const ContainerLogin = styled.div`
  display: flex;
  gap: 6px;

  p {
    color: white;
    font-size: 12px;
    line-height: 18px;
    opacity: 80%;
  }
`

export const ContainerIcons = styled.nav`
  ul {
    display: flex;
    gap: 40px;
  }

  li {
    list-style: none;
  }
`
