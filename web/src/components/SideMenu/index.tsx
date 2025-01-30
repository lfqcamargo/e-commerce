import { Link } from 'react-router-dom'
import {
  ContainerFooter,
  ContainerNav,
  LinkFooter,
  MenuHeader,
  MenuWrapper,
  Overlay,
} from './styles'
import { IoBagCheck, IoHomeSharp, IoNotifications, IoWallet } from 'react-icons/io5'
import { IoPerson } from 'react-icons/io5'
import { FaBolt, FaRegUserCircle } from 'react-icons/fa'
import { BiSolidLike } from 'react-icons/bi'
import { MdFavorite, MdLocalOffer, MdOutlineAppShortcut, MdSupportAgent } from 'react-icons/md'
import { FaComputer } from 'react-icons/fa6'
import { RiCouponFill } from 'react-icons/ri'
import { AiOutlineAim } from 'react-icons/ai'
import { HiEmojiHappy } from 'react-icons/hi'

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
              <li><Link to={'#'}><IoBagCheck size={20} /> Meus Pedidos</Link></li>
              <li><Link to={'#'}><IoWallet size={20} /> Carteira</Link></li>
              <li><Link to={'#'}><BiSolidLike size={20} /> Avaliações</Link></li>
              <li><Link to={'#'}><MdSupportAgent size={20} /> Atendimento ao Cliente</Link></li>
              <li><Link to={'#'}><MdFavorite size={20} /> Favoritos</Link></li>
              <li><Link to={'#'}><IoNotifications size={20} /> Central de Notificações</Link></li>
            </ul>
          </div>
          <hr />
          <div>
            <ul>
              <li><Link to={'#'}><FaComputer size={20} /> Monte seu PC</Link></li>
              <li><Link to={'#'}><MdLocalOffer size={20} /> Oferta do dia</Link></li>
              <li><Link to={'#'}><RiCouponFill size={20} /> Cupons</Link></li>
            </ul>
          </div>
          <hr />
          <div>
            <ul>
              <li><Link to={'#'}><AiOutlineAim size={20} /> Mais Procurados</Link></li>
              <li><Link to={'#'}><FaBolt size={20} /> Acabaram de chegar</Link></li>
              <li><Link to={'#'}><HiEmojiHappy size={20} /> Lojas Parceiras</Link></li>
              <li><Link to={'#'}><MdOutlineAppShortcut size={20} /> Baixe o App</Link></li>
            </ul>
          </div>

        </ContainerNav>
        <ContainerFooter>
          <LinkFooter bgColor={true} to={'#'}>ENTRE</LinkFooter>
          <LinkFooter bgColor={false} to={'#'}>CADASTRA-SE</LinkFooter>
        </ContainerFooter>
      </MenuWrapper>
    </>
  )
}
