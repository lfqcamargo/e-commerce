import { Outlet } from 'react-router-dom'
import { MdOutlineMenu } from 'react-icons/md'
import {
  ContainerCategory,
  ContainerContent,
  ContainerIcons,
  ContainerLogin,
  ContainerOptions,
  ContainerPrimary,
  ContainerSearch,
  Logo,
} from './styles'
import { FaRegUserCircle } from 'react-icons/fa'
import { RxAccessibility } from 'react-icons/rx'
import { MdSupportAgent } from 'react-icons/md'
import { MdFavorite } from 'react-icons/md'
import { FaCartShopping } from 'react-icons/fa6'
import { useState } from 'react'
import { SideMenu } from '../../../components/SideMenu'


export function CommerceLayout() {
  const [isMenuOpen, setMenuOpen] = useState(false)

  const handleMenuToggle = () => setMenuOpen((prev) => !prev)
  const handleMenuClose = () => setMenuOpen(false)

  return (
    <div>
      <header>
        <ContainerPrimary>
          <ContainerContent>
            <ContainerOptions>
              <button onClick={handleMenuToggle}>
                <MdOutlineMenu size={30} color="white" />
              </button>
              <Logo src="logo.png" alt="Logo" />
              <ContainerSearch>
                <input type="text" placeholder='Digite para pesquisar' />
                <img src="search.png" alt="Pesquisar" />
              </ContainerSearch>
              <ContainerLogin>
                <FaRegUserCircle size={36} color='white' />
                <p><strong>ENTRE</strong> ou <br /><strong>CADASTRE-SE</strong></p>
              </ContainerLogin>

            </ContainerOptions>
            <ContainerIcons>
              <ul>
                <li><RxAccessibility size={28} color='white' /></li>
                <li><MdSupportAgent size={28} color='white' /></li>
                <li><MdFavorite size={28} color='white' /></li>
                <li><FaCartShopping size={28} color='white' /></li>
              </ul>
            </ContainerIcons>
          </ContainerContent>
        </ContainerPrimary>
        <ContainerCategory>
          <div>
            <nav>
              <ul>
                <li>DEPARTAMENTOS</li>
                <li>CUPONS</li>
                <li>MONTE SEU PC</li>
                <li>KBM! GAMING</li>
                <li>PC GAMER</li>
                <li>HARDWARE</li>
                <li>COMPUTADORES</li>
                <li>PERIFÉRICOS</li>
                <li>FRETE GRÁTIS</li>
                <li>VENDA NO KABUM!</li>
              </ul>
            </nav>
          </div>
        </ContainerCategory>
      </header>

      <SideMenu isOpen={isMenuOpen} onClose={handleMenuClose} />
      <Outlet />


    </div>
  )
}
