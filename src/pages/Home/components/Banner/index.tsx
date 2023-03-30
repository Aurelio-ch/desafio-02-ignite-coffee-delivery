import { BannerContainer, BannerInfo, BoxInfo } from './styles'
import BannerImg from '../../../../assets/img-banner.svg'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'

export function Banner() {
  return (
    <BannerContainer>
      <div>
        <div>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
        </div>

        <BannerInfo>
          <BoxInfo>
            <p>
              <ShoppingCart size={32} weight="fill" color="#fff" />
              Compra simples e segura
            </p>
            <p>
              <Package size={32} weight="fill" color="#fff" />
              Embalagem mantém o café intacto
            </p>
          </BoxInfo>
          <BoxInfo>
            <p>
              <Timer size={32} weight="fill" color="#fff" />
              Entrega rápida e rastreada
            </p>
            <p>
              <Coffee size={32} weight="fill" color="#fff" />O café chega
              fresquinho até você
            </p>
          </BoxInfo>
        </BannerInfo>
      </div>

      <img src={BannerImg} alt="" />
    </BannerContainer>
  )
}
