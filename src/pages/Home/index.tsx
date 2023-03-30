import { Product } from '../../components/Product'
import { Banner } from './components/Banner'
import { ProductContainer, ProductContent, ProductTitles } from './styles'

export function Home() {
  return (
    <>
      <Banner />
      <ProductContainer>
        <ProductTitles>
          <h1>Nossos cafés</h1>
          <div>
            <button>Tradicional</button>
            <button>especial</button>
            <button>com leite</button>
            <button>alcoólico</button>
            <button>gelado</button>
          </div>
        </ProductTitles>
        <ProductContent>
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </ProductContent>
      </ProductContainer>
    </>
  )
}
