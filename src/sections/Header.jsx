import styled from 'styled-components';

const HeaderSize = styled.div`
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  padding: 1.5rem 1rem 2.5rem 1rem;
`
const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const ImgLogo = styled.img`
  width: 60px;
`
const ImgAssinatura = styled.img`
  width: 320px;
`
const NavHeader = styled.div`
    ul {
        display: flex;
        align-items: center;
        gap: 30px;
        li {
            a {
                color: #000;
                font-weight: 500;
                &:visited {
                    color: #000;
                }
            }
        }
    }
`

const Header = () => {
  return (
      <header>
        <HeaderSize>
        <TitleContainer>
            <ImgLogo src="/name.png" alt="Logo" />
            <ImgAssinatura src="/assinatura.png" alt="Nome do Rafael" />
          </TitleContainer>
          <NavHeader>
            <ul>
              <li><a href="#">Sobre</a></li>
              <li><a href="#">Serviços</a></li>
              <li><a href="#">Avaliações</a></li>
              <li><a href="#">Contato</a></li>
            </ul>
          </NavHeader>
        </HeaderSize>
    </header>
  )
}

export default Header