import styled from 'styled-components'

interface SideMenuProps {
  isOpen: boolean;
}

export const Overlay = styled.div<SideMenuProps>`
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
`

export const MenuWrapper = styled.div<SideMenuProps>`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 328px;
  z-index: 1000;
  transform: ${(props) => (props.isOpen ? 'translateX(0)' : 'translateX(-100%)')};

  background-color: ${(props) => props.theme['primary-500']};   
  transition: transform 0.3s ease-in-out;  

  color: ${(props) => props.theme.white};
  display: flex;
  flex-direction: column;
`

export const MenuHeader = styled.div`
  display: flex;
  height: 68px;
  width: 100%;

  gap: 16px;
  justify-content: center;
  align-items: center;

  h2 {
    font-weight: bold;
    line-height: 30px;
    font-size: 20px;
  }
`

export const ContainerNav = styled.nav`
  display: flex;
  flex-direction: column;
  width: 97%;

  overflow-y: scroll; /* Ativa o scroll vertical */

  &::-webkit-scrollbar {
    width: 5px; /* Largura */
  }

  &::-webkit-scrollbar-track {
    background: #1A70B9; /* Fundo da barra */
  }

  &::-webkit-scrollbar-thumb {
    background: #80B0D8; /* Cor da barra */
    border-radius: 4px;
  }

  div {
    display: flex;
    flex-direction: column;
  }

  ul {
    display: flex;
    flex-direction: column;
  }

  li {
    height: 40px;

    margin-left: 16px;
    list-style: none;
    padding: 16px 12px;
  }

  a {
    display: flex;
    align-items: center;
    gap: 16px;

    line-height: 14px;
    font-size: 16px;

    color: ${(props) => props.theme.white};
    text-decoration: none;
  }
`
