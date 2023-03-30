import imgCoffeOne from '../../assets/imgCoffee/americano.svg'
import { ProductBox } from './styles'

export function Product() {
  return (
    <ProductBox>
      <img src={imgCoffeOne} alt="" />
      <span>Tradicional</span>
      <h1>Expresso Americano</h1>
      <p>Expresso diluído, menos intenso que o tradicional</p>
    </ProductBox>
  )
}
