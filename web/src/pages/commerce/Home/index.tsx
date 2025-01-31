import { useState } from 'react'
import { CardProduct } from '../../../components/CardProduct'
import {
  ArrowButton,
  CarouselContent,
  CarouselWrapper,
  Container,
  ContainerAdvertising,
  ContainerBanner,
  ContainerCarousel,
  ContainerCategory,
  ContainerLastChange,
  ContainerMain,
  ContainersectionProducts,
  ContainerViewAll,
} from './styles'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'

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
  {
    'id': '6',
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
    'id': '7',
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
    'id': '8',
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
    'id': '9',
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
    'id': '10',
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
    'id': '11',
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
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === productsLastChanges.length - 4 ? 0 : prevIndex + 1,
    )
  }

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? productsLastChanges.length - 4 : prevIndex - 1,
    )
  }

  return (
    <Container>
      <ContainerMain>
        <ContainerBanner>
          <img src="banner-apagar.png" alt="Banner" />
        </ContainerBanner>
        <ContainerLastChange>
          <p>ÚLTIMA CHANCE</p>
        </ContainerLastChange>

        <ContainersectionProducts>
          <ContainerCarousel>
            <ArrowButton onClick={handlePrev}>
              <FaAngleLeft />
            </ArrowButton>
            <CarouselWrapper>

              <CarouselContent
                itemsCount={productsLastChanges.length}
                style={{
                  transform: `translateX(-${currentIndex * 25}%)`,
                }}
              >
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
              </CarouselContent>
            </CarouselWrapper>
            <ArrowButton onClick={handleNext}>
              <FaAngleRight />
            </ArrowButton>
          </ContainerCarousel>

          <ContainerViewAll>
            <p>VER TODOS</p>
            <FaAngleRight size={14} />
          </ContainerViewAll>
        </ContainersectionProducts>

        <ContainerAdvertising>
          <img src="propaganda-apagar.png" alt="Propaganda" />
          <img src="propaganda-apagar.png" alt="Propaganda" />
        </ContainerAdvertising>
        <ContainerCategory>
          <div>
            <h3>Ofertas</h3>
          </div>
          <div>
            <p>VER TODOS</p>
            <FaAngleRight size={14} />
          </div>
        </ContainerCategory>

        <ContainersectionProducts>

          <ContainerCarousel>
            <ArrowButton onClick={handlePrev}>
              <FaAngleLeft />
            </ArrowButton>
            <CarouselWrapper>

              <CarouselContent
                itemsCount={productsLastChanges.length}
                style={{
                  transform: `translateX(-${currentIndex * 25}%)`,
                }}
              >
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
              </CarouselContent>
            </CarouselWrapper>
            <ArrowButton onClick={handleNext}>
              <FaAngleRight />
            </ArrowButton>
          </ContainerCarousel>

          <ContainerViewAll>
            <p>VER TODOS</p>
            <FaAngleRight size={14} />
          </ContainerViewAll>
        </ContainersectionProducts>

        <ContainerAdvertising>
          <img src="propaganda-apagar.png" alt="Propaganda" />
          <img src="propaganda-apagar.png" alt="Propaganda" />
        </ContainerAdvertising>
        <ContainerCategory>
          <div>
            <h3>Ofertas</h3>
          </div>
          <div>
            <p>VER TODOS</p>
            <FaAngleRight size={14} />
          </div>
        </ContainerCategory>
        <ContainersectionProducts>
          <ContainerCarousel>
            <ArrowButton onClick={handlePrev}>
              <FaAngleLeft />
            </ArrowButton>
            <CarouselWrapper>

              <CarouselContent
                itemsCount={productsLastChanges.length}
                style={{
                  transform: `translateX(-${currentIndex * 25}%)`,
                }}
              >
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
              </CarouselContent>
            </CarouselWrapper>
            <ArrowButton onClick={handleNext}>
              <FaAngleRight />
            </ArrowButton>
          </ContainerCarousel>

          <ContainerViewAll>
            <p>VER TODOS</p>
            <FaAngleRight size={14} />
          </ContainerViewAll>
        </ContainersectionProducts>

        <ContainerAdvertising>
          <img src="propaganda-apagar.png" alt="Propaganda" />
          <img src="propaganda-apagar.png" alt="Propaganda" />
        </ContainerAdvertising>
        <ContainerCategory>
          <div>
            <h3>Ofertas</h3>
          </div>
          <div>
            <p>VER TODOS</p>
            <FaAngleRight size={14} />
          </div>
        </ContainerCategory>
        <ContainersectionProducts>
          <ContainerCarousel>
            <ArrowButton onClick={handlePrev}>
              <FaAngleLeft />
            </ArrowButton>
            <CarouselWrapper>

              <CarouselContent
                itemsCount={productsLastChanges.length}
                style={{
                  transform: `translateX(-${currentIndex * 25}%)`,
                }}
              >
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
              </CarouselContent>
            </CarouselWrapper>
            <ArrowButton onClick={handleNext}>
              <FaAngleRight />
            </ArrowButton>
          </ContainerCarousel>

          <ContainerViewAll>
            <p>VER TODOS</p>
            <FaAngleRight size={14} />
          </ContainerViewAll>
        </ContainersectionProducts>

        <ContainerAdvertising>
          <img src="propaganda-apagar.png" alt="Propaganda" />
          <img src="propaganda-apagar.png" alt="Propaganda" />
        </ContainerAdvertising>
        <ContainerCategory>
          <div>
            <h3>Ofertas</h3>
          </div>
          <div>
            <p>VER TODOS</p>
            <FaAngleRight size={14} />
          </div>
        </ContainerCategory>
        <ContainersectionProducts>
          <ContainerCarousel>
            <ArrowButton onClick={handlePrev}>
              <FaAngleLeft />
            </ArrowButton>
            <CarouselWrapper>

              <CarouselContent
                itemsCount={productsLastChanges.length}
                style={{
                  transform: `translateX(-${currentIndex * 25}%)`,
                }}
              >
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
              </CarouselContent>
            </CarouselWrapper>
            <ArrowButton onClick={handleNext}>
              <FaAngleRight />
            </ArrowButton>
          </ContainerCarousel>

          <ContainerViewAll>
            <p>VER TODOS</p>
            <FaAngleRight size={14} />
          </ContainerViewAll>
        </ContainersectionProducts>

      </ContainerMain>
    </Container>
  )
}
