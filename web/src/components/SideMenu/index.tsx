import { Link } from 'react-router-dom'
import { ContainerNav, MenuHeader, MenuWrapper, Overlay } from './styles'
import { IoHomeSharp } from 'react-icons/io5'
import { IoPerson } from 'react-icons/io5'
import { FaRegUserCircle } from 'react-icons/fa'

interface SideMenuProps {
  isOpen: boolean
  onClose: () => void
}

export function SideMenu({ isOpen, onClose }: SideMenuProps) {
  return (
    <>
      <Overlay isOpen={isOpen} onClick={onClose} />
      <MenuWrapper isOpen={isOpen}>
        <MenuHeader>
          <FaRegUserCircle size={36} color='white'/>
          <h2>Olá, Acesse sua conta</h2>
          {/* <button onClick={onClose}>X</button> */}
        </MenuHeader>
        <ContainerNav>
          <div>
            <ul>
              <li><Link to={'#'}><IoHomeSharp size={20} />Minha Conta</Link></li>
              <li><Link to={'#'}><IoPerson size={20} />Meus Dados</Link></li>
              <li><Link to={'#'}><IoPerson size={20} /> Meus Pedidos</Link></li>
              <li><Link to={'#'}><IoPerson size={20} /> Carteira</Link></li>
              <li><Link to={'#'}><IoPerson size={20} /> Avaliações</Link></li>
              <li><Link to={'#'}><IoPerson size={20} /> Atendimento ao Cliente</Link></li>
              <li><Link to={'#'}><IoPerson size={20} /> Protocolos</Link></li>
              <li><Link to={'#'}><IoPerson size={20} /> Favoritos</Link></li>
              <li><Link to={'#'}><IoPerson size={20} /> Sorteio</Link></li>
              <li><Link to={'#'}><IoPerson size={20} /> Central de Notificações</Link></li>
            </ul>
          </div>
          <div>
            <ul>
              <li><Link to={'#'}><IoPerson size={20} /> Monte seu PC</Link></li>
              <li><Link to={'#'}><IoPerson size={20} /> Oferta do dia</Link></li>
              <li><Link to={'#'}><IoPerson size={20} /> Cupons</Link></li>
              <li><Link to={'#'}><IoPerson size={20} /> Entrega flash</Link></li>
            </ul>
          </div>
          <div>
            <ul>
              <li><Link to={'#'}><IoPerson size={20} /> Mais Procurados</Link></li>
              <li><Link to={'#'}><IoPerson size={20} /> Acabaram de chegar</Link></li>
              <li><Link to={'#'}><IoPerson size={20} /> Lojas Parceiras</Link></li>
            </ul>
          </div>
          <div>
            <ul>
              <li><Link to={'#'}><IoPerson size={20} /> Baixe o App</Link></li>
              <li><Link to={'#'}><IoPerson size={20} /> Prime Ninja</Link></li>
              <li><Link to={'#'}><IoPerson size={20} /> Venda no Kabum!</Link></li>
              <li><Link to={'#'}><IoPerson size={20} /> Mulheres no Game</Link></li>
              <li><Link to={'#'}><IoPerson size={20} /> Apera o K!</Link></li>
            </ul>
          </div>

        </ContainerNav>
        <div>
          <p>ENTRE</p>
          <p>CADASTRA-SE</p>
        </div>
      </MenuWrapper>
    </>
  )
}
