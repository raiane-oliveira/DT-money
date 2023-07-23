import {
  HeaderContainer,
  HeaderContent,
  LogoContainer,
  NewTransactionButton,
} from './styles'

import logoIgnite from '../../assets/ignite-simbol.svg'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <LogoContainer href="/">
          <img src={logoIgnite} alt="" aria-hidden />
          <span>DT Monkey</span>
        </LogoContainer>

        <NewTransactionButton>Nova Transação</NewTransactionButton>
      </HeaderContent>
    </HeaderContainer>
  )
}
