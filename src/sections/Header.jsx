import styled from 'styled-components';

const HeaderSize = styled.div`
    max-width: 1400px;
    width: 100%;
    margin: 0 auto;

    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 1rem;
`
const TitleContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    img {
      width: 70px;
    }
`
const TitleHeader = styled.h1`
    font-size: 1.2rem;
    font-weight: 610;
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
const AnchorToConsulta = styled.a`
  background-color: #000000;
  color: #fff;
  padding: .8rem 1.5rem;
`;

const Header = () => {
  return (
      <header>
        <HeaderSize>
          <TitleContainer>
            <TitleHeader>Rafael</TitleHeader>
            <img src="/logo.png" alt="Logo" />
          </TitleContainer>
          <NavHeader>
            <ul>
              <li><a href="#">Sobre</a></li>
              <li><a href="#">Serviços</a></li>
              <li><a href="#">Avaliações</a></li>
              <li><a href="#">Contato</a></li>
              <AnchorToConsulta href="#">Consulta</AnchorToConsulta>
            </ul>
          </NavHeader>
        </HeaderSize>
    </header>
  )
}

export default Header