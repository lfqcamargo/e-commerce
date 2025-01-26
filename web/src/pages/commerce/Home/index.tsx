import { CardProduct } from '../../../components/CardProduct'
import {
  Container,
  ContainerBanner,
  ContainerLastChange,
  ContainerMain,
  ContainerProducts,
  ContainersectionProducts,
} from './styles'
import { FaAngleRight } from 'react-icons/fa'

const productsLastChanges = [
  {
    'id': '1',
    'img': '/product-apagar.png',
    'title': 'Console PlayStation 5 Slim Sony, SSD 1TB, Edição Digital, Com Controle Sem Fio ,…',
    'price': 3999.90,
    'offerPrice': 3700.90,
    'discountPix': 5,
    'offerTime': '28/01/2025',
    'stars': 5,
    'starsQuantity': 538,
  },
  {
    'id': '2',
    'img': '/product-apagar.png',
    'title': 'Console PlayStation 5 Slim Sony, SSD 1TB, Edição Digital, Com Controle Sem Fio ,…',
    'price': 3999.90,
    'offerPrice': 3700.90,
    'discountPix': 5,
    'offerTime': '28/01/2025',
    'stars': 5,
    'starsQuantity': 538,
  },
  {
    'id': '3',
    'img': '/product-apagar.png',
    'title': 'Console PlayStation 5 Slim Sony, SSD 1TB, Edição Digital, Com Controle Sem Fio ,…',
    'price': 3999.90,
    'offerPrice': 3700.90,
    'discountPix': 5,
    'offerTime': '28/01/2025',
    'stars': 5,
    'starsQuantity': 538,
  },
  {
    'id': '4',
    'img': '/product-apagar.png',
    'title': 'Console PlayStation 5 Slim Sony, SSD 1TB, Edição Digital, Com Controle Sem Fio ,…',
    'price': 3999.90,
    'offerPrice': 3700.90,
    'discountPix': 5,
    'offerTime': '28/01/2025',
    'stars': 5,
    'starsQuantity': 538,
  },
  {
    'id': '5',
    'img': '/product-apagar.png',
    'title': 'Console PlayStation 5 Slim Sony, SSD 1TB, Edição Digital, Com Controle Sem Fio ,…',
    'price': 3999.90,
    'offerPrice': 3700.90,
    'discountPix': 5,
    'offerTime': '28/01/2025',
    'stars': 5,
    'starsQuantity': 538,
  },

]

export function Home() {
  return(
    <>
      <Container>
        <ContainerMain>
          <ContainerBanner>
            <img src="banner-apagar.png" alt="Banner" />
          </ContainerBanner>
          <ContainerLastChange>
            <p>ÚLTIMA CHANCE</p>
          </ContainerLastChange>
          <ContainersectionProducts>
            <ContainerProducts>
              {productsLastChanges.map((product) => (
                <CardProduct
                  id={product.id}
                  img={product.img}
                  title={product.title}
                  price={product.price}
                  offerPrice={product.offerPrice}
                  discountPix={product.discountPix}
                  offerTime={product.offerTime}
                  stars={product.stars}
                  starsQuantity={product.starsQuantity}
                />
              ))}
            </ContainerProducts>
            <div>
              <p>VER TODOS <FaAngleRight size={14}/></p>
            </div>
          </ContainersectionProducts>

        </ContainerMain>
      </Container>
    </>
  )
}
