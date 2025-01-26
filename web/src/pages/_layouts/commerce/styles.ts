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
`

export const Logo = styled.img`
  width: 158px;
  height: 88px;
`

export const ContainerSearch = styled.div`
  display: flex;
  align-items: center;
  
  input {
    width: 692px;
    height: 36px;

    border-radius: 4px;
  }

  img {
    margin-left: -24px;
  }

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

export const ContainerCategory = styled.div`
  width: 100%;
  height: 32px;

  background-color: ${(props) => props.theme['secondary-500']};

  div {
    display: flex;
    height: 100%;
    width: 1568px;

    margin: auto;
  }

  nav {
    display: flex;
    height: 100%;
    width: 100%;
    align-items: center;    
  }

  ul {
    display: flex;
    height: 100%;
    width: 100%;

    flex-direction: row;    
    justify-content: space-between;
    align-items: center;    
  }

  li {
    display: flex;
    align-items: center;
    height: 100%;
    list-style: none;
    line-height: 18px;

    color: ${(props) => props.theme.white};
    padding: 0px 24px 0px 24px;
    font-weight: bold;
    transition: background-color 300ms 50ms;

    &:hover {
      background-color: ${(props) => props.theme['secondary-400']};
  }
  }
`
