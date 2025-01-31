import { RxAccessibility } from 'react-icons/rx'
import {
  ContainerContent,
  ContainerIcons,
  ContainerLogin,
  ContainerOptions,
  ContainerPrimary,
  Logo,
} from './styles'
import { FaRegUserCircle } from 'react-icons/fa'

export function AuthLayout () {
  return (
    <>
      <header>
        <ContainerPrimary>
          <ContainerContent>
            <ContainerOptions>
              <Logo src="logo.png" alt="Logo" />
              <ContainerLogin>
                <FaRegUserCircle size={36} color='white' />
                <p><strong>ENTRE</strong> ou <br /><strong>CADASTRE-SE</strong></p>
              </ContainerLogin>

            </ContainerOptions>
            <ContainerIcons>
              <ul>
                <li><RxAccessibility size={28} color='white' /></li>
              </ul>
            </ContainerIcons>
          </ContainerContent>
        </ContainerPrimary>
      </header>
    </>
  )
}
