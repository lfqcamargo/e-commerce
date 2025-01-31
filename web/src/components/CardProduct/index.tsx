import {
  ContainerBolt,
  ContainerCard,
  ContainerDescription,
  ContainerOfferTime,
  ContainerPricePix,
  ContainerStars,
  ContainerTime,
  DiscountPix,
  PricePix,
  Title,
} from './styles'
import { MdOutlineStar } from 'react-icons/md'
import { FaBolt } from 'react-icons/fa'

type Props = {
  id: string
  img: string
  title: string
  price: number
  offerPrice: number
  discountPix: number
  offerTime: string
  stars: number
  starsQuantity: number
}

export function CardProduct({
  id,
  img,
  title,
  price,
  offerPrice,
  discountPix,
  offerTime,
  stars,
  starsQuantity,
}: Props) {
  console.log(id)
  const starElements = []

  for (let i = 0; i < 5; i++) {
    starElements.push(
      <MdOutlineStar
        key={i}
        color={i < stars ? '#FF6500' : '#D3D3D3'}
        size={14}
      />,
    )
  }

  return (
    <ContainerCard>
      <div>
        <ContainerStars>
          {starElements}
          <p>({starsQuantity})</p>
        </ContainerStars>
        <img src={img} alt={title} />
        <ContainerDescription>
          <Title>{title}</Title>
          <span>R$ {price.toFixed(2)}</span>
          <ContainerPricePix>
            <PricePix>R$ {(offerPrice - (offerPrice * discountPix / 100)).toFixed(2)}</PricePix>
            <DiscountPix>- {discountPix}%</DiscountPix>
          </ContainerPricePix>

          <span>Á vista no PIX<br/></span>
          <span>ou até <strong>10x de R$ {(offerPrice / 10).toFixed(2)}</strong></span>
        </ContainerDescription>
      </div>

      <ContainerOfferTime>
        <ContainerBolt><FaBolt color='white' size={24}/></ContainerBolt>
        <ContainerTime>
          <p>TERMINA EM:</p>
          <strong><p>{offerTime}</p></strong>
        </ContainerTime>
      </ContainerOfferTime>
    </ContainerCard>
  )
}
