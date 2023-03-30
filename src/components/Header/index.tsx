import { HeaderContainer, HeaderInfo } from './styles'
import logoImg from '../../assets/logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoImg} alt="" />
      <HeaderInfo>
        <div>
          <MapPin size={24} weight="fill" />
          <p>São Luís, MA</p>
        </div>

        <button>
          <ShoppingCart size={24} weight="fill" />
        </button>
      </HeaderInfo>
    </HeaderContainer>
  )
}
